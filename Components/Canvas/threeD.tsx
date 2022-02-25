import React from 'react'
import { Canvas } from '@react-three/fiber'
import MeshObject from './mesh-object'
function ThreeD() {
  return (
    <div style={{}}>
    <Canvas style={{marginTop:"100px",border:"1px solid white"}}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <MeshObject position={[-1.2, 0, 0]} />
    <MeshObject position={[1.2, 0, 0]} />
  </Canvas>,
    </div>
  )
}

export default ThreeD