import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Image,
  Text,
  MeshReflectorMaterial,
  Scroll,
  useScroll,
  ScrollControls,
  useCursor,
  Text3D,
} from "@react-three/drei";
import styles from "./BlogsPage.module.scss";
import { easing } from "maath";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { Button, IconButton } from "@mui/material";
import { ArrowBackIos as ArrowBackIosIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { PATH } from "../../Routers";
import { PageTransition } from "../../utils/motion";

const Blogs = () => {
  const { width, height } = useThree((state) => state.viewport);

  const BLOGS_DATA = [
    {
      id: 1,
      name: "cloud-lab-64",
      title: "Cloud Lab. 64",
      description: "クラウドを学ぶためのブログ",
      url: "https://cloud-lab-64.com/",
      image: "/images/cloud-lab-64-logo.png",
      position: [width * 1 - width * 0.5, 0, 0],
    },
    {
      id: 2,
      name: "code-lab-128",
      title: "Code Lab. 128",
      description: "コーディングを学ぶためのブログ",
      url: "https://code-lab-128.com/",
      image: "/images/code-lab-128-logo.png",
      position: [width * 1 - width * 0 + 0.25, 0, 0],
    },
    {
      id: 3,
      name: "hack-lab-256",
      title: "Hack Lab. 256",
      description: "情報セキュリティを学ぶためのブログ",
      url: "https://hack-lab-256.com/",
      image: "/images/hack-lab-256-logo.png",
      position: [width * 2 - width * 0.5 + 0.5, 0, 0],
    },
    {
      id: 4,
      name: "teech-lab",
      title: "Teech Lab.",
      description: "日常をつぶやく雑記ブログ（改装予定）",
      url: "https://teech-lab.com/",
      image: "/images/hack-lab-256-logo.png",
      position: [width * 2 - width * 0 + 0.75, 0, 0],
    },
    {
      id: 5,
      name: "enjoy-diary",
      title: "Enjoy Diary",
      description: "ガジェットブログ（改装予定）",
      url: "https://enjoy-diary.com/",
      image: "/images/hack-lab-256-logo.png",
      position: [width * 3 - width * 0.5 + 1, 0, 0],
    },
  ];

  return (
    <>
      <color attach={"background"} args={["#191920"]} />
      <fog attach={"fog"} args={["#191930", 0, 15]} />
      <group position={[0, -height * 0 - 0.5, 0]}>
        <Frames images={BLOGS_DATA} />
        {/* <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[200, 200]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh> */}
      </group>
      <Environment preset="city" />
    </>
  );
};

const Frames = ({
  images,
  q = new THREE.Quaternion().identity(),
  p = new THREE.Vector3(0, 0, 8),
}) => {
  const groupRef = useRef();

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group ref={groupRef}>
      {images.map((props) => (
        <Frame key={props.id} {...props} />
      ))}
    </group>
  );
};

const Frame = ({ name, url, image, position }) => {
  const imageRef = useRef();
  const frame = useRef();
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const { width, height } = useThree((state) => state.viewport);

  useCursor(hovered);
  useFrame((state, dt) => {
    imageRef.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      imageRef.current.scale,
      [0.92 * (hovered ? 0.95 : 1), 0.92 * (hovered ? 0.95 : 1), 1],
      0.1,
      dt
    );
    easing.dampC(
      frame.current.material.color,
      hovered ? "orange" : "white",
      0.1,
      dt
    );
  });

  return (
    <group
      position={position}
      onClick={(e) => (e.stopPropagation(), window.open(url))}
    >
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[width / 2, height / 2, 0.05]}
        position={[0, height / 4, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.93, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={imageRef}
          position={[0, 0, 0.7]}
          url={image}
        />
      </mesh>
    </group>
  );
};

const Title = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <Physics>
      <RigidBody restitution={1}>
        <Text3D
          position={[-width / 2.2, 5, 0]}
          scale={[1, 1, 2]}
          size={0.1 * width}
          font="/fonts/helvetiker_regular.typeface.json"
        >
          BLOGS
          <meshNormalMaterial />
        </Text3D>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh position-y={-height * 0 - 0.49} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[200, 200, 0.1]} />
          <MeshReflectorMaterial
            blur={[width * 90, height * 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

const BlogsPage = () => {
  return (
    <div className={styles.root}>
      <Canvas>
        <ScrollControls horizontal pages={4} damping={1}>
          <Scroll>
            <Title />
            <Blogs />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <IconButton
        color="primary"
        className={styles.button}
        component={RouterLink}
        to={PATH.home}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <PageTransition />
    </div>
  );
};

export default BlogsPage;
