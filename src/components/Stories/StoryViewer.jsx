import { useEffect, useState } from "react";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./StoryViewer.css";

export default function StoryViewer({
  stories,
  current,
  setCurrent,
  onClose,
}) {

  const [imageIndex, setImageIndex] = useState(0);

  const story = stories[current];

  useEffect(() => {

    setImageIndex(0);

  }, [current]);

  useEffect(() => {

    if (!story) return;

    const timer = setTimeout(() => {

      if (imageIndex < story.images.length - 1) {

        setImageIndex(imageIndex + 1);

      } else {

        if (current < stories.length - 1) {

          setCurrent(current + 1);

        } else {

          onClose();

        }

      }

    }, 3000);

    return () => clearTimeout(timer);

  }, [imageIndex, current, story]);

  if (!story) return null;

  const next = () => {

    if (imageIndex < story.images.length - 1) {

      setImageIndex(imageIndex + 1);

    } else if (current < stories.length - 1) {

      setCurrent(current + 1);

    }

  };

  const prev = () => {

    if (imageIndex > 0) {

      setImageIndex(imageIndex - 1);

    } else if (current > 0) {

      setCurrent(current - 1);

    }

  };

  return (

    <div className="story-viewer">

      <button
        className="close-btn"
        onClick={onClose}
      >
        <FiX />
      </button>

      {current > 0 && (

        <button
          className="prev-btn"
          onClick={prev}
        >
          <FiChevronLeft />
        </button>

      )}

      <div className="story-card">

        {/* Progress */}

        <div className="progress-wrapper">

          {story.images.map((_, i) => (

            <div
              key={i}
              className="progress"
            >

              <div
                className={`progress-fill ${
                  i < imageIndex
                    ? "done"
                    : i === imageIndex
                    ? "active"
                    : ""
                }`}
              />

            </div>

          ))}

        </div>

        {/* User */}

        <div className="story-user">

          <img
            src={story.profileImage}
            alt=""
          />

          <div>

            <h5>{story.username}</h5>

            <span>{story.time}</span>

          </div>

        </div>

        {/* Image */}

        <img
          className="story-full"
          src={story.images[imageIndex]}
          alt=""
        />

      </div>

      {current < stories.length - 1 && (

        <button
          className="next-btn"
          onClick={next}
        >
          <FiChevronRight />
        </button>

      )}

    </div>

  );

}