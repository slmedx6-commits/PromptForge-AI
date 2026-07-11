export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b">
      <h1 className="text-2xl font-bold text-blue-600">
        PromptForge AI
      </h1>

      <div className="flex gap-6">
        <a href="/">PromptForge AI</a>
      </div>

      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
        Sign In
      </button>
    </nav>
  );
}