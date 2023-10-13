import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ProfileProps } from "../pages/etch/edit/components/add-user";
import { Button } from "./button";
import ProfileCard from "./profile-card";
import { SearchInput } from "./search-input";
import { cn } from "@/lib/utils";
import { string } from "zod";

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
    if (search && search.length > 0) {
      const result = data?.filter((item: ProfileProps) => {
        return item.name?.toLowerCase().includes(search.toLowerCase()) || item.link?.toLowerCase().includes(search.toLowerCase());
      });
      if (result) {
        setSelectedItems(result);
      }
    } else {
      setSelectedItems([]);
    }
  };

  console.log("searched >>", selectedItems);

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

type InputDropdownTwoProps = {
  data: {
    id: string;
    name: string;
    role: string;
  }[];
  selectedItems: any;
  setSelectedItems: Dispatch<SetStateAction<any[]>>;
};

const InputDropdownTwo = ({ data, selectedItems, setSelectedItems }: InputDropdownTwoProps) => {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();
  const [inputValue, setInputValue] = useState("");
  const [role, setRole] = useState("member");
  const [openDropdown, setOpenDropdown] = useState(false);

  const users = data.filter(({ name }) => name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));

  const addUser = ({ id, name, role }: { id: string; name: string; role: string }) => {
    setOpenDropdown(false);
    const found = selectedItems.find((selected: any) => selected.id === id);
    if (!found) {
      setSelectedItems([...selectedItems, { id, name, role }]);
    }
  };

  // CLOSE DROPDOWN FUNCTION
  useEffect(() => {
    const closeModal = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
  }, [ref]);

  return (
    <DropdownMenu>
      <div className="relative flex justify-between rounded-lg border-[1px] border-[#6D6D6D]">
        <main ref={ref}>
          <SearchInput
            type="text"
            placeholder="ex: tom12.etched"
            value={inputValue}
            onClick={() => setOpenDropdown(true)}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-none p-3 outline-none"
          />
          <div
            className={`${openDropdown && users.length > 0 ? "" : "-z-50 hidden opacity-0"} ${cn(
              "absolute left-0 top-10 z-50 max-h-[132px] min-w-full  overflow-hidden rounded-md border bg-popover px-[13px] py-3 text-popover-foreground shadow-md"
            )}`}
          >
            <section className="custom-scrollbar max-h-[108px] overflow-auto overflow-x-hidden pr-2">
              {users.map(({ id, name }) => {
                return (
                  <div
                    key={id}
                    onClick={() => addUser({ id, name, role })}
                    className=" flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  >
                    {name}
                  </div>
                );
              })}
            </section>
          </div>
        </main>

        <DropdownMenuTrigger asChild>
          <Button
            variant={"ghost"}
            className="float-right flex justify-between gap-2 border-none bg-transparent text-[#6D6D6D] hover:bg-transparent"
          >
            {role} <Icons.dropdownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" items-start">
          <DropdownMenuGroup>
            {["member", "admin"].map((item, idx) => {
              return (
                <DropdownMenuItem key={idx} onClick={() => setRole(item)} textValue="Jim Carlos">
                  {item}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default InputDropdown;
export { InputDropdownTwo };
