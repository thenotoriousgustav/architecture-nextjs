import Button from './Button';
import ContactItem from './ContactItem';
import Field from './Field';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

export default function ContactSection() {
  return (
    <section
      className="container mx-auto px-10 md:px-6 lg:px-10 2xl:px-0"
      id="contact"
    >
      <div className="flex flex-wrap rounded-lg bg-gray-100">
        <div className="w-full border-b border-gray-300 md:w-6/12 md:border-r">
          <div className="px-5 py-7 sm:p-14 md:p-14 lg:py-16 lg:px-20">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>How to Contact me:</SectionParagraph>
            <ContactItem
              label="mail:"
              icon="/mail.svg"
              value="rhezagustam@gmail.com"
              className="mt-10"
            />
            <ContactItem
              label="phone:"
              icon="/phone.svg"
              value="+62 859-4047-6706"
              className="mt-6"
            />
            <ContactItem
              label="instagram:"
              icon="/insta.svg"
              value="@thenotoriousgustav"
              className="mt-6"
            />
            <ContactItem
              label="ig pacar:"
              icon="/insta.svg"
              value="@daffaputrid_"
              className="mt-6"
            />
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <form className="p-6 sm:p-14 lg:py-16 lg:px-20">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <Field label="Name:" name="name" type="text" />
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <Field label="Email:" name="email" type="text" />
              </div>
            </div>
            <Field label="Subject:" name="subject" type="text" />
            <Field
              label="Message:"
              name="message"
              type="textarea"
              className="h-28"
            />
            <div className="text-right">
              <Button variant="black">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
