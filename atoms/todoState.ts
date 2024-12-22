import { atom } from "recoil"

export type Todo = {
	id: number
	title: string
	isCompleted: boolean
}

export const todoState = atom<Todo[]>({
	key: "todoState",
	default: [
		{
			id: 1,
			title: "test",
			isCompleted: false,
		},
	],
})
