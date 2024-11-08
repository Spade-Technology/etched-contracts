import React from "react";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { api } from "@/utils/api";

const RemainingCreditsDisplay = () => {
  //CONSIDER: add "click to purchase" ability?
  const { data: remainingCredits, isLoading } = api.user.getUserCreditsRemaining.useQuery();

  if (isLoading) {
    return (
      <Badge variant="outline" className="h-9 px-4 py-2">
        <Loader2 className="h-4 w-4 animate-spin" />
      </Badge>
    );
  }

  const getColorClasses = (credits: number) => {
    if (credits <= 1) {
      return "bg-red-500 hover:bg-red-600";
    }
    if (credits < 5) {
      return "bg-orange-500 hover:bg-orange-600";
    }
    return "bg-green-500 hover:bg-green-600";
  };

  return (
    <Badge
      className={`
        h-9 
        rounded-md 
        px-4 
        py-2 
        font-extrabold
        text-sm
        text-white 
        transition-colors 
        ${getColorClasses(Number(remainingCredits))}
      `}
    >
      Credits: {remainingCredits}
    </Badge>
  );
};

export default RemainingCreditsDisplay;
