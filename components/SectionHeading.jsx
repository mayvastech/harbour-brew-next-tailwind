export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-orange-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-orange-950/70">{description}</p>
    </div>
  );
}
