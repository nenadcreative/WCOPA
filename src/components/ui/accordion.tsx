import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-start gap-2 py-4 font-medium transition-all [&>svg]:rotate-180  [&[data-state=open]>svg]:rotate-0",
        className
      )}
      {...props}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 shrink-0 transition-transform duration-200"
      >
        <circle
          cx="10"
          cy="10"
          r="10"
          transform="matrix(1 0 0 -1 0 20)"
          fill="#F4CA51"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3158 6.97364C10.1414 6.79922 9.85862 6.79922 9.6842 6.97364L5.13081 11.527C4.9564 11.7015 4.9564 11.9842 5.13081 12.1586L5.34135 12.3692C5.51576 12.5436 5.79854 12.5436 5.97296 12.3692L9.99999 8.34213L14.027 12.3692C14.2015 12.5436 14.4842 12.5436 14.6586 12.3692L14.8692 12.1586C15.0436 11.9842 15.0436 11.7015 14.8692 11.527L10.3158 6.97364Z"
          fill="#050006"
        />
      </svg>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
