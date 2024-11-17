export default function Library() {
  const books = [
    {
      id: 1,
      title: "التربية الإسلامية وأهميتها",
      author: "محمد أحمد",
      description: "كتاب يتناول أهمية التربية الإسلامية في بناء شخصية الإنسان.",
    },
    {
      id: 2,
      title: "القيم والأخلاق في الإسلام",
      author: "عائشة علي",
      description:
        "يتحدث هذا الكتاب عن القيم والأخلاق الإسلامية وأثرها في المجتمع.",
    },
    {
      id: 3,
      title: "القرآن الكريم وتفسيره",
      author: "عبد الرحمن حسن",
      description: "مرجع شامل يشرح تفسير الآيات بأسلوب بسيط.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-600">المكتبة الإسلامية</h1>
        <p className="text-gray-600 mt-2">
          مجموعة من الكتب المفيدة للطلاب في مجال التربية الإسلامية
        </p>
      </header>

      {/* Book List */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-teal-700">
              {book.title}
            </h2>
            <p className="text-gray-500 mt-2">المؤلف: {book.author}</p>
            <p className="text-gray-600 mt-4">{book.description}</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-300">
              عرض المزيد
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
