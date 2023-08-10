import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, MathUtils } from "three"
import { utils } from '../three';

function getRelativeMousePosition(element, mouse) {
  var rect = element.getBoundingClientRect();
  var x = mouse.x - rect.left;
  var y = mouse.y - rect.top;

  return { 
    x,
    y
  }
}

export class Logo {
  constructor(boundElement) {
    this.boundElement = boundElement;

    const loader = new TextureLoader();
    const logoTexture = loader.load(boundElement.src);

    this.uniforms = {
      uLogoTexture: {
	value: logoTexture
      },
      uMouse: {
	value: new Vector2(-2, -2)
      },
      uSize: {
	value: new Vector2(boundElement.offsetWidth, boundElement.offsetHeight)
      }
    }

    this.mouse = new Vector2(0, 0);

    window.addEventListener('mousemove', (ev) => {
      const newMousePosition = getRelativeMousePosition(this.boundElement, {x: ev.clientX, y: ev.clientY});

      newMousePosition.x /= boundElement.offsetWidth;
      newMousePosition.x -= 0.012;

      newMousePosition.y /= (1.0 - boundElement.offsetHeight);
      newMousePosition.y += 1.0;

      this.mouse.set(newMousePosition.x, newMousePosition.y);
    });

    window.addEventListener('resize', () => {
      this.updatePositionAndScale();
    });

    const geometry = new PlaneGeometry(0, 0);
    const material = new ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      vertexShader: `
      varying vec2 vUv;

      void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	vUv = uv;
      }
      `,

      fragmentShader: `
	varying vec2 vUv;

	uniform sampler2D uLogoTexture;
	uniform vec2 uMouse;
	uniform vec2 uSize;

	void main() {
	  float aspectRatio = uSize.x / uSize.y; 

	  vec2 circleUv = vUv;
	  circleUv.x *= aspectRatio;

	  vec2 testMouse = uMouse;
	  testMouse.x *= aspectRatio;

	  float circle = 1.0 - smoothstep(.1, .3, distance(circleUv, testMouse));

	  vec4 logo = texture2D(uLogoTexture, vUv + (circle * 0.05));

	  gl_FragColor = logo;
	}
      `
    })

    this.object = new Mesh(geometry, material);
    this.updatePositionAndScale();
  }

  updatePositionAndScale() {
    const newPositionAndScale = utils.getBoundPosition(
      this.boundElement,
      { 
	width: window.innerWidth,
	height: window.innerHeight 
      }
    );

    this.object.position.set(newPositionAndScale.x, newPositionAndScale.y, 0);

    this.object.geometry.dispose();
    this.object.geometry = new PlaneGeometry(newPositionAndScale.width, newPositionAndScale.height);

    this.object.material.uniforms.uSize.value.set(this.boundElement.offsetWidth, this.boundElement.offsetHeight);
  }

  render() {
    this.object.material.uniforms.uMouse.value.x = MathUtils.lerp(this.object.material.uniforms.uMouse.value.x, this.mouse.x, 0.09);
    this.object.material.uniforms.uMouse.value.y = MathUtils.lerp(this.object.material.uniforms.uMouse.value.y, this.mouse.y, 0.09);

    this.updatePositionAndScale();
  }
}
