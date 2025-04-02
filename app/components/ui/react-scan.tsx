"use client"
import { useEffect } from "react"
import { scan } from "react-scan"

export function ReactScan(): JSX.Element {
	useEffect(() => {
		scan({
			enabled: true,
		})
	}, [])

	return <></>
}
