import Image from 'next/image';

export default function ProjectItem({ name, desc, image }) {
  return (
    <article>
      <Image
        src={image}
        height={400}
        width={600}
        alt="apart"
        className="rounded-lg"
        objectFit="cover"
      />
      <h3 className="mt-4 mb-1 text-xl font-semibold">{name}</h3>
      <p className="text-lg text-gray-400 ">{desc}</p>
    </article>
  );
}
