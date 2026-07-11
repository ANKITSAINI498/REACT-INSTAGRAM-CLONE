import { useEffect, useMemo, useRef, useState } from "react";
import "./SearchPanel.css";
import useClickOutside from "../../hooks/useClickOutside";
import data from "../../data/instagram.json";

import { FiSearch, FiClock } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

export default function SearchPanel({

    open,
    onClose

}) {

    const ref = useRef(null);

    const [text, setText] = useState("");
    const [history, setHistory] = useState(() => {

  const item = localStorage.getItem("recentSearch");

  return item ? JSON.parse(item) : [];

});
useEffect(() => {

  localStorage.setItem(

    "recentSearch",

    JSON.stringify(history)

  );

}, [history]);
const addHistory = (user) => {

  const filtered = history.filter(

    (item) => item.id !== user.id

  );

  setHistory([

    user,

    ...filtered

  ].slice(0, 8));

};

    useClickOutside(ref, () => {

        if (open) onClose();

    });

    useEffect(() => {

        const esc = (e) => {

            if (e.key === "Escape") {

                onClose();

            }

        };

        document.addEventListener("keydown", esc);

        return () =>
            document.removeEventListener("keydown", esc);

    }, [onClose]);

    const result = useMemo(() => {

        if (!text.trim()) return [];

        return data.filter((user) =>

            user.username

                .toLowerCase()

                .includes(text.toLowerCase())

        );

    }, [text]);

    if (!open) return null;

    return (

        <div

            className="search-panel"

            ref={ref}

        >

            <h3>

                Search

            </h3>

            <div className="search-box">

                <FiSearch/>

                <input

                    value={text}

                    onChange={(e)=>setText(e.target.value)}

                    placeholder="Search"

                />

            </div>

            <div className="search-results">

                {

                    text === ""

                    ?

                    <p className="empty">

                        Search People

                    </p>

                    :

                    result.length === 0

                    ?

                    <p className="empty">

                        No Results Found

                    </p>

                    :

                    result.map(user=>(

                        <div

                            className="search-user"
                                onClick={() => addHistory(user)}
                            key={user.id}

                        >

                            <img

                                src={user.profileImage}

                                alt=""

                            />

                            <div>

                                <h5>

                                    {user.username}

                                    {

                                        user.verified &&

                                        <MdVerified className="verified"/>

                                    }

                                </h5>

                                <p>

                                    {user.location}

                                </p>

                            </div>

                        </div>

                    ))

                }

            </div>

            {

                            text === "" && history.length > 0 && (

                            <>

                            <div className="recent-header">

                            <h4>

                            Recent

                            </h4>

                            <button

                            onClick={() => setHistory([])}

                            >

                            Clear all

                            </button>

                            </div>

                            {

                            history.map((user) => (

                            <div

                            key={user.id}

                            className="search-user"

                            >

                            <FiClock className="clock"/>

                            <img

                            src={user.profileImage}

                            alt=""

                            />

                            <div>

                            <h5>

                            {user.username}

                            {

                            user.verified &&

                            <MdVerified className="verified"/>

                            }

                            </h5>

                            <p>

                            {user.location}

                            </p>

                            </div>

                            </div>

                            ))

                            }

                            <hr/>

                            </>

                            )

                            }

        </div>

    );

}