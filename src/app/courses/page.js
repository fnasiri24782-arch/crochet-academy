const courses = [
  {
    id: 1,
    title: "قلاب‌بافی از صفر",
    level: "مبتدی",
    lessons: 12,
    emoji: "🌱",
    description: "اگه هیچ تجربه‌ای نداری از اینجا شروع کن",
  },
  {
    id: 2,
    title: "بافت پایه‌های اصلی",
    level: "مبتدی",
    lessons: 8,
    emoji: "🧵",
    description: "زنجیره، پایه کوتاه، پایه بلند و بیشتر",
  },
  {
    id: 3,
    title: "ساخت عروسک آمیگورومی",
    level: "متوسط",
    lessons: 15,
    emoji: "🐻",
    description: "یاد بگیر چطور عروسک‌های پارچه‌ای بسازی",
  },
  {
    id: 4,
    title: "بافت کیف و کوله",
    level: "متوسط",
    lessons: 10,
    emoji: "👜",
    description: "پروژه‌های کاربردی برای زندگی روزمره",
  },
  {
    id: 5,
    title: "طراحی پترن اختصاصی",
    level: "پیشرفته",
    lessons: 18,
    emoji: "✏️",
    description: "پترن‌های خودت رو از صفر طراحی کن",
  },
  {
    id: 6,
    title: "بافت لباس و اکسسوری",
    level: "پیشرفته",
    lessons: 20,
    emoji: "👗",
    description: "شال، کلاه، دستکش و لباس‌های قلاب‌بافی",
  },
];

const levelColor = {
  "مبتدی": "bg-green-100 text-green-700",
  "متوسط": "bg-yellow-100 text-yellow-700",
  "پیشرفته": "bg-red-100 text-red-700",
};

export default function Courses() {
  return (
    <main className="min-h-screen bg-amber-50">

      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-amber-700">🧶 HookNest</a>
        <nav className="flex gap-6 text-amber-800 font-medium">
          <a href="/" className="hover:text-amber-500">خانه</a>
          <a href="/courses" className="text-amber-500">دوره‌ها</a>
          <a href="#" className="hover:text-amber-500">درباره ما</a>
        </nav>
      </header>

      {/* Title */}
      <section className="text-center py-16 px-8">
        <h2 className="text-4xl font-bold text-amber-800 mb-4">دوره‌های آموزشی</h2>
        <p className="text-amber-700 text-lg">از مبتدی تا پیشرفته، مسیر یادگیریت رو انتخاب کن</p>
      </section>

      {/* Courses Grid */}
      <section className="grid grid-cols-3 gap-8 px-16 pb-24">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4">{course.emoji}</div>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${levelColor[course.level]}`}>
              {course.level}
            </span>
            <h3 className="text-xl font-bold text-amber-800 mt-4 mb-2">{course.title}</h3>
            <p className="text-amber-700 mb-4">{course.description}</p>
            <p className="text-sm text-amber-500">{course.lessons} درس</p>
            <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-xl font-medium hover:bg-amber-600 transition">
              مشاهده دوره
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-100 text-center py-6">
        <p>© ۱۴۰۴ HookNest — تمامی حقوق محفوظ است</p>
      </footer>

    </main>
  );
}