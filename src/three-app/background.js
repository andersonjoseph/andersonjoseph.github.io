import { Mesh, PlaneGeometry, ShaderMaterial } from "three"

export class Background {
  constructor() {
    this.uniforms = {
      uTime: {
	value: 0
      }
    }


    const geometry = new PlaneGeometry(0, 0);
    const material = new ShaderMaterial({
      uniforms: this.uniforms,
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

	float getNoise(vec2 pos, float evolve) {
	  float e = fract((evolve*0.01));

	  float cx  = pos.x*e;
	  float cy  = pos.y*e;

	  return fract(23.0*fract(2.0/fract(fract(cx*2.4/cy*23.0+pow(abs(cy/22.4),3.3))*fract(cx*evolve/pow(abs(cy),0.050)))));
	}

	void main() {
	  gl_FragColor = vec4(vec3(getNoise(vUv, uTime) * 0.13), 1.0);
	}
      `
    })

    this.object = new Mesh(geometry, material);
    this.object.position.setZ(-2);
    this.updatePositionAndScale();
  }

  render(app) {
    this.object.material.uniforms.uTime.value = app.clock.getElapsedTime();
    this.updatePositionAndScale();
  }

  updatePositionAndScale() {
    this.object.geometry.dispose();
    this.object.geometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
  }
}
