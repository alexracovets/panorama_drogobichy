"use client";

import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const CanvasLights = () => {
    return (
        <>
            <directionalLight position={[1, 1, 1]} intensity={0.5} />
            <ambientLight intensity={1.3} />
            <EffectComposer>
                <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.5} intensity={0.5} />
            </EffectComposer>
        </>
    );
};
