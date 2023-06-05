import TestimonialSlider from "./ui/TestimonialSlider";

const TestimonialSection = () => {
  return (
    <section className='mt-28'>
      <article className='prose'>
        <p className='text-error'>TESTIMONIALS</p>
        <h1 className='my-5'>Client's Say About Us</h1>
        <p className='bt-14 text-slate-400'>
          These are things that clients who have used our features and
          works says.
        </p>
      </article>
      <TestimonialSlider />
    </section>
  );
};

export default TestimonialSection;
