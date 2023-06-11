"use client";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {};

  const handleFirstName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmail = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe((prevValue) => !prevValue);
  };

  const inputClasses = `w-full max-w-xl rounded-sm input input-bordered input-primary`;

  return (
    <div className='w-full sm:w-5/12 '>
      <h1 className='mb-8 text-3xl text-primary'>Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className='items-start justify-center gap-8 form-control'
      >
        <div className='flex w-full max-w-xl gap-3'>
          <input
            type='text'
            placeholder='FIRST NAME'
            required
            value={firstName}
            onChange={handleFirstName}
            className={inputClasses}
          />
          <input
            type='text'
            placeholder='LAST NAME'
            required
            value={lastName}
            onChange={handleLastName}
            className={inputClasses}
          />
        </div>
        <input
          type='email'
          placeholder='EMAIL ADDRESS'
          required
          value={email}
          onChange={handleEmailChange}
          className={inputClasses}
        />
        <input
          type='email'
          placeholder='CONFIRM EMAIL'
          required
          value={confirmEmail}
          onChange={handleConfirmEmail}
          className={inputClasses}
        />
        {email !== confirmEmail && (
          <span className='text-xs text-red-500'>
            Email do not match
          </span>
        )}

        <input
          type='password'
          placeholder='PASSWORD'
          required
          value={password}
          onChange={handlePasswordChange}
          className={inputClasses}
        />
        <input
          type='password'
          placeholder='CONFIRM PASSWORD'
          required
          value={confirmPassword}
          onChange={handleConfirmPassword}
          className={inputClasses}
        />
        {password !== confirmPassword && (
          <span className='text-xs text-red-500'>
            Password do not match
          </span>
        )}
        <label className='gap-3 cursor-pointer label'>
          <input
            type='checkbox'
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className='rounded-sm checkbox checkbox-primary'
          />
          <span className='label-text'>
            Accept terms and conditions
          </span>
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

export default SignUp;
