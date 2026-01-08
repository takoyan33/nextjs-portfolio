# Task Completion Workflow

Before marking a task as complete, ensure the following steps are taken:

1.  **Format Code**: Run `yarn format` to ensure Prettier compliance.
2.  **Lint Code**: Run `yarn lint` and `yarn lint:stylelint` to catch static analysis errors.
3.  **Run Tests**:
    - Run relevant unit tests using `yarn test`.
    - If UI changes were made, run `yarn storybook` to verify components visually (if applicable).
    - If flow changes were made, run `yarn playwright` for E2E verification.
4.  **Verify Build**: Run `yarn build` to ensure no build-time errors were introduced.
5.  **Commit Messages**: Ensure commit messages follow the project's convention (likely checked by `commitlint` as seen in `package.json` scripts).
