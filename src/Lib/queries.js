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
