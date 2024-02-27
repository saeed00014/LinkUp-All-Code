import React, { useContext, useEffect, useRef } from "react";
import { ProfileContext } from "@/context/context";
import Post from "@/components/post/post";
import { useIntersection } from "@mantine/hooks";
import { PostType } from "@/type/type";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  post: PostType;
};

const BodyRefPost = ({ setPage, post }: Props) => {
  const { isLoginUser } = useContext(ProfileContext);
  const lastPostRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 0,
  });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage((page) => page + 1);
    }
  }, [entry]);

  return (
    <div ref={ref} id={`ref${post.id}`}>
      <Post isMyPost={isLoginUser} post={post} />
    </div>
  );
};

export default BodyRefPost;
