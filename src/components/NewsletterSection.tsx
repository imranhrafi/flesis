const NewsletterSection = () => {
  return (
    <section className='mt-28 p-[30px] md:p-[120px] flex flex-col items-center justify-center bg-slate-200'>
      <article className='prose'>
        <p className='text-error'>GET CONNECT</p>
        <h1 className='my-5'>Subscribe to our newsletter</h1>
        <p className='bt-14 text-slate-400'>
          Get notification about tips, new product and exclusive promo
          news just for you.
        </p>
      </article>

      <form className='w-full max-w-xs mt-10'>
        <div className='flex flex-col md:flex-row md:items-center'>
          <input
            type='email'
            className='mb-2 md:mb-0 form-control input input-bordered input-xl md:mr-2'
            placeholder='Enter your email address'
            required
          />
          <button type='submit' className='btn btn-primary md:ml-2 '>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSection;
