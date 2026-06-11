# Architecture Brief

## Project Overview
This project will become a mobile-first wrestling event discovery app built from the existing schedule data.

## Goals
- Keep the app easy to maintain and extend.
- Use small, focused components with clear responsibilities.
- Separate data loading, business logic, and presentation.
- Use test-driven development for core functionality.
- Avoid large monolithic files.

## Recommended Technical Direction
- Frontend: React + Vite
- Routing: React Router only if weekly detail pages are needed
- Data source: JSON schedule data stored in the repository
- Testing: Vitest + React Testing Library
- Deployment: Vercel or similar static hosting

## Architecture Principles
1. Component-driven development
2. Single responsibility per file and component
3. Container/presenter separation
4. Utility functions in dedicated files
5. Small reusable atoms, molecules, organisms, and pages
6. Test-driven development for key features

## Proposed Folder Structure
src/
  app/
    App.tsx
    routes.tsx
  components/
    atoms/
    molecules/
    organisms/
    pages/
  containers/
    WeekEventsContainer.tsx
    EventDetailContainer.tsx
  data/
    events.ts
  hooks/
    useFilteredEvents.ts
  utils/
    filters.ts
    dates.ts
    format.ts
  tests/
    components/
    utils/
    containers/

## Component Guidelines
- Containers manage data loading and state.
- Presentational components only render UI.
- Utility logic should live in hooks or utility files.
- Keep files small and focused.
- Refactor when a file becomes too large or mixed in responsibility.

## Testing Strategy
- Write tests first for core behaviors.
- Add unit tests for utilities and filters.
- Add component tests for event cards, search, and filter behavior.
- Add integration tests for week navigation and event detail flow.
- Aim for strong coverage over user-facing behavior.

## MVP Scope
- Weekly event list
- Search by promotion, city, and venue
- Basic filters by day and state
- Week navigation
- Event detail page
- Mobile-first UI
- Loading and empty states

## Future Extensions
- Favorites
- Map view
- Dark mode
- Calendar export
- Promotion detail pages

## Maintenance Notes
This brief should be updated whenever:
- major architecture decisions change
- routing or data strategy changes
- testing tools change
- significant UI or feature scope changes are made
