import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
      <h1
        className='header-logo'
        onClick={()=> navigate('/')}
      >
        Enchanted Ever After
      </h1>
      <Navbar/>
    </div>
  );
};

export default Header;