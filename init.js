import * as THREE from "https://threejs.org/build/three.module.js"
import {makeCar,keyframe} from "https://yunhanyuu.github.io/Lab/makeCar.js"
import {clock,car} from "https://yunhanyuu.github.io/Lab/makeCar.js"
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
var camera, scene, renderer,keys;
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
  var pos1 = new THREE.Vector3(40, 0, 50);
  var pos2 = new THREE.Vector3(20, 50, -50);
  var pos3 = new THREE.Vector3(-20, 50, -50);
  var pos4 = new THREE.Vector3(-20, 50, 50);
  var pos5 = new THREE.Vector3(20, 0, 50);
  var euler1 = new THREE.Euler(0, Math.PI / 2, 0);
  var euler2 = new THREE.Euler(0, Math.PI, 0);
  var euler3 = new THREE.Euler(0, -Math.PI / 2, 0);
  var euler4 = new THREE.Euler(0, -Math.PI / 6, 0);
  var euler5 = new THREE.Euler(0, -Math.PI / 4, 0);
  var quad1 = new THREE.Quaternion().setFromEuler(euler1);
  var quad2 = new THREE.Quaternion().setFromEuler(euler2);
  var quad3 = new THREE.Quaternion().setFromEuler(euler3);
  var quad4 = new THREE.Quaternion().setFromEuler(euler4);
  var quad5 = new THREE.Quaternion().setFromEuler(euler5);
  keys = [
    [0, pos1, quad1], // quad1 ...
    [0.2, pos2, quad2],
    [0.4, pos3, quad3],
    [0.6, pos4, quad4],
    [0.8, pos5, quad5],
    [1, pos1, quad1]
  ];
}
function animate() {

  keyframe(clock.getElapsedTime());

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
export {init,animate};
export{camera,scene,renderer,keys};
