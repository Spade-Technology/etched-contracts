import { toast } from "@/components/ui/use-toast";
import { clsx, type ClassValue } from "clsx";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child)) as React.ReactElement[];
}

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
export const regrex = /^(?=.*[+])[- +()0-9 ]+$/;
