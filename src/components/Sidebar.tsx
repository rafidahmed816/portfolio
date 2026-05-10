"use client";

import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

const navItems: { id: SectionKey; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
  { id: "blog", label: "Blog" },
];

interface SidebarProps {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}

type SectionKey =
  | "about"
  | "experience"
  | "projects"
  | "research"
  | "skills"
  | "contact"
  | "blog";

export function Sidebar({
  activeSection,
  onSectionChange,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <>
      <button
        className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-(--sidebar-bg) border border-(--border) lg:hidden"
        onClick={() => setSidebarOpen?.(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <aside
        className={`w-64 min-h-screen bg-(--sidebar-bg) border-r border-(--border) flex flex-col p-6 fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-(--border) relative">
            <Image
              src="/assets/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <h1 className="text-2xl font-semibold">Rafid Ahmed</h1>
          <p className="text-sm opacity-70">AI/ML | App Developer</p>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-xl ${activeSection === item.id ? "bg-(--hover) font-medium" : "hover:bg-(--hover)"}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4 border-t border-(--border)">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
