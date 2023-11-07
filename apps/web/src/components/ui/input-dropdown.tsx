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
import { GoodIcon } from "../icons/good";
import { useGetUsers } from "@/utils/hooks/useGetUsers";
import { orgUser } from "@/types";
import { Organisation, Team } from "@/gql/graphql";
import { useGetTeamsFromUser } from "@/utils/hooks/useGetTeamsFromUser";
import { useLoggedInAddress } from "@/utils/hooks/useSignIn";

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

type UsersInputDropdownProps = {
  type?: string;
  placeholder: string;
  roleData: string[];
  selectedItems: any;
  setSelectedItems: Dispatch<SetStateAction<any[]>>;
};

type OrgInputDropdownProps = {
  type?: string;
  placeholder: string;
  selectedItems: any;
  setSelectedItems: Dispatch<SetStateAction<any[]>>;
  orgs: Organisation[];
};

type teamInputDropdownProps = {
  type?: string;
  placeholder: string;
  roleData: string[];
  selectedItems: any;
  setSelectedItems: Dispatch<SetStateAction<any[]>>;
};

const OrgInputDropdown = ({ type, placeholder, selectedItems, setSelectedItems, orgs }: OrgInputDropdownProps) => {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();
  const [input, setInput] = useState({ value: "", placeholder });
  const [openDropdown, setOpenDropdown] = useState(false);

  const addData = ({ id, name, orgId }: Organisation) => {
    setOpenDropdown(false);
    const found = selectedItems.find((selected: any) => selected.id === id);
    if (!found) {
      if (type === "singleSelect") {
        setSelectedItems([{ id, name, orgId }]);
      } else {
        setSelectedItems([...selectedItems, { id, name, orgId }]);
      }
      setInput({ ...input, placeholder: name || "" });
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
            placeholder={input.placeholder}
            value={input.value}
            onClick={() => setOpenDropdown(true)}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
            className="border-none p-3 outline-none"
          />
          <div
            className={`${openDropdown && orgs.length > 0 ? "" : "-z-50 hidden opacity-0"} ${cn(
              "absolute left-0 top-10 z-50 max-h-[132px] min-w-full  overflow-hidden rounded-md border bg-popover px-[13px] py-3 text-popover-foreground shadow-md"
            )}`}
          >
            <section className="custom-scrollbar max-h-[108px] overflow-auto overflow-x-hidden pr-2">
              {orgs.map(({ id, name, orgId }) => {
                const isSelected = selectedItems.find((item: any) => item.name === name);
                return (
                  <div
                    key={id}
                    onClick={() => addData({ id, name, orgId } as Organisation)}
                    className={`${
                      isSelected ? "pointer-events-none" : ""
                    } flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}
                  >
                    {name}
                    <div className="flex items-center gap-1">
                      <GoodIcon className={`${isSelected ? "" : "invisible"}`} />
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </DropdownMenu>
  );
};
const TeamInputDropdown = ({ type, placeholder, selectedItems, setSelectedItems, roleData }: teamInputDropdownProps) => {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();
  const [input, setInput] = useState({ value: "", placeholder });
  const [role, setRole] = useState<string | any>(roleData[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const from = useLoggedInAddress();

  const { teams } = useGetTeamsFromUser(from);

  const addData = ({ id, name, teamId, role }: { id: string; name: string; teamId: string; role: string }) => {
    setOpenDropdown(false);
    const found = selectedItems.find((selected: any) => selected.id === id);
    if (!found) {
      if (type === "singleSelect") {
        setSelectedItems([{ id, name, teamId, role }]);
      } else {
        setSelectedItems([...selectedItems, { id, name, teamId, role }]);
      }
      setInput({ ...input, placeholder: name || "" });
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
            placeholder={input.placeholder}
            value={input.value}
            onClick={() => setOpenDropdown(true)}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
            className="border-none p-3 outline-none"
          />
          <div
            className={`${openDropdown && teams.length > 0 ? "" : "-z-50 hidden opacity-0"} ${cn(
              "absolute left-0 top-10 z-50 max-h-[132px] min-w-full  overflow-hidden rounded-md border bg-popover px-[13px] py-3 text-popover-foreground shadow-md"
            )}`}
          >
            <section className="custom-scrollbar max-h-[108px] overflow-auto overflow-x-hidden pr-2">
              {teams.map(({ id, name, teamId }) => {
                const isSelected = selectedItems.find((item: any) => item.name === name);
                return (
                  <div
                    key={id}
                    onClick={() => addData({ id, name, teamId, role })}
                    className={`${
                      isSelected ? "pointer-events-none" : ""
                    } flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}
                  >
                    {name}
                    <div className="flex items-center gap-1">
                      <GoodIcon className={`${isSelected ? "" : "invisible"}`} />
                    </div>
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
        <DropdownMenuContent className={roleData.length > 0 ? " items-start" : "hidden"}>
          <DropdownMenuGroup>
            {roleData.map((item, idx) => {
              return (
                <DropdownMenuItem
                  key={idx}
                  onClick={() => setRole(item)}
                  className="flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  hover:bg-accent"
                  textValue="Jim Carlos"
                >
                  <GoodIcon className={role === item ? "" : "hidden"} />
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

const UsersInputDropdown = ({ roleData, type, placeholder, selectedItems, setSelectedItems }: UsersInputDropdownProps) => {
  const ref: React.MutableRefObject<HTMLElement> | any = useRef();
  const [input, setInput] = useState({ value: "", placeholder });
  const [role, setRole] = useState<string | any>(roleData[0]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { wallets: users } = useGetUsers(input?.value || "");

  const addData = ({ id, name, role }: orgUser) => {
    setOpenDropdown(false);
    const found = selectedItems.find((selected: any) => selected.id === id);
    if (!found) {
      if (type === "singleSelect") {
        setSelectedItems([{ id, name, role }]);
      } else {
        setSelectedItems([...selectedItems, { id, name, role }]);
      }
      setInput({ ...input, placeholder: name });
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
            placeholder={input.placeholder}
            value={input.value}
            onClick={() => setOpenDropdown(true)}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
            className="border-none p-3 outline-none"
          />
          <div
            className={`${openDropdown && users.length > 0 ? "" : "-z-50 hidden opacity-0"} ${cn(
              "absolute left-0 top-10 z-50 max-h-[132px] min-w-full  overflow-hidden rounded-md border bg-popover px-[13px] py-3 text-popover-foreground shadow-md"
            )}`}
          >
            <section className="custom-scrollbar max-h-[108px] overflow-auto overflow-x-hidden pr-2">
              {users.map(({ id, name }) => {
                const isSelected = selectedItems.find((item: any) => item.name === name);
                return (
                  <div
                    key={id}
                    onClick={() => addData({ id, name, role } as orgUser)}
                    className={`${
                      isSelected ? "pointer-events-none" : ""
                    } flex cursor-pointer select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`}
                  >
                    {name}
                    <div className="flex items-center gap-1">
                      <GoodIcon className={`${isSelected ? "" : "invisible"}`} />
                    </div>
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
        <DropdownMenuContent className={roleData.length > 0 ? " items-start" : "hidden"}>
          <DropdownMenuGroup>
            {roleData.map((item, idx) => {
              return (
                <DropdownMenuItem
                  key={idx}
                  onClick={() => setRole(item)}
                  className="flex cursor-default items-center justify-center gap-[7px] rounded-sm p-1 text-xs capitalize text-accent-foreground  hover:bg-accent"
                  textValue="Jim Carlos"
                >
                  <GoodIcon className={role === item ? "" : "hidden"} />
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
export { UsersInputDropdown, OrgInputDropdown, TeamInputDropdown };
