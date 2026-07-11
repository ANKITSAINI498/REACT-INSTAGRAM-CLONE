import { useState } from "react";

import { MdVerified } from "react-icons/md";

import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";

import PostSlider from "./PostSlider";

import "./PostCard.css";

export default function PostItem({ post }) {

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const [comments, setComments] = useState(post.comments);

  const [text, setText] = useState("");

  const [showHeart, setShowHeart] = useState(false);

  //------------------------------------

  const likePost = () => {

    setLiked(true);

    setShowHeart(true);

    setTimeout(() => {

      setShowHeart(false);

    }, 700);

  };

  //------------------------------------

  const handleComment = () => {

    if (text.trim() === "") return;

    setComments((prev) => prev + 1);

    setText("");

  };

  //------------------------------------

  return (

    <article className="post-card">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user">

          <img
            src={post.profileImage}
            alt={post.username}
            className="post-profile"
          />

          <div className="post-info">

            <h6>

              {post.username}

              {post.verified && (

                <MdVerified className="verified" />

              )}

            </h6>

            <p className="location">

              {post.location}

            </p>

          </div>

        </div>

        <FiMoreHorizontal className="more-icon" />

      </div>

      {/* IMAGE SLIDER */}

      <div
        className="post-image"
        onDoubleClick={likePost}
      >

        <PostSlider images={post.images} />

        {

          showHeart && (

            <div className="heart-animation">

              ❤️

            </div>

          )

        }

      </div>

      {/* ACTIONS */}

      <div className="post-actions">

        <div className="left-actions">

          {

            liked ?

              <FaHeart

                className="liked"

                onClick={() => setLiked(false)}

              />

              :

              <FiHeart

                onClick={likePost}

              />

          }

          <FiMessageCircle />

          <FiSend />

        </div>

        <FiBookmark

          className={saved ? "saved" : ""}

          onClick={() => setSaved(!saved)}

        />

      </div>

      {/* CONTENT */}

      <div className="post-content">

        <p className="likes">

          {(liked ? post.likes + 1 : post.likes).toLocaleString()} likes

        </p>

        <p className="caption">

          <strong>

            {post.username}

          </strong>

          {" "}

          {post.caption}

        </p>

        <p className="comments">

          View all {comments.toLocaleString()} comments

        </p>

        <p className="time">

          {post.time}

        </p>

        {/* COMMENT */}

        <div className="comment-box">

          <input

            type="text"

            value={text}

            onChange={(e) => setText(e.target.value)}

            placeholder="Add a comment..."

          />

          <button

            onClick={handleComment}

          >

            Post

          </button>

        </div>

      </div>

    </article>

  );

}