import React from 'react';
import Hero from '@/Components/Hero/Hero';
import { QuoteFormStyles } from '@/Elements/Forms/QuoteForm.styles';

export default function Callback() {
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
        <form name="test-1-callback-form" method="post">
          <input
            type="hidden"
            name="test-1-callback-form"
            value="callback-form"
          />
          <p className="item">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Full Name"
            />
          </p>
          <p className="item">
            <input
              type="text"
              name="phone"
              required
              placeholder="Your Phone Number"
            />
          </p>
          <p className="item">
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Your Email"
            />
          </p>
          <p>
            <button type="submit">Request a callback</button>
          </p>
        </form>
      </QuoteFormStyles>
    </>
  );
}
