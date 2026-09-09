import { pageMetadata, site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
export const metadata = pageMetadata(
  "Website Privacy Policy",
  "How the Skout Labs company website handles information, email enquiries and third-party services.",
  "/privacy",
);
export default function Privacy() {
  return (
    <section className="section">
      <Container className="legal-page">
        <p className="eyebrow">THE COMPANY WEBSITE</p>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: 9 September 2026</p>
        <p className="lede">
          This policy applies to the SKOUT LABS company website only. Individual
          Skout applications may have separate privacy policies describing their
          own practices.
        </p>
        <h2>Information We Collect</h2>
        <p>
          This website does not require accounts, provide a contact form or
          intentionally collect personal information through forms or tracking
          tools.
        </p>
        <p>
          If you choose to email us, we receive your email address and any
          information you include in your message. We use that information to
          respond to your enquiry and manage related correspondence. Please only
          share information relevant to your enquiry.
        </p>
        <h2>Cookies</h2>
        <p>
          The website itself does not currently set cookies for analytics,
          advertising or tracking. If this changes, we will update this policy
          to describe the changes.
        </p>
        <h2>Third-Party Services</h2>
        <p>
          Our hosting provider may process technical information, such as IP
          addresses, browser details and request logs, to deliver and secure the
          website. The provider’s own policies also apply to that processing.
        </p>
        <p>
          Fonts are hosted with the website. We do not currently embed analytics
          or advertising services. Email sent to our Gmail address is handled
          through Google’s email service and your chosen email provider.
        </p>
        <h2>Links to Other Websites</h2>
        <p>
          This website may link to external websites or application stores.
          Their privacy practices are governed by their own policies. Review
          those policies when visiting them.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy questions or requests concerning information you have
          shared with us, email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Changes to this Policy</h2>
        <p>
          We may update this policy as the website changes. The date above shows
          when it was last revised.
        </p>
      </Container>
    </section>
  );
}
