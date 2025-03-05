import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionMobile = ({ text, children, classes = "" }) => (
    <Accordion.Root className={`text-white `} type="single" collapsible>
        <AccordionItem value="item-1" className={`text-white ${classes}`}>
            <AccordionTrigger>{text}</AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                " mt-px overflow-hidden text-white first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 ",
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
                    "text-white  group flex justify-center items-center gap-2  font-normal flex-1 text-lg font-body py-2 outline-none",
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    className="group-data-[state=open]:rotate-180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4.5 6L8.5 0L0.500001 -6.99382e-07L4.5 6Z" fill="white" />
                </svg>
            </Accordion.Trigger>
        </Accordion.Header>
    )
);

const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                "  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="py-2 px-2">{children}</div>
        </Accordion.Content>
    )
);

export default AccordionMobile; 