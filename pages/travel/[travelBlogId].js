/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

const TravelDetails = ({ item }) => {
  // console.log(item);
  const router = useRouter();

  if (router.isFallback) {
    return <h1 className='text-3xl text-center font-semibold mt-20'>Loading...</h1>;
  }
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

export default TravelDetails;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/api/travel');
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: {
        travelBlogId: `${item.id}`,
      },
    };
  });
  return {
    paths: [
      {
        params: { travelBlogId: '1' },
      },
      {
        params: { travelBlogId: '2' },
      },
      {
        params: { travelBlogId: '3' },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  console.log('context', context);
  const { params } = context;
  // console.log(params);
  const response = await fetch(
    `http://localhost:3000/api/travel/${params.travelBlogId}`
  );
  const data = await response.json();

  return {
    props: {
      item: data,
    },
  };
}
