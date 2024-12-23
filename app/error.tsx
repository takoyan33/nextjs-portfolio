"use client"
import type { NextPage } from "next"

const Error: NextPage = ({ error }: any) => {
	return (
		<div className='max_width'>
			<h2>Error</h2>
			<p>{error.message}</p>
		</div>
	)
}

export default Error
