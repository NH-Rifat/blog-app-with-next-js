import FoodItem from '../../components/food';

const Food = ({foodItems}) => {
  console.log(foodItems);
  // console.log(food);
  return (
    <div className='container grid grid-cols-3'>
      {
        foodItems.map(item=><FoodItem key={item.id} item={item}></FoodItem>)
      }
    </div>
  );
};

export default Food;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/food');
  const data = await response.json();

  return {
    props: {
      foodItems: data
    },
  };
}
