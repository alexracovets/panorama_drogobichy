"use client";

import { OrbitControls } from "@react-three/drei";

export const CanvasControl = () => {
    return (
        <OrbitControls
            zoomSpeed={3}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 3.3}
            maxPolarAngle={Math.PI / 1.4}
            maxDistance={0.2}
            minDistance={0.1}
        />
    );
};