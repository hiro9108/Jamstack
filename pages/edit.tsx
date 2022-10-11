import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import Swal from "sweetalert2";

import { Button, Layout, Input, Textarea, Loading } from "../components";

const Edit: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { id, title, content } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { title, content } = data;

    const swal = await Swal.fire({
      icon: "question",
      title: "Are you sure want to update?",
    });

    if (swal.isConfirmed) {
      setLoading(true);

      const res = await Axios.post(
        "https://x3bzdxkvumgdkroftj6gqtc4m40bnfgj.lambda-url.ca-central-1.on.aws/",
        {
          id,
          title,
          content,
          flag: "u",
        }
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "The post has been updated!",
        });
        router.push("/");
      }
    }
  };

  return (
    <Layout title="Edit Post" h1="edit post">
      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loading />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <Input
            register={register}
            name="title"
            required
            defaultValue={title as string}
            placeholder={
              !errors.title ? "Enter a Title" : "This field is required"
            }
          />

          <Textarea
            register={register}
            name="content"
            required
            defaultValue={content as string}
            placeholder={
              !errors.content ? "Enter a Content" : "This field is required"
            }
          />

          <div className="mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}
    </Layout>
  );
};

export default Edit;
