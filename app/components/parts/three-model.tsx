"use client"

import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Group } from "three"
import type { MeshStandardMaterial } from "three"
import * as THREE from "three"

const Model = ({
	url,
	scale,
	rotation,
	position,
	color,
}: {
	url: string
	scale: number
	position: number[]
	rotation: number[]
	color: string
}) => {
	const { scene } = useGLTF(url)

	const groupRef = useRef<Group>(null)

	useFrame((state) => {
		if (groupRef.current) {
			groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.8

			groupRef.current.rotation.y = state.clock.elapsedTime * 0.07
		}
	})

	scene.traverse((child: THREE.Object3D) => {
		if (child instanceof THREE.Mesh) {
			;(child.material as THREE.MeshStandardMaterial).color.set(color)
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
			<Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
				<ambientLight intensity={1.5} />
				<pointLight position={[10, 20, 0]} intensity={21} />
				<Model
					url="/models/scene.gltf"
					scale={8.5}
					position={[0, 0, 0]}
					rotation={[0, 0, Math.PI / 40]}
					color="#4485ff"
				/>
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	)
}

export default ThreeModel
