import React, { Suspense, useLayoutEffect } from "react";
import $ from "jquery";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import MODEL from "../../Assets/models/BB02.glb";

import "./index.css";

const Entry = ({showHide}) => {
    console.log(showHide);
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
        console.log(obj.nodes)
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
                    <Canvas frameloop="always" camera={{
                        fov: 75, 
                        near: 0.1, 
                        far: 100000, 
                        position: [0, 3, -10],
                    }}>
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