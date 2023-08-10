import { Scene, PerspectiveCamera, WebGLRenderer, Clock } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

class ThreeApp {
  constructor(selector, options) {
    this.renderCallbacks = []

    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.scene = new Scene()

    const canvas = document.querySelector(selector)
    if (!canvas) {
      throw new Error("Canvas element not found")
    }

    this.canvas = canvas

    this.camera = new PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.1,
    );

    this.camera.position.z = 2
    this.scene.add(this.camera)

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      ...options.renderer
    })

    this.renderer.setSize(this.sizes.width, this.sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.clock = new Clock()

    if (options && options.enableOrbitControls) {
      this.controls = new OrbitControls(this.camera, this.canvas)
      this.controls.enableDamping = true
    }
  }

  addObject(object) {
    this.scene.add(object.object)

    if (object.render) this.renderCallbacks.push(object.render.bind(object))
  }

  render() {
    if (this.controls) {
      this.controls.update()
    }

    for (const callback of this.renderCallbacks) {
      callback(this)
    }

    this.renderer.render(this.scene, this.camera)
    window.requestAnimationFrame(this.render.bind(this))
  }

  start() {
    this.render()
  }
}

function getBoundPosition(el, viewport, currentPos = 0) {
  const bounds = el.getBoundingClientRect();

  const y = currentPos - bounds.top + viewport.height / 2 - bounds.height / 2;
  const x = bounds.left - viewport.width / 2 + bounds.width / 2;

  return {
    x,
    y,
    width: bounds.width,
    height: bounds.height
  }
}

export const utils = {
  getBoundPosition,
}

export default ThreeApp;
