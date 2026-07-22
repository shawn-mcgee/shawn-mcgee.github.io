import { useEffect, useMemo, useState } from "react";

const ITEM_HEIGHT = 36;

const PHRASES = [
  "I make stuff for <b>humans</b>.",
  "I write software for <b>humans</b>.",
  "I solve problems for <b>humans</b>.",
  "I teach <b>humans</b> about programming.",
  "I teach <b>humans</b> about technology.",
  "<b>Human</b> making stuff for other <b>humans</b>.",
  "<b>Human</b> writing software for other <b>humans</b>.",
  "<b>Human</b> solving problems for other <b>humans</b>.",
  "<b>Human</b> teaching <b>humans</b> about programming.",
  "<b>Human</b> teaching <b>humans</b> about technology.",
  "<b>Dad</b> making stuff for other <b>humans</b>.",
  "<b>Dad</b> writing software for other <b>humans</b>.",
  "<b>Dad</b> solving problems for other <b>humans</b>.",
  "<b>Dad</b> teaching <b>humans</b> about programming.",
  "<b>Dad</b> teaching <b>humans</b> about technology.",
];

function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SlotMachine({
  phrases = PHRASES
}: {
  phrases ?: string[];
}) {
  // Duplicate the list a few times so we have room to spin
  const reel = useMemo(() => [
    ...shuffle(phrases), 
    ...shuffle(phrases), 
    ...shuffle(phrases)
  ], []);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // delay by one frame so the animation starts after page load
    requestAnimationFrame(() => {
      setOffset(Math.floor(Math.random() * phrases.length + phrases.length + phrases.length) * ITEM_HEIGHT);
    })
  }, [])

  function onClick() {
    if (offset < phrases.length * ITEM_HEIGHT) {
      setOffset(Math.floor(Math.random() * phrases.length + phrases.length + phrases.length) * ITEM_HEIGHT);
    } else {
      setOffset(Math.floor(Math.random() * phrases.length                                  ) * ITEM_HEIGHT);
    }
  }

  return (
    <div className="tooltip w-full flex justify-center px-2">
      <div className="visible sm:invisible tooltip-content">
        <div className="flex flex-col">
          <span className="text-lg" dangerouslySetInnerHTML={{__html: reel[Math.floor(offset / ITEM_HEIGHT)]}} />
          <span className="italic mt-2">Click to roll again</span>
        </div>
      </div>

      <div className="btn btn-ghost items-start w-full max-w-xl min-w-none" style={{
        height: ITEM_HEIGHT,
        overflow: "hidden"
      }} onClick={onClick}>
        <div className="flex flex-col items-center transition-transform duration-1000 w-full" style={{ transform: `translateY(-${offset}px)` }}>
          {reel.map((phrase, i) => (
            <span key={i} className="text-center text-2xl italic gap-2 w-full truncate" style={{height: ITEM_HEIGHT}} dangerouslySetInnerHTML={{__html: phrase}}/>
          ))}
        </div>
      </div>
    </div>
  );
}