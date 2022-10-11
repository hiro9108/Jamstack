import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Axios from "axios";
import Swal from "sweetalert2";

import { Button, Layout, Input, Textarea, Loading } from "../components";

const Post: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, content } = data;

    const swal = await Swal.fire({
      icon: "question",
      title: "Do you want to create a new post?",
    });

    if (swal.isConfirmed) {
      setLoading(true);

      const res = await Axios.post(
        "https://x3bzdxkvumgdkroftj6gqtc4m40bnfgj.lambda-url.ca-central-1.on.aws/",
        {
          title,
          content,
          flag: "c",
        }
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "New post has been created!",
        });
        router.push("/");
      }
    }
  };

  return (
    <Layout title="New Post" h1="new post">
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
            placeholder={
              !errors.title ? "Enter a New Title" : "This field is required"
            }
          />

          <Textarea
            register={register}
            name="content"
            required
            placeholder={
              !errors.content ? "Enter a New Content" : "This field is required"
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

export default Post;
