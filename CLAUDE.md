# Components

- Add JSDocs to all props so their descriptions show up in storybook.

# Storybook

- The first story should be a single component example with controls (e.g. `Default`).
- Combine all options for each prop into one story (e.g. a `Variants` story showing all variants side by side, a `Sizes` story showing all sizes).
- In each story, hide the control from the args table that deals with that story.
- Don't create separate stories for individual prop values.
- Include a helpful description for each story.
- Include related components as subcomponents
- Include a DarkMode story. Set a parameter of `darkMode: true` and set `globals: { backgrounds: { value: 'dark' } }`
