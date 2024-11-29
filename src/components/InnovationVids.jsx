export default function InnovationVids() {
  const vids = [
    {
      title: "اليوم العالمي الوقاية المدنية",
      driveLink:
        "https://drive.google.com/file/d/1zisyOnDT4uKS_3Uux2rZGqWR4e3191y0/preview",
    },
    {
      title: "اليوم العالمي للمرأة مسرحية",
      driveLink:
        "https://drive.google.com/file/d/1rj8qiOc6lvF7cRjiAfD-0XuIxsuAFxzo/preview",
    },
    {
      title: "اليوم العالمي لمرأة",
      driveLink:
        "https://drive.google.com/file/d/1cAQ8FCo67gb_pMG3d_O5u3HOY5dFncvL/preview",
    },
    {
      title: "زيارة الوفد الانجليزي للمؤسسة",
      driveLink:
        "https://drive.google.com/file/d/1WVi5Z37oBQWTPGcmVJ_PCCQzB37TdCwF/preview",
    },
    {
      title: "لقاء صحفي للتلاميذ سلامة طرقية 2019",
      driveLink:
        "https://drive.google.com/file/d/1yp5dIqW73h-90rwMwoKD_sEFTcy_g__y/preview",
    },
    {
      title: "إفطار جماعي أولى مع الصور باك",
      driveLink:
        "https://drive.google.com/file/d/1WiEg-QBctJnCbFIHb2_88LWrqFodEwGR/preview",
    },
    {
      title: "السلامة الطرقية 2021",
      driveLink:
        "https://drive.google.com/file/d/1l9dsJLi6hwGCANqdhmaswb-e3_h8Fzn7/preview",
    },
    {
      title: "فيديو تقرير نشاط المجموعات البؤرية ثانوية رياض الزاهية",
      driveLink:
        "https://drive.google.com/file/d/16SUI2YboLPz-ZQkbT7CRwHOWa9Vq_C7P/preview",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-teal-600">
          من إبداعات المتعلمين
        </h1>
        <p className="text-gray-600 mt-2">
          مجموعة من أشرطة الفيديو في مجال التربية
        </p>
      </header>

      <div className="bg-gray-100 min-h-screen">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vids.map((vid) => (
                <div className="article-card" key={vid.title}>
                  <iframe
                    className="w-full h-64"
                    src={vid.driveLink}
                    frameBorder="0"
                    allow="fullscreen"
                  ></iframe>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 mt-1">{vid.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="flex justify-center text-xl m-auto bg-primary text-white  px-8 py-3 mt-10 rounded-lg w-52 font-semibold hover:bg-opacity-90 transition-colors duration-200">
            <a
              href={
                "https://drive.google.com/drive/folders/1F6ZWkd-By_T4l6rGjeAFdeA5Hplw4nmo?usp=drive_link"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              المزيد
            </a>
          </button>
        </section>
      </div>
    </div>
  );
}
