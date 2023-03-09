import { OrbitControls } from "@react-three/drei";
import { useHumanityRocksStore } from "../../hooks/use-humanity-rocks-store.hook";
import LightingGroup from "../LightingGroup";
import { Black_shuttle } from "../models/Black_shuttle";
import FireMesh from "../models/FireMesh";
import { Green_shuttle } from "../models/Shuttle_green";
import { Lava_shuttle } from "../models/Shuttle_lava";
import { White_shuttle } from "../models/White_shuttle";

const HumanityRocksConfig = () => {
  const { selectedMesh, selectedFlame } = useHumanityRocksStore();

  return (
    <>
      <OrbitControls enablePan={false} />
      <LightingGroup />
      <hemisphereLight color='white' position={[-7, 25, 13]} intensity={1} />
      {selectedMesh.title === "Black Shuttle" && <Black_shuttle />}
      {selectedMesh.title === "White Shuttle" && <White_shuttle />}
      {selectedMesh.title === "Green Shuttle" && <Green_shuttle />}
      {selectedMesh.title === "Lava Shuttle" && <Lava_shuttle />}
      {selectedFlame.title === "orange" && <FireMesh color={"orange"} />}
      {selectedFlame.title === "blue" && <FireMesh />}
    </>
  );
};

export default HumanityRocksConfig;
