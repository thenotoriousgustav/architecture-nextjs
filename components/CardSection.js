import Card from './Card';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function SectionCard() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <SectionTitle>Arch</SectionTitle>
        <SectionParagraph>About Diyanta</SectionParagraph>
        <div className="mt-20 flex flex-wrap ">
          <div className="w-4/12 px-4 pb-8">
            <Card
              name="Interior"
              desc="Elegant and Cozy"
              image="/icon1.svg"
              imageClassName="h-12"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <Card
              name="Structure"
              desc="Good and Strong Structure"
              image="/icon2.svg"
              imageClassName="h-12"
            />
          </div>
          <div className="w-4/12 px-4 pb-8">
            <Card
              name="Place"
              desc="Strategic Place and Bussiness Area"
              image="/icon3.svg"
              imageClassName="h-12"
            />
          </div>
          <div className="w-4/12 px-4">
            <Card
              name="Interior"
              desc="Elegant and Cozy"
              image="/icon1.svg"
              imageClassName="h-12"
            />
          </div>
          <div className="w-4/12 px-4">
            <Card
              name="Structure"
              desc="Good and Strong Structure"
              image="/icon2.svg"
              imageClassName="h-12"
            />
          </div>
          <div className="w-4/12 px-4">
            <Card
              name="Place"
              desc="Strategic Place and Bussiness Area"
              image="/icon3.svg"
              imageClassName="h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
