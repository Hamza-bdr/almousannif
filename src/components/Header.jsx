import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  BookOpen,
  GraduationCap,
  BookMarked,
  Users,
  School,
} from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "الرئيسية", path: "/", icon: BookOpen },
    { title: "منطقة المتعلم", path: "/learner-area", icon: GraduationCap },
    { title: "منطقة الأستاذ", path: "/teacher-area", icon: School },
    { title: "المكتبة", path: "/library", icon: BookMarked },
    { title: "من نحن؟", path: "/about", icon: Users },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <Logo />
          <div className="text-3xl font-bold text-primary mx-4">المصنف</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 space-x-reverse">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  className="nav-link flex items-center gap-2"
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>{" "}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href="#"
                  className="nav-link items-center gap-2 block py-2"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
