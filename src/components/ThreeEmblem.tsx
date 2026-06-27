import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeEmblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Intersection Observer to lazy-load and pause when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => {
      observer.unobserve(container);
    };
  }, []);

  // Three.js Scene Setup & Render Loop
  useEffect(() => {
    if (!isIntersecting) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Get dimensions
    let width = container.clientWidth || 320;
    let height = container.clientHeight || 280;

    // 1. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10);
    camera.position.set(0, 0, 4.8);

    // 3. Materials (Apple luxury product design)
    const matteBlackMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      roughness: 0.55,
      metalness: 0.85,
    });

    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.28,
      metalness: 0.9,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 1.0,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.85,
      opacity: 0.9,
      transparent: true,
      roughness: 0.22,
      thickness: 0.1,
      ior: 1.45,
      depthWrite: false, // Prevents alpha blending sorting artifacts
    });

    const accentGreenMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x10b981,
      emissiveIntensity: 0.6,
    });

    // 4. Emblem Group Assembly
    const emblemGroup = new THREE.Group();
    scene.add(emblemGroup);

    // A. Outer machined aluminum bezel (Torus)
    const outerTorusGeo = new THREE.TorusGeometry(1.35, 0.07, 16, 64);
    const outerTorus = new THREE.Mesh(outerTorusGeo, aluminumMat);
    outerTorus.castShadow = true;
    emblemGroup.add(outerTorus);

    // B. Inner thin chrome accent ring (Torus)
    const innerTorusGeo = new THREE.TorusGeometry(1.18, 0.025, 8, 64);
    const innerTorus = new THREE.Mesh(innerTorusGeo, chromeMat);
    emblemGroup.add(innerTorus);

    // C. Frosted Glass Disc
    const glassDiskGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.04, 64);
    glassDiskGeo.rotateX(Math.PI / 2);
    const glassDisk = new THREE.Mesh(glassDiskGeo, glassMat);
    emblemGroup.add(glassDisk);

    // D. Central Matte Black Extruded Bevelled "A" Core
    const shape = new THREE.Shape();
    shape.moveTo(-0.25, -0.32);
    shape.lineTo(-0.08, 0.35);
    shape.lineTo(0.08, 0.35);
    shape.lineTo(0.25, -0.32);
    shape.lineTo(0.14, -0.32);
    shape.lineTo(0.09, -0.1);
    shape.lineTo(-0.09, -0.1);
    shape.lineTo(-0.14, -0.32);
    shape.lineTo(-0.25, -0.32);

    const hole = new THREE.Path();
    hole.moveTo(-0.05, 0.04);
    hole.lineTo(0, 0.22);
    hole.lineTo(0.05, 0.04);
    hole.lineTo(-0.05, 0.04);
    shape.holes.push(hole);

    const extrudeSettings = {
      depth: 0.08,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    };

    const logoGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    logoGeo.center();
    const logoMesh = new THREE.Mesh(logoGeo, matteBlackMat);
    logoMesh.position.z = 0.05;
    logoMesh.castShadow = true;
    emblemGroup.add(logoMesh);

    // E. Glowing Green Inner Ring (Torus)
    const glowTorusGeo = new THREE.TorusGeometry(1.23, 0.012, 8, 64);
    const glowTorus = new THREE.Mesh(glowTorusGeo, accentGreenMat);
    glowTorus.position.z = -0.01;
    emblemGroup.add(glowTorus);

    // F. Spoke Chrome Struts (4 connecting spokes)
    const spokeGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.16, 16);
    const angles = [Math.PI / 4, 3 * Math.PI / 4, 5 * Math.PI / 4, 7 * Math.PI / 4];
    angles.forEach((angle) => {
      const spoke = new THREE.Mesh(spokeGeo, chromeMat);
      const dist = 1.26;
      spoke.position.set(Math.cos(angle) * dist, Math.sin(angle) * dist, 0);
      spoke.rotation.z = angle + Math.PI / 2;
      emblemGroup.add(spoke);
    });

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(4, 5, 3);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.45);
    fillLight.position.set(-4, -2, 2);
    scene.add(fillLight);

    // Green glow backlight illuminating the glass disc from behind
    const pointGreenLight = new THREE.PointLight(0x10b981, 1.8, 4, 2);
    pointGreenLight.position.set(0, 0, -1);
    scene.add(pointGreenLight);

    // 6. Soft Shadow Floor plane
    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.65;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // 7. Dynamic Interactions & State
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    let dragRotationX = 0;
    let dragRotationY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;
    
    let velocityX = 0;
    let velocityY = 0;
    
    let pointerX = 0;
    let pointerY = 0;

    // Track mouse hover to slightly tilt emblem toward cursor
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      pointerX = (x / rect.width) * 2 - 1;
      pointerY = -(y / rect.height) * 2 + 1;
      
      targetTiltX = pointerY * 0.22;
      targetTiltY = pointerX * 0.22;
    };

    const handlePointerLeave = () => {
      targetTiltX = 0;
      targetTiltY = 0;
    };

    // Clicking & Dragging for 360 inspection
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      
      velocityX = deltaY * 0.005;
      velocityY = deltaX * 0.005;
      
      dragRotationX += velocityX;
      dragRotationY += velocityY;
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Mobile touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;
      
      velocityX = deltaY * 0.005;
      velocityY = deltaX * 0.005;
      
      dragRotationX += velocityX;
      dragRotationY += velocityY;
      
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    // Listeners
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);

    // 8. Render loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Ambient Levitation Y (Sinusoidal vertical offset)
      const levitationOffset = Math.sin(elapsedTime * 1.5) * 0.06;
      emblemGroup.position.y = levitationOffset;
      
      // Slow lighting transitions
      pointGreenLight.intensity = 1.4 + Math.sin(elapsedTime * 2.0) * 0.4;
      keyLight.position.x = 4 + Math.sin(elapsedTime * 0.3) * 0.5;
      
      // Spring lerp for cursor hover tilt
      tiltX += (targetTiltX - tiltX) * 0.07;
      tiltY += (targetTiltY - tiltY) * 0.07;
      
      // Drag inertia & spring back to resting state
      if (!isDragging) {
        // Apply friction
        velocityX *= 0.95;
        velocityY *= 0.95;
        
        dragRotationX += velocityX;
        dragRotationY += velocityY;
        
        // Easing back to orientation [0, 0] once velocity settles
        if (Math.abs(velocityX) < 0.0001 && Math.abs(velocityY) < 0.0001) {
          dragRotationX += (0 - dragRotationX) * 0.05;
          dragRotationY += (0 - dragRotationY) * 0.05;
        }
      }
      
      // Combined rotation application
      emblemGroup.rotation.x = tiltX + dragRotationX;
      emblemGroup.rotation.y = tiltY + dragRotationY;
      
      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize logic
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 10. WebGL Resource Cleanups
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      
      outerTorusGeo.dispose();
      innerTorusGeo.dispose();
      glassDiskGeo.dispose();
      logoGeo.dispose();
      glowTorusGeo.dispose();
      spokeGeo.dispose();
      planeGeo.dispose();
      
      matteBlackMat.dispose();
      aluminumMat.dispose();
      chromeMat.dispose();
      glassMat.dispose();
      accentGreenMat.dispose();
      planeMat.dispose();
      
      renderer.dispose();
    };
  }, [isIntersecting]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 sm:h-72 rounded-2xl border border-neutral-200 bg-white overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-neutral-350 cursor-grab active:cursor-grabbing shadow-sm"
    >
      {/* Soft blurred monochromatic engineering grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          filter: 'blur(0.5px)',
          maskImage: 'radial-gradient(circle at 50% 50%, black 10%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 10%, transparent 85%)',
        }}
      />
      
      {/* Subtle radial vignette gradient to blend emblem */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_35%,rgba(255,255,255,0.75)_95%)]" />

      {isIntersecting ? (
        <canvas ref={canvasRef} className="relative z-10 w-full h-full block" />
      ) : (
        <div className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
          Loading 3D Visualizer...
        </div>
      )}
    </div>
  );
}
