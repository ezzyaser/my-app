// import SampleBlogs from "@/config/sampleblogs";
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import fs, { readFileSync } from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

interface BlogType {
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const dirContent = fs.readdirSync('content', 'utf-8');
// console.log(dirContent);

const blogs: BlogType[] = dirContent.map((file) => {
  const fileContent = readFileSync(`content/${file}`, 'utf-8');
  const { data } = matter(fileContent);
  const value: BlogType = {
    slug: data.slug,
    title: data.title,
    description: data.description,
    imageUrl: data?.imageUrl,
  };
  return value;
});

// console.log(blogs);

const BlogList = () => {
  return (
    <MaxWidthWrapper>
      <div dir="rtl" className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center my-2">المنشورات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: BlogType, index: number) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-64  object-fill "
                src={
                  blog.imageUrl ? blog.imageUrl : '/Images/uestion-mark.jpeg'
                }
                alt={blog.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="mb-4">{blog.description}</p>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={buttonVariants({ variant: 'default' })}
                >
                  إقرا المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export const metadata: Metadata = {
  title: 'مقالات✍ - إقرأ معي 📖 ',
  description: '',
};

export default BlogList;
