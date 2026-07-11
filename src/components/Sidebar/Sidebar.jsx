import "./Sidebar.css";

import { FiHome, FiSearch, FiCompass, FiFilm, FiMessageCircle, FiHeart, FiPlusSquare, FiMenu, } from "react-icons/fi";
import SearchPanel from "../Search/SearchPanel";

export default function Sidebar() {
//const [searchOpen,setSearchOpen]=useState(false);
  return (

    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        Instagram

      </div>

      {/* Menu */}

      <nav className="sidebar-menu">

        <ul>

          <li className="active">
            <FiHome />
            <span>Home</span>
          </li>

          <li>
            <FiSearch onClick={()=>setSearchOpen(true)} />
            <span>Search</span>
            {/*<SearchPanel open={searchOpen} onClose={()=>setSearchOpen(false)} />*/}

            
            
                      
            
                      
          </li>

          <li>
            <FiCompass />
            <span>Explore</span>
          </li>

          <li>
            <FiFilm />
            <span>Reels</span>
          </li>

          <li>
            <FiMessageCircle />
            <span>Messages</span>
          </li>

          <li>
            <FiHeart />
            <span>Notifications</span>
          </li>

          <li>
            <FiPlusSquare />
            <span>Create</span>
          </li>

          <li>
            <img
              className="sidebar-profile"
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
            />
            <span>Profile</span>
          </li>

        </ul>

      </nav>

      {/* Bottom Menu */}

      <div className="sidebar-bottom">

        <div className="bottom-item">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Threads_%28app%29_logo.svg"
            alt="threads"
          />

          <span>Threads</span>

        </div>

        <div className="bottom-item">

          <FiMenu />

          <span>More</span>

        </div>

      </div>

    </aside>

  );

}