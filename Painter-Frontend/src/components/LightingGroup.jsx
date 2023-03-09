const LightingGroup = () => {
  return (
    <group>
      <directionalLight
        color={"black"}
        position={[5, 5, 2]}
        intensity={0.15}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
    </group>
  );
};

export default LightingGroup;
