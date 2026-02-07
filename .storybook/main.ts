import type { StorybookConfig } from "@storybook/nextjs-vite"

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    // "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-onboarding",
    {
      name: "@storybook/addon-mcp",
      options: {
        toolsets: {
          dev: true, // 開発用ツールを有効化
          docs: true, // ドキュメント用ツールを有効化
        },
        experimentalFormat: "markdown", // マークダウン形式で出力
      },
    },
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  features: {
    experimentalComponentsManifest: true,
  },
}
export default config
