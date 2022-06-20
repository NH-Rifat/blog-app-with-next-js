import TravelItem from '../../components/TravelItem';

const Travels = ({ items }) => {
  console.log('travel items', items);
  // console.log(food);
  return (
    <div className=''>
      <h1 className='text-xl text-center '>Travel Blogs</h1>

      <div className='container mx-auto grid grid-cols-3 gap-4 mt-10 ml-32'>
        {items.map((item) => (
          <TravelItem key={item.id} item={item}></TravelItem>
        ))}
      </div>
    </div>
  );
};

export default Travels;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/travel');
  const data = await response.json();

  return {
    props: {
      items: data,
    },
    revalidate: 10,
  };
}
