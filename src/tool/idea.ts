export namespace Idea {
  export function slug(idea: any) {
    let slug = idea.filePath
    slug = slug?.replace(/^idea\//, "");
    slug = slug?.replace(/\.mdx?$/, "");
    return slug;
  }
}