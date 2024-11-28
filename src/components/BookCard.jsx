// eslint-disable-next-line react/prop-types
export default function BookCard({ title, imageUrl, driveLink }) {
  return (
    <div className="article-card">
      <iframe src={imageUrl} className="w-full h-72" allow="autoplay"></iframe>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 mt-1">{title}</h3>
        <button className="mt-4 text-primary font-semibold hover:text-secondary transition-colors duration-200">
          <a href={driveLink} target="_blank" rel="noopener noreferrer">
            اقرأ المزيد ←
          </a>
        </button>
      </div>
    </div>
  );
}
