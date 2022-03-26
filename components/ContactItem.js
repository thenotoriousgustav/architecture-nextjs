import Image from 'next/image';

export default function ContactItem({ label, value, icon, className }) {
  const addClassName = className ? ` ${className}` : ';';
  return (
    <div className={`flex items-center ${addClassName}`}>
      <Image src={icon} height="25" width="25" alt="icon" />
      <div className="ml-3">
        <div className="text-md -mb-px font-semibold">{label}</div>
        <div className="text-lg ">{value}</div>
      </div>
    </div>
  );
}
