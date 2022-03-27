/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';

export default function Card({ name, image, desc, imageClassName }) {
  return (
    <div className="items-center rounded-lg bg-white p-6 text-center shadow-xl shadow-blue-50 ring-2 ring-blue-200 lg:flex lg:text-left">
      <img
        src={image}
        alt="icon"
        className={classNames('mx-auto lg:mx-0 lg:mr-6', imageClassName)}
      />
      <div>
        <h4 className="mt-3 text-lg font-semibold">{name}</h4>
        <p className="text-sm font-semibold text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
