import gql from 'graphql-tag';
import client from '../../../apollo-client';
import RecruitmentTemplate from '../../../Templates/RecruitmentTemplate';

export default function Recruitment({ job }) {
  return <RecruitmentTemplate job={job} />;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query jobs {
        jobs {
          slug
        }
      }
    `,
  });
  const { jobs } = data;
  const paths = jobs.map((job) => ({
    params: { slug: [job.slug] },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query jobs($slug: String!) {
        jobs(where: { slug: $slug }) {
          id
          title
          slug
          metaDesc
          hero {
            url(transformation: { document: { output: { format: webp } } })
          }
          introduction
          date
          applyLink
          content {
            html
          }
        }
      }
    `,
    variables: { slug },
  });
  const { jobs } = data;
  const job = jobs[0];
  // console.log(review);
  return {
    props: { job },
  };
}
