import { gql } from '@apollo/client';

export const VERSION_QUERY = gql`
  query Query {
    appVersions(orderBy: publishedAt_DESC) {
      id
      vDetails
      vNumber
      vSlug
    }
  }
`;
