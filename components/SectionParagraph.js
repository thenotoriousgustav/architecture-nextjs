export default function SectionParagraph({ left, children }) {
  return (
    <p className={`${!left ? ' text-center' : ''} text-xl text-gray-600`}>
      {children}
    </p>
  );
}
