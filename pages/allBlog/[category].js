const BlogListByCategory = ({items}) => {
  console.log('iuy8y8y',items);
  return (
    <div>
      <h1>BlogListByCategory for {items.id}</h1>
    </div>
  );
};

export default BlogListByCategory;

export async function getServerSideProps({params}) {
  const {category} = params
  console.log('category',category);
  const response = await fetch(`http://localhost:3000/api/allBlog?category=${category}`);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      items: data,
    },
  };
}
