export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            台客在清邁
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden gap-10 text-sm font-medium text-gray-700 md:flex">
          <li><a href="#">房產</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">旅遊</a></li>
          <li><a href="#">生活</a></li>
          <li><a href="#">影音</a></li>
          <li><a href="#">關於我</a></li>
        </ul>

        {/* LINE Button */}
        <a
          href="#"
          className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
          加入 LINE 社群
        </a>

      </nav>
    </header>
  );
}