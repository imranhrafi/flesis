import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  return (
    <section className='flex flex-wrap justify-center p-8 m-auto mt-32 mb-32 sm:justify-between'>
      <SignIn />
      <div className='hidden sm:flex w-0.5 bg-gray-300 mx-4' />
      <SignUp />
    </section>
  );
};

export default Auth;
