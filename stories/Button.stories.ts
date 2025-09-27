import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Button } from "./Button"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
	title: "Example/Button",
	component: Button,
	parameters: {
		layout: "centered",
		design: {
			type: "figma",
			url: "https://www.figma.com/design/WjICDo9YD8Nw4GbbEhkL2G/%E6%BC%AB%E7%94%BB%E8%80%83%E5%AF%9F.net?node-id=476-56&t=ybFuBC8DEL4YO5o0-1",
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof Button>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: "Button",
	},
}

export const Secondary: Story = {
	args: {
		label: "Button",
	},
}

export const Large: Story = {
	args: {
		size: "large",
		label: "Button",
	},
}

export const Small: Story = {
	args: {
		size: "small",
		label: "Button",
	},
}
