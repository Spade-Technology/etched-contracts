import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { api } from "@/utils/api";

export const GenerateAccessKey = () => {
  const [code, setCode] = useState("");
  const [expiration, setExpiration] = useState("");
  const createActivationCode = api.user.createActivationCode.useMutation();

  const handleGenerateCode = async () => {
    try {
      const result = await createActivationCode.mutateAsync();
      setCode(result.code);
      setExpiration(new Date(result.expiration).toLocaleDateString());
      toast({
        title: "Success",
        description: "Activation code generated successfully.",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate activation code.",
        variant: "destructive",
      });
    }
  };

  const handleCopyCode = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied",
        description: "Activation code copied to clipboard.",
        variant: "success",
      });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      {code ? (
        <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
          <p className="text-lg font-semibold">
            Activation Code: <span className="font-mono text-primary">{code}</span>
          </p>
          <p className="text-sm text-gray-600">Expires on: {expiration}</p>
          <div className="mt-2 flex gap-2">
            <Button onClick={handleCopyCode}>Copy Code</Button>
            <Button onClick={handleGenerateCode} className="w-full sm:w-auto" isLoading={createActivationCode.isLoading}>
              Generate Another Activation Code
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={handleGenerateCode} className="w-56" isLoading={createActivationCode.isLoading}>
          Generate Activation Code
        </Button>
      )}
      <p className="text-xs italic text-gray-500">Note: The code will expire after 30 days.</p>
    </div>
  );
};

export default GenerateAccessKey;
