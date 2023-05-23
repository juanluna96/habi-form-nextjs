import React from "react";
import { useCallback } from "react";
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particleshome from "@/utils/particleshome.json";
import particlesnotfound from "@/utils/particlesnotfound.json";
import { ISourceOptions } from "tsparticles-engine";

interface ComponentProps {
  error: boolean;
}

const ParticleBackground: React.FC<ComponentProps> = ({ error }) => {
  const particleOptions: ISourceOptions | any = error
    ? particlesnotfound
    : particleshome;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      height="100vh"
      width="100vw"
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  );
};

export default ParticleBackground;
