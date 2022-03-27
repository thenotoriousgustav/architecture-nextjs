import classNames from 'classnames';

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    'outline-yellow':
      'border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500 2xl:mr-10',
    'yellow': 'bg-yellow-500 text-black hover:bg-yellow-600',
    'black': 'bg-black text-white hover:bg-opacity-75',
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classNames(
        'inline-block cursor-pointer py-3 px-10 text-lg font-semibold transition',
        pill && 'rounded-full',
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
