import BlogCategory from '../components/BlogCategory';
import Home from '../components/Home';
import LatestBlog from '../components/LatestBlog';
import MostPopularBlog from '../components/MostPopular';
import Layout from '../layout/layout';

const HomeIndex = () => {
  return (
    <>
      <Home></Home>
      <LatestBlog></LatestBlog>
      <BlogCategory></BlogCategory>
    </>
  );
};

export default HomeIndex;
