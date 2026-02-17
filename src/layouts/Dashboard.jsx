import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContent from "../components/MainContent";

function Dashboard() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [activePage, setActivePage] = useState("نظرة عامة");
    const navigate=useNavigate();
     const handlelogout=()=>{
        navigate("/login");

    };
    const toggleSidebar = () => { setShowSidebar(!showSidebar) }
    return (
     <div className={`layout ${showSidebar ? "sidebar-open" : "sidebar-closed"}`}>
  {showSidebar && (
    <SideBar
      activePage={activePage}
      onPageChange={setActivePage}
      onLogout={handlelogout}
    />
  )}

  {showSidebar && (
    <div className="sidebar-overlay" onClick={toggleSidebar}></div>
  )}

  <div className="main-area">
    <Header onToggleSidebar={toggleSidebar} />
    <MainContent activePage={activePage} />
  </div>
</div>

        
    
  
    )
}
export default Dashboard;