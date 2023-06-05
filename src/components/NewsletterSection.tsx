const NewsletterSection = () => {
  return (
    <section className='mt-28 p-[120px] flex flex-col items-center justify-center bg-slate-200'>
      <article className='prose'>
        <p className='text-error'>GET CONNECT</p>
        <h1 className='my-5'>Subscribe to our newsletter</h1>
        <p className='bt-14 text-slate-400'>
          Get notification about tips, new product and exclusive promo
          news just for you.
        </p>
      </article>

      <form className='mt-10'>
        <div className='input-group items-center'>
          <input
            type='email'
            className='form-control input input-bordered w-full max-w-xs input-lg height-'
            placeholder='Enter your email address'
            required
          />
          <div className='input-group-append bg-white p-[7px] input-primary'>
            <button type='submit' className='btn btn-primary'>
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default NewsletterSection;
