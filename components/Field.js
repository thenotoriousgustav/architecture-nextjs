export default function Field({ label, name, type, className }) {
  const addClassName = className ? ` ${className}` : '';

  const formControlClassName = `w-full border border-gray-400 bg-transparent py-3 px-6 ${addClassName}`;

  return (
    <div className="mb-6">
      <label htmlFor="{name}" className="text-md mb-px block font-semibold">
        {label}
      </label>
      {type === 'text' && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === 'textarea' && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
