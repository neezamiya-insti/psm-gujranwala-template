interface StatCardProps {
  value: string;
  label: string;
  variant?: "bordered" | "plain";
}

export default function StatCard({
  value,
  label,
  variant = "bordered",
}: StatCardProps) {
  return (
    <div
      className={
        variant === "bordered"
          ? "border-b border-r border-[#0f2b2e]/12 px-6 py-8 sm:px-7"
          : "px-6 py-8 sm:px-7"
      }
    >
      <p className="text-3xl font-extrabold text-[#e15a2e] sm:text-[2.15rem]">
        {value}
      </p>
      <p className="mt-2 text-sm text-gray-500">{label}</p>
    </div>
  );
}