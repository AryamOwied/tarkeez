import { useMemo, useState,useEffect } from "react";
import { tasksData, employeesData } from "../data";
import { createPortal } from "react-dom";

function Tasks() {
  const [tasks, setTasks] = useState(tasksData);
  const [title, setTitle] = useState("");
  const [employeeId, setEmployeeId] = useState(employeesData?.[0]?.id || 1);
  const [priority, setPriority] = useState("متوسطة");
  const [dueDate, setDueDate] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  useEffect(() => {
  if (isAddOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isAddOpen]);


  const addTask = () => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    const newTask = {
      id: Date.now(),
      title: cleanTitle,
      employeeId: Number(employeeId),
      priority,
      dueDate,
      done: false
    };

    setTasks([newTask, ...tasks]);
    setTitle("");
    setPriority("متوسطة");
    setDueDate("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };
  const toggleTask = () => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, done: !taskdone } : task));
  };
  const clearDone = () => {
    setTasks(tasks.filter((t) => !t.done));
  };
  const totalCount = tasks.length;
  const doneCount = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);

  const leftCount = totalCount - doneCount;
  const progress = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);
  const getEmployeeName = (id) => {
    const emp = employeesData.find((e) => e.id === id);
    return emp ? emp.name : "غير معروف";
  };



  return (
    <div className="tasks-page">
      <div className="tasks-hero">
        <h2 className="tasks-title">إدارة المهام</h2>
         <p className="tasks-subtitle">عرض وإدارة مهام الموظفين</p>
      </div>
      <div className="tasks-shell">
        <div className="tasks-top">
          <div className="tasks-stats">
            <div className="stat">
              <span className="stat-label">الإجمالي</span>
              <span className="stat-value">{totalCount}</span>
            </div>
            <div className="stat"><span className="stat-label">المنجزة</span>
              <span className="stat-value">{doneCount}</span> </div>

            <div className="stat"> <span className="stat-label">المتبقي</span>
              <span className="stat-value">{leftCount}</span> </div>

          </div>
          <div className="tasks-progress">
            <div className="progress-head">
              <span className="progress-title">تقدم الإنجاز</span>
              <span className="progress-percent">{progress}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
       <button className="task-add-btn" onClick={() => setIsAddOpen(true)}>
  + إضافة مهمة
</button>

{isAddOpen &&
  createPortal(
    <div className="modal-overlay" onClick={() => setIsAddOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">إضافة مهمة</h3>
          <button className="modal-close" onClick={() => setIsAddOpen(false)}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <label className="field-label">عنوان المهمة</label>
          <input
            className="modal-input"
            type="text"
            placeholder="اكتب مهمة جديدة…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />

          <label className="field-label">الموظف</label>
          <select
            className="modal-input"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          >
            {employeesData.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>

          <div className="modal-grid">
            <div>
              <label className="field-label">الأولوية</label>
              <select
                className="modal-input"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="عالية">عالية</option>
                <option value="متوسطة">متوسطة</option>
                <option value="منخفضة">منخفضة</option>
              </select>
            </div>

            <div>
              <label className="field-label">التاريخ</label>
              <input
                className="modal-input"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-btn" onClick={() => setIsAddOpen(false)}>
            إلغاء
          </button>
          <button
            className="modal-btn primary"
            onClick={() => {
              addTask();
              setIsAddOpen(false);
            }}
          >
            إضافة
          </button>
        </div>
      </div>
    </div>,
    document.body
  

)}

          
          <button
            className="tasks-clear-btn"
            onClick={clearDone}
            disabled={doneCount === 0}
            
          >
             حذف المهام المنجزة
          </button>
            
        
          
          { tasks.length===0?( 
            <div className="tasks-empty">لا توجد مهام حالياً</div>):
            (<ul className="task-list">{tasks.map((task)=>(
            <li key={task.id} className={`task-item ${task.done? "done":""}`}>
             <button className="task-check" onClick={()=>toggleTask(task.id)} >{task.done?"✓" : "○"}</button>
                <div className="task-body">
                  <span
                    className="task-text"
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.title}
                  </span>
                   <div className="task-meta"> 
                    <span>    الموظف  : {getEmployeeName(task.employeeId)}</span>
                    <span>   الأولوية  : {task.priority}</span>
                    <span>   التاريخ  :  {task.dueDate || "-"}</span>
                   </div>

                  </div>
                     <button
                  className="task-delete"
                  onClick={() => deleteTask(task.id)}
                >
                  حذف
                </button>
            </li>))}</ul>)}
          
      </div>
    </div>

  )
}

export default Tasks;