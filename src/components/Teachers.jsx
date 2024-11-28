export default function Teachers() {
  const articles = [
    {
      title: "وثائق مهمة",
      description: "مستندات وأدوات ضرورية في المجال التربوي",
      driveLink:
        "https://drive.google.com/drive/folders/16yjH4KjgUQJNRgORUVv_nrKpT3jOiq1V?usp=drive_link",
      category: "وثائق ومراجع إدارية",
    },
    {
      title: "التشريع",
      description: "قوانين وأنظمة متعلقة بالتعليم والتدريس",
      driveLink:
        "https://drive.google.com/drive/folders/1CPR-yibNbRkLzfDcEFBfxXWWpBe2ot-j?usp=sharing",
      category: "وثائق ومراجع إدارية",
    },
    {
      title: "نظريات التعلم",
      description: "ملخصات وأبحاث حول أساليب ونظريات التعلم",
      driveLink:
        "https://drive.google.com/drive/folders/1HjTVVYb2XIaPIXrTVPB2hddohqiVLR0x?usp=drive_link",
      category: "علوم التربية والتعلم",
    },
    {
      title: "علوم التربية",
      description: "دراسات ومقالات حول أسس التربية ومناهجها",
      driveLink:
        "https://drive.google.com/drive/folders/1svEXD8fb-TKe3T0FAfpAG7R7rmHJV5Co?usp=drive_link",
      category: "علوم التربية والتعلم",
    },
    {
      title: "ديداكتيك المادة",
      description: "شروحات ومنهجيات لتدريس المواد التعليمية",
      driveLink:
        "https://drive.google.com/drive/folders/1Z-X1AET8NYKWuPlD0nNbJt1i6pah3C96?usp=drive_link",
      category: "علوم التربية والتعلم",
    },
    {
      title: "مباراة المراكز",
      description: "موارد للتحضير لمباريات التوظيف التربوي",
      driveLink:
        "https://drive.google.com/drive/folders/1MD_WhzAM90dPW7WwMKBLUu4J-3-WU8aa?usp=drive_link",
      category: "الإعداد المهني والتطوير",
    },
    {
      title: "الامتحان المهني",
      description: "مواد تدريبية للتحضير للامتحانات المهنية",
      driveLink:
        "https://drive.google.com/drive/folders/1KfeYi36EwtNuqeqS5i24_OQnye1bT-h5?usp=drive_link",
      category: "الإعداد المهني والتطوير",
    },
    {
      title: "إصدارات تربوية",
      description: "كتب ودراسات حديثة في المجال التربوي",
      driveLink:
        "https://drive.google.com/drive/folders/1HpNwvnwZCLurhImemIxjwLeHEYzH0N8H?usp=drive_link",
      category: "الإعداد المهني والتطوير",
    },
    {
      title: "الحياة المدرسية",
      description: "أنشطة وتنظيم الحياة داخل المؤسسة التعليمية",
      driveLink:
        "https://drive.google.com/drive/folders/1RzjaDBhpYVtrYMBqkOXhalF5TM_X7LaN?usp=sharing",
      category: "الحياة المدرسية والتنظيم",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((book) => (
          <div
            key={book.id}
            className="bg-white justify-center rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-center text-teal-700">
              {book.title}
            </h2>
            <p className="text-gray-500 mt-2">المجال : {book.category}</p>
            <p className="text-gray-600 mt-4">{book.description}</p>
            <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors duration-300">
              <a
                href={book.driveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                عرض المزيد
              </a>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
