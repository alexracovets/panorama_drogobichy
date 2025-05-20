"use client";

import { Sphere } from "@react-three/drei";
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

export const PanoramaSphere = () => {
    const texture = useTexture("/panorams/0.jpg");

    return (
        <Sphere args={[350, 50, 50]}>
            <meshStandardMaterial map={texture} side={THREE.BackSide} transparent />
        </Sphere>
    )
}