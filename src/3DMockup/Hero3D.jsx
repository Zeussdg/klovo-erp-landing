import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import "./Hero3D.css";


function Laptop() {

  const { scene } = useGLTF("/models/laptop.glb");


  const texture = useLoader(
    THREE.TextureLoader,
    "/productPhoto/FotoMain.png"
  );


  useEffect(() => {


    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;


    // Görsel yön ayarı
    texture.center.set(0.5, 0.5);
    texture.rotation = -Math.PI / 2;



    scene.traverse((child) => {


      if (child.isMesh) {


        console.log(child.name);



        if (child.name === "Cube016_screen_0") {


          const material = child.material.clone();



          // eski ekran görselini temizle
          material.map = null;
          material.emissiveMap = null;
          material.normalMap = null;
          material.roughnessMap = null;
          material.metalnessMap = null;



          // yeni ekran görseli
          material.map = texture;


          material.color.set(0xffffff);

          material.emissive.set(0x000000);

          material.needsUpdate = true;



          child.material = material;


        }

      }


    });



  }, [scene, texture]);




  return (

    <primitive
      object={scene}
      scale={5}
      position={[0, -0.8, 0]}
    />

  );

}




export default function Hero3D() {


  return (

    <div className="hero-3d-card">


      <Canvas

        camera={{
          position: [0, 2.2, 5],
          fov: 35
        }}

      >


        <ambientLight intensity={1.5} />


        <directionalLight

          position={[5, 5, 5]}
          intensity={2}

        />


        <Laptop />



        <OrbitControls

          enablePan={false}

          minDistance={3}

          maxDistance={6}

        />


      </Canvas>


    </div>

  );

}



useGLTF.preload("/models/laptop.glb");