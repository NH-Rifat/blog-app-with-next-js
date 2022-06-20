import { useState } from 'react';

const ManageAllBlog = ({ blog }) => {
  const {
    id,
    item_img,
    item_name,
    category,
    des,
    post_date_time,
    blogger_name,
    blogger_prof,
    blogger_img,
    contact,
    email,
  } = blog;
  const [comments, setComments] = useState([]);

  const handleDeleteBlog = async (blogId) => {
    fetch(`/api/manageBlog/${blogId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  return (
    <div className='flex p-10'>
      <div className=''>
        <img src={item_img} alt='' />
      </div>
      <div className='ml-10 m-2'>
        <p>{category}</p>
        <p className='text-xl font-semibold mb-1'>{item_name}</p>
        <p className='w-1/2'>{des}</p>
        <p className='mb-2'>{post_date_time}</p>
        <p className='font-semibold'>{blogger_name}</p>
        <p>{contact}</p>
        <p>{email}</p>
        <button
          onClick={() => handleDeleteBlog(id)}
          className='rounded bg-black text-white pl-4 pr-4 pt-2 pb-2 mt-2'
        >
          Delete
        </button>
        <button className='rounded bg-black text-white pl-4 pr-4 pt-2 pb-2 mt-2 ml-20'>
          Update
        </button>
      </div>
    </div>
  );
};

export default ManageAllBlog;
