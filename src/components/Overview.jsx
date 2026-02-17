import { useMemo,useEffect,useState } from "react";
import { tasksData, employeesData } from "../data";
import { fetchHolidays } from "../api/api";
function Overview(){
const today=new Date();
const [holidays, setHolidays] = useState([]);

const stats=useMemo(()=>{
    const totalEmployees=employeesData.length;
    const totalTasks=tasksData.length;
    const doneTasks=tasksData.filter((t)=>t.done).length;
     const pendingTasks = totalTasks - doneTasks;
     const overdueTasks=tasksData.filter((t)=>{
        if(t.done)return false;
        if(!t.dueDate)return false; 
        return new Date(t.dueDate)<today;
     }).length;
     const highPriorityTasks=tasksData.filter((t)=>t.priority==="عالية").length;
      return {
      totalEmployees,
      totalTasks,
      doneTasks,
      pendingTasks,
      overdueTasks,
      highPriorityTasks,
    };
  }, []);
  const recentTasks=useMemo(()=>{
    return[...tasksData]
    .sort((a,b)=>b.id-a.id)
    .slice(0, 5);
}, []);
  const getEmployeeName=(id)=>{
    const emp=employeesData.find((e)=>e.id===id);
    return emp?emp.name:"-";
  };
  useEffect(() => {
  fetchHolidays()
    .then((data) => setHolidays(data))
    .catch(() => console.log("Holiday API Error"));
}, []);
const nextHoliday = useMemo(() => {
  if (holidays.length === 0) return null;

  const today = new Date();

  return holidays.find(
    (h) => new Date(h.date) >= today
  );
}, [holidays]);





    return (
    <div className="overview-page">
      <div className="overview-hero">
        <h2 className="overview-title">نظرة عامة</h2>
        <p className="overview-subtitle">ملخص سريع عن الفريق والمهام</p>
      </div>
{nextHoliday && (
  <div className="overview-card highlight">
    <div className="overview-card-label">أقرب إجازة</div>
    <div className="overview-card-value">
      {nextHoliday.local_name}
    </div>
    <div className="overview-card-sub">
      {nextHoliday.date}
    </div>
  </div>
)}
      
      <div className="overview-cards">
        <div className="overview-card">
          <div className="overview-card-label">عدد الموظفين</div>
          <div className="overview-card-value">{stats.totalEmployees}</div>
        </div>

        <div className="overview-card">
          <div className="overview-card-label">إجمالي المهام</div>
          <div className="overview-card-value">{stats.totalTasks}</div>
        </div>

        <div className="overview-card">
          <div className="overview-card-label">المهام المنجزة</div>
          <div className="overview-card-value">{stats.doneTasks}</div>
        </div>
        <div className="overview-card">
          <div className="overview-card-label">المهام المتأخرة</div>
          <div className="overview-card-value">{stats.overdueTasks}</div>
        </div>

        <div className="overview-card">
          <div className="overview-card-label">أولوية عالية</div>
          <div className="overview-card-value">{stats.highPriorityTasks}</div>
        </div>

        <div className="overview-card">
          <div className="overview-card-label">قيد التنفيذ</div>
          <div className="overview-card-value">{stats.pendingTasks}</div>
        </div>
      </div>
       <div className="overview-section">
        <h3 className="overview-section-title">آخر المهام</h3>
        {recentTasks.length===0?(  <div className="overview-empty">لا توجد مهام حالياً</div>):(
          <ul className="overview-list">{recentTasks.map((t)=>(
            <li key={t.id}  className="overview-item">
              <div className="overview-item-main">
                 <span className="overview-item-title">{t.title}</span>
                  <span className="overview-item-sub">
  <span className="meta">الموظف: {getEmployeeName(t.employeeId)}</span>
  <span className="meta">الأولوية: {t.priority}</span>
  <span className="meta">التاريخ: {t.dueDate || "-"}</span>
</span>

              </div>
              <span className={t.done ? "overview-badge done" : "overview-badge pending"}>
                  {t.done ? "منجزة" : "قيد التنفيذ"}
                </span>
              </li>
          ))}</ul>
        )}
        </div>
        </div>
    
  );
}
export default Overview;