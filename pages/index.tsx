// @ts-nocheck
import type { NextPage } from "next";
import Router from "next/router";
import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";

import { request } from "../lib/datocms";
import { HelloButton } from "../components/Button/Button.stories";
import { Card, Layout } from "../components";
import Pagination from "react-responsive-pagination";

const HOMEPAGE_QUERY = `
query HomePage {
  allArticles {
    title
    id
    createdAt
    content
  }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

const Home: NextPage = ({ data }) => {
  const COUNT = 6;
  const totalPages = Math.ceil(data.allArticles.length / COUNT);

  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState(data.allArticles);
  const [displayArticles, setDisplayArticles] = useState([]);

  useEffect(() => {
    // Set page.
    const sep = articles.slice(COUNT * (currentPage - 1), currentPage * COUNT);
    setDisplayArticles(sep);
  }, [articles, currentPage]);

  const onClickHandler = useCallback(({ title, content }) => {
    Router.push({ pathname: "blog", query: { title, content } });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // ... do something with `page`
  };

  return (
    <Layout title="JamStack" h1="articles">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {displayArticles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            content={article.content}
            onClick={() => onClickHandler(article)}
          />
        ))}
      </div>
      <Pagination
        current={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default Home;
