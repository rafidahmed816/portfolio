"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import {
  About,
  Experience,
  Projects,
  Research,
  Skills,
  Contact,
  Blog,
} from "@/components/sections";

type SectionKey = "about" | "experience" | "projects" | "research" | "skills" | "contact" | "blog";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "research":
        return <Research />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      case "blog":
        return <Blog />;
      default:
        return <About />;
    }
  };

  const handleSectionChange = (section: SectionKey) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <main className="flex-1 overflow-y-auto bg-(--background)">
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 pl-14 lg:pl-8">
            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-0">{renderSection()}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
