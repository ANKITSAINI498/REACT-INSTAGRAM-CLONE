import { useEffect, useState } from 'react'
import api from './api'

function Suggestions() {
  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    api.get('/profile')
      .then((response) => setProfile(response.data))
      .catch((err) => console.log(err))

    api.get('/suggestions')
      .then((response) => setSuggestions(response.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="suggestions">
      <div className="current-user">
        <img
          src={profile?.profileImage || ''}
          alt={profile?.username || 'Profile'}
        />
        <div>
          <strong>{profile?.username || 'Loading'}</strong>
          <span>{profile?.name || ''}</span>
        </div>
        <button>Switch</button>
      </div>

      <div className="suggestion-title">
        <strong>Suggested for you</strong>
        <button>See all</button>
      </div>

      {suggestions.map((suggestion) => (
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
