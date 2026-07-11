import { useRef, useState, useEffect } from "react";

import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiVolume2,
  FiVolumeX
} from "react-icons/fi";

import { FaHeart } from "react-icons/fa";

import "./Reels.css";

export default function ReelItem({ reel }) {

  const videoRef = useRef(null);

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (!videoRef.current) return;

        if (entry.isIntersecting) {

          videoRef.current.play();

        } else {

          videoRef.current.pause();

        }

      },

      { threshold: 0.8 }

    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();

  }, []);

  const togglePause = () => {

    if (paused) {

      videoRef.current.play();

    } else {

      videoRef.current.pause();

    }

    setPaused(!paused);

  };

  const handleDoubleClick = () => {

    setLiked(true);

    setShowHeart(true);

    setTimeout(() => {

      setShowHeart(false);

    },700);

  };

  return (

    <div className="reel">

      <video

        ref={videoRef}

        src={reel.video}

        muted={muted}

        loop

        playsInline

        onClick={togglePause}

        onDoubleClick={handleDoubleClick}

      />

      {showHeart &&

      <div className="double-heart">

        ❤️

      </div>

      }

      <div className="reel-info">

        <div className="user">

          <img
            src={reel.profileImage}
            alt=""
          />

          <h5>

            {reel.username}

            {reel.verified && " ✔"}

          </h5>

          <button>

            Follow

          </button>

        </div>

        <p>{reel.caption}</p>

        <span>

          🎵 {reel.music}

        </span>

      </div>

      <div className="reel-actions">

        <div>

          {

            liked ?

            <FaHeart

              className="liked"

              onClick={()=>setLiked(false)}

            />

            :

            <FiHeart

              onClick={()=>setLiked(true)}

            />

          }

          <span>

            {

              liked

              ?

              reel.likes+1

              :

              reel.likes

            }

          </span>

        </div>

        <div>

          <FiMessageCircle/>

          <span>

            {reel.comments}

          </span>

        </div>

        <div>

          <FiSend/>

          <span>

            {reel.shares}

          </span>

        </div>

        <div>

          <FiBookmark

            onClick={()=>setSaved(!saved)}

            className={saved ? "saved" : ""}

          />

        </div>

        <div>

          {

            muted ?

            <FiVolumeX

              onClick={()=>setMuted(false)}

            />

            :

            <FiVolume2

              onClick={()=>setMuted(true)}

            />

          }

        </div>

      </div>

    </div>

  );

}