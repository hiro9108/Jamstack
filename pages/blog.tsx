// @ts-nocheck
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { Layout, Button } from "../components";
import Pagination from "react-responsive-pagination";

const Blog: NextPage = () => {
  const router = useRouter();
  const { title, content } = router.query;

  const handleBack = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Layout title="Blog" h1="blog content">
      <div className="flex flex-col w-3/4 m-auto items-start">
        <div>{title}</div>
        <div className="py-4">{content}</div>
        <Button onClick={handleBack}>Go Back</Button>
      </div>
    </Layout>
  );
};

export default Blog;
