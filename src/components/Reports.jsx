import { useMemo } from "react";
import { employeesData, tasksData } from "../data";
function Reports(){
const today=new Date();
const reportRows=useMemo(()=>{
    return employeesData.map((emp)=>
    {const empTasks=tasksData.filter((t)=>t.employeeId===emp.id)
       const total=empTasks.length;
        const done=empTasks.filter((t)=>t.done).length;
        const pending=total-done;

        const overdue=empTasks.filter((t)=>{
            if(t.done)return false;
            if(!t.dueDate) return false;
            return new Date(t.dueDate)<today;
        }).length;
        const percent=total===0?0:Math.round((done / total) * 100);
         return {
        id: emp.id,
        name: emp.name,
        department: emp.department,
        total,
        done,
        pending,
        overdue,
        percent,
      };
    });
},[]);
const topEmployee=useMemo(()=>{
    if(reportRows.length===0)return null;
    return[...reportRows].sort((a,b)=>b.percent-a.percent)[0]
    
},[reportRows]);

    return(
    <div className="reports-page">
      <div className="reports-hero">
        <h2 className="reports-title">التقارير</h2>
        <p className="reports-subtitle">مؤشرات أداء الفريق والمهام</p>
      </div>
       {topEmployee&&( 
        <div className="reports-highlight">
          <span className="reports-highlight-label">الأعلى إنجازًا:</span>
          <span className="reports-highlight-name">{topEmployee.name}</span>
          <span className="reports-highlight-percent">{topEmployee.percent}%</span></div> )}
            <div className="reports-table-wrap">
        <table className="reports-table">
                      <thead>
            <tr>
              <th>الموظف</th>
              <th>القسم</th>
              <th>الإجمالي</th>
              <th>المنجزة</th>
              <th>المتبقي</th>
              <th>نسبة الإنجاز</th>
            </tr>
          </thead>
          <tbody>{reportRows.map((row)=>(<tr key={row.id}>
              <td>{row.name}</td>
                <td>{row.department}</td>
                <td>{row.total}</td>
                <td>{row.done}</td>
                <td>{row.pending}</td>
                <td>
                     <div className="reports-progress">
                    <div className="reports-progress-bar">
                      <div
                        className="reports-progress-fill"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                     <span className="reports-progress-text">{row.percent}%</span>
                    </div>

                </td>
          </tr>))}
          </tbody>
        </table>

        </div>  
          {reportRows.length === 0 && (
          <div className="reports-empty">لا توجد بيانات لعرض التقارير.</div>
        )}
        </div> 
    );
}
export default Reports;