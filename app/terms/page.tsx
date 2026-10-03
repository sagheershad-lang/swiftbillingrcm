import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Terms & Conditions — Website and Services | SwiftBilling RCM',
    description: 'Terms and Conditions for SwiftBilling RCM — the rules governing use of our website, our free revenue audit, and our medical billing and RCM services.',
    path: '/terms',
  }),
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'May 17, 2026'
const COMPANY = 'SwiftBilling RCM'
const EMAIL = 'info@swiftbillingrcm.com'
const PHONE = '+1 (512) 737-7488'
const ADDRESS = '5900 Balcones Dr #7192, Austin, TX 78731'

export default function Terms() {
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
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms &amp; Conditions</h1>
          <p className="text-white/60 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E4EDF5] p-8 sm:p-12 space-y-8 text-[15px] text-[#334155] leading-[1.8]">

          <section>
            <p>
              Please read these Terms &amp; Conditions (&quot;Terms&quot;) carefully before using the website
              located at <strong>www.swiftbillingrcm.com</strong> (the &quot;Site&quot;) or engaging the services of{' '}
              <strong>{COMPANY}</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing the Site or
              inquiring about our services, you agree to be bound by these Terms.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">1. Use of the Website</h2>
            <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Infringe the rights of any third party</li>
              <li>Restrict or inhibit any other person&apos;s use or enjoyment of the Site</li>
              <li>Transmit unsolicited commercial communications</li>
              <li>Introduce malicious code, viruses, or harmful data</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its infrastructure</li>
            </ul>
            <p className="mt-3">
              We reserve the right to terminate access to the Site for any user who violates these Terms.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">2. Services Description</h2>
            <p>
              {COMPANY} provides medical billing and revenue cycle management (RCM) services to US-based
              healthcare practices. Our services include, but are not limited to:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Charge entry and claim submission</li>
              <li>Insurance payment posting</li>
              <li>Accounts receivable (AR) follow-up</li>
              <li>Denial management and appeals</li>
              <li>Provider credentialing</li>
              <li>Reporting and analytics</li>
            </ul>
            <p className="mt-3">
              The specific scope of services, deliverables, and pricing are defined in a separate written
              service agreement executed between {COMPANY} and the client practice.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">3. Free Revenue Audit</h2>
            <p>
              The free revenue audit offered on our Site is a preliminary, no-obligation assessment of
              your practice&apos;s billing performance. It is intended to help identify areas for potential
              improvement. The audit does not constitute a legal, financial, or medical opinion, and results
              may vary based on the information provided. No formal engagement or service contract is created
              by requesting or receiving a free audit.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">4. Pricing & Payment</h2>
            <p>
              Our billing services are priced as a percentage of monthly collections, typically between
              4% and 9% depending on specialty, volume, and scope of work. Exact pricing is confirmed in
              the written service agreement.
            </p>
            <p className="mt-3">
              There are no upfront fees, setup fees, or long-term lock-in contracts unless explicitly
              stated in a signed agreement. Payment terms and invoicing schedules are detailed in the
              service agreement.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">5. HIPAA Compliance</h2>
            <p>
              {COMPANY} is committed to full compliance with the Health Insurance Portability and
              Accountability Act of 1996 (HIPAA) and its implementing regulations, including the Privacy
              Rule, Security Rule, and Breach Notification Rule.
            </p>
            <p className="mt-3">
              A <strong>Business Associate Agreement (BAA)</strong> is executed with every client prior to
              access to any Protected Health Information (PHI). We maintain administrative, physical, and
              technical safeguards to protect the confidentiality, integrity, and availability of all PHI
              processed on behalf of our clients.
            </p>
            <p className="mt-3">
              The website contact form is for business inquiries only. Do not submit PHI through the
              contact form.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">6. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, icons, images, and software — is
              the property of {COMPANY} or its content suppliers and is protected by applicable copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="mt-3">
              You may not reproduce, distribute, modify, or create derivative works from any content on
              this Site without express written permission from {COMPANY}.
            </p>
            <p className="mt-3">
              Third-party logos displayed on the Site (such as EHR and EMR platform logos) are the property
              of their respective owners. {COMPANY} is an independent service provider and is not affiliated
              with or endorsed by any of the platforms whose logos appear on this Site. Their use is solely
              to indicate compatibility and experience (nominative fair use).
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">7. Disclaimer of Warranties</h2>
            <p>
              This Site and all content are provided on an <strong>&quot;as is&quot; and &quot;as available&quot;</strong> basis
              without warranties of any kind, either express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mt-3">
              Statistical claims (e.g., &quot;up to 35% increase in collections&quot;) are based on reported client
              outcomes and are illustrative. Individual results will vary based on practice size, specialty,
              payer mix, current billing performance, and other factors. No specific outcome is guaranteed.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {COMPANY} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages — including loss of revenue,
              loss of profits, loss of data, or business interruption — arising from your use of or inability
              to use this Site or our services, even if we have been advised of the possibility of such damages.
            </p>
            <p className="mt-3">
              Our total liability in connection with any claim arising from the use of this Site shall not
              exceed one hundred US dollars ($100).
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">9. Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites for your convenience. We do not endorse,
              control, or take responsibility for the content, privacy practices, or terms of those sites.
              Accessing third-party sites is at your own risk.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Texas,
              United States, without regard to its conflict of law provisions. Any dispute arising under
              these Terms shall be subject to the exclusive jurisdiction of the state and federal courts
              located in Travis County, Texas.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be effective upon posting
              to the Site with an updated &quot;Last updated&quot; date. Your continued use of the Site after changes
              are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">12. Contact</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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
