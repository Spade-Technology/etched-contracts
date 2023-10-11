import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import { ProfileProps } from "../pages/etch/edit/components/add-user";
import { Button } from "./button";
import ProfileCard from "./profile-card";

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

  const searchFun = (evt: any) => {
    const search = evt.target.value;
    if(search && search.length > 0) {
    const result = data?.filter((item: ProfileProps) => {
      return item.name?.toLowerCase().includes(search.toLowerCase()) || item.link?.toLowerCase().includes(search.toLowerCase());
    });
    if (result) {
      setSelectedItems(result);
    }} else {
      setSelectedItems([])
    }
  };

  console.log("searched >>", selectedItems)

  return (
    <DropdownMenu>
      <div className="flex justify-between rounded-lg border-[1px] border-[#6D6D6D]">
        <Input
          type="email"
          placeholder="Invite users to view and edit"
          onChange={searchFun}
          className="border-none p-3 outline-none"
        />
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
