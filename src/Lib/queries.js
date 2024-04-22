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

export const FEATURED_NEWS_STORY = gql`
  query FeaturedQuery {
    articles(orderBy: date_DESC, first: 1) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
    }
  }
`;
export const RECENT_NEWS_STORIES = gql`
  query RecentQuery {
    articles(orderBy: date_DESC, first: 3, skip: 1) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 400 } }
          }
        )
      }
      content {
        html
      }
    }
  }
`;
export const REMAINING_NEWS_STORIES = gql`
  query AllQuery {
    articles(orderBy: date_DESC, first: 20, skip: 4) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { width: 200 } }
          }
        )
      }
      content {
        html
      }
    }
  }
`;

export const NEWS_STORY = gql`
  query Articles($slug: String!) {
    articles(where: { slug: $slug }) {
      date
      id
      title
      heroAlt
      tag
      ytVideo
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
      slideshow {
        id
        url(transformation: { document: { output: { format: webp } } })
      }
    }
  }
`;

export const RECENT_JOBS = gql`
  query Jobs {
    jobs(orderBy: date_DESC, skip: 0, first: 3) {
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
      content {
        html
      }
    }
  }
`;
export const ALL_JOBS = gql`
  query Jobs {
    jobs(orderBy: date_DESC, skip: 3, first: 20) {
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
      content {
        html
      }
    }
  }
`;

export const JOB = gql`
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
`;

export const LATEST_NEWS_DATA = gql`
  query StoryData {
    articles(orderBy: date_DESC, first: 4) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
    }
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

export const ALL_NEWS_DATA = gql`
  query AllNewsData {
    articles(orderBy: date_DESC, first: 1000) {
      date
      id
      title
      tag
      subtitle
      metaDescription
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
    }
  }
`;

export const ALL_STUDIES_DATA = gql`
  query AllStudiesData {
    caseStudies(orderBy: date_DESC, first: 1000) {
      date
      id
      title
      tag
      slug
      hero {
        url(transformation: { document: { output: { format: webp } } })
      }
      content {
        html
      }
    }
  }
`;
