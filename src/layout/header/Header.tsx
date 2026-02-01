import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {

  return (
    <div className='header'>
      <h1 className='header-logo'>
        Enchanted Ever After
      </h1>
      <Navbar/>
    </div>
  );
};

export default Header;