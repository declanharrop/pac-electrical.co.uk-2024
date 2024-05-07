import Link from 'next/link';
import './blocks.css';

export default function ExploreBlock() {
  return (
    <div className="explore-container">
      <div className="content">
        <div className="explore-buttons">
          <div className="box">
            <img src="/images/misc/explore-solar.webp" alt="" />
            <div className="overlay">
              <div>
                <h2>Solar</h2>
                <p>Find out more about everything involved with Solar</p>
                <Link href="/solar/about-solar" style={{ margin: '0' }}>
                  <button
                    type="button"
                    className="secondary-button"
                    style={{ marginTop: '50px' }}
                  >
                    Explore the benefits of Solar
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="/images/headers/powerandcontrolmcs.jpg" alt="" />
            <div className="overlay">
              <div>
                <h2>Our Solar Process</h2>
                <p>
                  See how we manage our customers and their journey into Solar
                </p>
                <Link href="/solar/our-process" style={{ margin: '0' }}>
                  <button
                    type="button"
                    className="secondary-button"
                    style={{ marginTop: '50px' }}
                  >
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
