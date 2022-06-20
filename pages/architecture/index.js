import ArchitectureBlogItem from '../../components/architectureBlog';
import FoodItem from '../../components/FoodBlogItem';

const ArchitectureBlogs = ({ items }) => {
  console.log('food items', items);
  // console.log(food);
  return (
    <div className=''>
      <h1 className='text-xl text-center '>Architecture Blogs</h1>
      <div className='container mx-auto grid grid-cols-3 gap-4 mt-10 ml-24'>
        {items.map((item) => (
          <ArchitectureBlogItem
            key={item.id}
            item={item}
          ></ArchitectureBlogItem>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureBlogs;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/architecture');
  const data = await response.json();

  return {
    props: {
      items: data,
    },
  };
}
