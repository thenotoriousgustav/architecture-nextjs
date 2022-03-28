import Navbar from './Navbar';
import Button from './Button';

export default function Hero() {
  return (
    <div className="h-[680px] bg-cover bg-bottom bg-hero md:h-[650px] lg:h-[700px] 2xl:h-[830px]">
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="mt-7 text-center md:mt-24 xl:mt-32 2xl:mt-36">
          <h1 className="font-montserrat text-5xl font-bold text-white">
            Architecture<span className="text-red-600">.</span>
          </h1>
          <p className="mx-auto mt-6 w-10/12 text-xl text-white md:w-10/12 lg:w-7/12 2xl:w-5/12">
            da gustav Group Architects have delivered a considered design that
            divides this large development into three blocks to create a
            vertical village around a central landscaped courtyard.
          </p>
          <Button href="#profile" pill variant="yellow" className="mt-12">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
