import * as Accordion from "@radix-ui/react-accordion";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

const AccordionComponent = ({
  title,
  children,
  className,
}: {
  title: any;
  className: string;
  children: ReactNode;
}) => {
  return (
    <Accordion.Root type="single" collapsible className="z-10">
      <Accordion.Item value="item-1">
        <Accordion.Trigger
          className={`capitalize py-2 w-full group flex items-center data-[state=open]:bg-primary/20 ${className}`}
        >
          {title}
          <TriangleDownIcon
            className="mt-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
        <Accordion.Content>{children}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
