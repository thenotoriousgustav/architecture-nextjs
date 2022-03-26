import ProjectItem from './ProjectItem';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function SectionProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Our Projects</SectionParagraph>
        <div className="mx-auto mt-20 flex flex-wrap">
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem
              name="Yanta"
              desc="Classy and Cozy Aparthouse"
              image="/img1.jpg"
            />
          </div>
          <div className="w-6/12 px-4 pb-8">
            <ProjectItem
              name="Diyanta"
              desc="Modern Apartment"
              image="/img2.jpg"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Dapaw"
              desc="Abstract Structure Apartment"
              image="/img3.jpg"
            />
          </div>
          <div className="w-6/12 px-4">
            <ProjectItem
              name="Dala"
              desc="Classical Old Money Townhouse"
              image="/img4.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
