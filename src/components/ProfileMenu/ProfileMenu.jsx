import { useEffect, useRef } from "react";

import "./ProfileMenu.css";

import useClickOutside from "../../hooks/useClickOutside";

import {
  FiUser,
  FiBookmark,
  FiSettings,
  FiRepeat,
  FiLogOut,
  FiEdit,
} from "react-icons/fi";

import { MdVerified } from "react-icons/md";

export default function ProfileMenu({

  open,

  onClose,

}) {

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {

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

  if (!open) return null;

  return (

    <div

      className="profile-menu"

      ref={menuRef}

    >

      {/* Arrow */}

      <div className="menu-arrow"></div>

      {/* User */}

      <div className="profile-top">

        <img

          src="https://i.pravatar.cc/150?img=12"

          alt="profile"

        />

        <div>

          <h5>

            ak_kumar

            <MdVerified className="verified"/>

          </h5>

          <p>Online</p>

        </div>

      </div>

      <hr/>

      <ul>

        <li>

          <FiUser/>

          <span>Profile</span>

        </li>

        <li>

          <FiEdit/>

          <span>Edit Profile</span>

        </li>

        <li>

          <FiBookmark/>

          <span>Saved</span>

        </li>

        <li>

          <FiSettings/>

          <span>Settings</span>

        </li>

        <li>

          <FiRepeat/>

          <span>Switch Account</span>

        </li>

        <hr/>

        <li className="logout">

          <FiLogOut/>

          <span>Logout</span>

        </li>

      </ul>

    </div>

  );

}