# Project Summary: To You Design Portfolio

## Purpose
A portfolio website built to showcase production achievements and skill sets.
Designed with a focus on component orientation, testability, and maintainability to simulate a practical production environment.

## Tech Stack
- **Frontend Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript v5.6
- **Styling**: SCSS, Stylelint
- **State Management**: Zustand, SWR
- **Forms**: React Hook Form, Zod
- **Testing**: Vitest, Playwright, React Testing Library, Storybook
- **Mocking**: MSW (Mock Service Worker)
- **Analytics**: Google Analytics, Google Tag Manager, Microsoft Clarity
- **Logging**: Pino
- **Infrastructure**: Vercel, Docker

## Architecture
- **App Router**: Uses Next.js App Router in `app/`.
- **Server Components**: `layout.tsx` is a Server Component.
- **Mocking**: Extensive use of MSW for development and testing (`dev:mock` script).
- **Directory Structure**:
  - `app/`: Pages and routes.
  - `components/`: UI and Layout components.
  - `styles/`: Global styles and variables (SCSS).
  - `mocks/`: MSW service worker and handlers.
  - `utils/`: Utility functions.
  - `types/`: TypeScript type definitions.
  - `hooks/`: Custom React hooks.
