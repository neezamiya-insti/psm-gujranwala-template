import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import QuickContact from "./ContactCards";
import MessageForm from "./MessageForm";

export default function ContactSection() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>

        <FadeUp>
          <SectionHeading
            title="Get In Touch"
            description="Have questions? Reach out to our team or send us a message."
          />
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-0 items-stretch">

          {/* Left */}
          <QuickContact />

          {/* Right */}
          <FadeUp delay={0.1}>
            <MessageForm />
          </FadeUp>

        </div>

      </Container>
    </section>
  );
}