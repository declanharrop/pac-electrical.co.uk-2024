'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/Components/Hero/Hero';

export default function Callback() {
  const router = useRouter;
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');

  const handleSubmit = (e) => {
    const data = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'callback-form', ...data }),
    })
      .then(() => router.push('/information/success'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  return (
    <>
      <Hero
        height="20vh"
        src="/images/page-images/renewables/solar7.jpg"
        alt="Get a Solar Quote today from Derby's Solar and Battery Storage experts"
      />
      <form
        onSubmit={handleSubmit}
        method="post"
        name="callback-form"
        data-netlify="true"
      >
        <input type="hidden" name="callback-form" value="callback-form" />
        <label htmlFor="name" aria-label="Name">
          <input type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label htmlFor="phone" aria-label="Phone">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </label>
        <label htmlFor="email" aria-label="Email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
        </label>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </>
  );
}
