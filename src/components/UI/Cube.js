import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';

function Cube(props) {
    const cubeRef = useRef(null);
    let scene, camera, renderer, largeCube, smallCube;

    useEffect(() => {
        let delta = 0.006;
        const maxSpeed = 0.015;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(props.size, props.size);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        cubeRef.current.appendChild(renderer.domElement);

        largeCube = createCube(1.5);
        smallCube = createCube(.6);
        scene.add(largeCube);
        scene.add(smallCube);

        camera.position.z = 4;
        camera.position.y = 1.1;
        camera.rotateX(-0.3);

        function animate() {
            requestAnimationFrame(animate);
            largeCube.rotation.y += 0.006;
            smallCube.rotation.y += 0.015;
            renderer.render(scene, camera);
        }
        animate();

        function handleMouseMove(e) {
            if (e.movementX > 0) {
                delta += 0.0003;
                if (delta > maxSpeed) {
                    delta = maxSpeed;
                }
                largeCube.rotation.y += delta;
            } else {
                delta += 0.0003;
                if (delta > maxSpeed) {
                    delta = maxSpeed + maxSpeed;
                }
                largeCube.rotation.y -= delta;
            }
        }

        document.body.addEventListener('mousemove', handleMouseMove);

        return () => {
            cubeRef.current.removeChild(renderer.domElement);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    function createCube(size) {
        let widthSegments = 2;
        let heightSegments = 2;
        let depthSegments = 2;

        let boxGeometry = new THREE.BoxGeometry(
            size, size, size,
            widthSegments, heightSegments, depthSegments);
        const edges = new THREE.EdgesGeometry(boxGeometry);

        const cube = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: props.color }));

        return cube;
    }

    return (
        <React.Fragment>
            <div ref={cubeRef} className="cube-container">
            </div>
        </React.Fragment>
    );
}

export default Cube;