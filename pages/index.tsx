// @ts-nocheck
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";

import { request } from "../lib/datocms";
import { HOMEPAGE_QUERY } from "../graphql/queries";
import { Card, Layout } from "../components";

// type Data = {
//   allArticles: {
//     id: string;
//     title: string;
//     content: string;
//   }[];
// };

export async function getStaticProps() {
  const data = await request({ query: HOMEPAGE_QUERY });
  return { props: { data } };
}

const Home: NextPage = ({ data }) => {
  const COUNT = 6;
  const totalPages = Math.ceil(data.allArticles.length / COUNT);

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState(data.allArticles);
  const [displayArticles, setDisplayArticles] = useState([]);

  useEffect(() => {
    // Set page.
    const sep = articles.slice(COUNT * currentPage, (currentPage + 1) * COUNT);
    setDisplayArticles(sep);
  }, [articles, currentPage]);

  const onClickHandler = useCallback(
    ({ id, title, content }) => {
      router.push({
        pathname: "detail",
        query: { id, title, content },
      });
    },
    [router]
  );

  // const handlePageChange = useCallback((page) => {
  //   setCurrentPage(page.selected);
  // }, []);

  const NoPosts = () => (
    <div className="flex justify-center items-center h-60">
      <strong className="text-xl">There are no posts</strong>
    </div>
  );

  return (
    <Layout title="Our trips" h1="our trips">
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
        {/* {displayArticles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            content={article.content}
            onClick={() => onClickHandler(article)}
          />
        ))} */}
      </div>
      {/* <div className="flex justify-center items-center">
        <ReactPaginate
          className="flex items-center mt-2 mb-6"
          pageCount={totalPages}
          onPageChange={handlePageChange}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          nextLabel=">"
          previousLabel="<"
          pageClassName="rounded-full p-2 w-10 h-10 text-center"
          pageLinkClassName=""
          previousClassName="mr-2"
          previousLinkClassName="page-link"
          nextClassName="ml-2"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="bg-red-300"
          renderOnZeroPageCount={null}
        />
      </div> */}
    </Layout>
  );
};

export default Home;
