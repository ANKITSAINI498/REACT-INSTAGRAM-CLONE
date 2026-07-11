import { useState } from "react";
import data from "../../data/instagram.json";
import { MdVerified } from "react-icons/md";
import "./Suggestions.css";

export default function Suggestions() {

  const currentUser = data[0];

  const [following, setFollowing] = useState([]);

  const toggleFollow = (id) => {

    if (following.includes(id)) {

      setFollowing(following.filter((item) => item !== id));

    } else {

      setFollowing([...following, id]);

    }

  };

  return (

    <aside className="suggestions">

      {/* Logged User */}

      <div className="current-user">

        <img

          src={currentUser.profileImage}

          alt={currentUser.username}

        />

        <div className="current-info">

          <h5>

            {currentUser.username}

            {

              currentUser.verified &&

              <MdVerified className="verified" />

            }

          </h5>

          <span>{currentUser.location}</span>

        </div>

        <button>

          Switch

        </button>

      </div>

      {/* Header */}

      <div className="suggestion-header">

        <span>

          Suggestions for you

        </span>

        <button>

          See All

        </button>

      </div>

      {/* Users */}

      {

        data.slice(1, 8).map((user) => (

          <div

            key={user.id}

            className="suggestion"

          >

            <div className="suggestion-left">

              <img

                src={user.profileImage}

                alt={user.username}

              />

              <div>

                <h6>

                  {user.username}

                  {

                    user.verified &&

                    <MdVerified className="verified" />

                  }

                </h6>

                <p>

                  Suggested for you

                </p>

              </div>

            </div>

            <button

              onClick={() => toggleFollow(user.id)}

              className={

                following.includes(user.id)

                  ? "following"

                  : ""

              }

            >

              {

                following.includes(user.id)

                  ? "Following"

                  : "Follow"

              }

            </button>

          </div>

        ))

      }

      {/* Footer */}

      <div className="sidebar-footer">

        <p>

          About · Help · Press · API · Jobs · Privacy

        </p>

        <span>

          © 2026 INSTAGRAM CLONE

        </span>

      </div>

    </aside>

  );

}