import Image from 'next/image';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function MainSection() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <SectionTitle>Diyanta</SectionTitle>
        <SectionParagraph>Gran Vía, Madrid, Spain</SectionParagraph>
        <div className="mx-auto mt-14 flex w-9/12 items-center">
          <div className="w-5/12">
            <Image src="/main.jpg" height={700} width={500} alt="apartment" />
          </div>
          <div className="w-7/12 px-10">
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
            <p className="mt-5 text-lg leading-relaxed">
              Maecenas eget diam ultricies, tincidunt nunc eget, pulvinar
              ligula. Vivamus ornare mi in lorem euismod dignissim. Duis
              pulvinar urna ac ligula blandit lobortis. Curabitur at
              sollicitudin ipsum. Donec ultricies dapibus lorem, vel rhoncus
              ante molestie et. Integer facilisis placerat est, ac finibus nulla
              pharetra et. Vestibulum est ex, placerat ut magna ac, laoreet
              tempus quam. Proin nec orci ut enim tempor consequat sit amet a
              nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
