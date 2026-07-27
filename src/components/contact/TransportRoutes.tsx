import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { vanRoutes } from "@/data/contact";

export default function TransportRoutes() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title="Transport & Van Routes"
            description="Feeder routes for families spread across the city's industrial neighbourhoods."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Desktop / tablet table */}
          <div className="mt-8 hidden overflow-hidden rounded-sm sm:block">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#0f2b2e]">
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    Covers
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    Pickup Starts
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    Campus
                  </th>
                </tr>
              </thead>
              <tbody>
                {vanRoutes.map((route, idx) => (
                  <tr
                    key={route.id}
                    className={
                      idx !== vanRoutes.length - 1
                        ? "border-b border-[#0f2b2e]/8"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-[#0f2b2e]">
                      {route.route}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {route.covers}
                    </td>
                    <td className="px-6 py-4 font-mono text-sm font-bold text-[#0f2b2e]">
                      {route.pickupTime}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {route.campus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="mt-8 space-y-3 sm:hidden">
            {vanRoutes.map((route) => (
              <div key={route.id} className="rounded-sm bg-white p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0f2b2e]">
                    {route.route}
                  </p>
                  <span className="font-mono text-sm font-bold text-[#e15a2e]">
                    {route.pickupTime}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{route.covers}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-gray-400">
                  {route.campus} Campus
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}