import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import img from '../public/blog.jpg';
import { food } from '../data/data';
import { travel } from '../data/data';
import BlogCategoryShow from './_child/BlogCategoryShow';


const BlogCategory = () => {
  return (
    <section className='container mx-auto md:px-20 py-16'>
      <div className='grid lg:grid-cols-2 gap-10'>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Food</h1>
          <div className='flex flex-col gap-6'>
          {
            food.slice(0,3).map(item=><BlogCategoryShow key={item.id} item={item}></BlogCategoryShow>)
          }
          </div>
        </div>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
          <div className='flex flex-col gap-6'>
          {
            travel.slice(0,3).map(item=><BlogCategoryShow key={item.id} item={item}></BlogCategoryShow>)
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;

