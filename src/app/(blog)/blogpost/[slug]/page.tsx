import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import matter from 'gray-matter';
import fs from 'fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import Onthispage from '@/components/Onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { Metadata, ResolvingMetadata } from 'next';
// *************************************************************
type Props = {
  params: { slug: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
//*************************************************************************

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);
  // ********************************************************************************************
  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = (await processor.process(content)).toString();
  // ********************************************************************************************
  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div dir="rtl" className="flex flex-col md:flex-row gap-6">
        <div className="w-full">
          <h1 className="text-xl md:text-3xl text-blue-400 text-center md:text-right">
            {data.title}
          </h1>
          <div className="w-full max-w-4xl mx-auto md:mx-0">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
        </div>
        <Onthispage
          className="text-sm w-full max-w-lg mt-4 md:mt-8 md:ml-6"
          htmlContent={htmlContent}
        />
      </div>
    </MaxWidthWrapper>
  );
}
//************************************************************************************************
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);
  return {
    title: `${data.title} - إقرأ معي📖`,
    description: data.description,
  };
}
