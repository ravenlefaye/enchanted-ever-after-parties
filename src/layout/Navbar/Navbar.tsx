import navbarData from '../../data/navbar-data';
import NavButton from './components/nav-button/NavButton';
import './navbar.css'

const Navbar = () => {

  return (
    <div className='navbar'>
      {navbarData.map((data)=> (
        <NavButton
          data={data}
        />
      ))}
    </div>
  );
};

export default Navbar;