import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    geometries: THREE.Mesh[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particle system
    const particleCount = 1000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 100;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3B82F6,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Floating geometries
    const geometries: THREE.Mesh[] = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x8B5CF6, 
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-8, 2, -10);
    scene.add(torus);
    geometries.push(torus);
    
    // Icosahedron
    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    const icosahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x14B8A6,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    icosahedron.position.set(8, -2, -15);
    scene.add(icosahedron);
    geometries.push(icosahedron);
    
    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const octahedronMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xF97316,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.set(0, 4, -12);
    scene.add(octahedron);
    geometries.push(octahedron);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Rotate particles
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      // Animate geometries
      geometries.forEach((geometry, index) => {
        geometry.rotation.x += 0.01 + index * 0.005;
        geometry.rotation.y += 0.01 + index * 0.003;
        geometry.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });
      
      renderer.render(scene, camera);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      particles,
      geometries,
      animationId: 0
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
        sceneRef.current.renderer.dispose();
      }
    };
  }, []);

  return <div ref={mountRef} className={`fixed inset-0 -z-10 ${className}`} />;
};

export default ThreeScene;