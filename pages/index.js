import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';

const Home = () => {
  return (
    <header className='bg-gray-50'>
      <div className='xl:container xl:mx-auto flex flex-col items-center md:flex-row md:justify-between text-center py-3'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
          <input type='text' placeholder='Search...' className='input-text' />
        </div>
        <div className='shrink w-80 sm:order-2'>
          <a>Blog App</a>
        </div>
        <div className='w-96 order-3 flex justify-center'>
          <div className='flex gap-6'>
            <a>Home</a>
            <a>Blogs</a>
            <a>Travel</a>
            <a>Food</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
