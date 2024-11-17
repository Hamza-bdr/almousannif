/* eslint-disable react/prop-types */
import CourseCard from "./CourseCard";

export default function Courses({ title, courses }) {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        دروس {title}
      </h1>
      <div
        dir="rtl"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
