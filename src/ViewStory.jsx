import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import api from "./api";


function ViewStory() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [story, setStory] = useState(null);
  const [stories, setStories] = useState([]);
  const currentIndex = stories.findIndex((item) => String(item.id) === String(id));

  const showPreviousStory = () => {
    if (currentIndex > 0) {
      navigate(`/story/${stories[currentIndex - 1].id}`);
    }
  };

  const showNextStory = useCallback(() => {
    if (!stories.length || currentIndex === -1) {
      return;
    }

    if (currentIndex === stories.length - 1) {
      navigate("/");
    } else {
      navigate(`/story/${stories[currentIndex + 1].id}`);
    }
  }, [currentIndex, navigate, stories]);

  useEffect(() => {
    api.get('/stories')
      .then((response) => setStories(response.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setStory(stories.find((item) => String(item.id) === String(id)) || null)
  }, [id, stories])

  useEffect(() => {
    const timer = setTimeout(() => {
      showNextStory();
    }, 5000);

    return () => clearTimeout(timer);
  }, [showNextStory]);

  
    return (
      <div className="view-story">
        {story ? (
          <>
            <button className="story-click story-click-left" onClick={showPreviousStory} aria-label="Previous story"></button>
            <button className="story-click story-click-right" onClick={showNextStory} aria-label="Next story"></button>

            <div className="story-progress">
              {stories.map((item, index) => (
                <span className={index <= currentIndex ? "active" : ""} key={item.id}></span>
              ))}
            </div>

            <div className="story-user">
              <img src={story.image} alt={story.username} />
              <span>{story.username}</span>
            </div>

            <img className="story-view-image" src={story.image} alt={story.username} />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
    
}

export default ViewStory
