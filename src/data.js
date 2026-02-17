export const employeesData = [
  { id: 1, name: "سارة الشراري", department: "التسويق", status: "نشط" },
  { id: 2, name: "نورة الحربي", department: "المبيعات", status: "نشط" },
  { id: 3, name: "ريم القحطاني", department: "الموارد البشرية", status: "إجازة" },
  { id: 4, name: "ميلاف العبدالله", department: "الدعم الفني", status: "نشط" },
  { id: 5, name: "شهد المطيري", department: "المالية", status: "نشط" },
  { id: 6, name: "أحمد الذيابي", department: "التسويق", status: "نشط" },
  { id: 7, name: "سارة الرشيدي", department: "المبيعات", status: "نشط" },
  { id: 8, name: "خالد القحطاني", department: "الدعم الفني", status: "إجازة" },
  { id: 9, name: "نورة الشراري", department: "الموارد البشرية", status: "نشط" },
  { id: 10, name: "محمد", department: "المالية", status: "نشط" },
  { id: 11, name: "ريم المطيري", department: "التسويق", status: "نشط" },
  { id: 12, name: "عبدالله الحربي", department: "المبيعات", status: "نشط" },
  { id: 13, name: "ليان الزهراني", department: "الدعم الفني", status: "نشط" },
  { id: 14, name: "يوسف الرشيدي", department: "المالية", status: "نشط" },
  { id: 15, name: "جود الغامدي", department: "الموارد البشرية", status: "إجازة" },
];



export const tasksData = [
  { id: 101, title: "تحديث محتوى حملة رمضان", employeeId: 1, priority: "عالية", dueDate: "2026-02-15", done: false },
  { id: 102, title: "تصميم بوستات إنستغرام", employeeId: 1, priority: "متوسطة", dueDate: "2026-02-10", done: false }, // متأخرة
  { id: 103, title: "مراجعة خطة المحتوى", employeeId: 1, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 104, title: "متابعة العملاء المحتملين", employeeId: 2, priority: "متوسطة", dueDate: "2026-02-13", done: true },
  { id: 105, title: "إرسال عروض أسعار", employeeId: 2, priority: "عالية", dueDate: "2026-02-16", done: false },
  { id: 106, title: "إغلاق صفقة جديدة", employeeId: 2, priority: "عالية", dueDate: "2026-02-14", done: true },

  { id: 107, title: "تحديث ملفات الموظفين", employeeId: 3, priority: "منخفضة", dueDate: "2026-02-20", done: false },
  { id: 108, title: "إعداد تقرير الموارد البشرية", employeeId: 3, priority: "متوسطة", dueDate: "2026-02-12", done: true },

  { id: 109, title: "حل تذاكر الدعم", employeeId: 4, priority: "عالية", dueDate: "2026-02-11", done: false }, // متأخرة
  { id: 110, title: "فحص النظام", employeeId: 4, priority: "متوسطة", dueDate: "2026-02-18", done: false },
  { id: 111, title: "إغلاق تذكرة عميل", employeeId: 4, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 112, title: "مراجعة الفواتير", employeeId: 5, priority: "عالية", dueDate: "2026-02-15", done: true },
  { id: 113, title: "مطابقة كشف البنك", employeeId: 5, priority: "متوسطة", dueDate: "2026-02-19", done: false },

  { id: 114, title: "إعداد حملة إعلانية", employeeId: 6, priority: "عالية", dueDate: "2026-02-22", done: false },
  { id: 115, title: "كتابة نص إعلان", employeeId: 6, priority: "متوسطة", dueDate: "2026-02-09", done: false }, // متأخرة
  { id: 116, title: "تحليل نتائج حملة", employeeId: 6, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 117, title: "متابعة عميل جديد", employeeId: 7, priority: "متوسطة", dueDate: "2026-02-17", done: false },
  { id: 118, title: "تحديث بيانات CRM", employeeId: 7, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 119, title: "حل مشكلة النظام", employeeId: 8, priority: "عالية", dueDate: "2026-02-10", done: false }, // متأخرة
  { id: 120, title: "متابعة أعطال السيرفر", employeeId: 8, priority: "عالية", dueDate: "2026-02-21", done: false },

  { id: 121, title: "جدولة مقابلات", employeeId: 9, priority: "متوسطة", dueDate: "2026-02-18", done: false },
  { id: 122, title: "تحديث عقود الموظفين", employeeId: 9, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 123, title: "إعداد تقرير مالي", employeeId: 10, priority: "عالية", dueDate: "2026-02-15", done: true },
  { id: 124, title: "مراجعة المصروفات", employeeId: 10, priority: "متوسطة", dueDate: "2026-02-20", done: false },

  { id: 125, title: "تصميم محتوى", employeeId: 11, priority: "متوسطة", dueDate: "2026-02-16", done: false },
  { id: 126, title: "تصميم ستوري", employeeId: 11, priority: "منخفضة", dueDate: "2026-02-14", done: true },

  { id: 127, title: "إغلاق صفقة", employeeId: 12, priority: "عالية", dueDate: "2026-02-19", done: false },
  { id: 128, title: "متابعة عرض سعر", employeeId: 12, priority: "متوسطة", dueDate: "2026-02-12", done: false }, // متأخرة

  { id: 129, title: "الرد على تذاكر الدعم", employeeId: 13, priority: "منخفضة", dueDate: "2026-02-14", done: true },
  { id: 130, title: "إغلاق تذاكر قديمة", employeeId: 13, priority: "متوسطة", dueDate: "2026-02-18", done: false },
];

