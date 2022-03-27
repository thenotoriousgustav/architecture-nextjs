export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="cursor-pointer text-lg font-semibold text-white text-opacity-80 transition hover:text-opacity-100"
      >
        {children}
      </a>
    </li>
  );
}
