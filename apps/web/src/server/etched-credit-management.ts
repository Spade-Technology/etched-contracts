//WARNING:  Keep in mind the context here is `CLERK` users with an "overlay" of Prisma `User` based on matching address.

import { prisma } from "@/server/db";
import { clerkClient } from "@clerk/nextjs";
import { z } from "zod";
import util from 'util';

export const UsersListInputSchema = z.object({
  limit: z.number().min(1).max(500).default(50),
  offset: z.number().min(0).optional(),
  orderBy: z.enum([
    'created_at',
    'updated_at',
    '+created_at',
    '+updated_at',
    '-created_at',
    '-updated_at'
  ]).optional()
});
export type UsersListInputSchemaParams = z.infer<typeof UsersListInputSchema>;

const PaginatedResponseSchema = z.object({
  users: z.array(z.any()),
  pagination: z.object({
    total: z.number(),
    limit: z.number(),
    offset: z.number(),
    hasMore: z.boolean(),
    navigation: z.object({
      previous: z.number().nullable(),
      next: z.number().nullable(),
    })
  }),
});
export type PaginatedResponseSchemaResult = z.infer<typeof PaginatedResponseSchema>;



const BatchSizeSchema = z.number().min(1).max(500).default(100);
type BatchSize = z.infer<typeof BatchSizeSchema>;

export const getClerkUserListWithCredits = async (params: UsersListInputSchemaParams): Promise<PaginatedResponseSchemaResult> => {
  const { limit = 10, offset = 0, orderBy } = params;

  // Build query parameters
  const queryParams: Record<string, any> = {
    limit,
    offset,
  };

  if (orderBy) queryParams.orderBy = orderBy;

  // Get users with count
  const [users, total] = await Promise.all([
    clerkClient.users.getUserList(queryParams),
    clerkClient.users.getCount(queryParams),
  ]);

  //Append local credit-related values
  const enrichedUsers = await enrichUsersWithCredits(users);

  //Complete navigation
  const hasMore = offset + limit < total;
  const previous = offset > 0 ? Math.max(0, offset - limit) : null;
  const next = hasMore ? offset + limit : null;

  // console.log(util.inspect(enrichedUsers, { showHidden: false, depth: null, colors: true }))
  return {
    users: enrichedUsers,
    pagination: {
      total,
      limit,
      offset,
      hasMore,
      navigation: {
        previous,
        next
      }
    }
  };
}


const processUserBatch = async (
  users: any[],
  userIds: string[]
): Promise<any[]> => {
  //NOTE: `email` was a poor field name choice for what is mapped `primaryEmailId` in Clerk
  const creditData = await prisma.user.findMany({
    where: {
      email: {
        in: userIds
      }
    },
    select: {
      email: true,
      address: true,
      etchedCreditsRemaining: true
    }
  });

  const creditMap = new Map(
    creditData.map(user => [user.email, user.etchedCreditsRemaining])
  );

  // console.log('USERIDS:', userIds)
  // console.log('CREDIT MAP:', creditMap)

  return users.map(user => ({
    ...user,
    etchedCreditsRemaining: creditMap.get(user.primaryEmailAddressId) ?? 0,
    primaryMatchedEmailAddress: user?.emailAddresses?.find((entry: any) => entry.id == user.primaryEmailAddressId)?.emailAddress
    // primaryMatchedEmailAddress: user?.emailAddresses?.find((entry: any) => entry.id.toLowerCase() == user.primaryEmailAddressId.toLowerCase())
  }));
};

/**
 * Enrich users with credit data from Prisma database
 */
export const enrichUsersWithCredits = async (
  clerkUsers: any[],
  batchSize?: BatchSize
): Promise<any[]> => {
  const validatedBatchSize = BatchSizeSchema.parse(batchSize);
  const enrichedUsers: any[] = [];

  for (let i = 0; i < clerkUsers.length; i += validatedBatchSize) {
    const userBatch = clerkUsers.slice(i, i + validatedBatchSize);
    // const userIds = userBatch.map(user => user.id);
    const userIds = userBatch.map(user => user.primaryEmailAddressId);

    const enrichedBatch = await processUserBatch(userBatch, userIds);
    enrichedUsers.push(...enrichedBatch);
  }

  return enrichedUsers;
};

export const updateUserCredits = async (
  userId: string,
  creditsUpdate: number
): Promise<{ success: boolean; updatedCredits: number | null; error?: string }> => {
  //NOTE: userId is actually email in the DB, but it was a bad choice.
  try {
    const updateResult = await prisma.user.updateMany({
      where: {
        email: userId
      },
      data: {
        etchedCreditsRemaining: {
          set: creditsUpdate
        }
      }
    });

    return {
      success: updateResult.count > 0,
      updatedCredits: updateResult.count > 0 ? creditsUpdate : null,
      error: updateResult.count === 0 ? `User with ID ${userId} not found` : undefined
    };

  } catch (error) {
    console.error('Error updating user credits:', error);
    return {
      success: false,
      updatedCredits: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};