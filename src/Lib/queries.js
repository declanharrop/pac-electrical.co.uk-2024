import { gql } from '@apollo/client';

export const ALL_REVIEWS = gql`
  query Reviews {
    reviews {
      id
      name
      sector
      source
      stars
      content
    }
  }
`;
export const SEARCH_REVIEWS = gql`
  query Reviews($sector: Tag) {
    reviews(where: { sector: $sector }, first: 30) {
      id
      name
      sector
      source
      stars
      content
    }
  }
`;

export const FEATURED_CASE_STUDY = gql`
  query caseStudies {
    caseStudies(orderBy: date_DESC, first: 1) {
      id
      title
      slug
      metaDesc
      hero {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 1200 } }
          }
        )
      }
      introduction
      date
      client
      sector
      technology
      systemSize
      paybackPeriod
      savings
      annualOutput
      co2Savings
      slideshow {
        id
        url(
          transformation: {
            image: { resize: { width: 500 } }
            document: { output: { format: webp } }
          }
        )
      }
      content {
        html
      }
      tag
    }
  }
`;
export const RECENT_CASE_STUDIES = gql`
  query caseStudies {
    caseStudies(orderBy: date_DESC, skip: 1, first: 3) {
      id
      title
      slug
      metaDesc
      hero {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 500 } }
          }
        )
      }
      introduction
      date
      client
      sector
      technology
      systemSize
      paybackPeriod
      savings
      annualOutput
      co2Savings
      slideshow {
        id
        url(
          transformation: {
            image: { resize: { width: 500 } }
            document: { output: { format: webp } }
          }
        )
      }
      content {
        html
      }
      tag
    }
  }
`;
export const REMAINING_CASE_STUDIES = gql`
  query caseStudies {
    caseStudies(orderBy: date_DESC, skip: 4, first: 20) {
      id
      title
      slug
      metaDesc
      hero {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 500 } }
          }
        )
      }
      introduction
      date
      client
      sector
      technology
      systemSize
      paybackPeriod
      savings
      annualOutput
      co2Savings
      slideshow {
        id
        url(
          transformation: {
            image: { resize: { width: 500 } }
            document: { output: { format: webp } }
          }
        )
      }
      content {
        html
      }
      tag
    }
  }
`;

export const CASE_STUDY = gql`
  query caseStudies($slug: String!) {
    caseStudies(where: { slug: $slug }) {
      id
      title
      slug
      metaDesc
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      introduction
      date
      client
      sector
      technology
      systemSize
      paybackPeriod
      savings
      installed
      annualOutput
      ytVideo
      co2Savings
      slideshow {
        id
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
      tag
    }
  }
`;
