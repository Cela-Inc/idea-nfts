import React from "react";
import { createFlameShader } from "../../threejs/helpers/createFlameShader";
import { setFlame } from "../../threejs/helpers/setFlame";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const FireMesh = ({ color }) => {
  let fireTex;

  if (color === "orange") {
    fireTex = new THREE.TextureLoader().load(
      import.meta.env.VITE_ASSETS_PATH + "/humanityRocks/textures/orange.png"
    );
  } else {
    fireTex = new THREE.TextureLoader().load(
      import.meta.env.VITE_ASSETS_PATH +
        "/humanityRocks/textures/orange_blue.png"
    );
  }

  const fire = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    createFlameShader(fireTex, THREE)
  );

  fire.material.opacity = 0;
  setFlame(fire);

  const updateFire = (fire, t) => {
    const invModelMatrix = fire.material.uniforms.invModelMatrix.value;

    fire.updateMatrix();
    invModelMatrix.copy(fire.matrix).invert();

    if (t !== undefined) {
      fire.material.uniforms.time.value = t;
    }

    fire.material.uniforms.invModelMatrix.value = invModelMatrix;

    fire.material.uniforms.scale.value = fire.scale;
  };

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 1;
    updateFire(fire, t);
  });

  return (
    <primitive
      object={fire}
      scale={[4, 11, 3.5]}
      position={[4, 0, -4]}
      rotation-z={Math.PI * -0.75}
      rotation-x={Math.PI * 0.5}
    ></primitive>
  );
};

export default FireMesh;
