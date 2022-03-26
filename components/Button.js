export default function Button({ className, variant, children, pill }) {
  const addClassName = className ? `${className}` : '';

  const variants = {
    'outline-yellow': 'border border-yellow-500 text-yellow-500 mr-10',
    'yellow': 'bg-yellow-500',
    'black': 'bg-black text-white',
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`inline-block  py-3 px-11 text-lg font-semibold ${
        pill ? ' rounded-full' : ''
      } ${pickedVariant} ${addClassName} `}
    >
      {children}
    </a>
  );
}
