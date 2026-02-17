import { useMemo, useState } from "react";
import { employeesData } from "../data";

function Employees() {
  const [employees, setEmployees] = useState(employeesData);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("التسويق");
  const [status, setStatus] = useState("نشط");
  const [editId, setEditId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("الكل");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalEmployees = employees.length;

  const visibleEmployees = useMemo(() => {
    if (filterStatus === "الكل") return employees;
    return employees.filter((e) => e.status === filterStatus);
  }, [employees, filterStatus]);

  const openAddModal = () => {
    setEditId(null);
    setName("");
    setDepartment("التسويق");
    setStatus("نشط");
    setIsModalOpen(true);
  };

  const startEdit = (emp) => {
    setEditId(emp.id);
    setName(emp.name);
    setDepartment(emp.department);
    setStatus(emp.status);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditId(null);
    setName("");
    setDepartment("التسويق");
    setStatus("نشط");
  };

  const addEmployee = () => {
    const cleanName = name.trim();
    if (!cleanName) return;

    const newEmployee = {
      id: Date.now(),
      name: cleanName,
      department,
      status,
    };

    setEmployees([newEmployee, ...employees]);
    closeModal();
  };

  const saveEdit = () => {
    const cleanName = name.trim();
    if (!cleanName) return;

    setEmployees(
      employees.map((emp) =>
        emp.id === editId ? { ...emp, name: cleanName, department, status } : emp
      )
    );

    closeModal();
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleSubmit = () => {
    if (editId === null) addEmployee();
    else saveEdit();
  };

  return (
    <div className="employees-page">
      <div className="employees-hero">
        <h2 className="employees-title">الموظفين</h2>
        <p className="employees-subtitle">إدارة الموظفين</p>
      </div>

      <div className="employees-shell">
        <div className="employees-top">
          <div className="employees-stat">
            <span className="employees-stat-label">عدد الموظفين</span>
            <span className="employees-stat-value">{totalEmployees}</span>
          </div>

          <div className="employees-filter">
            <span className="employees-filter-label">تصفية:</span>
            <select
              className="employees-filter-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="الكل">الكل</option>
              <option value="نشط">نشط</option>
              <option value="إجازة">إجازة</option>
            </select>
          </div>

          <button className="employees-btn primary" onClick={openAddModal}>
            + إضافة موظف
          </button>
        </div>

        {visibleEmployees.length === 0 ? (
          <div className="employees-empty">لا يوجد موظفين بهذا الفلتر</div>
        ) : (
          <div className="employees-table-wrap">
            <table className="employees-table">
              <thead>
                <tr>
                  <th>الاسم</th>
                  <th>القسم</th>
                  <th>الحالة</th>
                  <th>إجراءات</th>
                </tr>
              </thead>

              <tbody>
                {visibleEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>
                      <span
                        className={
                          emp.status === "نشط"
                            ? "status-badge active"
                            : "status-badge leave"
                        }
                      >
                        {emp.status}
                      </span>
                    </td>

                    <td className="employees-actions">
                      <button
                        className="employees-btn small"
                        onClick={() => startEdit(emp)}
                      >
                        تعديل
                      </button>
                      <button
                        className="employees-btn small"
                        onClick={() => deleteEmployee(emp.id)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                {editId === null ? "إضافة موظف" : "تعديل موظف"}
              </h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <input
                className="employees-input"
                type="text"
                placeholder="اسم الموظف"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <select
                className="employees-select"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="التسويق">التسويق</option>
                <option value="المبيعات">المبيعات</option>
                <option value="الدعم الفني">الدعم الفني</option>
                <option value="الموارد البشرية">الموارد البشرية</option>
                <option value="المالية">المالية</option>
              </select>

              <select
                className="employees-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="نشط">نشط</option>
                <option value="إجازة">إجازة</option>
              </select>
            </div>

            <div className="modal-actions">
              <button className="employees-btn primary" onClick={handleSubmit}>
                {editId === null ? "إضافة" : "حفظ"}
              </button>
              <button className="employees-btn" onClick={closeModal}>
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
