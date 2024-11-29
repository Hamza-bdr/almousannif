// eslint-disable-next-line react/prop-types
export default function ArticleCard({ title, excerpt, imageUrl, category }) {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-accent font-semibold">{category}</span>
        <h3 className="text-xl font-bold mb-2 mt-1">{title}</h3>
        <p className="text-gray-600 text-sm">{excerpt}</p>
        {/* <button className="mt-4 text-primary font-semibold hover:text-secondary transition-colors duration-200">
          اقرأ المزيد ←
        </button> */}
      </div>
    </div>
  );
}
