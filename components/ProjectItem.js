/* eslint-disable @next/next/no-img-element */

export default function ProjectItem({ name, desc, image }) {
  return (
    <article>
      <img src={image} alt="apart" className="w-full rounded-lg" />
      <h3 className="mt-4 mb-1 text-xl font-semibold 2xl:text-2xl">{name}</h3>
      <p className="text-lg text-gray-400 2xl:text-xl">{desc}</p>
    </article>
  );
}
