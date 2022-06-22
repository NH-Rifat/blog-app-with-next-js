import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import blog_img from '../public/blog.jpg';
import { latestBlog } from '../data/data';
import LatestBlogShow from './_child/LatestBLogShow';

const LatestBlog = () => {
  return (
    <section className='container mx-auto md:px-20 py-10'>
      <h1 className='font-bold text-4xl py-12 text-center'>Latest Blogs</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
      {
        latestBlog?.map(blog=><LatestBlogShow key={blog.id} blog={blog}></LatestBlogShow>)
      }
      </div>
    </section>
  );
};

export default LatestBlog;
