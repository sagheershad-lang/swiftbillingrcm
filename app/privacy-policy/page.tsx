import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata({
    title: 'Privacy Policy: How We Use Your Data | SwiftBilling RCM',
    description: 'How SwiftBilling RCM (Clink Nexus LLC) collects, uses and protects information from our website, contact form, chat and analytics, and your privacy rights.',
    path: '/privacy-policy',
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
          <p className="text-white/60 text-sm">Originally published 2023. Last updated {LAST_UPDATED}.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E4EDF5] p-8 sm:p-12 space-y-8 text-[15px] text-[#334155] leading-[1.8]">

          <section>
            <p>
              This Privacy Policy explains what information we collect through our website at{' '}
              <strong>www.swiftbillingrcm.com</strong>, how we use it, who helps us process it, and the
              choices you have. It applies to this website only. Patient information we handle for our
              clients is covered by separate agreements, as explained in Section 7.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">1. Who We Are</h2>
            <p>
              {COMPANY} is a medical billing and revenue cycle management company operated by{' '}
              <strong>{LEGAL_ENTITY}</strong>, a Texas limited liability company (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;). You can reach us at:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Address: {ADDRESS}</li>
              <li>
                Email:{' '}
                <a href={`mailto:${EMAIL}`} className="text-[#2EC4B6] underline hover:opacity-80">{EMAIL}</a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+15127377488" className="text-[#2EC4B6] underline hover:opacity-80">{PHONE}</a>
              </li>
              <li>Hours: {HOURS}</li>
            </ul>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">2. Information You Give Us</h2>
            <h3 className="text-[15px] font-bold text-[#0F172A] mb-2">Contact form</h3>
            <p>When you fill out the contact form on our website, we collect:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Your name</li>
              <li>Your practice name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your medical specialty (optional)</li>
              <li>Your state (optional)</li>
              <li>Your practice&apos;s approximate monthly collections (optional)</li>
              <li>Your message (optional)</li>
            </ul>

            <h3 className="text-[15px] font-bold text-[#0F172A] mt-5 mb-2">Website chat</h3>
            <p>
              If you use the chat window on our website, we also collect anything you type into the chat,
              including any contact details you choose to share. The chat is provided by{' '}
              <strong>HubSpot</strong>.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">3. Information Collected Automatically</h2>
            <p>Some information is collected automatically when you visit our website:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                <strong>Google Analytics</strong> uses cookies to collect usage data, such as the pages you
                view, how long you stay, the website that referred you, your browser and device type, and
                your approximate location based on your IP address.
              </li>
              <li>
                <strong>HubSpot</strong> uses cookies to recognize returning visitors, record the pages you
                view, and run the chat window.
              </li>
              <li>
                <strong>Vercel Analytics</strong> collects aggregated visit data, such as page views and
                referring websites. It does not use cookies.
              </li>
              <li>
                <strong>Server logs:</strong> our hosting provider automatically records standard technical
                details, such as your IP address, browser type, the page requested, and the time of the
                request. These logs are used to run and secure the website.
              </li>
            </ul>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Reply to your inquiries and chat messages</li>
              <li>Prepare and deliver your free revenue audit</li>
              <li>Improve our website and its content</li>
              <li>Understand how visitors find and use our website</li>
              <li>Keep the website secure and meet our legal obligations</li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell your personal information, and we do <strong>not</strong> share
              it for cross-context behavioral advertising.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">5. Service Providers</h2>
            <p>
              We use the following companies to run our website and handle inquiries. They process
              information on our behalf for the purposes described in this policy:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Resend:</strong> delivers emails from our website, including inquiry notifications to our team and the confirmation email sent to you.</li>
              <li><strong>Vercel:</strong> hosts our website and provides Vercel Analytics.</li>
              <li><strong>Google:</strong> provides Google Analytics, which measures website traffic.</li>
              <li><strong>HubSpot:</strong> provides our customer relationship management (CRM) system, the website chat, and the related cookies.</li>
            </ul>
            <p className="mt-3">
              We may also disclose information when the law requires it, for example in response to a
              court order or a request from a government authority.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">6. Cookies</h2>
            <p>
              Cookies are small text files that a website stores in your browser. They help the website
              remember your visit and measure how it is used. On our website, cookies are set by:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Google Analytics</strong>, to measure visits and usage</li>
              <li><strong>HubSpot</strong>, to recognize returning visitors, record page views, and keep the chat working</li>
            </ul>
            <p className="mt-3">Vercel Analytics does not use cookies.</p>

            <h3 className="text-[15px] font-bold text-[#0F172A] mt-5 mb-2">How to control cookies</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>
                <strong>Browser settings:</strong> you can block or delete cookies in your browser. Some
                features, such as the chat, may not work without them.
              </li>
              <li>
                <strong>Cookie banner:</strong> when you first visit, a banner lets you accept or decline
                cookies. You can change your choice any time using the Cookie Settings link in the website
                footer.
              </li>
              <li>
                <strong>Global Privacy Control:</strong> if your browser sends a Global Privacy Control signal,
                we treat it as a request to opt out of cookie tracking.
              </li>
              <li>
                <strong>Google Analytics opt out:</strong> you can install the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2EC4B6] underline hover:opacity-80"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </li>
            </ul>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">7. Patient Information and HIPAA</h2>
            <p>
              Please <strong>do not</strong> submit patient health information through the website contact
              form or chat. This includes patient names, dates of birth, diagnoses, insurance ID numbers, and
              dates of service. The website is for business inquiries only.
            </p>
            <p className="mt-3">
              When a practice becomes our client, we handle protected health information (PHI) only under a
              signed <strong>Business Associate Agreement (BAA)</strong> and the client&apos;s service
              agreement, as required by the Health Insurance Portability and Accountability Act (HIPAA). That
              information is not handled through this website.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">8. Data Retention</h2>
            <p>
              We keep inquiry and chat details for as long as we need them to respond to you and to maintain
              our business records. After that, we delete them. You can ask us to delete your information
              sooner by following the steps in Section 10.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">9. Security</h2>
            <p>
              We use reasonable safeguards to protect your information. These include HTTPS encryption for all
              data sent to and from our website, encrypted email delivery, and access limits so that only
              authorized team members can see inquiries.
            </p>
            <p className="mt-3">
              No website or system is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">10. Your Privacy Rights</h2>
            <p>
              Depending on the state where you live (for example, California or Texas), you may have the
              right to:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Correct information that is inaccurate</li>
              <li>Delete your personal information</li>
              <li>Opt out of certain uses of your information, such as the sale of personal information or targeted advertising (we do neither)</li>
            </ul>
            <p className="mt-3">
              To make a request, email us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-[#2EC4B6] underline hover:opacity-80">{EMAIL}</a>{' '}
              with the subject line &quot;Privacy Request&quot; and tell us what you would like us to do. We may
              need to confirm your identity before we act on your request, and we will respond within the time
              required by law.
            </p>
            <p className="mt-3">
              We will not discriminate against anyone for using these rights.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">11. Children&apos;s Privacy</h2>
            <p>
              Our website is for businesses and is not directed to children under 13. We do not knowingly
              collect personal information from children under 13. If you believe a child has given us
              information, please contact us and we will delete it.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will change the &quot;Last
              updated&quot; date at the top of this page. Please check this page from time to time to stay
              informed.
            </p>
          </section>

          <hr className="border-[#E4EDF5]" />

          <section>
            <h2 className="text-[18px] font-extrabold text-[#0B3C5D] mb-3">13. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or want to make a privacy request, contact us:</p>
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
