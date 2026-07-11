import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from './api'

function Stories() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    api.get('/stories')
      .then((response) => setStories(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="stories">
      {stories.map((story) => (
        <Link to={`/story/${story.id}`} className="story" key={story.id}>
          <div className="story-ring">
            <img src={story.image} alt={story.username} />
          </div>
          <span>{story.username}</span>
        </Link>
      ))}
    </section>
  )
}

export default Stories
