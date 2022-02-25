import React from 'react'
import { Canvas } from '@react-three/fiber'
import MeshObject from './mesh-object'
function ThreeD() {
  return (
    <>
    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <MeshObject position={[-1.2, 0, 0]} />
    <MeshObject position={[1.2, 0, 0]} />
  </Canvas>,
    </>
  )
}

export default ThreeD