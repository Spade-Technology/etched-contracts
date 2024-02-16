import { toast } from "@/components/ui/use-toast";
import { clsx, type ClassValue } from "clsx";
import { hexlify } from "ethers/lib/utils";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { hashMessage, keccak256 } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child)) as React.ReactElement[];
}

export const deterministicTextToColor = (text: string, saturation: number = 100, lightness: number = 45) => {
  const hue = parseInt(keccak256(hashMessage(text)).slice(2, 8), 16) % 360;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export const handleCopy = (text: string | any) => {
  navigator.clipboard
    .writeText(text)
    .then(() =>
      toast({
        title: "Success",
        description: "Text copied to clipboard!",
        variant: "success",
      })
    )
    .catch((error) =>
      toast({
        title: "Error",
        description: `Could not copy text: ${error}`,
        variant: "success",
      })
    );
};
