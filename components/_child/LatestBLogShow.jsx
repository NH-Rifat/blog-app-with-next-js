import Image from 'next/image';

import Link from 'next/link';
import Author from './Author';

const LatestBlogShow = ({ blog }) => {
  const {
    id,
    item_img,
    item_name,
    title,
    category,
    des,
    post_date_time,
    blogger_name,
    blogger_prof,
    blogger_img,
    contact,
    email,
  } = blog;
  return (
    <div className='item'>
      <div className='images'>
        <Link href={'/'}>
          <a>
            <Image
              src={item_img}
              width={500}
              height={500}
              alt='image not found'
              className='object-cover rounded'
            ></Image>
          </a>
        </Link>
      </div>
      <div className='info flex justify-center flex-col py-4'>
        <div className='cat'>
          <Link href={'/'}>
            <a className='text-orange-600 hover:text-orange'>Food, Travel</a>
          </Link>
          <Link href={'/'}>
            <a className='text-orange-600 hover:text-orange'>- July 7,2022</a>
          </Link>
        </div>
        <div className='title'>
          <Link href={'/'}>
            <a className='text-xl  font-bold text-gray-700 hover:text-gray-600'>
              A blogging platform is a software or service used to manage and
              publish content
            </a>
          </Link>
        </div>
        <p className='text-gray-500 py-3'>
          These free blogging sites are aimed at hobbyist bloggers – blogs are
          created and managed online, and hosted on the blogging platform’s
        </p>
        <div className='author flex py-5'>
          <div className=''>
            <Image
              src={blogger_img}
              width={50}
              height={50}
              alt='image not found'
              className='rounded-full object-cover'
            ></Image>
          </div>
          <div className='flex flex-col justify-center px-4'>
            <Link href={'/'}>
              <a className='text-md font-bold text-gray-800 hover:text-gray-600'>
                Michal Joe
              </a>
            </Link>
            <span className='text-sm text-gray-500'>Writer and blogger</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogShow;
