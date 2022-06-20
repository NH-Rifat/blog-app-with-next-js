import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
