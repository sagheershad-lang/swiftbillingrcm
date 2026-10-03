import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'
import { servicesData } from '@/lib/services-data'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Terms and Conditions of Website Use | SwiftBilling RCM',
    description: 'Terms for using the SwiftBilling RCM website, operated by Clink Nexus LLC: our services, fees, free audit, results, liability and Texas governing law.',
    path: '/terms',
  }),
  robots: { index: true, follow: true },
}

const LAST_UPDATED = 'October 3, 2026'
const COMPANY = 'SwiftBilling RCM'
const LEGAL_ENTITY = 'Clink Nexus LLC'
const EMAIL = 'info@swiftbillingrcm.com'
const PHONE = '+1 (512) 737-7488'
const ADDRESS = '5900 Balcones Dr #7192, Austin, TX 78731'
const HOURS = 'Monday to Friday, 8am to 6pm Central Time'

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
          <p className="text-white/60 text-sm">Originally published 2023. Last updated {LAST_UPDATED}.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E4EDF5] p-8 sm:p-12 space-y-8 text-[15px] text-[#334155] leading-[1.8]">

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">1. Agreement to These Terms</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) apply to your use of the website at{' '}
              <strong>www.swiftbillingrcm.com</strong> (the &quot;Site&quot;). {COMPANY} is operated by{' '}
              <strong>{LEGAL_ENTITY}</strong>, a Texas limited liability company (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;).
            </p>
            <p className="mt-3">
              By using the Site or contacting us about our services, you agree to these Terms. If you do not
              agree, please do not use the Site.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">2. Our Services</h2>
            <p>
              {COMPANY} provides medical billing and revenue cycle management services to healthcare
              practices in the United States. Our services are:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              {servicesData.map(s => <li key={s.slug}>{s.name}</li>)}
            </ul>
            <p className="mt-3">
              The exact services we provide to each client are set out in that client&apos;s written service
              agreement.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">3. General Information Only</h2>
            <p>
              The content on this Site is general information about our services. It is not legal, medical,
              coding, or financial advice. Please do not rely on it in place of advice from a qualified
              professional about your own practice.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">4. Fees</h2>
            <p>
              Our billing services are typically 4 to 9% of collections, depending on specialty, volume,
              and scope of work.
            </p>
            <p className="mt-3">
              Final pricing is set in each client&apos;s written service agreement. If anything in that
              agreement conflicts with these Terms, the service agreement governs. There are no upfront fees,
              setup fees, or long-term contracts unless a signed agreement says otherwise.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">5. Results</h2>
            <p>
              Figures shown on this Site, such as clean claim rates, increases in collections, and reductions
              in AR days, are based on our billing team&apos;s results across multiple practices. They are not a
              guarantee of future results. Your results will depend on your practice size, specialty, payer
              mix, current billing performance, and other factors.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">6. Free Revenue Audit</h2>
            <p>
              Our free revenue audit is offered without obligation. Requesting or receiving an audit does not
              create a client relationship or a service contract, and you do not have to buy anything. The
              audit is a preliminary review based on the information you give us.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">7. Intellectual Property</h2>
            <p>
              The content on this Site, including text, graphics, logos, icons, images, and software, belongs
              to {LEGAL_ENTITY} or its content suppliers and is protected by copyright, trademark, and other
              intellectual property laws. You may not copy, distribute, modify, or create derivative works
              from it without our written permission.
            </p>
            <p className="mt-3">
              Third-party logos shown on the Site, such as EHR and practice management platform logos, belong
              to their owners. We are an independent service provider and are not affiliated with or endorsed
              by those platforms. We show their logos only to indicate compatibility.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">8. Acceptable Use</h2>
            <p>You agree to use the Site only for lawful purposes. You must not:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Break any law or infringe anyone else&apos;s rights</li>
              <li>Interfere with other people&apos;s use of the Site</li>
              <li>Send spam or unsolicited commercial messages through the Site</li>
              <li>Upload or introduce viruses or other harmful code</li>
              <li>Try to gain unauthorized access to the Site, its servers, or its data</li>
              <li>Submit patient health information through the contact form or chat</li>
            </ul>
            <p className="mt-3">
              We may block access to the Site for anyone who breaks these rules.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">9. Third-Party Links and Tools</h2>
            <p>
              The Site links to other websites and uses third-party tools, such as the HubSpot chat and Google
              Analytics. We do not control these services and are not responsible for their content,
              availability, or privacy practices. Your use of them is also subject to their own terms. Our{' '}
              <Link href="/privacy-policy" className="text-[#2EC4B6] underline hover:opacity-80">Privacy Policy</Link>{' '}
              explains how these tools handle data.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">10. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided <strong>&quot;as is&quot; and &quot;as available.&quot;</strong> To the
              extent the law allows, we make no warranties of any kind, express or implied, including
              warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.
              We do not promise that the Site will always be available or free of errors.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">11. Limitation of Liability</h2>
            <p>
              To the fullest extent the law allows, {LEGAL_ENTITY} will not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including lost revenue, lost profits,
              lost data, or business interruption, arising from your use of, or inability to use, this Site
              or our services, even if we were told such damages were possible.
            </p>
            <p className="mt-3">
              Our total liability for any claim arising from your use of this Site will not exceed one hundred
              US dollars ($100).
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Texas, without regard to its conflict of
              law rules. Any dispute arising under these Terms will be handled exclusively by the state and
              federal courts located in Travis County, Texas.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">13. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes take effect when they are posted on this
              page with a new &quot;Last updated&quot; date. If you keep using the Site after that, you accept
              the updated Terms.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">14. Contact Us</h2>
            <p>If you have any questions about these Terms, contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>{COMPANY}</strong>, operated by {LEGAL_ENTITY}</p>
              <p>{ADDRESS}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${EMAIL}`} className="text-[#2EC4B6] underline hover:opacity-80">{EMAIL}</a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+15127377488" className="text-[#2EC4B6] underline hover:opacity-80">{PHONE}</a>
              </p>
              <p>Hours: {HOURS}</p>
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
