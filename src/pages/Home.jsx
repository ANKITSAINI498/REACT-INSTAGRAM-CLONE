import "./Home.css";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Stories from "../components/Stories/Stories";
import PostCard from "../components/PostCard/PostCard";
import Suggestions from "../components/Suggestions/Suggestions";
import BottomNav from "../components/BottomNav/BottomNav";
import Reels from "../components/Reels/Reels";

export default function Home() {
  return (
    <>

      {/* Top Navbar */}

      <Navbar />

      {/* Main Layout */}

      <div className="home-layout">

        {/* Left Sidebar */}

        <aside className="left-sidebar">

          <Sidebar />

        </aside>

        {/* Feed */}

        <main className="feed">

         {/* <Reels/> */}
          <Stories />

          <PostCard />

        </main>

        {/* Right Sidebar */}

        <aside className="right-sidebar">

          <Suggestions />

        </aside>

      </div>

      {/* Mobile Bottom Navigation */}

      <BottomNav />

    </>
  );
}