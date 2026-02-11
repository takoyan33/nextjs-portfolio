# Suggested Commands

## Development
- `yarn dev`: Start the development server (with Turbopack).
- `yarn dev:mock`: Start the development server with MSW mocking enabled (`NEXT_PUBLIC_USE_MOCK=true`).
- `yarn storybook`: Start Storybook.

## Build
- `yarn build`: Build the application for production (clears `.next` first).
- `yarn start`: Start the production server.

## Linting & Formatting
- `yarn lint`: Run OxLint only.
- `yarn format`: Run Prettier to format code.
- `yarn lint:fix`: Run OxLint and fix issues.
- `yarn lint:stylelint`: Run Stylelint for SCSS.
- `yarn lint:stylelint:fix`: Run Stylelint and fix SCSS issues.

## Testing
- `yarn test`: Run unit tests with Vitest.
- `yarn test:coverage`: Run tests with coverage.
- `yarn playwright`: Run E2E tests with Playwright.
- `yarn playwright:ui`: Run Playwright with UI mode.
- `yarn unlighthouse`: Run Unlighthouse for performance and SEO checks.
