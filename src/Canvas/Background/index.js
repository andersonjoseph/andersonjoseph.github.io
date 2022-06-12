import {useLayoutEffect, useRef, useMemo, useEffect} from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import {TextureLoader, MirroredRepeatWrapping, NearestFilter, LinearMipMapLinearFilter} from 'three';

export function Background() {

  const texture = useLoader(TextureLoader, './noise.webp');
  texture.wrapS = MirroredRepeatWrapping;
  texture.wrapT = MirroredRepeatWrapping;

  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipMapLinearFilter;

  const size = useThree((state) => state.size);

  const uniforms = useMemo(() => ({
    uTime: {value: 0},
    uTexture: {value: texture}
  }), []);

  const meshRef = useRef(null);
  useLayoutEffect(() =>{
    meshRef.current.scale.x = size.width + 250;
    meshRef.current.scale.y = size.height + 250;
  }, [size]);

  useEffect(() => {

    function updateMeshPosition() {
      meshRef.current.position.y = -window.scrollY;
    }

    window.addEventListener('scroll', updateMeshPosition);

    return () => {
      window.removeEventListener('scroll', updateMeshPosition);
    }

  }, [size])

  useFrame(({clock}) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh position={[0,0,-100]} ref={meshRef}>
      <planeBufferGeometry />
      <shaderMaterial args={[{
	uniforms,
	  vertexShader: `
	   varying vec2 vUv;

	    void main() {
	      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	      vUv = uv;
	    }
	`,
	  fragmentShader: `
	    varying vec2 vUv;

	    uniform sampler2D uTexture;
	    uniform float uTime;

	    void main() {
	      vec3 color = vec3(0.078,0.082,0.098);
		    
	      vec2 nUv = vUv * .77;
	      nUv.y += mod(uTime * 12.345, 1.);
	      nUv.x -= mod(uTime * 34.567, 1.);
	      
	      vec4 noise = texture2D(uTexture, nUv *4.0);
	      color *= noise.rgb * 1.7;

	      gl_FragColor = vec4(color, 1.0);
	    }
	`
      }]}/>
    </mesh>
  )

}

