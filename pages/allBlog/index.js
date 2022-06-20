import AllBlog from '../../components/AllBlog';

const AllBlogs = ({items}) => {
  console.log('food items', items);
  // console.log(food);
  return (
    <div className='container mx-auto grid grid-cols-3 gap-4'>
      {items.map((item) => (
        <AllBlog key={item.id} item={item}></AllBlog>
      ))}
    </div>
  );
};

export default AllBlogs;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/allBlog');
  const data = await response.json();

  return {
    props: {
      items: data,
    },
  };
}
