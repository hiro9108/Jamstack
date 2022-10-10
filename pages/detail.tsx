import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

import { Layout, Button, Loading } from "../components";

const Blog: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { id, title, content } = router.query;

  const handleUpdate = useCallback(async () => {
    router.push({
      pathname: "edit",
      query: { id, title, content },
    });
  }, [router, id, title, content]);

  const handleDelete = useCallback(async () => {
    try {
      setLoading(true);
      const res = await Axios.post(
        "https://x3bzdxkvumgdkroftj6gqtc4m40bnfgj.lambda-url.ca-central-1.on.aws/",
        { id, title, content, flag: "d" }
      );

      if (res.status === 200) {
        Swal.fire("The post is deleted!");
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
      title: "Go Back?",
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
        <div className="flex flex-col items-center justify-center w-3/4 m-auto">
          <div>{title}</div>
          <div className="py-8">{content}</div>
          <div className="mt-4 mb-12">
            <div className="inline m-8">
              <Button type="button" onClick={handleUpdate} disabled={disabled}>
                Edit
              </Button>
            </div>
            <div className="inline m-8">
              <Button type="button" onClick={handleDelete} disabled={disabled}>
                Delete
              </Button>
            </div>
            <div className="inline m-8">
              <Button type="button" onClick={handleBack} disabled={disabled}>
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
