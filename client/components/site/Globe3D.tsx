import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Earth({ size = 2 }: { size?: number }) {
  const group = useRef<THREE.Group>(null);
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const map = loader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
    const bump = loader.load("https://threejs.org/examples/textures/planets/earth_bump_2048.jpg");
    const spec = loader.load("https://threejs.org/examples/textures/planets/earth_specular_2048.jpg");
    const clouds = loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png");
    clouds.wrapS = clouds.wrapT = THREE.ClampToEdgeWrapping;
    clouds.colorSpace = THREE.SRGBColorSpace;
    map.colorSpace = THREE.SRGBColorSpace;
    return { map, bump, spec, clouds };
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[size, 64, 64]} />
        <meshPhongMaterial
          map={textures.map}
          bumpMap={textures.bump}
          bumpScale={0.03}
          specularMap={textures.spec}
          specular={new THREE.Color("#bbb")}
          shininess={20}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[size * 1.01, 64, 64]} />
        <meshLambertMaterial map={textures.clouds} transparent opacity={0.6} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[size * 1.12, 64, 64]} />
        <meshBasicMaterial color="#58aaff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

function Lights() {
  const { scene } = useThree();
  scene.background = null;
  return (
    <>
      <hemisphereLight args={[0xa0d8ff, 0x1b2a44, 0.8]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 2, 2]} intensity={1.6} />
      <pointLight position={[-4, -2, -2]} intensity={0.8} />
    </>
  );
}

export default function Globe3D({ className = "", size = 240 }: { className?: string; size?: number }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <Lights />
          <Earth size={2.2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
