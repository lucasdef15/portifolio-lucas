// src/components/common/3d/HeroModel.tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/code-model.glb");

  return (
    <Center>
      <primitive
        object={scene}
        scale={0.5}
        position={[0, 0, 0]}
        rotation={[0.1, 0.3, 0]}
      />
    </Center>
  );
}

export default function HeroModel() {
  return (
    <Canvas
      camera={{ position: [0, 1, 7], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 5]} intensity={2} color="#67e8f9" />
        <pointLight position={[-10, -5, -5]} intensity={1.5} color="#a5b4fc" />

        <Model />

        <Environment preset="night" />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          autoRotate
          autoRotateSpeed={0.25}
          minDistance={5}
          maxDistance={10}
        />
      </Suspense>
    </Canvas>
  );
}
