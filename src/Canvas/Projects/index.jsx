import {useLoader, useThree, useFrame} from "@react-three/fiber";
import {useRef, useMemo, useEffect} from "react"
import {TextureLoader, DoubleSide, MathUtils, CylinderBufferGeometry} from "three";
import {getBoundPosition} from '../utils';
import {useProjectStore, useMouseStore} from '../../useStore';

const geometry = new CylinderBufferGeometry(1, 1, 1, 50, 1, true);

function Project({image, elementId}) {

  const meshRef = useRef(null);
  const texture = useLoader(TextureLoader, image);
  const size = useThree((state) => state.size);

  const position = useMemo(() => {
    const element = document.getElementById(elementId);

    return getBoundPosition(element, size);
  }, [size]);

  useEffect(() => {
    const scaleW = position.width * 0.25;
    const scaleH = position.height * 0.25

    meshRef.current.scale.set(scaleW, scaleH, scaleW);
    meshRef.current.position.set(position.x, position.y, 15);
  }, [size]);

  const randomFactor = Math.random();

  useFrame(({clock}) => {
    meshRef.current.rotation.y = -clock.getElapsedTime() * 0.1 + (randomFactor * 3.14);

    if(useProjectStore.getState().isActive) {
      const mouse = useMouseStore.getState().mouse;
      meshRef.current.rotation.z = MathUtils.lerp(meshRef.current.rotation.z, mouse.x - 0.5, randomFactor * 0.07);
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial side={DoubleSide} map={texture} />
    </mesh>
  )

}

export function Projects() {


  return (
    <group>
      <Project image='./espera-bracelete.png' elementId='project-espera' />
      <Project image='./papr-bracelet.png' elementId='project-papr' />
      <Project image='./liiive-bracelet.png' elementId='project-liiive' />
    </group>
  )
}

