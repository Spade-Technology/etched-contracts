import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Placeholder from "public/icons/dashboard/placeholder2.svg"
import { useState } from "react";

type CommentProps = {
    image: any,
    userName: string,
    description: string,
    commentedAt: string
}

const Comment = ({image, userName, description, commentedAt} : CommentProps ) => {
    return(
    <div className="py-5 flex justify-start gap-3">
        <Image src={image} alt="profile-pic" className="align-top" />
        <div>
            <div className="flex justify-start gap-3">
                <div>{userName}</div>
                <div>{commentedAt}</div>
            </div>
            <div className="pt-2">{description}</div>
        </div>
    </div>)
}

const Comments = () => {
    const [enableSubmit , setEnableSubmit] = useState(false)

    const handleComment = (evt: any) => {
        const input = evt.target.value
        console.log("enableSubmit", input)

        if(input && input.length > 0) {
            setEnableSubmit(true)
        }{
        setEnableSubmit(false)
    }
    }
console.log("enableSubmit", enableSubmit)
    return(
    <div className="bg-[#F3F5F5] text-[#6D6D6D] p-7 rounded-2xl my-6">
        <div className="text-xl font-semibold">3 Comments</div>

        <div className=" py-5">
        <div className="flex justify-start gap-3">
            <Image src={Placeholder} alt="placeholder" />
            <Input placeholder="Add a comment" onChange={handleComment} />
        </div>
       {enableSubmit &&
        <div className="float-right py-5">
                    <div className="flex justify-start gap-5">
                        <Button className="bg-transparent text-[#6D6D6D] border-none">Cancel</Button>

                        <Button className="rounded-lg">Submit</Button>
                    </div>

                </div>
         } 
        </div>
        

        <Comment image={Placeholder} userName="justing45.etched" description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim. Ut congue blandit massa egestas justo netus velit. Donec adipiscing convallis ipsum volutpat. Bibendum orci turpis eget quis posuere morbi. In rhoncus mauris a sed quisque lorem. Eget."
        commentedAt="3days ago"  />

<Comment image={Placeholder} userName="tomhq12.etched" description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim."
        commentedAt="5days ago"  />

<Comment image={Placeholder} userName="serenam.etched" description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim. Ut congue blandit massa egestas justo netus velit. Donec adipiscing convallis ipsum volutpat. Bibendum orci turpis eget quis posuere morbi. In rhoncus mauris a sed quisque lorem. Eget."
        commentedAt="aweek ago"  />
    </div>)
}

export default Comments;