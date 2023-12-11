import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.TextareaHTMLAttributes<any> {
  className?: string;
}

const TeaxtArea = React.forwardRef<HTMLTextAreaElement, InputProps>(({ className, ...props }, ref) => {
  const textAreaRef = React.useRef<HTMLInputElement | any>();

  return (
    <textarea
      ref={textAreaRef}
      onInput={() => {
        textAreaRef.current.style.height = ``;
        textAreaRef.current.style.height = `${textAreaRef.current?.scrollHeight}px`;
      }}
      className={cn(
        "custom-scrollbar hide-scrollbar h-fit w-full whitespace-pre-wrap rounded-md border border-input bg-transparent px-3 pb-2 pt-2 font-body text-lg font-medium leading-6 shadow-sm duration-300 placeholder:text-base focus:border-primary focus:outline-none focus:ring-0",
        className
      )}
      {...props}
    />
  );
});
TeaxtArea.displayName = "TeaxtArea";

export { TeaxtArea };
