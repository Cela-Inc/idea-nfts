import { Box } from "@chakra-ui/react";
import {
  OrbitControls,
  PerspectiveCamera,
  Center,
  Loader,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { useCreatorStore } from "../../hooks/use-creator-store.hook";
import LightingGroup from "../LightingGroup";
import {
  Mannequin,
  Instances as MannequinInstances,
} from "../models/Mannequin";
import {
  BasquiatArtWall,
  Instances as BasquiatArtWallInstances,
} from "../models/BasquiatArtWall";
import { Knight, Instances as KnightInstances } from "../models/Knight";
import {
  ChristmasBalls,
  Instances as ChristmasBallsInstances,
} from "../models/ChristmasBalls";
import {
  ChristmasHat,
  Instances as ChristmasHatInstances,
} from "../models/ChirstmasHat";
import {
  ChristmasTree,
  Instances as ChristmasTreeInstance,
} from "../models/ChristmasTree";
import {
  RubiksCube,
  Instances as RubiksCubeInstance,
} from "../models/RubiksCube";
import {
  SolarSystem,
  Instances as SolarSystemInstance,
} from "../models/SolarSystem";
import { Halloween, Instances as HalloweenInstance } from "../models/Halloween";
import {
  MedicalBrain,
  Instances as MedicalBrainInstance,
} from "../models/MedicalBrain";

// ! TODO: Replace degrees_to_radians in its own function

const CardViewCanvas = ({ sceneType }) => {
  const { model } = useCreatorStore();
  const cameraRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    if (cameraRef?.current) {
      cameraRef.current.position.set(0, 20, 40);
    }
  }, [sceneType]);

  const degrees_to_radians = (degrees) => {
    var pi = Math.PI;
    return degrees * (pi / 180);
  };

  return (
    <Box>
      <Canvas
        gl={{ linear: true }}
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          display: "inline-block",
        }}
      >
        {/* Controls */}
        <OrbitControls
          ref={controlsRef}
          enabled={sceneType}
          maxDistance={20}
          maxPolarAngle={degrees_to_radians(80)}
        />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          pov={35}
          position={[0, 1, 3.5]}
        />
        {/* Stage */}
        <Suspense fallback={null}>
          <LightingGroup />
          <hemisphereLight
            color='white'
            position={[-7, 25, 13]}
            intensity={1}
          />
          <group position-y={-1}>
            {/* <Center top> */}
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
                position={[0.01, 0, 0]}
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
            {/* </Center> */}
          </group>
        </Suspense>
      </Canvas>
      <Loader />
    </Box>
  );
};

export default CardViewCanvas;
