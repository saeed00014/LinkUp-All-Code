import Header from "./header";
import Footer from "./footer";
import Content from "./content";
import Context from "./context";
import { PostType } from "@/type/type";

type Props = {
  post: PostType,
  isMyPost?: boolean,
  miniEdition?: boolean
}

const Post = ({ post, isMyPost, miniEdition }: Props) => {
  return (
    <article
      className={`flex flex-col ${miniEdition ? "w-[380px]" : "lg:w-[550px] w-[500px]"} rounded-[1rem] bg-white dark:bg-gray-800 dark:text-white gap-1 pt-3`}
    >
      <Context post={post} isMyPost={isMyPost} miniEdition={miniEdition}>
        <Header commentEdition={false} />
        <Content />
        <Footer />
      </Context>
    </article>
  );
};

export default Post;
