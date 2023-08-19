import React, { useEffect } from 'react';
import * as THREE from 'three';

function ThreeDScene() {
  useEffect(() => {
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGLRenderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load the 3D models for AI and medicine
    // Replace 'aiModel.glb' and 'medicineModel.glb' with your actual 3D model files
    const loader = new THREE.GLTFLoader();
    let aiModel, medicineModel;

    loader.load('path_to_aiModel.glb', (gltf) => {
      aiModel = gltf.scene;
      aiModel.position.x = -2;
      scene.add(aiModel);
    });

    loader.load('path_to_medicineModel.glb', (gltf) => {
      medicineModel = gltf.scene;
      medicineModel.position.x = 2;
      scene.add(medicineModel);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the AI and medicine models
      if (aiModel && medicineModel) {
        aiModel.rotation.x += 0.01;
        aiModel.rotation.y += 0.01;
        medicineModel.rotation.x += 0.01;
        medicineModel.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
}

export default ThreeDScene;
