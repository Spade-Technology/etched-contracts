import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

const EditButton = ({
  className,
  title,
  onClick,
}: {
  className?: string;
  title?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={cn(
      "ml-auto flex cursor-pointer items-center gap-2 rounded-full border-[1px] border-primary px-2 py-1 text-base font-medium text-primary duration-300 ",
      className
    )}
    onClick={onClick}
  >
    <Icons.edit className="h-[14px]" color={"#097B45"} />
    {title}
  </button>
);
export { EditButton };
