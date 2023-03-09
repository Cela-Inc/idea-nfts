import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const ktxLoader = new KTX2Loader();
ktxLoader.setTranscoderPath(import.meta.env.VITE_ASSETS_PATH + "/transcoders/");

export const useCustomLoader = (file) => {
  const { gl } = useThree();

  const glb = useLoader(
    GLTFLoader,
    import.meta.env.VITE_ASSETS_PATH + "/models/" + `${file}`,
    (loader) => {
      ktxLoader.detectSupport(gl);
      const dracoLoader = new DRACOLoader();
      loader.setKTX2Loader(ktxLoader);
      loader.setDRACOLoader(dracoLoader);
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );

  return glb;
};
