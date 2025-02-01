"use client"

import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Group } from "three"

const Model = ({
	url,
	scale,
	rotation,
	position,
}: {
	url: string
	scale: number
	position: number[]
	rotation: number[]
}) => {
	const { scene } = useGLTF(url)

	const groupRef = useRef<Group>(null)

	useFrame((state) => {
		if (groupRef.current) {
			groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 3.8

			groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
		}
	})

	return (
		<group ref={groupRef}>
			<primitive
				object={scene}
				scale={scale}
				rotation={rotation}
				position={position}
			/>
		</group>
	)
}

const ThreeModel = () => {
	return (
		<div className="canvas">
			<Canvas camera={{ position: [0, 0, 84], fov: 50 }}>
				<ambientLight intensity={3} />
				<Model
					url="/models/scene.gltf"
					scale={10.3}
					position={[0, 0, 0]}
					rotation={[0, 0, Math.PI / 10]}
				/>
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	)
}

export default ThreeModel
