import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react"
import PenIcon from "public/icons/dashboard/editEtch/pen.svg"
import BgVector from "public/images/backgrounds/dashboard/vector.svg"
import BgEditVector from "public/images/backgrounds/dashboard/editVector.svg"
import RightArrow from "public/icons/dashboard/editEtch/rightArrow.svg"
import Placeholder1 from "public/icons/dashboard/placeholder1.svg"
import Placeholder2 from "public/icons/dashboard/placeholder2.svg"
import Placeholder3 from "public/icons/dashboard/placeholder3.svg"
import AddIcon from "public/icons/dashboard/editEtch/addIcon.svg"
import { Input } from "@/components/ui/input";
import ProfileCard from "../../../ui/profileCard";



type EditProps = {
    setOpenAddUser: Dispatch<SetStateAction<boolean>>
}


const Edit = ( { setOpenAddUser } : EditProps ) => {
    const [owner, setOwner] = useState(false)
    const [edit, setEdit] = useState(false)

    return(
        <div className={` ${edit ? "bg-[#F3F5F5] text-[#6D6D6D]" : " bg-[#097B45] text-[#FBFBFB]" } z-10  rounded-2xl w-fit relative`}>
           
           <Image src={ edit ? BgEditVector :BgVector} alt="" className="absolute right-0 -z-10 bg-transparent rounded-2xl" />
           <div className="p-7 z-10">
            <div className="flex justify-between gap-24  "> 
           { edit ?
            <div className="w-full">
            <div>Etch Name</div>
            <Input placeholder="Etch Name" className="w-full bg-[#F3F5F5]" />
           </div> 
           : <div className="flex justify-between">
            <Icons.etchedIcon className="h-8 my-auto cursor-pointer align-middle md:mr-2" />
            <div className="my-auto text-2xl">Etch Name</div> 
            </div>
            }
            {!edit && <Button variant="default" onClick={() => setEdit(true)} className="bg-[#A1FFD3] rounded-full  text-[#097B45] px-3 gap-2 text-base  ">
            Edit Etch <Image src={PenIcon} alt="penIcon"  />
            </Button>
            }
            </div>
            <div className="text-base pt-5"> Owned by </div>
            <div className="flex justify-between py-1">
                <div className={`text-base font-normal ${ edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}>
                jimcarlosxsak23.etched
                </div>
                <Button variant="default" onClick={() => setEdit(false)} className={`${edit ? "bg-transparent text-[#097B45] border-[#097B45]" : "text-[#A1FFD3] border-[#A1FFD3]" } rounded-full  border-[1px]  px-3 gap-2 text-base`}>
            <span className="my-auto">Transfer</span> 
            <Icons.transferIcon color={edit ? "#097B45" : "#A1FFD3"} className="align-middle" />
            </Button> 
            </div>

            <div className="text-base"> Time Stamp </div>
            <div className={`text-base pt-1 font-normal ${ edit ? "#6D6D6D" : "text-[#E2E2E2]"}`}>12:23 PM UTC | 18 Sep, 2023</div> 


            <div className="text-base pt-5">Description </div>

           { edit ?
            <textarea className="h-44 w-full p-4 rounded-[6px] outline-none border-[#6D6D6D] border-[1px]" placeholder="Lorem ipsum dolor sit amet consectetur. Eu morbi bibendum purus lectus et tellus sed enim. Elit commodo laoreet molestie consectetur lectus ultricies enim elit. Massa lacus porttitor at ultrices.tur lectus ultricies ornare et loreitor at " /> : <div className="text-base pt-1 font-normal text-[#E2E2E2] max-w-[400px]">Lorem ipsum dolor sit amet consectetur. Eu morbi bibendum purus lectus et tellus sed enim. Vulputate aenean massa ultrices arcu pharetra ornare et lorem. Elit commodo laoreet molestie consectetur lectus ultricies enim elit. Massa lacus porttitor at ultrices.tur lectus ultricies ornare et loreitor at.</div> 
}
            <div className={`${edit ? "bg-[#FFF]" : "bg-[#A1FFD3]"} text-[#6D6D6D] rounded-2xl p-4 mt-7`}>
                <div>Shared with</div>
               <ProfileCard image={Placeholder1} name="Jim Carlos" link="jimcarlosxsak23.etched" role="owner" /> 
               <ProfileCard image={Placeholder2} name="Tom Robins" link="tom.etched" role="editor" /> 

               <ProfileCard image={Placeholder3} name="Tom Robins" link="tom.etched" role="editor"  /> 

               <Button onClick={() => setOpenAddUser(true)} className="mt-10 w-full bg-transparent text-[#097B45] gap-3 border-[#097B45] border-[2px] rounded-3xl " >
              <Image src={AddIcon}  alt="add-icon" />  Add more users</Button>
            </div>

            {
                edit && <div className="float-right py-5">
                    <div className="flex justify-start gap-5">
                        <Button className="bg-transparent text-[#6D6D6D] border-none">Cancel</Button>

                        <Button className="rounded-lg">Save Changes</Button>
                    </div>

                </div>
            }
            </div>
            </div>
    )
}

export default Edit;