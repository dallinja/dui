import type { Preview } from '@storybook/react-vite'
import React from 'react'
// import { themes } from 'storybook/theming'

import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: 'oklch(0.145 0 0)' },
        light: { name: 'Light', value: 'oklch(1 0 0)' },
      },
    },
    // darkMode: {
    //   dark: { appBg },
    //   // Override the default dark theme
    //   // dark: { ...themes.dark, appBg: 'black' },
    //   // Override the default light theme
    //   // light: { ...themes.normal, appBg: 'red' },
    //   // Set the initial theme
    //   current: 'light',
    //   stylePreview: true,
    // },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const isDark = context.parameters.darkMode

      if (isDark) {
        return (
          <div className="dark bg-background text-foreground">
            <Story />
          </div>
        )
      }

      return <Story />
    },
  ],
}

export default preview
