'use client';

import { useRouter } from 'next/navigation';
import Hero from '@/Components/Hero/Hero';
import Head from '@/Elements/Head';

export default function GetAQuote() {
  const router = useRouter();
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
      whatservice: e.target.whatservice.value,
      addressline1: e.target.addressline1.value,
      postcode: e.target.postcode.value,
      wheredidyouhear: e.target.wheredidyouhear.value,
      works: e.target.works.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'get-a-quote-form', ...data }),
    })
      .then(() => router.push('/information/success'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  return (
    <>
      <Head
        title="Get a Quote | Power and Control"
        description="Contact us for a free Electrical, EV Charger, Solar and Battery Storage, no-obligation quote today."
        url="https://pac-electrical.co.uk/get-a-quote"
      />
      <Hero height="20vh">
        <div className="decorated-title">
          <h1>Get a Quote</h1>
        </div>
      </Hero>
      <form
        onSubmit={handleSubmit}
        method="post"
        name="get-a-quote-form"
        data-netlify="true"
      >
        <input type="hidden" name="get-a-quote-form" value="get-a-quote-form" />
        <label htmlFor="whatservice" aria-label="Service Required">
          <p>What service do you require?</p>
          <select id="whatservice" name="whatservice" required>
            <option value="solar">Solar PV</option>
            <option value="evcharging">EV Charging</option>
            <option value="electrical">Electrical</option>
          </select>
        </label>
        <label htmlFor="name" aria-label="Name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </label>
        <label htmlFor="phone" aria-label="Phone">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            required
          />
        </label>
        <label htmlFor="email" aria-label="Email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
        </label>
        <label htmlFor="addressline1" aria-label="Adddress Line 1">
          <input
            type="text"
            name="addressline1"
            id="addressline1"
            placeholder="Address Line 1"
            required
          />
        </label>
        <label htmlFor="postcode" aria-label="Postcode">
          <input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Postcode"
            required
          />
        </label>
        <label
          htmlFor="wheredidyouhear"
          aria-label="Where did you hear about us?"
        >
          <p>Where did you hear about us?</p>
          <select id="wheredidyouhear" name="wheredidyouhear" required>
            <option value="google">Google</option>
            <option value="wom">Word of Mouth</option>
            <option value="leaflet">Leaflet</option>
            <option value="van-ad">Van Advert</option>
            <option value="tat">Trust a Trader</option>
            <option value="facebook">Facebook</option>
            <option value="linkedin">Linked In</option>
            <option value="reh">Renewable Energy Hub</option>
            <option value="ee">Edmunson Electrical</option>
            <option value="other">Other...</option>
          </select>
        </label>
        <label htmlFor="works" aria-label="Works">
          <textarea
            name="works"
            id="works"
            required
            placeholder="Let us know any details about the job"
          />
        </label>
        <button type="submit" name="submit">
          Get A Quote
        </button>
      </form>
    </>
  );
}
