import NavLogo from './NavLogo';
import Nav from './Nav';
import Button from './Button';

export default function Navbar() {
  return (
    <div className="flex items-center py-12 font-roboto">
      <NavLogo />
      <div className="w-6/12">
        <Nav />
      </div>
      <div className="w-3/12 text-right">
        <Button variant="outline-yellow">Contact</Button>
      </div>
    </div>
  );
}
