import useSWR from 'swr';
import ManageAllBlog from '../../components/ManageAllBlog';

const fetcher = async () => {
  const response = await fetch(`http://localhost:3000/api/allBlog`);
  const data = await response.json();
  return data;
};

const ManageAllBlogs = () => {
  const { data, error } = useSWR('manageBlogs', fetcher);

  if (error) {
    return 'An error has occured';
  }
  if (!data) {
    return (
      <h1 className='text-2xl text-center mt-2 font-semibold'>Loading....</h1>
    );
  }
  console.log(data);
  return (
    <div>
      <h1 className='text-2xl text-center mt-2 font-semibold'>
        Manage All Blogs
      </h1>
      <div className='ml-64'>
        {data.map((blog) => (
          <ManageAllBlog key={blog.id} blog={blog}></ManageAllBlog>
        ))}
      </div>
    </div>
  );
};

export default ManageAllBlogs;
