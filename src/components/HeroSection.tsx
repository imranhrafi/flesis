import Image from "next/image";
import Button from "./ui/Button";

const HeroSection = () => {
  return (
    <section id='home'>
      <article className='flex flex-col items-center justify-center mx-auto mt-16 prose text-center md:prose-lg lg:prose-xl'>
        <h1 className='text-primary'>
          Let’s Manage Your Files Easier And Simple
        </h1>
        <p>
          Manage your files efficiently and easily and it is a simple,
          fast and small file manager with a single file.
        </p>

        <div className='flex justify-center gap-3'>
          <Button variant='default' color='primary'>
            Try for free
          </Button>
          <Button variant='outline' color='primary'>
            Our Services
          </Button>
        </div>
        <Image
          src='/heroimage.png'
          alt='hero'
          width={1600}
          height={800}
        />
      </article>
    </section>
  );
};

export default HeroSection;
