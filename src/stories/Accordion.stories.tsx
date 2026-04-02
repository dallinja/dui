import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const items = [
  {
    value: 'item-1',
    trigger: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    trigger: 'Is it styled?',
    content:
      'Yes. It comes with default styles that match the other components\u2019 aesthetic.',
  },
  {
    value: 'item-3',
    trigger: 'Is it animated?',
    content:
      'Yes. It\u2019s animated by default, but you can disable it if you prefer.',
  },
]

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem: AccordionItem as React.ComponentType<unknown>,
    AccordionTrigger: AccordionTrigger as React.ComponentType<unknown>,
    AccordionContent: AccordionContent as React.ComponentType<unknown>,
  },
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    loopFocus: { control: 'boolean' },
  },
  args: {
    defaultValue: ['item-1'],
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A basic accordion that shows one item at a time. The first item is open by default.',
      },
    },
  },
  render: (args) => (
    <Accordion {...args}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Multiple: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Set `multiple` to allow several accordion items to be expanded at the same time.',
      },
    },
  },
  argTypes: {
    multiple: { control: false },
  },
  args: {
    multiple: true,
    defaultValue: ['item-1', 'item-2'],
  },
  render: (args) => (
    <Accordion {...args}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `disabled` on the root to disable all items, or on individual `AccordionItem` components to disable specific ones.',
      },
    },
  },
  argTypes: {
    disabled: { control: false },
  },
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm">All disabled</span>
        <Accordion {...args} disabled>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm">
          Single item disabled
        </span>
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>Is it styled? (disabled)</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}

export const Bordered: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Add a border to the root and remove the bottom border from the last item to create a bordered accordion.',
      },
    },
  },
  render: (args) => (
    <Accordion {...args} className="rounded-lg border">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="px-4">
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
}

export const CardWrapper: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Wrap the accordion inside a `Card` component for enhanced visual presentation.',
      },
    },
  },
  render: (args) => (
    <Card>
      <CardContent>
        <Accordion {...args}>
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  ),
}

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Accordion rendered in dark mode using the `dark` class.',
      },
    },
    darkMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  render: (args) => (
    <div className="flex flex-col gap-8">
      <Accordion {...args}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Accordion {...args} className="rounded-lg border">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="px-4">
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ),
}
