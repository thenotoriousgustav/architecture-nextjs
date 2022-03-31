import Card from './Card';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function SectionCard() {
  return (
    <section className="bg-gray-100 py-20" id="about">
      <div className="container mx-auto px-10">
        <SectionTitle>Arch</SectionTitle>
        <SectionParagraph>About Diyanta</SectionParagraph>
        <div className="mt-20 flex flex-wrap">
          <div className="w-6/12 px-2 pb-8 md:px-4 lg:w-4/12">
            <Card
              name="Interior"
              desc="Elegant and Cozy"
              image="/icon1.svg"
              imageClassName="h-10"
            />
          </div>
          <div className="w-6/12 px-2 pb-8 md:px-4 lg:w-4/12">
            <Card
              name="Structure"
              desc="Good Structure"
              image="/icon2.svg"
              imageClassName="h-10"
            />
          </div>
          <div className="w-6/12 px-2 pb-8 md:px-4 lg:w-4/12">
            <Card
              name="Place"
              desc="Strategic Place"
              image="/icon3.svg"
              imageClassName="h-10"
            />
          </div>
          <div className="w-6/12 px-2 md:px-4 lg:w-4/12">
            <Card
              name="Interior"
              desc="Elegant and Cozy"
              image="/icon1.svg"
              imageClassName="h-10"
            />
          </div>
          <div className="w-6/12 px-2 md:px-4 lg:w-4/12">
            <Card
              name="Structure"
              desc="Good Structure"
              image="/icon2.svg"
              imageClassName="h-10"
            />
          </div>
          <div className="w-6/12 px-2 md:px-4 lg:w-4/12">
            <Card
              name="Place"
              desc="Strategic Place"
              image="/icon3.svg"
              imageClassName="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
