import {useLayoutEffect, useRef, useMemo} from 'react';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { Vector2, TextureLoader, NearestFilter, LinearMipMapLinearFilter } from 'three';
import {getBoundPosition} from '../utils';

export function Footer() {

  const noiseTexture = useLoader(TextureLoader, './noise.webp');
  noiseTexture.magFilter = NearestFilter;
  noiseTexture.minFilter = LinearMipMapLinearFilter;

  const size = useThree((state) => state.size);
  const position = useMemo(() => {
    const element = document.getElementById('footer');

    return getBoundPosition(element, size);
  }, [size]);

  const uniforms = useMemo(() => ({
    uTime: {value: 0},
    uMouse: {value: new Vector2(0.0, 0.0)},
    uResolution: {value: new Vector2(size.width, size.height)},
    uNoiseTexture: {value: noiseTexture}
  }), [size]);

  const meshRef = useRef(null);
  useLayoutEffect(() =>{
    meshRef.current.matrixAutoUpdate = false;

    meshRef.current.scale.x = position.width;
    meshRef.current.scale.y = position.height;

    meshRef.current.position.set(position.x, position.y, 0);

    meshRef.current.updateMatrix();
  }, [size]);

  useFrame(({clock}) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
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

	    uniform float uTime;
	    uniform vec2 uMouse;
	    uniform vec2 uResolution;
	    uniform sampler2D uNoiseTexture;

	    // Simplex 2D noise
	    //
	    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

	    float snoise(vec2 v){
	      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
		       -0.577350269189626, 0.024390243902439);
	      vec2 i  = floor(v + dot(v, C.yy) );
	      vec2 x0 = v -   i + dot(i, C.xx);
	      vec2 i1;
	      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
	      vec4 x12 = x0.xyxy + C.xxzz;
	      x12.xy -= i1;
	      i = mod(i, 289.0);
	      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
	      + i.x + vec3(0.0, i1.x, 1.0 ));
	      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
		dot(x12.zw,x12.zw)), 0.0);
	      m = m*m ;
	      m = m*m ;
	      vec3 x = 2.0 * fract(p * C.www) - 1.0;
	      vec3 h = abs(x) - 0.5;
	      vec3 ox = floor(x + 0.5);
	      vec3 a0 = x - ox;
	      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
	      vec3 g;
	      g.x  = a0.x  * x0.x  + h.x  * x0.y;
	      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
	      return 130.0 * dot(m, g);
	    }

	    void main() {
	      vec3 color = vec3(0.0);

	      vec3 orange = vec3(1.,0.294,0.);
	      vec3 black = vec3(0.0, 0.0, 0.0);
	      vec3 grey = vec3(0.851,0.851,0.851);

	      vec2 newUv = vUv;
	      newUv.x *= uResolution.x/uResolution.y;

	      vec4 grainNoise = texture2D(uNoiseTexture, vUv * 2.5);

	      float mouse = distance(uMouse, vUv) *2.0;

	      newUv += mouse;

	      float noise1 = snoise(newUv * 0.5 + vec2(uTime * 0.03, sin(uTime * 0.1)) + 123.456);
	      float noise2 = snoise(newUv * 0.7 + vec2(uTime * 0.033, cos(uTime * 0.1)) + 789.101);

	      color = mix(black, orange, noise1);
	      color = mix(color, grey, noise2 * 0.7);
	      color += grainNoise.rgb * 0.1;
		    
	      gl_FragColor = vec4(color, 1.0);
	    }
	`
      }]}/>
    </mesh>
  )

}

