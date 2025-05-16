"use client"
import { useEffect } from "react"
import { scan } from "react-scan"

/**
 * React Scan
 */
export function ReactScan(): JSX.Element {
	useEffect(() => {
		scan({
			enabled: true,
		})
	}, [])

	return <></>
}
