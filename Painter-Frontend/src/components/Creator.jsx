import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useCreatorStore } from "../hooks/use-creator-store.hook";
import { Mannequin, Instances as MannequinInstances } from "./models/Mannequin";
import {
  BasquiatArtWall,
  Instances as BasquiatArtWallInstances,
} from "./models/BasquiatArtWall";
import { Knight, Instances as KnightInstances } from "./models/Knight";
import {
  ChristmasBalls,
  Instances as ChristmasBallsInstances,
} from "./models/ChristmasBalls";
import {
  ChristmasHat,
  Instances as ChristmasHatInstances,
} from "./models/ChirstmasHat";
import {
  ChristmasTree,
  Instances as ChristmasTreeInstance,
} from "./models/ChristmasTree";
import {
  RubiksCube,
  Instances as RubiksCubeInstance,
} from "./models/RubiksCube";
import {
  SolarSystem,
  Instances as SolarSystemInstance,
} from "./models/SolarSystem";
import { Halloween, Instances as HalloweenInstance } from "./models/Halloween";
import {
  MedicalBrain,
  Instances as MedicalBrainInstance,
} from "./models/MedicalBrain";
import * as THREE from "three";
import LightingGroup from "./LightingGroup";

const Creator = () => {
  const { model, background, setCanvasRef, setCameraRef, paintedImage } =
    useCreatorStore();
  const sceneRef = useRef();
  const camRef = useRef();

  useEffect(() => {
    setCanvasRef(sceneRef);
    setCameraRef(camRef);
  }, []);

  useEffect(() => {
    if (background?.isCustom) {
      sceneRef.current.style.backgroundImage = `url(${background.image})`;
    } else {
      sceneRef.current.style.backgroundImage = "";
    }
  }, [background, paintedImage]);

  const degrees_to_radians = (degrees) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  const scene = new THREE.Scene({ environment: null });

  return (
    <>
      <Canvas
        shadows
        ref={sceneRef}
        gl={{
          linear: true,
          preserveDrawingBuffer: true,
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Controls */}
        <OrbitControls
          makeDefault
          maxDistance={20}
          maxPolarAngle={degrees_to_radians(80)}
        />
        <PerspectiveCamera
          makeDefault
          ref={camRef}
          pov={35}
          position={[0, 1, 5]}
        />

        {/* Stage */}
        {!background?.isCustom && (
          <Environment
            near={1}
            far={100}
            resolution={256}
            ground={{
              height: 15, // Height of the camera that was used to create the env map (Default: 15)
              radius: 60, // Radius of the world. (Default 60)
              scale: 1000, // Scale of the backside projected sphere that holds the env texture (Default: 1000)
            }}
            files={
              import.meta.env.VITE_ASSETS_PATH +
              `/backgrounds${background.image}.hdr`
            }
            scene={scene}
          />
        )}

        <LightingGroup />
        <hemisphereLight color='white' position={[-7, 25, 13]} intensity={1} />
        <group position-y={-1}>
          {/* <Center top> */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' transparent opacity={0.15} />
          </mesh>

          {model.title === "mannequin" && (
            <MannequinInstances castShadow>
              <Mannequin visible={model.title === "mannequin"} />
            </MannequinInstances>
          )}
          {model.title === "Basquiat Graffiti Art Wall" && (
            <BasquiatArtWallInstances position={[0, 0.35, 0]} castShadow>
              <BasquiatArtWall
                visible={model.title === "Basquiat Graffiti Art Wall"}
              />
            </BasquiatArtWallInstances>
          )}
          {model.title === "knight" && (
            <KnightInstances castShadow>
              <Knight visible={model.title === "knight"} />
            </KnightInstances>
          )}
          {model.title === "Christmas Balls" && (
            <ChristmasBallsInstances
              scale={[1.025, 1.025, 1.025]}
              position={[0.01, -0.2, 0]}
              castShadow
            >
              <ChristmasBalls visible={model.title === "Christmas Balls"} />
            </ChristmasBallsInstances>
          )}
          {model.title === "Christmas Tree" && (
            <ChristmasTreeInstance position={[0, 0.0155, 0]} castShadow>
              <ChristmasTree visible={model.title === "Christmas Tree"} />
            </ChristmasTreeInstance>
          )}
          {model.title === "Christmas Hat" && (
            <ChristmasHatInstances position={[0, 0.0155, 0]} castShadow>
              <ChristmasHat />
            </ChristmasHatInstances>
          )}
          {model.title === "Rubiks Cube" && (
            <RubiksCubeInstance castShadow position={[0, 0.101, 0]}>
              <RubiksCube visible={model.title === "Rubiks Cube"} />
            </RubiksCubeInstance>
          )}
          {model.title === "Solar System" && (
            <SolarSystemInstance
              castshadow
              scale={[0.85, 0.85, 0.85]}
              position={[0, -100, 0]}
            >
              <SolarSystem visible={model.title === "Solar System"} />
            </SolarSystemInstance>
          )}
          {model.title === "Halloween" && (
            <HalloweenInstance castShadow>
              <Halloween
                position={[0, -0.1, 0]}
                visible={model.title === "Halloween"}
              />
            </HalloweenInstance>
          )}
          {model.title === "Medical Brain" && (
            <MedicalBrainInstance castShadow scale={[0.25, 0.25, 0.25]}>
              <MedicalBrain visible={model.title === "Medical Brain"} />
            </MedicalBrainInstance>
          )}
        </group>
        {/* </Center> */}
      </Canvas>
    </>
  );
};

export default Creator;
