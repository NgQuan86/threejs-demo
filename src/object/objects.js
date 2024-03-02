import * as THREE from 'three'
import { material } from './material'


export const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)
export const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    material
)
export const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 16, 32),
    material
)




