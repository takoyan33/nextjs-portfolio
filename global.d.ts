// global.d.ts
import { ReactThreeFiber } from "@react-three/fiber"
import * as THREE from "three"

declare global {
  namespace JSX {
    interface IntrinsicElements extends ReactThreeFiber.IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<THREE.Object3D, typeof THREE.Object3D>
      group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>
      ambientLight: ReactThreeFiber.Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>
      pointLight: ReactThreeFiber.Object3DNode<THREE.PointLight, typeof THREE.PointLight>
    }
  }
}
