import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRightIcon, MailIcon, PlusIcon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

const meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'destructive',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: [
        'default',
        'xs',
        'sm',
        'lg',
        'icon',
        'icon-xs',
        'icon-sm',
        'icon-lg',
      ],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

const variants = [
  'default',
  'outline',
  'secondary',
  'ghost',
  'destructive',
  'link',
] as const

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `variant` prop to change the visual style of the button. Defaults to `default`.',
      },
    },
  },
  argTypes: {
    variant: { control: false },
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

const sizes = ['xs', 'sm', 'default', 'lg'] as const

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `size` prop to change the button height and padding. Defaults to `default`.',
      },
    },
  },
  argTypes: {
    size: { control: false },
  },
  render: (args) => (
    <div className="flex flex-wrap items-end gap-2">
      {sizes.map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
}

const iconSizes = ['icon-xs', 'icon-sm', 'icon', 'icon-lg'] as const

export const IconSizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `icon`, `icon-xs`, `icon-sm`, or `icon-lg` sizes for square icon-only buttons.',
      },
    },
  },
  argTypes: {
    size: { control: false },
  },
  render: (args) => (
    <div className="flex flex-wrap items-end gap-2">
      {iconSizes.map((size) => (
        <Button key={size} {...args} size={size}>
          <StarIcon />
        </Button>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Add `data-icon="inline-start"` or `data-icon="inline-end"` to icon SVGs to adjust button padding automatically.',
      },
    },
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>
        <PlusIcon data-icon="inline-start" />
        Start icon
      </Button>
      <Button {...args}>
        End icon
        <ChevronRightIcon data-icon="inline-end" />
      </Button>
      <Button {...args}>
        <MailIcon data-icon="inline-start" />
        Both icons
        <ChevronRightIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
}

export const AsAnotherTag: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `render` prop to change the underlying element. Pass `nativeButton={false}` when rendering as a non-button element.',
      },
    },
  },
  render: (args) => (
    <Button {...args} render={<div />} nativeButton={false}>
      Button that can contain complex children
    </Button>
  ),
}

export const AsLink: Story = {
  argTypes: {
    loading: {
      table: { disable: true },
    },
    loadingPosition: {
      table: { disable: true },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Do not use `<Button render={<a />} nativeButton={false} />` for links. Instead, use the `LinkButton` component that adds button styles to an anchor tag directly.',
      },
    },
  },
  render: (args) => (
    <LinkButton
      href="https://example.com"
      variant={args.variant}
      size={args.size}
      fullWidth={args.fullWidth}
      disabled={args.disabled}
      rounded={args.rounded}
    >
      Link button
    </LinkButton>
  ),
}

export const Loading: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Set `loading` to show a spinner and disable the button. Use `loadingPosition` to control where the spinner appears: `center` (default) replaces all content, `start` or `end` replaces the icon at that position.',
      },
    },
  },
  argTypes: {
    loading: { control: false },
    loadingPosition: { control: false },
  },
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false)
    return (
      <div className="flex flex-col gap-4">
        <Switch checked={isLoading} onCheckedChange={setIsLoading} />
        <div className="flex flex-wrap items-center gap-4">
          <Button {...args} loading={isLoading}>
            Submit
          </Button>
          <Button {...args} loading={isLoading} loadingPosition="start">
            <MailIcon data-icon="inline-start" />
            Start
          </Button>
          <Button {...args} loading={isLoading} loadingPosition="end">
            End
            <ChevronRightIcon data-icon="inline-end" />
          </Button>
          <Button {...args} loading={isLoading} size="icon">
            <PlusIcon />
          </Button>
        </div>
      </div>
    )
  },
}

export const Rounded: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Set `rounded` to give the button fully rounded corners (pill shape). Works with all variants and sizes.',
      },
    },
  },
  argTypes: {
    rounded: { control: false },
    variant: { control: false },
    size: { control: false },
  },
  args: { rounded: true },
  render: (args) => (
    <div className="flex flex-wrap items-end gap-4">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
      {iconSizes.map((size) => (
        <Button key={size} {...args} size={size}>
          <PlusIcon />
        </Button>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Set `disabled` to prevent interaction. The button becomes non-focusable and visually dimmed.',
      },
    },
  },
  argTypes: {
    disabled: { control: false },
    variant: { control: false },
  },
  args: { disabled: true },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const DarkMode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'All button variants rendered in dark mode using the `dark` class.',
      },
    },
    darkMode: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
  argTypes: {
    variant: { control: false },
  },
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}
