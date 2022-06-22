import Image from 'next/image';
import Link from 'next/link';
import avatar from '../../public/man1.jpg';
const Author = () => {
  return (
    <div className='author flex py-5'>
      <div className=''>
        <Image
          src={avatar}
          width={50}
          height={50}
          alt='image not found'
          className="rounded-full object-cover"
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
  );
};

export default Author;
