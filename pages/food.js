import FoodItem from '../components/food';
import { food } from '../data/data';

const Food = () => {
  // console.log(food);
  return (
    <div className='container grid grid-cols-3'>
      {
        food?.map(item=><FoodItem key={item.id} item={item}></FoodItem>)
      }
    </div>
  );
};

export default Food;


