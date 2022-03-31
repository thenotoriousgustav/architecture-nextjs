import classNames from 'classnames';
import { useState } from 'react';

export default function NavItem({ scheme, href, children, className }) {
  const schemes = {
    light: 'text-white text-opacity-80 hover:text-opacity-100',
    dark: 'text-black',
  };

  const [offCanvas, setOffCanvas] = useState(false);

  const pickedScheme = schemes[scheme];
  return (
    <li>
      <a
        href={href}
        className={classNames(
          'cursor-pointer text-lg font-semibold transition',
          pickedScheme,
          className
        )}
      >
        {children}
      </a>
    </li>
  );
}
