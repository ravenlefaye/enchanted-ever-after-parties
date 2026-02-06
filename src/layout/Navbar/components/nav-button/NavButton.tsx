import { useNavigate } from 'react-router-dom';
import type { NavbarDataType } from '../../../../types/Navbar.type';
import './navButton.css';

type NavButtonProps = {
  data: NavbarDataType
}

const NavButton = ({ data }: NavButtonProps) => {
  const { name, link } = data;
  const navigate = useNavigate();

  return (
    <button
      className='navButton'
      onClick={()=> navigate(link)}
    >
      {name}
    </button>
  );
};

export default NavButton;