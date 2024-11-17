/* eslint-disable react/prop-types */
export default function CourseCard({ title, driveLink }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          {title}
        </h3>
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          الرابط
        </a>
      </div>
    </div>
  );
}
