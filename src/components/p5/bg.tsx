"use client"

import type p5 from "p5";
import Sketch from "./sketch";

export default function Background() {
  return <Sketch sketch={_sketch} className="fixed -z-10 w-dvw h-dvh overflow-hidden"/>
}

function _sketch(p5: p5) {
  const w =        9
  const h =        9
  const d =        9
  const n = w * h * d

  const thetas = Array(n).fill(0)

  let angle = 0

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
    p5.angleMode(p5.DEGREES)
    p5.noStroke()
    p5.ortho()
  };

  p5.draw = () => {
    p5.background("purple")  
    p5.scale(3)
  
    p5.rotateX(angle)
    p5.rotateY(angle)
  
    p5.fill("magenta")
    for(let x = 0; x < w; x ++)
      for(let y = 0; y < h; y ++)
        for(let z = 0; z < d; z ++) {
          let i = z * w * h + y * w + x
          let dx = x * 72 - (w - 1) / 2 * 72
          let dy = y * 72 - (h - 1) / 2 * 72
          let dz = z * 72 - (d - 1) / 2 * 72
          
          p5.translate( dx,  dy,  dz)
          p5.sphere(13 * p5.sin(thetas[i]) + 0)
          p5.translate(-dx, -dy, -dz)
          thetas[i] += 2.5 * (i + 1) / n
        }
    angle = angle + .05
  }

  p5.windowResized = () => {
    p5.resizeCanvas(
      p5.windowWidth ,
      p5.windowHeight
    );
    p5.ortho()
  }
}