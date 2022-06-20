import FoodBlogItem from '../../components/FoodBlogItem';

const AllFood = ({ items }) => {
  console.log('food items', items);
  // console.log(food);
  return (
    <div className=''>
      <h1 className='text-xl text-center '>Food Blogs</h1>

      <div className='container mx-auto grid grid-cols-3 gap-4 mt-10 ml-32'>
        {items.map((item) => (
          <FoodBlogItem key={item.id} item={item}></FoodBlogItem>
        ))}
      </div>
    </div>
  );
};

export default AllFood;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/food');
  const data = await response.json();

  return {
    props: {
      items: data,
    },
  };
}
