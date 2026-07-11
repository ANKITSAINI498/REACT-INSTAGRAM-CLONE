import { useEffect, useState } from 'react'
import api from './api'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/posts')
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="posts">
      {posts.map((post) => (
        <article className="post" key={post.id}>
          <header className="post-header">
            <div className="post-user">
              <img src={post.profileImage} alt={post.username} />
              <div>
                <strong>{post.username}</strong>
                <span>{post.time}</span>
              </div>
            </div>
            <i className="bi bi-three-dots"></i>
          </header>

          <img className="post-image" src={post.postImage} alt={post.caption} />

          <div className="post-actions">
            <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>
            <i className="bi bi-bookmark"></i>
          </div>

          <div className="post-meta">
            <strong>{Number(post.likes).toLocaleString()} likes</strong>
            <p>
              <strong>{post.username}</strong> {post.caption}
            </p>
            <span>View all {post.comments} comments</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Posts
