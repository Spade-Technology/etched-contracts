import { refetchContext } from "@/utils/urql";
import { Loader2 } from "lucide-react";
import { useContext } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Separator } from "./ui/separator";

export const WorkQueue = ({ children }: { children?: React.ReactNode }) => {
  const { operations, clearOperations } = useContext(refetchContext);

  return (
    <Accordion
      type="single"
      collapsible
      className={
        "bottom-5 right-5 z-50 w-2/6 min-w-[24rem] rounded-sm bg-white p-3 shadow-etched-1 transition-opacity " +
        (Object.keys(operations).length > 0 ? "fixed opacity-100" : "hidden opacity-0")
      }
    >
      <AccordionItem value="item-1" className="my-0 mb-0 border-b-0 pb-0">
        <AccordionTrigger className="mb-0 flex justify-between py-0 pb-0">
          {Object.keys(operations).length} Operation(s)
        </AccordionTrigger>
        <AccordionContent className="mb-0 flex flex-col !pb-0">
          {Object.values(operations)?.map((el, idx) => {
            return (
              <div className="flex items-center justify-between text-xs text-slate-600" key={idx}>
                <span> {el.name} </span>
                <span> {el.statusType === "loading" && el.status} </span>
                <div className="flex items-center gap-2">
                  {el.statusType === "loading" ? (
                    <span>
                      {el.progress}% <Loader2 className="animate-spin" />
                    </span>
                  ) : el.statusType === "success" ? (
                    <>
                      <span className="text-green-500">✓</span>
                      <HoverCard>
                        <HoverCardTrigger>Success</HoverCardTrigger>
                        <HoverCardContent>
                          <div className="overflow-scroll">{el.description || "This operation was successful"}</div>
                        </HoverCardContent>
                      </HoverCard>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-base text-red-500">✗</span>
                      <HoverCard>
                        <HoverCardTrigger>Inspect Error</HoverCardTrigger>
                        <HoverCardContent>
                          <div className="overflow-scroll">{el.error || "This operation failed"}</div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <Separator className="my-2" />
          <div className="text-right hover:underline" onClick={clearOperations}>
            Clear
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
