import RecruitmentTemplateStyles from './styles/RecruitmentTemplate.styles';
import Head from '../Elements/Head';
import Hero from '../Components/Hero/Hero';
import ColorButton from '../Elements/ColorButton';

export default function RecruitmentTemplate({ job }) {
  return (
    <>
      <Head
        title={`${job.title} - Power and Control`}
        description={job.metaDesc.substring(0, 160)}
        ogImage={job.hero.url}
        ogType="article"
        url={`https://pac-electrical.co.uk/news/${job.slug}`}
      />
      <Hero
        src={job.hero.url}
        alt={`Power and Control - ${job.title} Case job`}
        height="60vh"
      >
        <div className="decorated-title">
          <h1>{job.title}</h1>
          <p>{job.introduction}</p>
        </div>
      </Hero>
      <RecruitmentTemplateStyles>
        <div className="content">
          <div className="spacer-lg" />
          <div className="spacer-lg" />
          {/* <p className="sm-grey">{formatDate(job.date)}</p> */}
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: job.content.html }} />
        </div>
      </RecruitmentTemplateStyles>
      <div style={{ margin: '40px 0 80px' }}>
        <a href={job.applyLink} title="Apply Now!">
          <ColorButton name="Apply Now!" />
        </a>
      </div>
    </>
  );
}
