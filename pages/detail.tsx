import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

import { Layout, Button, Loading } from "../components";

const Blog: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id, title, content } = router.query;

  const handleUpdate = useCallback(async () => {
    router.push({
      pathname: "edit",
      query: { id, title, content },
    });
  }, [router, id, title, content]);

  const handleDelete = useCallback(async () => {
    try {
      const { isConfirmed } = await Swal.fire({
        icon: "question",
        title: "Are you sure want to delete?",
        showDenyButton: true,
      });

      if (!isConfirmed) return;

      setLoading(true);
      const res = await Axios.post(
        `${process.env.NEXT_PUBLIC_LAMBDA_ENDPOINT}`,
        { id, title, content, flag: "d" }
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "The post has been deleted!",
        });
        router.push("/");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }, [id, title, content, router]);

  const handleBack = useCallback(async () => {
    const { isConfirmed } = await Swal.fire({
      icon: "question",
      title: "Are you sure want to go back?",
      showDenyButton: true,
    });
    isConfirmed && router.push("/");
  }, [router]);

  return (
    <Layout title="Detail" h1="post detail">
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col justify-center w-1/2 m-auto">
          <strong>{title}</strong>
          <div className="py-8">{content}</div>
          <div className="mt-4 mb-12 text-center">
            <div className="inline-block mx-8 mb-4">
              <Button type="button" onClick={handleUpdate}>
                Edit
              </Button>
            </div>
            <div className="inline-block mx-8 mb-4">
              <Button type="button" onClick={handleDelete}>
                Delete
              </Button>
            </div>
            <div className="inline-block mx-8">
              <Button type="button" onClick={handleBack}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Blog;
