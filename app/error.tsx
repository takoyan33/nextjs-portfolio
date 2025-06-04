"use client"

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<h2 className="mb-4 text-2xl font-bold">エラーが発生しました</h2>
			<p className="mb-4 text-gray-600">{error.message}</p>
			<button
				type="button"
				onClick={reset}
				className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
			>
				再試行
			</button>
		</div>
	)
}
