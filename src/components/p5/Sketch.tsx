"use client";

import {  useEffect , useRef  } from "react";
export type Sketch = (...args: any[]) => any;

export default function Sketch({ sketch, className }: { sketch: Sketch, className?: string }) {
  const div = useRef<HTMLDivElement>(null);
  const ref = useRef<any           >(null);

  useEffect(() => {
    if(!div.current) return;
    if( ref.current) return;

    import("p5").then(p5 => {
      ref.current = new p5.default(
        sketch, div.current!
      );
    });
  }, [ ]);

  return <div ref={div} className={`${className}`}/>
}