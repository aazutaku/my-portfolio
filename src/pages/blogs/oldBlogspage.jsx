import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Image,
  Text,
  MeshReflectorMaterial,
  Scroll,
  ScrollControls,
  useScroll,
  useCursor,
} from "@react-three/drei";
import styles from "./BlogsPage.module.scss";
import { Button, Typography } from "@mui/material";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import getUuid from "uuid-by-string";
import { motion } from "framer-motion";

const GOLDENRATIO = 1.61803398875;

const Images = () => {
  const { width, height } = useThree((state) => state.viewport);
  const groupRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    groupRef.current.children[0].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
    groupRef.current.children[1].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
    groupRef.current.children[2].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
    groupRef.current.children[3].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
  });

  const IMAGE_DATA = [
    {
      id: 1,
      url: "/images/azutaku-title.png",
      scale: [4, height / 3, 1],
      position: [-1, 0, 1],
    },
    {
      id: 2,
      url: "/images/azutaku-title.png",
      scale: 3,
      position: [2, 0, 1],
    },
    {
      id: 3,
      url: "/images/azutaku-title.png",
      scale: [1, 3.5, 1],
      position: [-2.3, -height, 2],
    },
    {
      id: 4,
      url: "/images/azutaku-title.png",
      scale: [1.4, 2, 1],
      position: [-1.3, -height - 0.3, 3.2],
    },
  ];
  return (
    <group ref={groupRef}>
      {IMAGE_DATA.map((image) => {
        return (
          <Image
            key={image.id}
            url={image.url}
            scale={image.scale}
            position={image.position}
          />
        );
      })}
    </group>
  );
};

const pexel = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;

const Blogs = () => {
  const { width, height } = useThree((state) => state.viewport);
  console.log(height);

  const images = [
    // Front
    { position: [0, 0, 1], rotation: [0, 0, 0], url: pexel(1103970) },
    // Left
    {
      position: [-1.25, 0, 2],
      rotation: [0, 0, 0],
      url: pexel(325185),
    },
    {
      position: [-2.5, 0, 2.5],
      rotation: [0, 0, 0],
      url: pexel(358574),
    },
    // Right
    {
      position: [1.25, 0, 2],
      rotation: [0, 0, 0],
      url: pexel(911738),
    },
    {
      position: [2.5, 0, 2.5],
      rotation: [0, 0, 0],
      url: pexel(1738986),
    },
  ];

  return (
    <>
      <color attach={"background"} args={["#191920"]} />
      <fog attach={"fog"} args={["#191930", 0, 15]} />
      <group position={[0, -height * 1 - 0.5, 0]}>
        <Frames images={images} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
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
        </mesh>
      </group>
      <Environment preset="city" />
    </>
  );
};

const Frames = ({
  images,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) => {
  const groupRef = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current = groupRef.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={groupRef}
      onClick={(e) => (
        e.stopPropagation(),
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name
        ),
        console.log(clicked.current)
      )}
      onPointerMissed={() => (setLocation("/"), console.log("onPointerMissed"))}
    >
      {images.map((props) => (
        <Frame key={props.url} {...props} />
      ))}
    </group>
  );
};

const Frame = ({ url, c = new THREE.Color(), ...props }) => {
  const imageRef = useRef();
  const frame = useRef();
  const [, params] = useRoute("/item/:id");
  const [hovered, hover] = useState(false);
  const [rnd] = useState(() => Math.random());
  const name = getUuid(url);
  const isActive = params?.id === name;
  useCursor(hovered);
  useFrame((state, dt) => {
    imageRef.current.material.zoom =
      2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    easing.damp3(
      imageRef.current.scale,
      [
        0.85 * (!isActive && hovered ? 0.85 : 1),
        0.9 * (!isActive && hovered ? 0.905 : 1),
        1,
      ],
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
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
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
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={imageRef}
          position={[0, 0, 0.7]}
          url={url}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
        onClick={() => console.log("aaaaa")}
      >
        {name.split("-").join(" ")}
      </Text>
    </group>
  );
};

const OldBlogsPage = () => {
  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Canvas>
        <ScrollControls pages={1} damping={1} horizontal={false}>
          <Scroll>
            <Images />
          </Scroll>
          <Scroll>
            <Blogs />
          </Scroll>
          <Scroll html>
            <Typography variant="h1" className={styles.title_1}>
              ABOUT
            </Typography>
            <Typography variant="h1" className={styles.title_2}>
              BLOGS
            </Typography>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </motion.div>
  );
};

export default OldBlogsPage;
