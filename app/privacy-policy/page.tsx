import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Privacy Policy: How We Protect Your Data | SwiftBilling RCM',
    description: 'Privacy Policy for SwiftBilling RCM: how we collect, use, and protect your information when you visit our website or contact us about our services.',
    path: '/privacy-policy',
  }),
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 17, 2026'
const COMPANY = 'SwiftBilling RCM'
const EMAIL = 'info@swiftbillingrcm.com'
const PHONE = '+1 (512) 737-7488'
const ADDRESS = '5900 Balcones Dr #7192, Austin, TX 78731'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F2F6FA]">
      <Nav />

      {/* Header */}
      <div id="main-content" className="bg-[#0B3C5D] text-white py-12 px-6 pt-[100px]">
        <div className="max-w-[800px] mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#2EC4B6] text-sm font-semibold mb-6 hover:opacity-80 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.5 3L5.5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to SwiftBilling RCM
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E4EDF5] p-8 sm:p-12 space-y-8 text-[15px] text-[#334155] leading-[1.8]">

          <section>
            <p>
              {COMPANY} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              at <strong>www.swiftbillingrcm.com</strong> or contact us regarding our medical billing and revenue
              cycle management services.
            </p>
            <p className="mt-4">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">1. Information We Collect</h2>
            <h3 className="text-[15px] font-bold text-[#0F172A] mb-2">Information You Provide Directly</h3>
            <p>When you submit our contact or consultation form, we collect:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Practice or organization name</li>
              <li>Medical specialty</li>
              <li>Message or billing challenge description</li>
            </ul>

            <h3 className="text-[15px] font-bold text-[#0F172A] mt-5 mb-2">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>IP address and general geographic location</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URL</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>
            <p className="mt-3">
              This data is collected via <strong>Google Analytics</strong> (see Section 5 below).
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Respond to your inquiry and provide a free revenue cycle audit</li>
              <li>Send you a confirmation email acknowledging receipt of your message</li>
              <li>Communicate with you about our medical billing services</li>
              <li>Improve our website content and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or share your personal information with third parties for
              their marketing purposes.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">3. HIPAA Notice</h2>
            <p>
              Our website contact form is designed for <strong>business inquiries only</strong>, not for the
              transmission of Protected Health Information (PHI). Please do not submit any patient names,
              diagnoses, insurance IDs, dates of service, or other PHI through the website contact form.
            </p>
            <p className="mt-3">
              When you engage {COMPANY} as a medical billing service provider, a <strong>Business Associate
              Agreement (BAA)</strong> is signed before any PHI is accessed or processed. All PHI shared within
              the scope of our services is handled in compliance with the Health Insurance Portability and
              Accountability Act of 1996 (HIPAA) and its implementing regulations.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">4. How We Share Your Information</h2>
            <p>We may share your information with the following categories of third parties:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                <strong>Email service providers:</strong> We use <strong>Resend</strong> to deliver
                transactional emails (inquiry notifications and auto-replies). Resend receives your name and
                email address for this purpose only.
              </li>
              <li>
                <strong>Analytics providers:</strong> Google Analytics processes anonymized usage data as
                described in Section 5.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose your information if required by law,
                court order, or government authority.
              </li>
            </ul>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">5. Cookies & Analytics</h2>
            <p>
              Our website uses <strong>Google Analytics</strong> to understand how visitors interact with our
              site. Google Analytics collects anonymized data about page views, session duration, and traffic
              sources using cookies. This data does not personally identify you.
            </p>
            <p className="mt-3">
              You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2EC4B6] underline hover:opacity-80"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
            <p className="mt-3">
              We do not use advertising cookies, cross-site tracking cookies, or any cookies that store
              personal information beyond what is described above.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">6. Data Security</h2>
            <p>
              We implement industry-standard technical and organizational measures to protect your information
              from unauthorized access, alteration, disclosure, or destruction. These include:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>HTTPS encryption for all data transmitted to and from our website</li>
              <li>Secure email transmission via Resend (TLS-encrypted)</li>
              <li>Access controls limiting who within our organization can view submitted inquiries</li>
            </ul>
            <p className="mt-3">
              No method of transmission over the Internet is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">7. Data Retention</h2>
            <p>
              Contact form submissions are retained in our email system for as long as necessary to fulfill the
              purpose for which they were collected (responding to your inquiry and maintaining business records),
              and in accordance with applicable law. If you wish to have your information deleted, please contact
              us using the information in Section 10.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as EHR platform websites listed in our
              integrations section). We are not responsible for the privacy practices of those sites and encourage
              you to review their privacy policies.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">9. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected such information,
              please contact us immediately.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">10. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of certain data processing activities</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-[#2EC4B6] underline hover:opacity-80">{EMAIL}</a>.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot;
              date at the top of this page. We encourage you to review this policy periodically for any changes.
              Continued use of our website after changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>{COMPANY}</strong></p>
              <p>{ADDRESS}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${EMAIL}`} className="text-[#2EC4B6] underline hover:opacity-80">{EMAIL}</a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+15127377488" className="text-[#2EC4B6] underline hover:opacity-80">{PHONE}</a>
              </p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0B3C5D] text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#082d46] transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10.5 3L5.5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
