import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Scene3D from './components/Scene3D';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadingScreen />
      <Navigation />
      
      {/* 3D Canvas Background */}
      <div className="canvas-container">
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <Environment preset="night" />
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Sections */}
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
