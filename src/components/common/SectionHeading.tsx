interface SectionHeadingProps {
  title: string;
  description: string;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex items-start gap-4">
      <div>
        <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}