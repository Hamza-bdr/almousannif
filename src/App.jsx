import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Library from "./components/Library";
import Footer from "./components/Footer";
import Students from "./components/Students";
import Teachers from "./components/Teachers";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/منطقة-المتعلم" element={<Students />} />
          <Route path="/منطقة-الأستاذ" element={<Teachers />} />
          <Route path="/المكتبة" element={<Library />} />
          <Route path="/من-نحن" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
