import classNames from 'classnames';

export default function SectionParagraph({ left, children }) {
  return (
    <p className={classNames(!left && 'text-center', 'text-xl text-gray-600')}>
      {children}
    </p>
  );
}
