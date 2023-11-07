import { orgUser, teamUser } from "@/types";

type userType = orgUser | teamUser;

export function findUserDifferences(old: userType[], newUsers: userType[]): userType[] {
  const differences: userType[] = [];

  for (const newUser of newUsers) {
    const oldUser = old.find((user) => user.id === newUser.id);

    if (!oldUser) {
      differences.push(newUser);
    } else if (oldUser.role !== newUser.role) {
      differences.push(newUser);
    }
  }

  return differences;
}
