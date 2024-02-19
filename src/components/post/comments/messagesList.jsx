"use client";
import { useContext, useEffect, useRef } from "react";
import { PostCommentContext } from "@/context/context";
import { useIntersection } from "@mantine/hooks";
import Message from "./message";

const MessagesList = () => {
  const { page, setPage, comments } = useContext(PostCommentContext);

  const lastPostRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage(page + 1);
    }
  }, [page, entry, setPage]);

  return (
    <div>
      {comments
        ? comments.map((message, i) => {
            const isRef = i == page * 50 - 1;
            return (
              <div key={message.id}>
                {isRef ? (
                  <div
                    ref={ref}
                    id={`ffffffffffffff${message.id}`}
                    key={message.id}
                    className="w-full px-4"
                  >
                    <Message message={message} />
                  </div>
                ) : (
                  <div key={message.id} id={i} className="w-full px-4">
                    <Message message={message} />
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MessagesList;
