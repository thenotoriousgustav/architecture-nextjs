import NavLogo from './NavLogo';
import Nav from './Nav';
import Button from './Button';

export default function Navbar() {
  return (
    <div className="flex items-center py-10">
      <div className="w-3/12">
        <NavLogo />
      </div>
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button href="https://wa.me/085940476706" pill variant="outline-yellow">
          Contact
        </Button>
      </div>
    </div>
  );
}
