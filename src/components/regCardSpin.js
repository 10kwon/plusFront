import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingImage = ({ imageUrl }) => {
    const planeRef = useRef();
  
    useFrame(() => {
      if (planeRef.current) {
        // 이미지를 회전시킵니다.
        planeRef.current.rotation.x += 0.005;
        planeRef.current.rotation.y += 0.005;
      }
    });
  
    return (
      <mesh ref={planeRef}>
        <planeGeometry args={[1000, 500]} />
        <meshBasicMaterial>
          <texture attach="map" url={imageUrl} />
        </meshBasicMaterial>
      </mesh>
    );
  };
  

export default RotatingImage;
