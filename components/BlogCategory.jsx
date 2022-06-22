import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/Author';
import img from '../public/blog.jpg';
import { food } from '../data/data';
import { travel } from '../data/data';
import FoodBlogCategoryShow from './_child/FoodBlogCategoryShow';


const BlogCategory = () => {
  return (
    <section className='container mx-auto md:px-20 py-16'>
      <div className='grid lg:grid-cols-2 gap-10'>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Food</h1>
          <div className='flex flex-col gap-6'>
          {
            food.slice(0,3).map(item=><FoodBlogCategoryShow key={item.id} item={item}></FoodBlogCategoryShow>)
          }
          </div>
        </div>
        <div className='item'>
          <h1 className='font-bold text-4xl py-12 text-center'>Travel</h1>
          <div className='flex flex-col gap-6'>
          {
            travel.slice(0,3).map(item=><FoodBlogCategoryShow key={item.id} item={item}></FoodBlogCategoryShow>)
          }
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategory;

