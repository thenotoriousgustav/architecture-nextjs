/* eslint-disable @next/next/no-img-element */

export default function Card({ name, image, desc, imageClassName }) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : '';
  return (
    <div className="flex items-center rounded-lg bg-white p-6 shadow-xl shadow-blue-50 ring-2 ring-blue-200">
      <img src={image} alt="icon" className={`mr-6${addImageClassName}`} />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm font-semibold text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
