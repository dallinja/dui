import React from 'react'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { buttonVariants } from './button-variants'

interface LinkButtonProps
  extends React.ComponentProps<'a'>, VariantProps<typeof buttonVariants> {
  /** The visual style of the button. */
  variant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'destructive'
    | 'link'
  /** The size of the button. */
  size?:
    | 'default'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'icon'
    | 'icon-xs'
    | 'icon-sm'
    | 'icon-lg'
  /** If `true`, the button will be expand to the width of the container. */
  fullWidth?: boolean
  /** The content of the button. */
  children?: React.ReactNode
  /** If `true`, the button will be disabled. */
  disabled?: boolean
  /** If `true`, shows a loading spinner and disables the button. */
  loading?: boolean
  /** Where to show the spinner. `center` replaces all content, `start`/`end` replaces the icon at that position. */
  loadingPosition?: 'center' | 'start' | 'end'
  /** If `true`, the button will have fully rounded corners. */
  rounded?: boolean
}

/**
 * An anchor tag that looks like a button
 */
function LinkButton({
  className,
  variant = 'default',
  size = 'default',
  fullWidth = false,
  rounded = false,
  disabled,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        'relative',
        disabled && 'pointer-events-none opacity-50',
        buttonVariants({ variant, size, fullWidth, rounded, className }),
      )}
      {...props}
      {...(!disabled && { href })}
    >
      {children}
    </a>
  )
}

export { LinkButton }
