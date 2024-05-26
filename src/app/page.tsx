"use client"

import Background from "@/components/p5/bg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (<>
    <Background/>
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center h-dvh">
          <div className="flex flex-col justify-center items-center p-4 bg-secondary/75 rounded-lg">
            <img src="/pfp.png" className="w-32 h-32 rounded-full border-2 border-primary" />
            <span className="text-4xl p-1"><b>Shawn McGee</b></span>
            <span className="text-2xl p-1">Full-Time Dad, Part-Time DM, Some-Time Programmer</span>
            <div className="flex flex-row gap-1 w-full">
              <Button asChild className="flex-grow basis-1 text-2xl" variant={"secondary"}>
                <Link href="#posts">Blog</Link>
              </Button>
              <Button asChild className="flex-grow basis-1 text-2xl" variant={"secondary"}>
                <Link href={"https://github.com/shawn-mcgee"} target={"_blank"}>
                  Github
                  <img src="/github-white.svg" className="p-1 w-0 h-0 dark:w-8 dark:h-8"/>
                  <img src="/github-black.svg" className="p-1 w-8 h-8 dark:w-0 dark:h-0"/>
                </Link>
              </Button>
              <Button asChild className="flex-grow basis-1 text-2xl" variant={"secondary"}>
                <Link href={"https://itch.io/profile/shawn-mcgee"} target={"_blank"}>
                  Itch.io
                  <img src="/itchio-white.svg" className="p-1 w-0 h-0 dark:w-8 dark:h-8"/>
                  <img src="/itchio-black.svg" className="p-1 w-8 h-8 dark:w-0 dark:h-0"/>
                </Link>
              </Button>
              <Button className="flex-grow basis-1 text-2xl" variant={"secondary"}>About</Button>
            </div>
          </div>
        </div>
        <a id="posts"/>
        <div className="flex flex-col">
          {/* Link to recent posts here! */}
          {/* Link to all    posts here! */}
        </div>
      </div>
    </div>
  </>);
}
