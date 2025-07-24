// src/components/ThreeBackground.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // Geometry + Material + Mesh
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 150, 20);
    const material = new THREE.MeshStandardMaterial({
      color: "#00FFAA",
      roughness: 0.3,
      metalness: 0.8,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Three.js canvas container */}
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6 backdrop-blur-sm">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          About Our Wayanad Retreat
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
          Nestled in the lush greenery of Wayanad, our resort offers a serene
          escape into nature with modern comfort. Immerse yourself in the
          tranquility of the Western Ghats, with personalized service,
          eco-friendly villas, and unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default ThreeBackground;
