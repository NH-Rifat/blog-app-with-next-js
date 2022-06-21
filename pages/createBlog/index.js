import { useState } from 'react';

const CreateBlog = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [heading, setHeading] = useState('');
  const [category, setCategory] = useState('');
  const [des, setDes] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submitted');
    // console.log(name,email,heading,category,des,blogImage,photo);
    // e.target.reset();
    const blogInfo = {
      name,
      email,
      heading,
      category,
      des,
      blogImage,
      photo,
      id: Date.now(),
    };
    // console.log('blogInfo', blogInfo);

    fetch('/api/createBlog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log('data',data));
  };

  return (
    <div className='flex justify-center mt-16'>
      <div className='w-2/6 shadow-md '>
        <h1 className='text-center text-lg font-semibold'>
          Write your won Blog
        </h1>
        <form onSubmit={handleSubmit}>
          <div className='w-11/12 flex justify-center mt-4'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Your name'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Your Email'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4'>
            <input
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              type='text'
              placeholder='content heading'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4'>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type='text'
              placeholder='category  food,travel,architecture'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4'>
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder='write content...'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4 mb-4'>
            <input
              value={blogImage}
              onChange={(e) => setBlogImage(e.target.value)}
              type='text'
              placeholder='content image url'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4 mb-10'>
            <input
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              type='text'
              placeholder='Your photo url'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4'
            />
          </div>
          <div className='w-11/12 flex justify-center mt-4 mb-10'>
            <input
              type='submit'
              className='border-solid border-2 border-slate-600 p-2 rounded w-3/4 cursor-pointer bg-slate-700 text-white font-semibold'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
