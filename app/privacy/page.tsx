// app/privacy/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Driveway Gates Kent collects, uses, and shares your personal data under UK GDPR.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '16 July 2026';

// Helper to keep the H2 pattern consistent across sections.
function LegalH2({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight text-gray-900 mt-10 mb-3 flex items-baseline gap-3">
      <span className="text-sm text-brand-500 font-semibold tracking-wider">{n}</span>
      <span>{children}</span>
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <section className="bg-gray-50 border-b border-gray-200">
          <div className="container-width py-12 md:py-16">
            <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
            <div className="max-w-3xl mt-6">
              <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-900 leading-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container-width py-10 md:py-14">
            <div className="max-w-3xl text-[15px] leading-relaxed text-gray-700 space-y-4 [&_a]:text-brand-600 [&_a]:underline hover:[&_a]:text-brand-800">

              <LegalH2 n="1">Who we are</LegalH2>
              <p>
                This website, Driveway Gates Kent (drivewaygateskent.co.uk), operates under the
                trading name &apos;Driveway Gates Kent&apos;. We are an independent matching
                service, not a gate installation company. We connect homeowners in Kent with
                independent, third-party gate installers who carry out any work you agree with
                them.
              </p>

              <LegalH2 n="2">What data we collect</LegalH2>
              <p>When you submit an enquiry through our lead form, we collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your full name</li>
                <li>Your email address</li>
                <li>Your phone number</li>
                <li>Your Kent town or postcode</li>
                <li>The type of gate service you are interested in</li>
                <li>The page URL where you submitted the enquiry</li>
              </ul>
              <p>
                If you accept analytics cookies, we also collect standard analytics data through
                Google Analytics, including anonymised IP address, browser type, device type,
                pages visited, referral source, and session duration. Analytics data is used to
                understand site traffic in aggregate and is not used to identify individual
                users.
              </p>

              <LegalH2 n="3">How we use your data</LegalH2>
              <p>We use the personal data you submit through the lead form to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Identify suitable gate installers in our network for your specific project</li>
                <li>Share your details with those installers so they can contact you directly</li>
                <li>Send you occasional follow-up communication about your enquiry</li>
              </ul>
              <p>
                The lawful basis for this processing is your consent, which you give by
                submitting the enquiry form. You can withdraw consent at any time by contacting
                us (see section 9).
              </p>

              <LegalH2 n="4">Who we share your data with</LegalH2>
              <p>
                When you submit an enquiry, your details are shared with one or more independent
                UK gate installers in our network who we judge are the best match for your
                project. Each installer operates as an independent business and becomes a
                separate data controller for your data once they receive it.
              </p>
              <p>
                We do not sell your data to third parties. We do not share it with anyone
                outside the matched installer or installers. We do not pass your data to
                marketing lists.
              </p>
              <p>
                We use Google Sheets (via a Google Apps Script webhook) to record incoming
                enquiries, and Google Analytics to measure site traffic. Google may process this
                data on servers outside the United Kingdom and European Economic Area, subject
                to standard contractual clauses.
              </p>

              <LegalH2 n="5">How long we keep your data</LegalH2>
              <p>
                Lead form submissions are retained for 24 months to allow us to respond to any
                follow-up enquiries and to reconcile referrals with installers in our network.
                After 24 months, the data is deleted from our records.
              </p>
              <p>
                You can request earlier deletion at any time. Once deleted from our records,
                your data may still be held by any installer to whom it was passed, subject to
                their own retention policy.
              </p>

              <LegalH2 n="6">Your rights under UK GDPR</LegalH2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of any inaccurate data</li>
                <li>Request deletion of your data (right to be forgotten)</li>
                <li>Object to or restrict processing</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Commissioner&apos;s Office (ico.org.uk)</li>
              </ul>
              <p>
                To exercise any of these rights, contact us as set out in section 9. We will
                respond within one month.
              </p>

              <LegalH2 n="7">Cookies</LegalH2>
              <p>
                Google Analytics cookies are set only if you click Accept on the cookie banner.
                If you reject them or ignore the banner, no analytics cookies are set. Your
                choice is stored in your browser so we do not ask again on every visit. You can
                clear it at any time by deleting this site&apos;s data in your browser settings,
                and you can block cookies entirely through your browser.
              </p>

              <LegalH2 n="8">Changes to this policy</LegalH2>
              <p>
                We may update this policy from time to time. The last updated date at the top of
                this page reflects the most recent change. We recommend checking back
                periodically if you have a live enquiry with us.
              </p>

              <LegalH2 n="9">Contact</LegalH2>
              <p>
                To ask about this privacy policy, or to exercise any of your data protection
                rights, submit the enquiry form on this site with your name and email address
                and state that your message is a privacy request. We will reply by email to the
                address you provide.
              </p>

              <div className="mt-12 pt-6 border-t border-gray-200 flex gap-6 text-[13px]">
                <Link href="/services/" className="text-brand-600 hover:text-brand-800 transition-colors">Services</Link>
                <Link href="/" className="text-brand-600 hover:text-brand-800 transition-colors">Home</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
