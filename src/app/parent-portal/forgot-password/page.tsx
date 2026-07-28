import Container from "@/components/common/Container";
import PageBanner from "@/components/layouts/PageBanner";
import ForgotPasswordForm from "@/components/parent-portal/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <>
      <PageBanner
        eyebrow="Parent & Student Portal"
        title="Forgot your password?"
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