import NavItem from './NavItem';

export default function Nav() {
  return (
    <ul className="flex justify-center space-x-10">
      <NavItem>Home</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Contact</NavItem>
    </ul>
  );
}
