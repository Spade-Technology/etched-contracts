import React, { useEffect } from "react";

import { cn } from "@/lib/utils";

interface Types {
  className: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}
const SearchInput: React.FC<Types> = ({ className, type, placeholder, value, onChange, onClick, ...props }) => {
  useEffect(() => {
    console.log(value);
  });

  return (
    <input
      type={type}
      // value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};
SearchInput.displayName = "SearchInput";

export { SearchInput };
