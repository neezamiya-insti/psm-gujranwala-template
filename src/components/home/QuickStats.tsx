import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { quickStats } from "@/data/stats";
import Counter from "@/components/common/Counter";

export default function QuickStats() {
  return (
    <section className="bg-[#f1efe9] pb-14 pt-16 sm:pt-20">
      <Container>
        <FadeUp>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
           The numbers that define our commitment to excellence.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 grid grid-cols-2 border-l border-t border-[#0f2b2e]/12 sm:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.id}
                className="border-b border-r border-[#0f2b2e]/12 px-6 py-8 sm:px-7"
              >
                <p className="text-3xl font-extrabold text-[#0f2b2e] sm:text-[2.15rem]">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}