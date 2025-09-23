import { ReactThreeFiber } from "@react-three/fiber"
import { Object3D } from "three"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: ReactThreeFiber.Object3DNode<Object3D, typeof Object3D>
    }
  }
}
