import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Placeholder from "public/icons/dashboard/placeholder2.svg";
import { useState } from "react";

type CommentProps = {
  image: any;
  userName: string;
  description: string;
  commentedAt: string;
};

const Comment = ({ image, userName, description, commentedAt }: CommentProps) => {
  return (
    <div className="flex justify-start gap-3 py-5">
      <Image src={image} alt="profile-pic" className="align-top" />
      <div>
        <div className="flex justify-start gap-3">
          <div>{userName}</div>
          <div>{commentedAt}</div>
        </div>
        <div className="pt-2">{description}</div>
      </div>
    </div>
  );
};

const Comments = () => {
  const [enableSubmit, setEnableSubmit] = useState<boolean>(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<string[]>([])

  const handleComment = (evt: any) => {
    const input = evt.target.value;
    if (input && input.length > 0) {
      setNewComment(input);
    } else {
      setNewComment("");
    }
  };

  const addComment = () => {
    if(newComment) {
      setComments([...comments, newComment])
      setNewComment("")
      setEnableSubmit(false)
    }
  }

  return (
    <div className="my-6 rounded-2xl bg-[#F3F5F5] p-7 text-[#6D6D6D]">
      <div className="text-xl font-semibold">3 Comments</div>

      <div className=" py-5">
        <div className="flex justify-start gap-3">
          <div className="flex gap-1 cursor-pointer">
          <Image src={Placeholder} alt="placeholder" className="my-auto" />
          <Icons.dropdownIcon className="my-auto mt-4" />
          </div>
          <Input placeholder="Add a comment" value={newComment} onClick={() => setEnableSubmit(true)} onChange={handleComment} />
        </div>
        {enableSubmit && (
          <div className="float-right py-5">
            <div className="flex justify-start gap-5">
              <Button
                className="border-none bg-transparent text-[#6D6D6D]"
                onClick={() => {
                  setNewComment("");
                  setEnableSubmit(false);
                }}
              >
                Cancel
              </Button>

              <Button className="rounded-lg" disabled={!newComment} onClick={addComment}>
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>

{
  comments && comments.length > 0 && comments.map((comment, idx) => {
    return(
      <Comment
        image={Placeholder}
        userName="justing45.etched"
        description={comment}
        commentedAt="Just now"
        key={idx}
      />
    )
  })
}
      <Comment
        image={Placeholder}
        userName="justing45.etched"
        description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim. Ut congue blandit massa egestas justo netus velit. Donec adipiscing convallis ipsum volutpat. Bibendum orci turpis eget quis posuere morbi. In rhoncus mauris a sed quisque lorem. Eget."
        commentedAt="3days ago"
      />

      <Comment
        image={Placeholder}
        userName="tomhq12.etched"
        description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim."
        commentedAt="5days ago"
      />

      <Comment
        image={Placeholder}
        userName="serenam.etched"
        description="Lorem ipsum dolor sit amet consectetur. Sit in urna ut massa. Facilisis ridiculus sit eget erat nulla. Vitae accumsan rhoncus nibh augue aliquam viverra in egestas. Fringilla ut in nam cras. Commodo dolor accumsan mi nunc enim. Ut congue blandit massa egestas justo netus velit. Donec adipiscing convallis ipsum volutpat. Bibendum orci turpis eget quis posuere morbi. In rhoncus mauris a sed quisque lorem. Eget."
        commentedAt="aweek ago"
      />
    </div>
  );
};

export default Comments;
