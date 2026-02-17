import tarkeez from "../assets/images/tarkeez.png";

function SideBar({ activePage, onPageChange, onLogout }) {
  const navItems = [
    { id: "نظرة عامة", label: "نظرة عامة" },
    { id: "المهام", label: "المهام" },
    { id: "الموظفين", label: "الموظفين" },
    { id: "التقارير", label: "التقارير" },
  ];

  return (
    <aside className="sidebar">
       
     <img src={tarkeez} alt="logo" className="sidebar-log" />
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activePage === item.id ? "active" : ""}`}
              onClick={() => onPageChange(item.id)}
            >
              <span className="nav-dot" />
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          تسجيل الخروج
        </button>
      </div>
      
    </aside>
  );
}

export default SideBar;




