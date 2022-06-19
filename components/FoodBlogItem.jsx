/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';

const FoodBlogItem = ({ item }) => {
  // console.log(item);
  const router = useRouter();

  const itemDetails = (itemId) => {
    console.log('itemId', itemId);
    router.push(`food/${itemId}`);
  };
  return (
    <div className='w-3/4'>
      <img src={item.item_img} alt='image not found' />
      <h1 className='text-2xl font-semibold mb-4'>{item.item_name}</h1>
      <p className='w-3/4'>{item.des}</p>
      <div className='w-3/4 flex justify-between mt-3'>
        <button className='p-1 border text-white bg-black rounded-md'>
          Writer
        </button>
        <button
          onClick={() => itemDetails(item.id)}
          className='p-1 border text-white bg-black rounded-md'
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default FoodBlogItem;
