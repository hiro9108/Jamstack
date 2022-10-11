import type { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import { request } from "../lib/datocms";
import { HOMEPAGE_QUERY } from "../graphql/queries";
import { Card, Layout } from "../components";

type Article = {
  id: string;
  title: string;
  content: string;
};

type AllArticles = {
  allArticles: Article[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await request({ query: HOMEPAGE_QUERY });
  return { props: { data } };
};

const Home: NextPage<{ data: AllArticles }> = ({ data }) => {
  const router = useRouter();

  const onClickHandler = useCallback(
    ({ id, title, content }: Article) => {
      router.push({
        pathname: "detail",
        query: { id, title, content },
      });
    },
    [router]
  );

  const NoPosts = () => (
    <div className="flex justify-center items-center h-60">
      <strong className="text-xl">There are no posts</strong>
    </div>
  );

  return (
    <Layout title="Our posts" h1="our posts">
      {!data.allArticles.length && <NoPosts />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data.allArticles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            content={article.content}
            onClick={() => onClickHandler(article)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
