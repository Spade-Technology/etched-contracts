import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "./icons";
import { Button } from "./button";

type ProfileProps = {
  image?: any;
  name?: string;
  link?: string;
  role?: string;
  dropDownOn?: boolean;
  dropDownItems?: string[];
};

const ProfileCard = ({ image, name, link, role, dropDownOn, dropDownItems }: ProfileProps) => {
  return (
    <div className="py-1">
      <div className="flex justify-between gap-24">
        <div className="flex justify-between">
          <Image src={image} alt="placeholder" />
          <div className="px-2">
            <div>{name}</div>
            <div> {link}</div>
          </div>
        </div>
        {dropDownOn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className=" float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D]">
                {role ? role : dropDownItems && dropDownItems[0]} <Icons.dropdownIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[500px] items-start">
              <DropdownMenuGroup>
                {dropDownItems?.map((item, idx) => {
                  return (
                    <DropdownMenuItem key={idx} textValue="Jim Carlos">
                      <Button className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D]">
                        {item} <Icons.dropdownIcon />
                      </Button>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="justify-end">{role ? role : ""}</div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
