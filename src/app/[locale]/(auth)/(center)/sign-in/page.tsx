'use client';

import { useMutation } from '@apollo/client'; // Apollo Mutation Hook
import Image from 'next/image';
import { useState } from 'react';

import { LOGIN_MUTATION } from '@/graphql/mutations/loginMutation'; // GraphQL mutation for login
import client from '@/libs/apollo-client';

console.log('Debug: About to import LOGIN_MUTATION'); // Apollo Client setup

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [generalError, setGeneralError] = useState(''); // General error state for API

  const [login, { loading }] = useMutation(LOGIN_MUTATION, { client }); // Mutation for API call

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.trim().length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log('Form submitted:', { email, password });
    }
    //   try {
    //     const { data } = await login({
    //       variables: { username: email, password }, // Send input data to API
    //     });

    //     const token = data.login.token; // Extract token from the response
    //     localStorage.setItem('token', token); // Store the token locally
    //     console.log('Login successful:', token);

    //     // Redirect to the dashboard
    //     window.location.href = '/dashboard';
    //   } catch (err) {
    //     console.error('Login error:', err);
    //     setGeneralError('Login failed. Please try again.');
    //   }
    // };
    try {
      const { data } = await login({
        variables: {
          payload: {
            username: 'testuser1@gmail.com',
            password: '123456',
          },
        },
      });

      const { accessToken, refreshToken } = data.userLogin;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      window.location.href = '/dashboard'; // Redirect after successful login
    } catch (err) {
      console.error('Login error:', err);
      setGeneralError('Login failed. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-10 shadow-lg">
      {/* Welcome Text */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to Vineo
        </h2>
        <p className="text-gray-600">Login</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
              emailError
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-300 focus:ring-blue-400'
            }`}
            placeholder="Enter your email"
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-500">{emailError}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 ${
                passwordError
                  ? 'border-red-500 focus:ring-red-400'
                  : 'border-gray-300 focus:ring-blue-400'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              {passwordVisible ? '🙈' : '👁️'}
            </button>
          </div>
          {passwordError && (
            <p className="mt-1 text-sm text-red-500">{passwordError}</p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
            />
            <span className="ml-2 text-gray-600">Remember Me</span>
          </label>
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        {generalError && <p>{generalError}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {/* Google Login Icon */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/assets/google.png"
            alt="Google Login"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
