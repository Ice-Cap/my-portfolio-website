import * as THREE from 'three';
import React, { useEffect } from 'react';



function Cube() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ alpha: true});
  renderer.setSize(300, 300);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0x000000, 0 ); // the default

  useEffect(() => {
    document.querySelector('.cube-container').appendChild( renderer.domElement );
  }, []);

  let size = 1.5;
  let widthSegments = 2;
  let heightSegments = 2;
  let depthSegments = 2;
  let boxGeometry = new THREE.BoxGeometry(
    size, size, size,
    widthSegments, heightSegments, depthSegments);
  const edges = new THREE.EdgesGeometry(boxGeometry);

  const largeCube = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  scene.add( largeCube );

  size = .6;
  widthSegments = 2;
  heightSegments = 2;
  depthSegments = 2;
  const boxGeometry2 = new THREE.BoxGeometry(
    size, size, size,
    widthSegments, heightSegments, depthSegments);
  const edges2 = new THREE.EdgesGeometry(boxGeometry2);

  const smallCube = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  scene.add( smallCube );

  camera.position.z = 4;
  camera.position.y = 1.1;
  camera.rotateX(-0.3);

  function animate() {
    requestAnimationFrame( animate );
    largeCube.rotation.y += 0.006;
    smallCube.rotation.y += 0.015;
    renderer.render( scene, camera );
  }
  animate();

  return (
    <React.Fragment>
      <div className="cube-container" >

      </div>
    </React.Fragment>
  );
}

export default Cube;