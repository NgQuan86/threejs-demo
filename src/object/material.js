import * as THREE from 'three'
import textures from './Textures'

export const material = new THREE.MeshPhysicalMaterial()
material.matcap = textures.matcapTexture

// material.map = textures.doorColorTexture
// material.aoMap = textures.doorAmbientOcclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = textures.doorHeightTexture
// material.displacementScale = 0.1
// material.metalnessMap = textures.doorMetalnessTexture
// material.roughnessMap = textures.doorRoughnessTexture
// material.normalMap = textures.doorNormalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = textures.doorAlphaTexture



// MeshBasicMaterial
// export const material = new THREE.MeshBasicMaterial({
//     map: textures.doorColorTexture,
//     color: new THREE.Color('#ff0000'),
//     wireframe: true,
//     transparent: true,
//     opacity: 0.5,
//     alphaMap: textures.doorAlphaTexture,
//     side: THREE.DoubleSide
// })


// ---MeshNormalMaterial---
// export const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// ---MeshMatcapMaterial---
// export const material = new THREE.MeshMatcapMaterial()
// material.matcap = textures.matcapTexture

// ---MeshDepthMaterial---
// export const material = new THREE.MeshDepthMaterial()

// ---MeshLambertMaterial---
// export const material = new THREE.MeshLambertMaterial()

// ---MeshPhongMaterial---
// export const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color(0x1188ff)

// ---MeshToonMaterial---
/*export const material = new THREE.MeshToonMaterial()
 gradientTexture.minFilter = THREE.NearestFilter
 gradientTexture.magFilter = THREE.NearestFilter
 gradientTexture.generateMipmaps = false
 material.gradientMap = gradientTexture
*/


// // MeshStandardMaterial
// export const material = new THREE.MeshStandardMaterial()
// material.metalness = 1
// material.roughness = 1
// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.1
// material.metalnessMap = doorMetalnessTexture
// material.roughnessMap = doorRoughnessTexture
// material.normalMap = doorNormalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = doorAlphaTexture