import React, { Suspense, useLayoutEffect, useState, useEffect } from "react";
import $ from "jquery";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Bloom, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import MODEL from "../../Assets/models/BB02.glb";

import "./index.css";

const Entry = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isMobileMediaQuery = window.matchMedia('(max-width: 768px)');

    const [zPos, setZpos] = useState(-10);
    const [yPos, setYpos] = useState(3);

    useEffect(() => {
        if (isMobile || isMobileMediaQuery) {
            setZpos(-20);
            setYpos(8);
        } else if (!isMobile || !isMobileMediaQuery) {
            setZpos(-10);
            setYpos(3);
        }
    }, [yPos, zPos]);

    useLayoutEffect(() => {
        $("#webgl-container").delay(2000).animate({opacity: "1",}, 1000);
    }, []);

    const hideEntry = () => {
        $("#webgl-container").fadeOut(1000);
        $("#home-page .home-page-copy-content").delay(2000).animate({
            opacity: "1"
        }, 1000);
    }

    const Model = () => {
        const obj = useGLTF(MODEL);
        obj.nodes.Plane022_1.visible = false;

        return (
            <>
                <mesh scale={1} position={[0, 0, 0]} rotation={[0, 2.5, 0]} onClick={hideEntry}>
                    <primitive object={obj.scene} />
                </mesh>
            </>
        )
    }

    return (
        <>
            <div id="webgl-container">
                <Suspense>
                    <Canvas 
                        frameloop="always" 
                        camera={{
                            fov: 75, 
                            near: 0.1, 
                            far: 100000, 
                            position: [0, yPos, zPos],
                        }}
                    >
                        <ambientLight intensity={-0.3} />
                        <Model />
                        <Environment preset="sunset"/>
                        <OrbitControls 
                            minPolarAngle={0.6} 
                            maxPolarAngle={1.5} 
                            minDistance={6} 
                            maxDistance={12} 
                            maxAzimuthAngle={-2.5}
                            minAzimuthAngle={2}
                        />
                        <EffectComposer>
                            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={window.innerHeight} />
                            <Noise opacity={0} />
                            <Vignette eskil={false} offset={0} darkness={0} />
                        </EffectComposer>
                    </Canvas>
                </Suspense>
            </div>
        </>
    )
}

export default Entry;