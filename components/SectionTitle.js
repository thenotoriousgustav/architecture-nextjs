import classNames from 'classnames';

export default function SectionTitle({ left, children }) {
  return (
    <h2
      className={classNames(
        !left && 'text-center',
        'font-montserrat text-2xl font-semibold'
      )}
    >
      {children}
    </h2>
  );
}
