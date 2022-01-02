/**
 * convertMarkdownToHtml
 * https://github.com/unifiedjs/unified
 * get data from  file by to-vfile
 * get data from string
 */
// import toVFile, { VFile } from "to-vfile";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";

export const sanitizeDevToMarkdown = (markdown: string): string => {
  let correctedMarkdown = "";

  // Dev.to sometimes turns "# header" into "#&nbsp;header"
  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), "g");
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, " ");

  // Dev.to allows headers with no space after the hashtag (I don't use # on Dev.to due to the title)
  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g;
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, "$& ");
};

export const convertMarkdownToHtml = (markdown: string): string => {
  const { content } = matter(markdown);

  const html = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(content)
    .toString();

  return String(html);
};
