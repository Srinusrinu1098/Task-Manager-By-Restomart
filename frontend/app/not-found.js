// ❌ DO NOT add "use client"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <a href="/" className="mt-6 text-blue-600 underline">
        ⬅ Go back home
      </a>
    </div>
  );
}
