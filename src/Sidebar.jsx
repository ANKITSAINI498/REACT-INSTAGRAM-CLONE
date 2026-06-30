import { useNavigate } from "react-router-dom"

function Sidebar() {
  const menuItems = [
    ['bi-house-door-fill', 'Home'],
    ['bi-play-btn', 'Reels'],
    ['bi-send', 'Messages'],
    ['bi-search', 'Search'],
    ['bi-compass', 'Explore'],
    ['bi-heart', 'Notifications'],
    ['bi-plus-lg', 'Create'],
    ['bi-bar-chart-line', 'Dashboard'],
  ]

  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidelogo mb-4">
          <img src="/src/assets/instagram.svg" alt="Instagram" />
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(([icon, label]) => (
            <div className="nav-item" key={label}>
              <i className={`bi ${icon}`}></i>
              <span>{label}</span>
            </div>
          ))}
          <div className="nav-item" onClick={()=>navigate('/Profile')}>
            <span className="profile-dot"></span>
            <span>Profile</span>
          </div>
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="nav-item">
          <i className="bi bi-list"></i>
          <span>More</span>
        </div>
        <div className="nav-item">
          <i className="bi bi-boxes"></i>
          <span>Also from Meta</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
