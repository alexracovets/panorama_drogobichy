"use client";

import { useTexture } from "@react-three/drei";

type UseLoadTextureProps = {
    path: string;
};

export const useLoadTexture = ({ path }: UseLoadTextureProps) => {
    const texture = useTexture(path);
    texture.rotation = Math.PI;
    texture.center.set(0.5, 0.5);
    texture.flipY = false;
    return texture;
};