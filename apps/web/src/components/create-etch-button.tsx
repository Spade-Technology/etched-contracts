import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "./ui/switch";

const formSchema = z.object({
  etchTitle: z.string(),
  etchDescription: z.string(),
  etchFile: z.string(),
  etchVisibility: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export const CreateEtchButton = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      etchTitle: "",
      etchDescription: "",
      etchFile: "",
      etchVisibility: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <>Create Etch</>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create New Etch</AlertDialogTitle>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <FormField
              control={form.control}
              name="etchTitle"
              render={({ field }: { field: FieldValues }) => (
                <FormItem>
                  <FormLabel>Public Etch Title</FormLabel>
                  <FormControl>
                    <Input id="etchTitle" placeholder="Enter etch title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="etchDescription"
              render={({ field }: { field: FieldValues }) => (
                <FormItem>
                  <FormLabel>Public Etch Description</FormLabel>
                  <FormControl>
                    <Input id="etchDescription" placeholder="Enter etch description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="etchFile"
              render={({ field }: { field: FieldValues }) => (
                <FormItem>
                  <FormLabel>Upload Etch</FormLabel>
                  <FormControl>
                    <Input type="file" id="etchFile" {...field} />
                  </FormControl>
                  <FormDescription>Etch File: Can be set to private through encryption</FormDescription>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="etchVisibility"
              render={({ field }: { field: FieldValues }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Etch Visibility</FormLabel>
                    <FormDescription>Choose whether your etch is public or private.</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Create</AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
