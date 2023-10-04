import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

import { toast } from "./ui/use-toast";

const formSchema = z.object({
  teamName: z.string(),
  teamMembers: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

export const CreateTeamDialog = ({ children }: { children?: React.ReactNode }) => {
  const [state, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync, isLoading } = api.team.createTeam.useMutation();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      teamName: "",
      teamMembers: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        teamName: data.teamName,
        teamMembers: data.teamMembers,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
      toast({
        title: "Team created",
        description: "Your team has been created",
        variant: "success",
      });
      setIsOpen(false);
    } catch (e) {
      console.log(e);
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("create-team", () => {
      setIsOpen(true);
    });
  }, []);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger asChild>
        {children ?? (
          <Button className="w-96" onClick={() => setIsOpen(true)}>
            Create Team
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className={"max-h-screen overflow-y-scroll lg:max-w-screen-lg"}>
        <div className="w-full">
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Etch</AlertDialogTitle>
          </AlertDialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-2 flex flex-col gap-2 md:flex-row">
                <div className="flex w-full flex-col gap-5">
                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }: { field: FieldValues }) => (
                      <FormItem>
                        <FormLabel>Public Team Title</FormLabel>
                        <FormControl>
                          <Input disabled={isLoading} id="etchTitle" placeholder="Enter the Team title" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="my-8 text-center text-2xl">WORK IN PROGRESS: Create the Members selector</div>
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={isLoading} onClick={() => setIsOpen(false)}>
                  Cancel
                </AlertDialogCancel>
                <Button isLoading={isLoading} type="submit">
                  Create Team
                </Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
