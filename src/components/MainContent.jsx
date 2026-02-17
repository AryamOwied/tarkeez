
import Tasks from "./Tasks";
import Overview from "./Overview";
import Employees from "./Employees";
import Reports from "./Reports";

function MainContent({activePage})

{
  if(activePage==="نظرة عامة"){
    return( <div className="main-content">
        <Overview />
    </div>

    );
} if (activePage === "المهام") {
    return(
        <div className="main-content">
        <Tasks />
             </div>
    );
}
if (activePage === "الموظفين") {
  return (
    <div className="main-content">
      <Employees />
    </div>
  );
}


if (activePage === "التقارير") {
    return (
      <div className="main-content">
        <Reports />
      </div>
    );
  }


}
export default MainContent;