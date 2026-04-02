import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'

import { cn } from '@/lib/utils'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface AccordionProps extends AccordionPrimitive.Root.Props {
  /** The controlled value of the item(s) that should be expanded. */
  value?: AccordionPrimitive.Root.Props['value']
  /** The uncontrolled value of the item(s) that should be initially expanded. */
  defaultValue?: AccordionPrimitive.Root.Props['defaultValue']
  /** Callback fired when items expand or collapse. */
  onValueChange?: AccordionPrimitive.Root.Props['onValueChange']
  /** Whether multiple items can be open at the same time. @default false */
  multiple?: AccordionPrimitive.Root.Props['multiple']
  /** Whether the component should ignore user interaction. @default false */
  disabled?: AccordionPrimitive.Root.Props['disabled']
  /** Controls which arrow keys manage focus. @default 'vertical' */
  orientation?: AccordionPrimitive.Root.Props['orientation']
  /** Whether to loop keyboard focus back to the first item when the end of the list is reached. @default true */
  loopFocus?: AccordionPrimitive.Root.Props['loopFocus']
  /** Whether to keep panel elements in the DOM while closed. @default false */
  keepMounted?: AccordionPrimitive.Root.Props['keepMounted']
  /** Allows the browser's built-in page search to find and expand the panel contents. @default false */
  hiddenUntilFound?: AccordionPrimitive.Root.Props['hiddenUntilFound']
}

interface AccordionItemProps extends AccordionPrimitive.Item.Props {
  /** A unique value that identifies this accordion item. Auto-generates if omitted. */
  value?: AccordionPrimitive.Item.Props['value']
  /** Callback fired when the panel opens or closes. */
  onOpenChange?: AccordionPrimitive.Item.Props['onOpenChange']
  /** Whether this item should ignore user interaction. @default false */
  disabled?: AccordionPrimitive.Item.Props['disabled']
}

interface AccordionTriggerProps extends AccordionPrimitive.Trigger.Props {
  /** The content displayed inside the trigger button. */
  children?: AccordionPrimitive.Trigger.Props['children']
}

interface AccordionContentProps extends AccordionPrimitive.Panel.Props {
  /** The content displayed when the accordion item is expanded. */
  children?: AccordionPrimitive.Panel.Props['children']
  /** Whether to keep the panel in the DOM while closed. @default false */
  keepMounted?: AccordionPrimitive.Panel.Props['keepMounted']
  /** Allows the browser's built-in page search to find and expand the panel contents. @default false */
  hiddenUntilFound?: AccordionPrimitive.Panel.Props['hiddenUntilFound']
}

function Accordion({ className, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('not-last:border-b', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/accordion-trigger focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:after:border-ring **:data-[slot=accordion-trigger-icon]:text-muted-foreground relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
        />
        <ChevronUpIcon
          data-slot="accordion-trigger-icon"
          className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          '[&_a]:hover:text-foreground h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
