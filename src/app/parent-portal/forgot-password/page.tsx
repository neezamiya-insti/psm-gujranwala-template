import Container from "@/components/common/Container";
import PageBanner from "@/components/layouts/PageBanner";
import ForgotPasswordForm from "@/components/parent-portal/ForgotPasswordForm";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function ForgotPasswordPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "والدین اور طلبہ پورٹل" : "Parent & Student Portal"}
        title={lang === "UR" ? "پاس ورڈ بھول گئے؟" : "Forgot your password?"}
      />
      <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-md">
            <ForgotPasswordForm />
          </div>
        </Container>
      </section>
    </>
  );
}