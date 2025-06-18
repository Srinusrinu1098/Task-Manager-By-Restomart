import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center m-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🧩 Task Manager
        </h1>
        <p className="text-gray-600 mb-8">
          Manage all your tasks from one place.
        </p>

        <div className=" flex flex-col space-y-4">
          <Link href={"/home"}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 px-4 rounded-xl transition">
              All Tasks
            </button>
          </Link>
          <Link href={"/delete"}>
            <button className="w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white py-2 px-4 rounded-xl transition">
              Delete Task
            </button>
          </Link>
          <Link href={"/home"}>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-white py-2 px-4 rounded-xl transition">
              Update Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
