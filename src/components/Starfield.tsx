import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { useState } from 'react';

interface StarfieldProps {
  isDark: boolean;
}

export const Starfield = ({ isDark }: StarfieldProps) => {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    fpsLimit: 60,
    background: { color: { value: 'transparent' } },
    particles: {
      number: {
        value: isDark ? 220 : 110,
        density: { enable: true },
      },
      color: {
        value: isDark
          ? ['#ffffff', '#e2e8f0', '#94a3b8', '#c7d2fe', '#a5f3fc']
          : ['#94a3b8', '#cbd5e1', '#64748b', '#a5b4fc', '#7dd3fc'],
      },
      shape: { type: 'circle' },
      opacity: {
        value: { min: isDark ? 0.3 : 0.15, max: isDark ? 1.0 : 0.55 },
        animation: {
          enable: true,
          speed: 0.6,
          sync: false,
        },
      },
      size: {
        value: { min: 0.4, max: isDark ? 2.2 : 1.6 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.05, max: 0.3 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' as const },
        warp: false,
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
          color: {
            value: isDark ? '#ffffff' : '#6366f1',
          },
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick:  { enable: true, mode: 'push' as const },
      },
      modes: {
        push: { quantity: 3 },
      },
    },
    detectRetina: true,
  }), [isDark]);

  if (!engineReady) return null;

  return (
    <Particles
      id="starfield-particles"
      options={options}
    />
  );
};
