import axios from 'axios'
import { useEffect, useState } from 'react'
import data from './db/db.json'

function Suggestions() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then((response) => setProfile(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="suggestions">
      <div className="current-user">
        <img
          src={profile?.profileImage || data.stories[0].image}
          alt={profile?.username || data.stories[0].username}
        />
        <div>
          <strong>{profile?.username || data.stories[0].username}</strong>
          <span>{profile?.name || 'dileeb'}</span>
        </div>
        <button>Switch</button>
      </div>

      <div className="suggestion-title">
        <strong>Suggested for you</strong>
        <button>See all</button>
      </div>

      {data.suggestions.map((suggestion) => (
        <div className="suggestion-user" key={suggestion.id}>
          <img src={suggestion.profileImage} alt={suggestion.username} />
          <div>
            <strong>{suggestion.username}</strong>
            <span>Suggested for you</span>
          </div>
          <button>Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
