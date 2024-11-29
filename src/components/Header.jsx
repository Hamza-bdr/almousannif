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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { title: "الرئيسية", path: "/", icon: BookOpen },
    {
      title: "فضاء المتعلم",
      path: "/فضاء-المتعلم",
      icon: GraduationCap,
      sub: ["دروس و تمارين", "من إبداعات المتعلمين"],
    },
    { title: "فضاء الأستاذ", path: "/فضاء-الأستاذ", icon: School },
    { title: "المكتبة", path: "/المكتبة", icon: BookMarked },
    { title: "من نحن؟", path: "/من-نحن", icon: Users },
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
              return item.sub ? (
                <div key={item.path} className="relative">
                  <div
                    onClick={toggleDropdown}
                    className="nav-link flex items-center gap-2 text-black cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>

                  {/* Menu déroulant */}
                  {isOpen && (
                    <div className="absolute mt-2 bg-white border rounded shadow-lg w-40">
                      <Link
                        to="/دروس-و-تمارين"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                        onClick={toggleDropdown}
                      >
                        {item.sub[0]}
                      </Link>
                      <Link
                        to="/من-إبداعات-المتعلمين"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                        onClick={toggleDropdown}
                      >
                        {item.sub[1]}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
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
                <Link
                  className="nav-link flex items-center gap-2"
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
