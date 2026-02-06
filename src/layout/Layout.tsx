import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import './layout.css';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <div className='main-screen'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;