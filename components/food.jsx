import Image from 'next/image';

const FoodItem = ({ item }) => {
  // console.log(item);
  return (
      <div className=''>
        <img src={item.item_img} alt='image not found' />
        <h1>{item.item_name}</h1>
        <p>{item.des}</p>
      </div>
  );
};

export default FoodItem;
