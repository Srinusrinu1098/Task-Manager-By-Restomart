"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const tasksList = [
    { name: "Tasks", route: "/home" },
    { name: "Create Task", route: "/add" },
    { name: "Delete Task", route: "/delete" },
  ];

  return (
    <nav className="w-full bg-white shadow px-4 py-3">
      <div className="max-w-7xl mx-auto md:flex items-center justify-between">
        <div className="flex justify-between w-full">
          <Link href="/">
            <h1 className="text-xl font-bold text-gray-800">Task Manager</h1>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full flex justify-end md:flex md:items-center md:w-auto`}
        >
          <div className="flex flex-col justify-between md:flex-row md:space-x-4 mt-4 md:mt-0">
            {tasksList.map((tab, i) => (
              <Link href={tab.route} key={i} onClick={() => setIsOpen(false)}>
                <div
                  className={`flex justify-center items-center border border-black h-[20px] w-[100px] md:h-[40px] px-4 rounded-2xl cursor-pointer mb-2 md:mb-0 ${
                    pathname === tab.route
                      ? "bg-gray-800 text-white"
                      : "text-gray-800"
                  }`}
                >
                  <p className="text-[8px] md:text-[12px]">{tab.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
