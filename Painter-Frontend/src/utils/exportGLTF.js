import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

export const exportGLTF = async (scene) => {
  const exporter = new GLTFExporter();

  try {
    return await exporter.parseAsync(scene, {
      binary: true,
      includeCustomExtensions: true,
    });
  } catch (error) {
    console.log(error);
  }
};
