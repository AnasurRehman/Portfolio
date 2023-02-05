import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './Home.css';

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                  number: {
                    value:200,
                    density: {
                      enable: true,
                      area: 800
                    }
                  },
                  color: {
                    value: ["#f9f9f9"]
                  },
                  shape: {
                    type: "circle"
                  },
                  opacity: {
                    value: 0.3
                  },
                  size: {
                    value: 3,
                    random: {
                      enable: true,
                      minimumValue: 1
                    }
                  },
                  move: {
                    size: true,
                    enable: true,
                    speed: 0.09,
                    direction: "left",
                    random: false,
                    straight: false,
                    outModes: {
                      default: "out"
                    },
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    },
                    trail: {
                      enable: true,
                      length: 3,
                      fillColor: "#13212e"
                    },
                    warp: true
                  }
                },
                interactivity: {
                  detectsOn: "window",
                  events: {
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    push: {
                      quantity: 4
                    }
                  }
                },
                detectRetina: true,
                absorbers: {
                  orbits: true,
                  destroy: true,
                  opacity: 1,
                  color: "#000",
                  size: {
                    value: 1,
                    limit: 10,
                    random: false,
                    density: 50
                  },
                  position: {
                    x: 50,
                    y: 50
                  }
                },
                background: {
                  color: "#222"
                },
                
              }
              }
        />
    );
}

export default ParticleBackground