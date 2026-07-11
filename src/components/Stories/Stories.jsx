import "./Stories.css";
import data from "../../data/instagram.json";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import StoryViewer from "./StoryViewer";

export default function Stories() {

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <>

      <section className="stories">

        {/* Your Story */}

        <div className="story own-story">

          <div className="story-ring own-ring">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Your Story"
            />

            <div className="plus-icon">

              <FaPlus />

            </div>

          </div>

          <p>Your Story</p>

        </div>

        {/* Other Stories */}

        {data.map((story, index) => (

          <div
            className="story"
            key={story.id}
            onClick={() => {

              setCurrent(index);

              setOpen(true);

            }}
          >

            <div className="story-ring">

              <img
                src={story.profileImage}
                alt={story.username}
              />

            </div>

            <p>{story.username}</p>

          </div>

        ))}

      </section>

      {open && (

        <StoryViewer
          stories={data}
          current={current}
          setCurrent={setCurrent}
          onClose={() => setOpen(false)}
        />

      )}

    </>
  );
}