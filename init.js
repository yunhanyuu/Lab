import * as THREE from "https://threejs.org/build/three.module.js"
import {makeCar,keyframe} from "https://yunhanyuu.github.io/Lab/makeCar.js"
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
var camera, scene, renderer;
function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(300, 400, 500); // camera at (0,0,500)
  let controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////
  
  scene.add(makeCar());
  ///////////////////
}
function animate() {

  keyframe(clock.getElapsedTime());

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
export {init,animate};
export{camera,scene,renderer};
