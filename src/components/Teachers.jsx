import Articles from "./Articles";

export default function Teachers() {
  const articles = [
    {
      title: "أساسيات العقيدة الإسلامية",
      excerpt:
        "تعرف على الركائز الأساسية للعقيدة الإسلامية وأهميتها في حياة المسلم",
      imageUrl:
        "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&auto=format&fit=crop&q=60",
      category: "العقيدة",
    },
    {
      title: "فقه العبادات للمرحلة الثانوية",
      excerpt: "شرح مفصل لأحكام الصلاة والصيام والزكاة والحج",
      imageUrl:
        "https://images.unsplash.com/photo-1608453162650-cba45689c284?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "الفقه",
    },
    {
      title: "السيرة النبوية",
      excerpt: "دروس وعبر من حياة النبي محمد صلى الله عليه وسلم",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/ar/7/77/SeeretIbenHisham.jpg",
      category: "السيرة",
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Articles articles={articles} />
    </div>
  );
}
