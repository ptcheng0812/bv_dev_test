/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

import RedPlanetTexture from './RedPlanetTexture.jpg';
import SilverPlanetTexture from './SilverPlanetTexture.jpg';
import BrownPlanetTexture from './BrownPlanetTexture.jpg';
import GreyTexture from './GreyTexture.jpg';
import SnowyPlanetTexture from './SnowyPlanetTexture.jpg';

export function Sphere({selectedPlanet}) {
  const [texture, setTexture] = useState(GreyTexture);

  //change texture based on selectedPlanet
  useEffect(() => {
    if (selectedPlanet && selectedPlanet[0]?.pl_name.includes("TOI")) {
      setTexture(BrownPlanetTexture)
    }
    else if (selectedPlanet && selectedPlanet[0]?.pl_name.includes("HD")) {
      setTexture(RedPlanetTexture)
    }
    else if (selectedPlanet && selectedPlanet[0]?.pl_name.includes("GJ")) {
      setTexture(SilverPlanetTexture)
    }
    else if (selectedPlanet && selectedPlanet[0]?.pl_name.includes("LTT")) {
      setTexture(SnowyPlanetTexture)
    }
  },[selectedPlanet])

  const [colorMap, normalMap] = useLoader(TextureLoader, [texture, texture])

  return (
    <>
      <ambientLight intensity={0.5}/>
      <mesh>
        <sphereGeometry args={[1.85, 32, 32]}/>
        <meshPhongMaterial color="grey"/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        <OrbitControls enableZoom={false} enableRotate={true} rotateSpeed={0.6}/>
      </mesh>
    </>
  )
}
