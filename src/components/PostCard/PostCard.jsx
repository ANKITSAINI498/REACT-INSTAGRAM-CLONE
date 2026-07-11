import data from "../../data/instagram.json";
import PostItem from "./PostItem";
import "./PostCard.css";

export default function PostCard() {
  return (
    <section className="posts">

      {data.map((post) => (

        <PostItem
          key={post.id}
          post={post}
        />

      ))}

    </section>
  );
}