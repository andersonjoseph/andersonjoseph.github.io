import { Canvas, useThree } from '@react-three/fiber';
import {useLayoutEffect, useEffect, Suspense} from 'react';
import {Background} from './Background';
import {Hero} from './Hero';
import {Footer} from './Footer';
import {Projects} from './Projects';

function Utils() {

  const camera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  useLayoutEffect(() =>{
    camera.position.z = 600;
    camera.fov = (Math.atan( (size.height / 2) / camera.position.z) * 2) * (180/Math.PI);
    camera.far = 700;
    camera.updateProjectionMatrix();
  }, [camera, size]);

  useEffect(() => {

    function updateCameraPosition() {
      camera.position.y = -window.scrollY;
    }

    window.addEventListener('scroll', updateCameraPosition);

    return () => {
      window.removeEventListener('scroll', updateCameraPosition);
    }

  }, [size])

  return null;
}


export function MyCanvas() {

  return (
    <div style={{zIndex: '-1'}} className='w-screen h-screen fixed top-0 left-0'>
      <Canvas dpr={Math.min(1, window.devicePixelRatio)} raycast={null}>
	<Utils />

	<Suspense fallback={null}>
	  <Background />
	  <Hero />
	  <Footer />
	  <Projects />
	</Suspense>
      </Canvas>
    </div>
  )

}
