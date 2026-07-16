export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold">
        台客在清邁
      </h1>

      <div className="flex gap-6">
        <a href="#">房產</a>
        <a href="#">美食</a>
        <a href="#">旅遊</a>
        <a href="#">聯絡我</a>
      </div>
    </nav>
  );
}