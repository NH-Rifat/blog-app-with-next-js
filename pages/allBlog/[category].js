import FilteredBlogs from "../../components/FilteredBlogs";

const BlogListByCategory = ({items,category}) => {
  console.log('all filtered items ',items);
  return (
    <div>
      <h1 className="text-2xl text-center mt-2 font-semibold">All {category} Blogs</h1>
      <div className='container mx-auto grid grid-cols-3 gap-4 mt-10'>
      {
        items.map(item=><FilteredBlogs key={item.id} item={item}></FilteredBlogs>)
      }
      </div>
    </div>
  );
};

export default BlogListByCategory;

export async function getServerSideProps(context) {
  console.log('context', context);
  const { params } = context;
  const {category} = params
  // console.log(params);
  const response = await fetch(
    `http://localhost:3000/api/allBlog/${category}`
  );
  const data = await response.json();

  return {
    props: {
      items: data,
      category:category
    },
  };
}
