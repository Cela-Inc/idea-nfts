export const addToIpfs = async (ipfs, file, isgltf = false) => {
  try {
    if (isgltf) {
      // Convert to blob -> could be/should be moved to threejs helper file and created during export from threejs scene
      const blob = new Blob([file], { type: "model/gltf-binary" }, "model.glb");

      const result = await ipfs.add(blob);

      return result;
    }

    const result = await ipfs.add(file);

    return result;
  } catch (error) {
    console.log(error);
  }
};
