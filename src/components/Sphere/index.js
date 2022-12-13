/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

import { calibrateSize } from '../../helpers/helper';

import RedPlanetTexture from './RedPlanetTexture.jpg';
import SilverPlanetTexture from './SilverPlanetTexture.jpg';
import BrownPlanetTexture from './BrownPlanetTexture.jpg';
import GreyTexture from './GreyTexture.jpg';
import SnowyPlanetTexture from './SnowyPlanetTexture.jpg';

export function Sphere({selectedPlanet, toggleZoom, toggleRotate}) {
  const [texture, setTexture] = useState(GreyTexture);
  const [actualSize, setActualSize] = useState(1.75);

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

  useEffect(() => {
    if (selectedPlanet) {
      setActualSize(calibrateSize(selectedPlanet[0]))
    }
  }, [selectedPlanet])


  const [colorMap, normalMap] = useLoader(TextureLoader, [texture, texture])

  return (
    <>
      <ambientLight intensity={0.5}/>
      <mesh>
        <sphereGeometry args={[actualSize, 32, 32]}/>
        <meshPhongMaterial color="grey"/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        <OrbitControls enableZoom={toggleZoom ? toggleZoom : toggleZoom} enableRotate={toggleRotate? toggleRotate : toggleRotate} rotateSpeed={0.6}/>
      </mesh>

    </>
  )
}
