import { Canvas } from "@react-three/fiber";
import React from "react";

const SceneCanvas = (props) => {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows>
      {props.children}
    </Canvas>
  );
};

export default SceneCanvas;
