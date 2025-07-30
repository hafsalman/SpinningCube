import * as THREE from 'three';

//Importing Orbit Controls from three library
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//Creating Scene
const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
const cubMaterial = new THREE.MeshBasicMaterial({color: "white"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubMaterial
)

scene.add(cubeMesh)

//Creating Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 50)

camera.position.z = 5

//Creating Initializer
const canvas = document.querySelector('canvas.threejs')

const renderer = new THREE.WebGLRenderer({canvas: canvas})

renderer.setSize(window.innerWidth, window.innerHeight)

//Initialize Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true

const renderloop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(renderloop)
}

renderloop()