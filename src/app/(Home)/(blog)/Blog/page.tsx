import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export const metadata: Metadata = {
  title: 'مقالات✍',
  description: '',
};
interface BlogType {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const dirContent = fs.readdirSync('content', 'utf-8');

const blogs: BlogType[] = dirContent.map((file) => {
  const fileContent = readFileSync(`content/${file}`, 'utf-8');
  const { data } = matter(fileContent);
  const value: BlogType = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    imageUrl: data?.imageUrl || '/Images/teach.jpg',
  };
  return value;
});

const BlogList = () => {
  return (
    <MaxWidthWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          المنشورات
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                className="w-full h-64 object-cover "
                src={blog.imageUrl}
                alt={blog.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 dark:text-white">
                  {blog.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {blog.description}
                </p>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({
                    variant: 'default',
                    className: 'w-full text-center',
                  })}
                >
                  اقرأ المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogList;
