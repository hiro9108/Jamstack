import gql from "graphql-tag";

export const HOMEPAGE_QUERY = gql`
  {
    allArticles {
      title
      id
      createdAt
      content
    }
  }
`;
