import './blocks.css';

export default function BenefitsBlock({ data }) {
  return (
    <div className="benefits-content-block">
      <h4>{data.title}</h4>
      {data.subtitle && <p>{data.subtitle}</p>}
      <div className="benefits">
        {data.content.map((benefit, index) => (
          <div className="benefit" key={index}>
            <h5>{benefit.title}</h5>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
