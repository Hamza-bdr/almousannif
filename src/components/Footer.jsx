export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-4">
      <p className="text-lg">
        جميع الحقوق محفوظة © {new Date().getFullYear()} - منصة المصنف
      </p>
    </footer>
  );
}
