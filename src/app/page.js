export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">

      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-700">🧶 HookNest</h1>
        <nav className="flex gap-6 text-amber-800 font-medium">
          <a href="#" className="hover:text-amber-500">خانه</a>
          <a href="/courses" className="hover:text-amber-500">دوره‌ها</a>
          <a href="#" className="hover:text-amber-500">درباره ما</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-8">
        <h2 className="text-5xl font-bold text-amber-800 mb-6">
          قلاب‌بافی رو از صفر یاد بگیر
        </h2>
        <p className="text-xl text-amber-700 mb-10 max-w-xl mx-auto">
          با HookNest، از مبتدی تا حرفه‌ای، قدم به قدم پیش برو
        </p>
        <a href="/courses" className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-600 transition">
          شروع یادگیری
        </a>
      </section>

      {/* Features */}
      <section className="grid grid-cols-3 gap-8 px-16 pb-24">
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-amber-800 mb-2">مناسب مبتدی</h3>
          <p className="text-amber-700">از صفر شروع کن، نیازی به تجربه قبلی نیست</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">📹</div>
          <h3 className="text-xl font-bold text-amber-800 mb-2">آموزش ویدیویی</h3>
          <p className="text-amber-700">درس‌های ویدیویی گام به گام و کاملاً فارسی</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-amber-800 mb-2">گواهینامه</h3>
          <p className="text-amber-700">بعد از هر دوره گواهینامه تکمیل دریافت کن</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-100 text-center py-6">
        <p>© ۱۴۰۴ HookNest — تمامی حقوق محفوظ است</p>
      </footer>

    </main>
  );
}