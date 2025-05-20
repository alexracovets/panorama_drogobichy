"use client";

import { Sphere } from "@react-three/drei";
import * as THREE from 'three';

import { useLoadTexture } from "@hooks";
import { storePanoramas } from "@store";

export const PanoramaSphere = () => {
    const { currentPanorama } = storePanoramas();
    const texture = useLoadTexture({ path: currentPanorama.image });

    return (
        <Sphere args={[350, 50, 50]}>
            <meshStandardMaterial map={texture} side={THREE.BackSide} transparent />
        </Sphere>
    )
};