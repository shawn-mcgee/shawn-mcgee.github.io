import { useEffect, useMemo, useState } from "react";

const PHRASE_HEIGHT = 36; // pixels

export default function SlotMachine({
  phrases
}: {
  phrases: string[];
}) {
  // Duplicate the list a few times so we have room to spin
  const reel = useMemo(() => [
    ...phrases,
    ...phrases,
    ...phrases
  ], []);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // delay by one frame so the animation starts after page load
    requestAnimationFrame(() => {
      setOffset(Math.floor(Math.random() * phrases.length + phrases.length + phrases.length) * PHRASE_HEIGHT);
    })
  }, [])

  function onClick() {
    if (offset < phrases.length * PHRASE_HEIGHT) {
      setOffset(Math.floor(Math.random() * phrases.length + phrases.length + phrases.length) * PHRASE_HEIGHT);
    } else {
      setOffset(Math.floor(Math.random() * phrases.length                                  ) * PHRASE_HEIGHT);
    }
  }

  return (
    <div className="tooltip tooltip-bottom w-full flex justify-center px-2">
      <div className="visible sm:invisible tooltip-content">
        <div className="flex flex-col">
          <span className="text-lg" dangerouslySetInnerHTML={{__html: reel[Math.floor(offset / PHRASE_HEIGHT)]}} />
          <span className="italic mt-2">Click to roll again</span>
        </div>
      </div>

      <div className="btn btn-ghost items-start w-full max-w-xl min-w-none" style={{
        height: PHRASE_HEIGHT,
        overflow: "hidden"
      }} onClick={onClick}>
        <div className="flex flex-col items-center transition-transform duration-1000 w-full" style={{ transform: `translateY(-${offset}px)` }}>
          {reel.map((phrase, i) => (
            <span key={i} className="text-center text-2xl italic gap-2 w-full truncate" style={{height: PHRASE_HEIGHT}} dangerouslySetInnerHTML={{__html: phrase}}/>
          ))}
        </div>
      </div>
    </div>
  );
}