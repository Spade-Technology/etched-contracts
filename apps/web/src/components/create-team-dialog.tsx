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
import { useQuery } from "@/gqty";
import { useSession } from "next-auth/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger } from "./ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { TeamSelector } from "./team-selector";

const formSchema = z.object({
  teamName: z.string(),
  teamMembers: z.array(z.string()),
  teamOrganisation: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateTeamDialog = ({ children }: { children?: React.ReactNode }) => {
  const [state, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync, isLoading } = api.team.createTeam.useMutation();
  const { data } = useSession();

  const query = useQuery();

  const organisations = query.organisations({
    where: {
      or: [
        { ownership_: { owner: data?.address?.toLowerCase() } },
        { permissions_: { wallet: data?.address?.toLowerCase(), permissionLevel_gt: 0 } },
      ],
    },
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      teamName: "",
      teamMembers: [],
      teamOrganisation: "None",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      await mutateAsync({
        teamName: data.teamName,
        teamMembers: data.teamMembers,
        owningOrg: data.teamOrganisation,
        blockchainSignature: localStorage.getItem("blockchainSignature")!,
        blockchainMessage: localStorage.getItem("blockchainMessage")!,
      });
      toast({
        title: "Team created",
        description: "Your team has been created",
        variant: "success",
      });
      // setIsOpen(false);
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
      <AlertDialogTrigger asChild></AlertDialogTrigger>
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

                  <FormField
                    control={form.control}
                    name="teamOrganisation"
                    render={({ field }: { field: FieldValues }) => (
                      <FormItem>
                        <FormLabel>Where should this team be created ?</FormLabel>
                        <FormControl>
                          <Select {...field} onValueChange={(v) => field.onChange(v)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="None">No Organisation</SelectItem>
                                <SelectSeparator className="SelectSeparator" />
                                {organisations?.[0]?.id &&
                                  organisations.map(
                                    (org, index) =>
                                      org.orgId && (
                                        <div key={index}>
                                          <SelectItem key={index} value={org.orgId}>
                                            {org.name ?? org.id}
                                          </SelectItem>
                                        </div>
                                      )
                                  )}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
