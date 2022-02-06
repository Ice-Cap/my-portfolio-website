import * as THREE from 'three';
import React, { useEffect, useState } from 'react';

function Cube(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  let scene, camera, renderer, largeCube, smallCube;

  useEffect(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // the default
    document.querySelector('.cube-container').appendChild(renderer.domElement);

    largeCube = createCube(1.5);
    smallCube = createCube(.6);
    scene.add(largeCube);
    scene.add(smallCube);

    camera.position.z = 4;
    camera.position.y = 1.1;
    camera.rotateX(-0.3);

    animate();
    setIsLoaded(true);
  }, []);

  useEffect(() => { 
    if (isLoaded && largeCube) {
      largeCube.updateMatrix();
    }
  }, [isLoaded, largeCube]);

  function createCube(size) {
    let widthSegments = 2;
    let heightSegments = 2;
    let depthSegments = 2;

    let boxGeometry = new THREE.BoxGeometry(
        size, size, size,
        widthSegments, heightSegments, depthSegments);
    const edges = new THREE.EdgesGeometry(boxGeometry);

    const cube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );

    return cube;
  }

  function animate() {
    requestAnimationFrame( animate );
    largeCube.rotation.y += props.cubeSpeed;
    smallCube.rotation.y += 0.015;
    renderer.render( scene, camera );
  }

  useEffect(() => {
    console.log(props.cubeSpeed);
  });

  return (
    <React.Fragment>
      <div className="cube-container">

      </div>
    </React.Fragment>
  );
}

export default Cube;