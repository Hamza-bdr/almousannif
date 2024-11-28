import Books from "./Books";
export default function Library() {
  const books = [
    {
      id: 1,
      title: "التفسير الميسر لسورة يوسف",
      imageUrl:
        "https://drive.google.com/file/d/1xEZA9LzM0Lyw-zk6KSSvpdMtJyCe9I8b/preview",
      driveLink:
        "https://drive.google.com/file/d/1xEZA9LzM0Lyw-zk6KSSvpdMtJyCe9I8b/view?usp=drive_link",
    },
    {
      id: 2,
      title: "التفسير التربوي لسورة يوسف",
      imageUrl:
        "https://drive.google.com/file/d/1RIRhLPWZ6ttzcDHtAYYyPxPt3g99lXPJ/preview",
      driveLink:
        "https://drive.google.com/file/d/1RIRhLPWZ6ttzcDHtAYYyPxPt3g99lXPJ/view?usp=sharing",
    },
    {
      id: 3,
      title: "القيادة اليوسفية و المنظومة القيمية ",
      imageUrl:
        "https://drive.google.com/file/d/1UfT7OhDYzeng6Z49Kny5bw6r3eaYGogj/preview",
      driveLink:
        "https://drive.google.com/file/d/1UfT7OhDYzeng6Z49Kny5bw6r3eaYGogj/view?usp=drive_link",
    },
    {
      id: 4,
      title: "الأثار التربوي لضرب الأمثال في القران الكريم",
      imageUrl:
        "https://drive.google.com/file/d/1jcqoVYzJ1qfBEjrLdLC78J_H5p4-tPXr/preview",
      driveLink:
        "https://drive.google.com/file/d/1jcqoVYzJ1qfBEjrLdLC78J_H5p4-tPXr/view?usp=drive_link",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-600">المكتبة الإسلامية</h1>
        <p className="text-gray-600 mt-2">
          مجموعة من الكتب المفيدة في مجال التربية الإسلامية
        </p>
      </header>

      {/* Book List */}
      <div className="bg-gray-100 min-h-screen p-6">
        <Books books={books} />
      </div>
    </div>
  );
}
