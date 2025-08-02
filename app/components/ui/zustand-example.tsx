import type React from "react"
import { useModalStore } from "../../stores/modalStore"

/**
 * Zustandの使用例を示すサンプルコンポーネント
 */
export const ZustandExampleComponent = () => {
	const { isOpen, openModal } = useModalStore()

	console.log("isOpen", isOpen)

	return (
		<div className="p-6 space-y-4">
			<h2 className="text-2xl font-bold mb-4">Zustand使用例</h2>
			aaa
			<p>isOpen: {isOpen ? "true" : "false"}</p>
			{/* モーダルストアの使用例 */}
			<div className="space-y-2">
				<h3 className="text-lg font-semibold">モーダルストア</h3>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={() => openModal("test", { message: "テストメッセージ" })}
						className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
					>
						モーダルを開く
					</button>
				</div>

				{/* 現在のモーダル状態を表示 */}
				<div className="text-sm text-gray-600">
					<p>モーダル状態: {isOpen ? "開いている" : "閉じている"}</p>
				</div>
			</div>
		</div>
	)
}
