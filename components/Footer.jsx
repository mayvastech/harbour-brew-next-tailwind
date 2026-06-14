export default function Footer() {
  return (
    <footer className="border-t border-orange-950/10 bg-orange-950 px-5 py-10 text-orange-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black">Harbour Brew Coffee</p>
          <p className="mt-1 text-sm text-orange-50/70">Portfolio demonstration project. Not a real business.</p>
        </div>
        <p className="text-sm text-orange-50/70">Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
