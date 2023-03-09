import { Center, OrbitControls, useProgress } from "@react-three/drei";
import React, { Suspense, useEffect, useRef } from "react";
import { Chicago_dancing } from "./models/Chicago_dancing";
import { Cocaine_pack } from "./models/Cocaine_pack";
import { Invisible_queen } from "./models/Invisible_queen";
import { Scene } from "./models/Scene";
import Loader from "./Loader";

const IdeaExperience = ({ ideaView }) => {
  const orbitCamRef = useRef();
  const { progress } = useProgress();

  useEffect(() => {
    if (orbitCamRef.current) {
      if (ideaView === "INVISIBLY") {
        orbitCamRef.current.object.position.z = 100;
      } else if (ideaView === "DOAP") {
        orbitCamRef.current.object.position.z = 600;
      } else {
        orbitCamRef.current.object.position.z = 250;
      }
    }
  }, [ideaView]);

  return (
    <>
      <ambientLight intensity={0.75} />
      <Suspense fallback={<Loader progress={progress} />}>
        <Center>
          {ideaView === "INVISIBLY" && <Invisible_queen />}
          {ideaView === "EXP.NFT" && <Scene />}
          {ideaView === "AUDIO" && <Chicago_dancing />}
        </Center>
      </Suspense>
      <OrbitControls
        ref={orbitCamRef}
        maxPolarAngle={Math.PI / 2}
        minDistance={100}
        maxDistance={900}
      />
    </>
  );
};

export default IdeaExperience;
