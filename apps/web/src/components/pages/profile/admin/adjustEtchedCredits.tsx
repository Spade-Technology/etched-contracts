import { useState } from "react";
import { api } from "@/utils/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import util from "util";
import { getZodErrorMessages } from "@/lib/utils";

interface User {
  id: string;
  name: string;
  email: string;
  credits: number;
}

export const AdjustEtchedCredits = () => {
  const { toast } = useToast();
  const [creditAdjustments, setCreditAdjustments] = useState<Record<string, string>>({});

  // Query to fetch users
  const { data: clerkResults, isLoading } = api.user.getAllClerkUsersWithCredits.useQuery({});

  // // Mutation for updating credits
  const updateCreditsMutation = api.user.updateUserEtchedCredits.useMutation({
    onSuccess: () => {
      toast({
        title: "Credits Updated",
        description: "User credits have been successfully updated.",
      });
    },
    onError: (error: any) => {
      // console.log(util.inspect(error.message, { showHidden: false, depth: null, colors: true }));
      const messages = getZodErrorMessages(error?.data?.zodError);
      toast({
        title: "Error",
        description: JSON.stringify(messages),
        variant: "destructive",
      });
    },
  });

  // Handle credit adjustment submission
  const handleSubmit = async (userId: string) => {
    const newCredits = Number(creditAdjustments[userId]);
    if (isNaN(newCredits)) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    await updateCreditsMutation.mutate({
      email_id: userId,
      credits_value: newCredits,
    });

    // Clear the input after submission
    // setCreditAdjustments((prev) => ({
    //   ...prev,
    //   [userId]: "",
    // }));
  };

  if (isLoading) {
    return <div className="flex justify-center p-4">Loading users...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Wallet</TableHead>
            <TableHead>Current Credits</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clerkResults?.users?.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.primaryMatchedEmailAddress}</TableCell>
              <TableCell>{user.externalId}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={creditAdjustments[user.primaryEmailAddressId] || user.etchedCreditsRemaining || 0}
                  onChange={(e) =>
                    setCreditAdjustments((prev) => ({
                      ...prev,
                      [user.primaryEmailAddressId]: e.target.value,
                    }))
                  }
                  placeholder="New credit amount"
                  className="w-32"
                />
              </TableCell>
              <TableCell>
                <Button onClick={() => handleSubmit(user.primaryEmailAddressId)}>
                  {updateCreditsMutation.isLoading ? "Updating..." : "Update"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
