// import { BookOpen } from "lucide-react";
import logo from "../assets/The-logo.png"; // Ajustez le chemin si nécessaire

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-primary to-secondary text-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* <BookOpen className="w-16 h-16 mx-auto mb-6" /> */}
        <img
          src={logo}
          alt="Logo"
          className="shadow-lg rounded-lg max-w-xs max-h-xs mx-auto mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          مرحبًا بكم في منصة المصنف
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          منصتكم التعليمية المخصصة لتعليم التربية الإسلامية لطلاب المرحلة
          الثانوية!
        </p>
        <button className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200">
          ابدأ التعلم الآن
        </button>
      </div>
    </div>
  );
}
