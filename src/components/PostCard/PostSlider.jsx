import { useState } from "react";

import { FiChevronLeft, FiChevronRight, } from "react-icons/fi";

import "./PostSlider.css";

export default function PostSlider({ images = [] }) {

  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  //--------------------------------

  const next = () => {

    if (index < images.length - 1) {

      setIndex(index + 1);

    }

  };

  //--------------------------------

  const prev = () => {

    if (index > 0) {

      setIndex(index - 1);

    }

  };

  //--------------------------------

  return (

    <div className="slider">

      <img

        src={images[index]}

        alt="post"

        className="slider-image"

      />

      {

        index > 0 &&

        <button

          className="slider-btn left"

          onClick={prev}

        >

          <FiChevronLeft />

        </button>

      }

      {

        index < images.length - 1 &&

        <button

          className="slider-btn right"

          onClick={next}

        >

          <FiChevronRight />

        </button>

      }

      {

        images.length > 1 &&

        <div className="slider-dots">

          {

            images.map((_, i) => (

              <span

                key={i}

                className={

                  i === index

                    ? "dot active"

                    : "dot"

                }

              />

            ))

          }

        </div>

      }

    </div>

  );

}