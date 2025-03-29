import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Breadcrumb } from "./components/breadcrumb"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Breadcrumb> = {
	title: "Example/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "centered",
		nextjs: {
			appDirectory: true,
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		name: {
			description: "タイトル",
		},
		link: {
			description: "リンク",
		},
		thirdTitle: {
			description: "3つ目のタイトル",
		},
	},
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Common: Story = {
	args: {
		name: "タイトル",
		link: "/link",
		thirdTitle: "Breadcrumb",
	},
}
