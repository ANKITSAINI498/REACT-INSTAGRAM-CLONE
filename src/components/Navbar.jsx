import { useState } from "react";

import "./Navbar.css";

import ProfileMenu from "./ProfileMenu/ProfileMenu";

import { FiHome, FiSearch, FiHeart, FiPlusSquare, } from "react-icons/fi";

import { BsMessenger } from "react-icons/bs";
import SearchPanel from "./Search/SearchPanel";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen,setSearchOpen]=useState(false);

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <div className="logo">

          Instagram

        </div>

        {/* Search */}

        <div className="search">

          <FiSearch onClick={()=>setSearchOpen(true)} />

          

          <SearchPanel open={searchOpen} onClose={()=>setSearchOpen(false)} />

        </div>

        {/* Icons */}

        <div className="nav-icons">

          <FiHome />

          <BsMessenger />

          <FiPlusSquare />

          <FiHeart />

          {/* Profile */}

          <div className="profile-wrapper">

            <img

              src="https://i.pravatar.cc/150?img=12"

              alt="profile"

              className={
                menuOpen
                  ? "nav-profile active-profile"
                  : "nav-profile"
              }

              onClick={() => setMenuOpen(!menuOpen)}

            />

            <ProfileMenu
              open={menuOpen}
              onClose={() => setMenuOpen(false)}
/>

          </div>

        </div>

      </div>

    </header>

  );

}