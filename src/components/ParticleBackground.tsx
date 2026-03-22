import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        bubble: {
                            distance: 250,
                            size: 6,
                            duration: 2,
                            opacity: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    shadow: {
                        blur: 20,
                        color: {
                            value: "#ffffff",
                        },
                        enable: true,
                        offset: {
                            x: 0,
                            y: 0,
                        },
                    },
                    links: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: "out",
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 },
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4.5 },
                    },
                },
                detectRetina: true,
            }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
    );
};
