import Navbar from './Navbar';
import Button from './Button';

export default function Hero() {
  return (
    <div className="h-[700px] bg-cover bg-bottom bg-hero">
      <div className="container mx-auto">
        <Navbar />
        <div className="mt-20 text-center">
          <h1 className="font-montserrat text-5xl font-bold text-white">
            Architecture<span className="text-red-600">.</span>
          </h1>
          <p className="mx-auto mt-6 w-6/12 text-xl text-white">
            da gustav Group Architects have delivered a considered design that
            divides this large development into three blocks to create a
            vertical village around a central landscaped courtyard.
          </p>
          <Button pill variant="yellow" className="mt-12">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
