import React from 'react'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Spinner } from './spinner'
import { buttonVariants } from './button-variants'

interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
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

function LoadingIcon({
  position,
  children,
}: {
  position: 'inline-start' | 'inline-end'
  children: React.ReactElement
}) {
  return (
    <span className="relative inline-flex items-center justify-center">
      <span className="opacity-0">{children}</span>
      <Spinner data-icon={position} className="absolute" />
    </span>
  )
}

/**
 * More props at [base ui](https://base-ui.com/react/components/button#api-reference)
 */
function Button({
  className,
  variant = 'default',
  size = 'default',
  fullWidth = false,
  loading = false,
  loadingPosition = 'center',
  rounded = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  let content: React.ReactNode = children

  if (loading && loadingPosition === 'center') {
    content = (
      <>
        <span className="inline-flex items-center gap-[inherit] opacity-0">
          {children}
        </span>
        <Spinner className="absolute" />
      </>
    )
  } else if (loading) {
    const iconAttr = loadingPosition === 'start' ? 'inline-start' : 'inline-end'
    content = React.Children.map(children, (child) => {
      if (
        React.isValidElement<{ 'data-icon'?: string }>(child) &&
        child.props['data-icon'] === iconAttr
      ) {
        return <LoadingIcon position={iconAttr}>{child}</LoadingIcon>
      }
      return child
    })
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        'relative',
        buttonVariants({ variant, size, fullWidth, rounded, className }),
      )}
      disabled={loading || disabled}
      {...props}
    >
      {content}
    </ButtonPrimitive>
  )
}

export { Button }
