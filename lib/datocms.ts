import { DocumentNode } from "graphql";
import { GraphQLClient, Variables } from "graphql-request";

type Request = {
  query: DocumentNode;
  variables?: Variables;
};

export const request = ({ query, variables }: Request) => {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };

  const client = new GraphQLClient(`${process.env.NEXT_DATOCMS_ENDPOINT}`, {
    headers,
  });

  return client.request(query, variables);
};
