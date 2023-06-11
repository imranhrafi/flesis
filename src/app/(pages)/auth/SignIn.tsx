"use client";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {};

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe((prevValue) => !prevValue);
  };

  return (
    <div className='w-full mb-20 sm:w-5/12 sm:mb-0'>
      <h1 className='mb-8 text-3xl text-primary'>Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className='items-start justify-center gap-8 form-control'
      >
        <input
          type='email'
          placeholder='EMAIL ADDRESS'
          required
          value={email}
          onChange={handleEmailChange}
          className='w-full max-w-xl rounded-sm input input-bordered input-primary'
        />
        <input
          type='password'
          placeholder='PASSWORD'
          required
          value={password}
          onChange={handlePasswordChange}
          className='w-full max-w-xl rounded-sm input input-bordered input-primary'
        />
        <label className='gap-3 cursor-pointer label'>
          <input
            type='checkbox'
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className='rounded-sm checkbox checkbox-primary'
          />
          <span className='label-text'>Remember me</span>
        </label>
        <button
          type='submit'
          className='w-full max-w-xl rounded-sm btn btn-primary btn-outline'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
