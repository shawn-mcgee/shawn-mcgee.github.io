import fs from "fs";
import Content from "@/components/mdx/content";

export default function Page({ params }: { params: { slug: string[] } }) {
  return <Content params={{ ...params }} />
}

export async function generateStaticParams() {
  return fs.readdirSync("./src/blog")
    .filter(path => path.match  (/\.mdx$/    ))
    .map   (path => path.replace(/\.mdx$/, ""))
    .map(path => ({ slug: path.split("/") }));
}