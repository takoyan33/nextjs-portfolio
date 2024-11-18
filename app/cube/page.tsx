"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import type * as THREE from "three"

const Cube = () => {
	const Box = (props: JSX.IntrinsicElements["mesh"]) => {
		const ref = useRef<THREE.Mesh>(null!)
		const [hovered, setHover] = useState(false)
		const [active, setActive] = useState(false)
		useFrame((state, delta) => (ref.current.rotation.x += 0.01))
		return (
			<mesh
				{...props}
				ref={ref}
				scale={active ? 1.5 : 1}
				onPointerOver={() => setHover(true)}
				onPointerOut={() => setHover(false)}
			>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={"orange"} />
			</mesh>
		)
	}

	return (
		<div className="fv_cube">
			<h2 className="fv_cube_title max_width">To You Design</h2>
			<Canvas
				style={{
					width: 80 + "vw",
					height: 80 + "vh",
				}}
			>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
				<Box position={[4.2, 0, 0]} />
			</Canvas>
		</div>
	)
}

export default Cube
