import { Plus } from "lucide-react";
import { Button, ButtonProps } from "./ui/button";
import React from "react";

export const CreateEtchButton = ({ ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      <Plus /> Create Etch
    </Button>
  );
};
