/* eslint-disable @next/next/no-img-element */
const Details = ({ item }) => {
  // console.log(item);
  return (
    <div className='mt-16 flex justify-center items-center'>
      <div className=''>
        <img src={item.item_img} alt='image not found' />
      </div>
      <div className='ml-10'>
        <h1 className='text-2xl font-semibold mb-4'>{item.item_name}</h1>
        <p className='w-3/4'>{item.des}</p>
      </div>
    </div>
  );
};

export default Details;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/architecture');
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        architectureBlogId: `${item.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log('context', context);
  const { params } = context;
  // console.log(params);
  const response = await fetch(
    `http://localhost:3000/api/architecture/${params.architectureBlogId}`
  );
  const data = await response.json();

  return {
    props: {
      item: data,
    },
  };
}
