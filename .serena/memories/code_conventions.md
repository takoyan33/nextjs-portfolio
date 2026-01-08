# Code Style and Conventions

## TypeScript
- **Strictness**: `strict: false` in `tsconfig.json`, but `strictNullChecks: true`.
- **Paths**: Alias `@/*` maps to `./*` (root).
- **Target**: ES2020.

## Coding Patterns
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/layout`).
- **Components**: Functional components.
- **Styles**: SCSS modules (implied by `styles` folder and `globals.scss`) or global SCSS.
- **Async Components**: Used for Server Components (e.g., `RootLayout` in `app/layout.tsx`).

## Environment Variables
- `NEXT_PUBLIC_USE_MOCK`: Controls purely client-side mocking.
- `NODE_ENV`: Standard environment variable.
- `NEXT_PUBLIC_GTM`: Google Tag Manager ID.

## Testing & Mocks
- Files named `*.test.tsx` or similar are favored.
- MSW is integrated via `MockProvider` in `layout.tsx` and conditional imports in `layout.tsx` for the server worker.
