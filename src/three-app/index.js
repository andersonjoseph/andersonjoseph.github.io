import ThreeApp from "../three/index"

const app = new ThreeApp("#webgl", {
  enableOrbitControls: false,
  renderer: {
    alpha: true,
    antialias: true,
    premultipliedAlpha: false
  }
});

window.addEventListener('resize', (ev) => {
  const newWidth = ev.currentTarget.innerWidth;
  const newHeight = ev.currentTarget.innerHeight;

  app.camera.aspect = newWidth / newHeight
  app.camera.fov = (Math.atan( (newHeight / 2) / app.camera.position.z) * 2) * (180/Math.PI);
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(newWidth, newHeight);
});

app.camera.position.z = 600;
app.camera.fov = (Math.atan( (window.innerHeight / 2) / app.camera.position.z) * 2) * (180/Math.PI);
app.camera.updateProjectionMatrix();


export default app;
