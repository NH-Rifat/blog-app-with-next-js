/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FoodModal from './FoodModal';

const FoodBlogItem = ({ item }) => {
  // console.log(item);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});

  const router = useRouter();

  const itemDetails = (itemId) => {
    console.log('itemId', itemId);
    router.push(`food/${itemId}`);
  };
  function openModal() {
    console.log('modal clicking');
    setIsOpen(true);
    setDetails(item);
  }
  return (
    <div className='w-3/4'>
      <img className='' src={item.item_img} alt='image not found' layout='fill' />
      <h1 className='text-2xl font-semibold mb-4'>{item.item_name}</h1>
      <p className='w-3/4'>{item.des}</p>
      <div className='w-3/4 flex justify-between mt-3'>
        <button
          onClick={openModal}
          className='p-1 border text-white bg-black rounded-md'
        >
          Writer
        </button>
        <FoodModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          details={details}
        ></FoodModal>
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
