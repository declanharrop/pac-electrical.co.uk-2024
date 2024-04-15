import { QuoteFormStyles } from './QuoteForm.styles';

export default function QuoteForm({ formName = 'electrical quote form' }) {
  return (
    <QuoteFormStyles>
      <form
        data-netlify="true"
        name={formName}
        method="POST"
        // eslint-disable-next-line react/no-unknown-property
        netlify-honeypot="bot-field"
        // action="/information/success"
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human:{' '}
            <input name="bot-field" id="bot-field" />
          </label>
        </p>
        <p className="item">
          <label className="hidden" htmlFor="name">
            Full Name:
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Full Name"
          />
        </p>
        <p className="item">
          <label className="hidden" htmlFor="phone">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            placeholder="Your Phone Number"
          />
        </p>
        <p className="item">
          <label className="hidden" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Your Email"
          />
        </p>
        <p className="item">
          <label className="hidden" htmlFor="addressl1">
            Address Line 1:
          </label>
          <input
            type="text"
            name="addressl1"
            id="addressl1"
            required
            placeholder="Address Line 1"
          />
        </p>
        <p className="item">
          <label className="hidden" htmlFor="postcode">
            Postcode:
          </label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            required
            placeholder="Postcode"
          />
        </p>
        <p className="select-container item">
          <label htmlFor="wheredidyouhear">Where did you hear about us?</label>
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
        </p>
        <p className="item">
          <label className="hidden" htmlFor="works">
            Works:
          </label>
          <textarea
            name="works"
            id="works"
            required
            placeholder="Let us know any details about the job"
          />
        </p>
        <button type="submit" name="submit" id="submit" className={formName}>
          Get a Quote
        </button>
      </form>
    </QuoteFormStyles>
  );
}
