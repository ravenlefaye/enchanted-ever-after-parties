import './navButton.css';

type NavButtonProps = {
  name: string;
}

const NavButton = ({ name }: NavButtonProps) => {

  return (
    <button className='navButton'>
      {name}
    </button>
  );
};

export default NavButton;