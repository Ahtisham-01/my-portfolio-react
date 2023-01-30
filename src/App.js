import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import Level from './components/Level'
import Sudo from './components/Sudo'
import Camera from './components/Camera'
import Cactus from './components/Cactus'
import Icon from './components/Icon'
import Pyramid from './components/Pyramid'
import React from 'react';
import Profile from "./Profile01";
import Aboutme from "../src/components/aboutme";
export default function App() {
  return (
    <>
      <div className='main-wrap'>

        <div className='w-full container relative'>
          <div className='main'>
            <header >
              <h1>MY PORTFOLIO</h1>
            </header>
          </div>
          <Canvas flat dpr={[1, 2]} camera={{ fov: 20, position: [0, 0, 8] }}>
            <color attach="background" args={['#ffffff']} />
            <ambientLight />
            <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
              <group position-y={-0.75} position-x={0} dispose={null}>
                <Level />
                <Sudo />
                <Camera />
                <Cactus />
                <Icon />
                <Pyramid />
                <Profile />
              </group>

            </PresentationControls>
          </Canvas>

        </div>
    

          <Aboutme />
        
      </div>

    </>
  )
}
