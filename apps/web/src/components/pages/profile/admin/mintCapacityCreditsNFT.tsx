import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";
import { Separator } from "@/components/ui/separator";

export const RegenerateCapacityCredits = () => {
  const [capacityTokenId, setCapacityTokenId] = useState("");
  const [allocationSig, setAllocationSig] = useState("");
  const regenerateCapacityCredits = api.user.regenerateCapacityCredits.useMutation();
  const allocateMyselfCredits = api.user.requestCapacityDelegationAuthSig.useMutation();

  const handleRegenerateCredits = async () => {
    try {
      const result = await regenerateCapacityCredits.mutateAsync();
      setCapacityTokenId(result.capacityTokenIdStr);
      toast({
        title: "Success",
        description: "Capacity Credits NFT regenerated successfully.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to regenerate Capacity Credits NFT.",
        variant: "destructive",
      });
    }
  };

  const handleAllocateMyselfCredits = async () => {
    try {
      const result = await allocateMyselfCredits.mutateAsync({});
      setAllocationSig("Allocated Successfully");
      toast({
        title: "Success",
        description: "Capacity Credits NFT regenerated successfully.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to regenerate Capacity Credits NFT.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <Button onClick={handleRegenerateCredits} className="w-56" isLoading={regenerateCapacityCredits.isLoading}>
        Regenerate Capacity Credits NFT
      </Button>
      {capacityTokenId && (
        <p className="text-lg font-semibold">
          Capacity Token ID: <span className="font-mono text-primary">{capacityTokenId}</span>
        </p>
      )}
      <p className="text-xs italic text-gray-500">Note: The regenerated NFT will have new capacity credits.</p>

      <Separator orientation="horizontal" className="w-56" />

      <Button onClick={handleAllocateMyselfCredits} className="w-56" isLoading={allocateMyselfCredits.isLoading}>
        Allocate Credits to Myself
      </Button>
      {allocationSig && (
        <p className="text-lg font-semibold">
          Allocation Signature: <span className="font-mono text-primary">{allocationSig}</span>
        </p>
      )}
      <p className="text-xs italic text-gray-500">
        Note: Allocating credits to yourself will use the current Capacity Credits NFT.
      </p>
    </div>
  );
};

export default RegenerateCapacityCredits;
