import Image from 'next/image';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function MainSection() {
  return (
    <section className="py-28" id="profile">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Diyanta</SectionTitle>
        <SectionParagraph>Gran Vía, Madrid, Spain</SectionParagraph>
        <div className="mx-auto mt-14 flex w-full flex-wrap items-center 2xl:w-9/12">
          <div className="mb-4 w-full md:mb-6 md:px-24 lg:w-5/12 lg:px-2 xl:px-6">
            <Image
              src="/main.jpg"
              height={700}
              width={500}
              alt="apartment"
              objectFit="center"
            />
          </div>
          <div className="mx-auto w-full items-center md:w-9/12 lg:w-7/12 lg:px-10 lg:pb-6 2xl:px-8 2xl:pb-8">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem
              ante, laoreet ut urna sed, placerat feugiat justo. Maecenas ac est
              eget felis porta facilisis nec et enim. Phasellus malesuada ut sem
              vitae tempus. Vestibulum mattis in libero et commodo. Maecenas ac
              ex vitae magna lobortis tincidunt at quis dui. Quisque sit amet
              turpis dui. Duis pretium velit id eros aliquam rutrum. Sed
              tincidunt et mauris id sagittis. Maecenas cursus dui sed tempus
              vehicula. Ut hendrerit vitae nisi at tempor.
            </p>
            <p className="mt-5 hidden text-lg leading-relaxed sm:block">
              Maecenas eget diam ultricies, tincidunt nunc eget, pulvinar
              ligula. Vivamus ornare mi in lorem euismod dignissim. Duis
              pulvinar urna ac ligula blandit lobortis. Curabitur at
              sollicitudin ipsum. Donec ultricies dapibus lorem, vel rhoncus
              ante molestie et. Integer facilisis placerat est, ac finibus nulla
              pharetra et. Vestibulum est ex, placerat ut magna ac, laoreet
              tempus quam. Proin nec orci ut enim tempor consequat sit amet a
              nisi.
            </p>
            <p className="mt-5 hidden text-lg leading-relaxed xl:block">
              Nullam et condimentum diam. Sed interdum quam in congue tristique.
              Cras ut purus ornare, laoreet sapien ac, vehicula ipsum. Praesent
              ornare ante eget vestibulum aliquet. Donec vitae nisi maximus,
              pretium enim vel, gravida nisi. Duis eu sapien metus. Vestibulum
              dignissim congue elit, ac dapibus justo congue sed. pharetra et.
              Vestibulum est ex, placerat ut magna ac, laoreet tempus quam.
              Proin nec orci ut enim tempor consequat sit amet a nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
