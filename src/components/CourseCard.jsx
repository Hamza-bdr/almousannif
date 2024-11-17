/* eslint-disable react/prop-types */
export default function CourseCard({
  previewLink,
  title,
  driveLink,
  description,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <iframe
        src={previewLink}
        title={title}
        className="w-full h-48"
        loading="lazy"
      ></iframe>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          التنزيل من Drive
        </a>
      </div>
    </div>
  );
}
