import ProjectItem from './ProjectItem';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function SectionProjects() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-14">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Our Projects</SectionParagraph>
        <div className="mt-20 flex flex-wrap md:-mx-4">
          <div className="w-full pb-8 lg:w-6/12 lg:px-4">
            <ProjectItem
              name="Yanta"
              desc="Classy and Cozy Aparthouse"
              image="/img1.jpg"
            />
          </div>
          <div className="w-full pb-8 lg:w-6/12 lg:px-4">
            <ProjectItem
              name="Diyanta"
              desc="Modern Apartment"
              image="/img2.jpg"
            />
          </div>
          <div className="w-full pb-8 lg:w-6/12 lg:px-4 ">
            <ProjectItem
              name="Dapaw"
              desc="Abstract Structure Apartment"
              image="/img3.jpg"
            />
          </div>
          <div className="w-full pb-8 lg:w-6/12 lg:px-4">
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
