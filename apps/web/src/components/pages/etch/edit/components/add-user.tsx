import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import InputDropdown from "@/components/ui/input-dropdown-";
import ProfileCard from "@/components/ui/profile-card";
import Placeholder1 from "public/icons/dashboard/placeholder1.svg";
import Placeholder2 from "public/icons/dashboard/placeholder2.svg";
import Placeholder3 from "public/icons/dashboard/placeholder3.svg";
import { useState } from "react";

type UserProps = {
  show: boolean;
  setShow: any;
};

export type ProfileProps = {
  id: number;
  name?: string;
  image?: any;
  link?: string;
  role?: string;
};

const profiles = [
  {
    id: 0,
    name: "Jim Carlos",
    image: Placeholder1,
    link: "jimcarlosxsak23.etched",
    // role:"Owner"
  },
  {
    id: 1,
    name: "Tom Robins",
    image: Placeholder2,
    link: "tom.etched",
    // role:"editor"
  },
  {
    id: 2,
    name: "Tom Robins",
    image: Placeholder3,
    link: "tom.etched",
    // role:"editor"
  },
  {
    id: 3,
    name: "Jim Carlos",
    image: Placeholder1,
    link: "jimcarlosxsak23.etched",
    // role:"editor"
  },
];

const AddUser = ({ show, setShow }: UserProps) => {
  const [selectedProfiles, setSelectedProfiles] = useState<ProfileProps[]>([]);

  return (
    <Dialog open={show} onOpenChange={(x) => setShow(x)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-normal text-[#6D6D6D]">Invite users</DialogTitle>
          <DialogDescription className="text-[#6D6D6D]">
            <InputDropdown data={profiles} selectedItems={selectedProfiles} setSelectedItems={setSelectedProfiles} />

            <div className="py-3 text-base">People with access</div>
            {selectedProfiles ? (
              selectedProfiles.map((profile, idx) => (
                <ProfileCard
                  key={idx}
                  name={profile.name}
                  image={profile.image}
                  link={profile.link}
                  role={profile.role}
                  dropDownOn
                  dropDownItems={["Viewer", "Editor"]}
                />
              ))
            ) : (
              <div className="text-sm text-[#9C9C9C]">No one has been invited to access this Etch yet.</div>
            )}

            <div className="flex items-center space-x-2 py-7">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Notify people
              </label>
            </div>
          </DialogDescription>

          <DialogFooter>
            <Button type="submit" className="mt-5 gap-3 rounded-lg" onClick={() => setShow(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
