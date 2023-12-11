import { Icons } from "@/components/ui/icons";
import { Organisation } from "@/gql/graphql";
import { teamUser } from "@/types";
import { useEffect, useRef, useState } from "react";
import { TeamDialog } from "./TeamDialog";

export const Teams = ({
  name,
  teams,
  accordion,
  setAccordion,
  organisations,
}: {
  name: string;
  teams: any[];
  accordion: string;
  setAccordion: any;
  organisations: {
    orgId: any;
    id: string;
    name?: string | null | undefined;
  }[];
}) => {
  const [height, setHeight] = useState(0);
  const [openEditTeamModal, setOpenEditTeamModal] = useState(false);
  const ref = useRef<HTMLInputElement | any>(null);

  const openAccordion = () => {
    if (accordion !== name) {
      setAccordion(name);
    } else {
      setAccordion("");
    }
  };

  // THIS USEFFECT IS USED TO GET DIV HEIGHT
  useEffect(() => {
    if (accordion === name) {
      setHeight(ref.current?.scrollHeight);
    } else {
      setHeight(0);
    }
    window.addEventListener("resize", () => {
      if (accordion === name) {
        setHeight(ref.current?.scrollHeight);
      } else {
        setHeight(0);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        setHeight(0);
      });
    };
  }, [accordion]);

  if (teams.length)
    return (
      <article
        key={name}
        className={`h-fit w-full bg-white px-10 shadow-[0px_7.11111px_35.55556px_5.33333px_rgba(0,0,0,0.10)] ${
          accordion === name ? " pb-10" : ""
        }`}
      >
        <header onClick={openAccordion} className="flex h-[105px] cursor-pointer items-center justify-between">
          <div className="mr-4 text-xl font-bold capitalize text-foreground">
            {name} <span className="text-slate-500">| {teams.length} Teams</span>
          </div>
          <Icons.dropdown className={`${accordion === name ? "rotate-180" : "rotate-0"} mb-2.5 ml-[37px] w-6 duration-300`} />
        </header>
        <main ref={ref} style={{ height: `${height}px` }} className="overflow-hidden bg-white duration-300">
          <div className="mt-10 flex flex-col gap-5">
            {teams?.map(
              ({
                id,
                teamId,
                name,
                ownership,
                members,
                createdAt,
              }: {
                id: string;
                name: string;
                teamId: string;
                createdAt: string;
                ownership: Partial<Organisation>;
                members: teamUser[];
              }) => {
                const props = {
                  id,
                  teamId,
                  name,
                  members,
                  date: new Date(+createdAt * 1000).toDateString(),
                  setOpenEditTeamModal,
                  openEditTeamModal,
                  organisations,
                  ownership,
                };
                return <TeamDialog {...props} />;
              }
            )}
          </div>
        </main>
      </article>
    );
};
