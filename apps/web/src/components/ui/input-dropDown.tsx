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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { Button } from "./button";
import { Dispatch, SetStateAction, useState } from "react";
import ProfileCard from "./profile-card";
import { ProfileProps } from "../pages/editEtch/components/add-user";

type InputDropdownProps = {
  data: {
    id: number;
    name: string;
    image: any;
    link: string;
  }[];
  selectedItems: ProfileProps[];
  setSelectedItems: Dispatch<SetStateAction<ProfileProps[]>>;
};

const InputDropdown = ({ data, selectedItems, setSelectedItems }: InputDropdownProps) => {
  const onSelectItem = (item: ProfileProps) => {
    const found = selectedItems.find((selected: ProfileProps) => selected.id === item.id);
    if (!found) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <DropdownMenu>
      <div className="flex justify-between rounded-lg border-[1px] border-[#6D6D6D]">
        <Input type="email" placeholder="Invite users to view and edit" className="border-none p-3 outline-none" />
        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D] hover:bg-transparent"
          >
            Viewer <Icons.dropdownIcon />
          </Button>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent className="w-[500px] items-start">
        <DropdownMenuGroup>
          {data.map((item, idx) => {
            return (
              <DropdownMenuItem key={idx} onClick={() => onSelectItem(item)} textValue="Jim Carlos">
                <ProfileCard image={item.image} name={item.name} link={item.link} />
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InputDropdown;
