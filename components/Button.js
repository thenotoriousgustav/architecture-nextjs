export default function Button({ className, variant, children }) {
  const addClassName = className ? `${className}` : '';

  const variants = {
    'outline-yellow': 'border border-yellow-500 text-yellow-500',
    'yellow': 'bg-yellow-500',
  };

  const pickedVariant = variants[variant];

  return (
    <a
      className={`inline-block rounded-full py-3 px-11 text-lg font-semibold ${pickedVariant} ${addClassName} `}
    >
      {children}
    </a>
  );
}
