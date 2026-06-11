# Storybook Design System Brief

## Goal
Create a reusable design system for the wrestling event app, with all presentational components documented in Storybook and all visual tokens centralized for consistent UI development.

## Design System Scope
The design system should include:
- color tokens
- typography tokens
- spacing tokens
- radius and shadow tokens
- reusable presentational components
- component states for loading, empty, and error views

## Recommended Design Tokens

### Colors
- primary-bg: dark neutral background
- surface-bg: elevated cards and panels
- text-primary: high-contrast main text
- text-secondary: supporting text
- accent: action or highlight color
- success: positive states
- danger: error or warning states

### Typography
- font-family: system sans or modern clean UI font
- heading sizes: h1, h2, h3
- body sizes: sm, md, lg
- line-height: readable mobile-first sizes

### Spacing
- xs, sm, md, lg, xl
- used consistently for padding, gaps, and layout rhythm

### Radius and Shadows
- small radius for chips and badges
- medium radius for cards
- subtle shadow for elevated surfaces

## Presentational Components to Document in Storybook
- Button
- SearchInput
- FilterChip
- EventCard
- EventList
- WeekSelector
- EmptyState
- LoadingState
- DetailLabel
- Tag

## Storybook Goals
- Show each component in isolation
- Document variants and states
- Make design tokens easy to review and update
- Support visual QA during development

## Implementation Notes
- Keep tokens in a central theme file
- Use semantic names instead of raw hard-coded values
- Keep component styles simple and reusable
- Avoid placing business logic inside presentational components

## Future Enhancements
- dark mode theme
- accessibility checks
- visual regression tests
- interactive stories for filters and navigation
