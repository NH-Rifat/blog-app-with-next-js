import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import Image from 'next/image';
import blog_img from '../public/blog.jpg';
import Link from 'next/link';
import Author from './_child/Author';

const Home = () => {
  return (
    // <header className='bg-gray-50'>
    //   <div className='xl:container xl:mx-auto flex flex-col items-center md:flex-row md:justify-between text-center py-3'>
    //     <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
    //       <input type='text' placeholder='Search...' className='input-text' />
    //     </div>
    //     <div className='shrink w-80 sm:order-2'>
    //       <a>Blog App</a>
    //     </div>
    //     <div className='w-96 order-3 flex justify-center'>
    //       <div className='flex gap-6'>
    //         <a>Home</a>
    //         <a>Blogs</a>
    //         <a>Travel</a>
    //         <a>Food</a>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <section className='py-16'>
      <div className='container mx-auto md:px-20'>
        <h1 className='font-bold text-4xl pb-12 text-center'></h1>
        {Slide()}
      </div>
    </section>
  );
};

export default Home;

function Slide() {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='image'>
        <Link href={'/'}>
          <a>
            <Image
              src={blog_img}
              width={500}
              height={400}
              alt='image not found'
            ></Image>
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col'>
        <div className='cat'>
          <Link href={'/allBlog'}>
            <a className='text-orange-600 hover:text-orange'>Food, Travel</a>
          </Link>
          <Link href={'/allBlog'}>
            <a className='text-orange-600 hover:text-orange'>- July 7,2022</a>
          </Link>
        </div>
        <div className='title'>
          <Link href={'/'}>
            <a className='text-3xl md:text-5xl font-bold text-gray-700 hover:text-gray-600'>
              A blogging platform is a software or service used to manage and
              publish content 
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>
          These free blogging sites are aimed at hobbyist bloggers – blogs are
          created and managed online, and hosted on the blogging platform’s own
          servers. If you want to create a self-hosted blog
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
