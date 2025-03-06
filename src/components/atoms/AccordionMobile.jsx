import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionMobile = ({ text, children, classes = "" }) => (
    <Accordion.Root className={`text-dark-1 `} type="single" collapsible>
        <AccordionItem value="item-1" className={`text-dark-1 ${classes}`}>
            <AccordionTrigger>{text}</AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                " mt-px overflow-hidden text-dark-1 first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    )
);

const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={classNames(
                    "text-dark-1 group flex justify-start items-center gap-2  font-normal flex-1 text-lg font-body py-2 outline-none",
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <svg width="20" height="20" className="group-data-[state=open]:rotate-180 shrink-0 transition-transform duration-200" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#F4CA51" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3158 13.0264C10.1414 13.2008 9.85862 13.2008 9.6842 13.0264L5.13081 8.47295C4.9564 8.29854 4.9564 8.0158 5.13081 7.84138L5.34135 7.63081C5.51576 7.4564 5.79854 7.4564 5.97296 7.63081L9.99999 11.6579L14.027 7.63081C14.2015 7.4564 14.4842 7.4564 14.6586 7.63081L14.8692 7.84138C15.0436 8.0158 15.0436 8.29854 14.8692 8.47295L10.3158 13.0264Z" fill="#050006" />
                </svg>

            </Accordion.Trigger>
        </Accordion.Header>
    )
);

const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                "  data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden ",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="py-1 ">{children}</div>
        </Accordion.Content>
    )
);

export default AccordionMobile; 