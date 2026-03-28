import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  PlusIcon,
  MinusIcon,
  VolumeOffIcon,
  CheckIcon,
  AlertTriangleIcon,
  UserRoundXIcon,
  ShareIcon,
  CopyIcon,
  TrashIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from '@/components/ui/button-group'
import {
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const meta = {
  title: 'UI/ButtonGroup',
  component: ButtonGroup,
  subcomponents: {
    ButtonGroupText: ButtonGroupText as React.ComponentType<unknown>,
    ButtonGroupSeparator: ButtonGroupSeparator as React.ComponentType<unknown>,
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A basic button group combining multiple buttons with connected borders.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
}

export const Orientations: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `orientation` prop to stack buttons horizontally or vertically. Defaults to `horizontal`.',
      },
    },
  },
  argTypes: {
    orientation: { control: false },
  },
  render: (args) => (
    <div className="flex flex-wrap items-start gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm">horizontal</span>
        <ButtonGroup {...args} orientation="horizontal">
          <Button variant="outline">One</Button>
          <Button variant="outline">Two</Button>
          <Button variant="outline">Three</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm">vertical</span>
        <ButtonGroup
          {...args}
          orientation="vertical"
          aria-label="Media controls"
          className="h-fit"
        >
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
          <Button variant="outline" size="icon">
            <MinusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}

export const Size: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Control the size of buttons using the size prop on individual buttons.',
      },
    },
  },
  render: (args) => (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup {...args}>
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="sm">
          Button
        </Button>
        <Button variant="outline" size="sm">
          Group
        </Button>
        <Button variant="outline" size="icon-sm">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button variant="outline" size="lg">
          Button
        </Button>
        <Button variant="outline" size="lg">
          Group
        </Button>
        <Button variant="outline" size="icon-lg">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const WithSeparator: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The `ButtonGroupSeparator` component visually divides buttons within a group. Buttons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="secondary">Cut</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `ButtonGroupText` to add a non-interactive text segment alongside buttons.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroupText>https://</ButtonGroupText>
      <Button variant="outline">Copy URL</Button>
    </ButtonGroup>
  ),
}

export const IconButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combine icon-only buttons to create compact toolbars.',
      },
    },
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ButtonGroup {...args}>
        <Button variant="outline" size="icon">
          <BoldIcon />
        </Button>
        <Button variant="outline" size="icon">
          <ItalicIcon />
        </Button>
        <Button variant="outline" size="icon">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button variant="outline" size="icon">
          <AlignLeftIcon />
        </Button>
        <Button variant="outline" size="icon">
          <AlignCenterIcon />
        </Button>
        <Button variant="outline" size="icon">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
    </div>
  ),
}

export const Nested: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Nest ButtonGroups to create visually separated clusters within a single row.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <BoldIcon />
        </Button>
        <Button variant="outline" size="icon">
          <ItalicIcon />
        </Button>
        <Button variant="outline" size="icon">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <AlignLeftIcon />
        </Button>
        <Button variant="outline" size="icon">
          <AlignCenterIcon />
        </Button>
        <Button variant="outline" size="icon">
          <AlignRightIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

export const DropdownMenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Create a split button group with a `DropdownMenu` component.',
      },
    },
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Follow</Button>
      <DropdownMenuRoot>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="pl-2!">
              <ChevronDownIcon />
            </Button>
          }
        />
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              Mute Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              Mark as Read
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangleIcon />
              Report Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundXIcon />
              Block User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              Share Conversation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              Copy Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              Delete Conversation
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    </ButtonGroup>
  ),
}

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Button groups rendered in dark mode using the `dark` class.',
      },
    },
    darkMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <ButtonGroup {...args}>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button variant="secondary">
          <PlusIcon data-icon="inline-start" />
          Create
        </Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="icon">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <Button variant="outline" size="icon">
          <BoldIcon />
        </Button>
        <Button variant="outline" size="icon">
          <ItalicIcon />
        </Button>
        <Button variant="outline" size="icon">
          <UnderlineIcon />
        </Button>
      </ButtonGroup>
    </div>
  ),
}
