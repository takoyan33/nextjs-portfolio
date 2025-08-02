import { create } from "zustand"

/**
 * モーダルの状態を管理するストア
 */
export interface ModalState {
	/** モーダルが開いているかどうか */
	isOpen: boolean
	/** モーダルのタイプ */
	modalType: string | null
	/** モーダルに渡すデータ */
	modalData: unknown
	/** モーダルを開く */
	openModal: (type: string, data?: unknown) => void
	/** モーダルを閉じる */
	closeModal: () => void
}

/**
 * モーダル状態管理ストア
 */
export const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	modalType: null,
	modalData: null,

	openModal: (type: string, data?: unknown) => {
		console.log("openModal called with:", type, data)
		set({
			isOpen: true,
			modalType: type,
			modalData: data,
		})
	},

	closeModal: () => {
		console.log("closeModal called")
		set({
			isOpen: false,
			modalType: null,
			modalData: null,
		})
	},
}))
