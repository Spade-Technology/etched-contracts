import React from "react";

export const Profile = () => {
  return (
    <main>
      <header className="mb-5 text-xl font-semibold text-foreground">Personal Profile</header>
      <section className=" w-80 overflow-hidden rounded-2xl bg-muted pl-5 pt-5">
        <div className="flex justify-center">
          <div className="">
            <img src="/images/profile/user.svg" alt="" className="h-16 w-16 rounded-full bg-primary" />
            <div className=" cursor-pointer text-center font-body text-xs font-medium text-primary">Change</div>
          </div>
          <div className="ml-auto mt-4 flex h-9 w-56 items-center justify-start rounded-bl-full rounded-tl-full bg-primary-foreground py-2 pl-3 pr-28">
            <div className="font-body text-sm font-bold text-muted-foreground">jim1028.etched</div>
          </div>
        </div>
        <div className="ml-auto flex h-8 w-32 items-center justify-center gap-2.5 rounded-bl-full rounded-tl-full bg-primary text-xs font-medium text-white">
          Creative License
        </div>
      </section>
    </main>
  );
};
