import { FireShader } from "../classes/FireShader";

export const createFlameShader = (fireTex, THREE) => {
  const fireMaterial = new THREE.ShaderMaterial({
    defines: FireShader.defines,
    uniforms: THREE.UniformsUtils.clone(FireShader.uniforms),
    vertexShader: FireShader.vertexShader,
    fragmentShader: FireShader.fragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
  });

  // initialize uniforms

  fireTex.magFilter = fireTex.minFilter = THREE.LinearFilter;
  fireTex.wrapS = THREE.wrapT;

  fireMaterial.uniforms.fireTex.value = fireTex;
  fireMaterial.uniforms.color.value = new THREE.Color(0x000);
  fireMaterial.uniforms.invModelMatrix.value = new THREE.Matrix4();
  fireMaterial.uniforms.scale.value = new THREE.Vector3(1, 1, 1);
  fireMaterial.uniforms.seed.value = Math.random() * 19.19;

  return fireMaterial;
};
