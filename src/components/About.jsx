export default function About() {
  return (
    <div className="font-sans min-h-screen leading-relaxed text-gray-800 bg-gray-100">
      {/* Main Section */}
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-teal-600 text-xl font-semibold mb-4">من نحن</h2>
        <p className="mb-6">
          هذا الموقع مخصص لطلاب المرحلة الثانوية، يقدم محتوى تعليميًا شاملًا في
          مادة التربية الإسلامية. هدفنا هو مساعدة الطلاب على فهم المفاهيم
          الأساسية وتعزيز مهاراتهم في المجال الديني والأخلاقي.
        </p>

        <h2 className="text-teal-600 text-xl font-semibold mb-4">رؤيتنا</h2>
        <p className="mb-6">
          أن نصبح مصدرًا موثوقًا لدعم العملية التعليمية في التربية الإسلامية،
          وتعزيز فهم الطلاب للقيم والمبادئ الإسلامية بطريقة مبسطة وعصرية.
        </p>

        <h2 className="text-teal-600 text-xl font-semibold mb-4">اتصل بنا</h2>
        <p>
          إذا كان لديك أي استفسار أو اقتراح، لا تتردد في التواصل معنا عبر بريدنا
          الإلكتروني:
          <a
            href="mailto:meriam.mousannif@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mariam.mousannif@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
