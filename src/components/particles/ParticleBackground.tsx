import React from "react";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleshome from "@/utils/particleshome.json";
import particlesnotfound from "@/utils/particlesnotfound.json";

interface ComponentProps {
  error: boolean;
}

const ParticleBackground: React.FC<ComponentProps> = ({ error }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      height="100vh"
      width="100vw"
      id="tsparticles"
      init={particlesInit}
      options={error ? particlesnotfound : particleshome}
    />
  );
};

export default ParticleBackground;
