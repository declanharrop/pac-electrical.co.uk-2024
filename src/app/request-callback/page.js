'use client';

import React, { useState } from 'react';
import Hero from '@/Components/Hero/Hero';
import { QuoteFormStyles } from '@/Elements/Forms/QuoteForm.styles';

export default function Callback() {
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');

  const handleSubmit = (e) => {
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => alert('Success!'))
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
      >
        <div className="decorated-title">
          <h1>Request a callback today</h1>
        </div>
      </Hero>
      <QuoteFormStyles>
        <form name="callback-form" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="callback-form" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="tel" name="number" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </QuoteFormStyles>
    </>
  );
}
