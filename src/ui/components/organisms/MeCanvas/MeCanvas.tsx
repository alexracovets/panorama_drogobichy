"use client";

import { Canvas } from "@react-three/fiber";

import { CanvasControl, CanvasPanorama } from "@components/molecules";
import { CanvasLights } from "@components/atoms";

export const MeCanvas = () => {
    return (
        <Canvas
            style={{ width: '100%', height: '100%' }}
            dpr={1}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 75, near: 0.1, far: 1000 }}
        >
            <CanvasLights />
            <CanvasControl />
            <CanvasPanorama />
        </Canvas>
    );
};
