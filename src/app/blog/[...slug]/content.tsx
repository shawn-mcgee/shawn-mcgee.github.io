"use client"

import dynamic from "next/dynamic";

export default function Content({ params }: { params: { slug: string[] } }) {
  const Content = dynamic(() => import(`/src/blog/${params.slug.join("/")}.mdx`));
  return <Content/>
}