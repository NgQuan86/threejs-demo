import * as THREE from 'three'


const texturesLoader = new THREE.TextureLoader()

const textures = {
    doorColorTexture: texturesLoader.load('./textures/door/color.jpg'),
    doorAlphaTexture: texturesLoader.load('./textures/door/alpha.jpg'),
    doorAmbientOcclusionTexture: texturesLoader.load('./textures/door/ambientOcclusion.jpg'),
    doorHeightTexture: texturesLoader.load('./textures/door/height.jpg'),
    doorNormalTexture: texturesLoader.load('./textures/door/normal.jpg'),
    doorMetalnessTexture: texturesLoader.load('./textures/door/metalness.jpg'),
    doorRoughnessTexture: texturesLoader.load('./textures/door/roughness.jpg'),
    matcapTexture: texturesLoader.load('./textures/matcaps/1.png'),
    gradientTexture: texturesLoader.load('./textures/gradients/3.jpg'),
  };

  for (const texture of Object.values(textures)) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }


export default textures;