import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";
import PortableTextTitle from "@components/atoms/PortableTextTitle.astro";

const FaqAccordion = ({ faqs, variation }) => {
  return (
    <Accordion type="single" collapsible className="w-full text-left">
      {faqs.map((faq, index) => {
        return (
          <AccordionItem
            value={index + 1}
            key={faq._id}
            className={cn(
              " mb-4 px-4 rounded-sm ",
              variation === "white" && "bg-offwhite",
              variation === "offwhite" && "bg-white text-dark-1",
              variation === "lavander" && "bg-white text-dark-1",
              variation === "dark" && "bg-white text-dark-1",
              variation === "gradient" && "bg-lavander",
              variation === "pattern" && "bg-lavander"
            )}
          >
            <AccordionTrigger className="text-sm cursor-pointer font-semibold text-left items-start data-[state=open]:text-indigo">
              <PortableText value={faq.question}></PortableText>
            </AccordionTrigger>
            <AccordionContent className="text-dark-2 [&>p]:opacity-100 pl-7">

              <PortableText value={faq.answer}></PortableText>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export default FaqAccordion;
