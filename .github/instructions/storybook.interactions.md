# Storybook Component Creation Instructions

## applyTo: "stories/**/*.stories.@(ts|tsx|js|jsx)"

# 目的
- 新しいコンポーネントの Storybook ストーリーを作成するための基本指針を定義します。
- Storybook Copilot に自動で適切な構成を生成させるための指示です。

---

## 基本ルール

- Storybook は CSF3 形式で記述すること。
- `Meta` と `StoryObj` を使用する。
- TypeScript の型安全を維持するため、`Meta<typeof Component>` を定義する。
- 各ストーリーには `args` を定義し、`Controls` による操作が可能であること。
- argTypesには、引数があれば型情報を追加する。
例
```tsx
argTypes: {
    text: {
      description: "タイトル",
    },
    id: {
      description: "1",
    },
  },
```
- 相互作用テストが必要な場合は `play` 関数を使用する。
- Story ファイルの拡張子は `.stories.tsx` とする。

---

## Storybook 作成手順

1. **コンポーネントのインポート**
   ```tsx
   import type { Meta, StoryObj } from "@storybook/react"
   import { ComponentName } from "./ComponentName"
   ```
   Meta の定義

```tsx
const meta: Meta<typeof ComponentName> = {
  title: "UI/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
```
Story の型エイリアス
type Story = StoryObj<typeof ComponentName>
基本ストーリーの作成

```tsx
export const Default: Story = {
  args: {
    prop1: "value",
    prop2: true,
  },
}
```
インタラクション（任意）

```tsx
import { within, userEvent, expect } from "@storybook/test"

export const Interactive: Story = {
  args: {
    label: "Click me",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /click me/i })
    await userEvent.click(button)
    expect(button).toHaveTextContent("Clicked!")
  },
}