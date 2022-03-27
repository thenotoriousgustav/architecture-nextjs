import Image from 'next/image';
import classNames from 'classnames';

export default function ContactItem({ label, value, icon, className }) {
  return (
    <div className={classNames('flex items-center', className)}>
      <Image src={icon} height={30} width={30} alt="icon" />
      <div className="ml-3">
        <div className="text-md -mb-px font-semibold">{label}</div>
        <div className="text-lg">{value}</div>
      </div>
    </div>
  );
}
