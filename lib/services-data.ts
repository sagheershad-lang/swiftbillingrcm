export type ServiceFeature = {
  icon: string
  title: string
  description: string
}

export type ServiceProcess = {
  step: string
  title: string
  description: string
}

export type ServiceStat = {
  value: string
  label: string
}

export type ServiceFAQ = {
  q: string
  a: string
}

export type ServiceData = {
  slug: string
  name: string
  shortDescription: string
  badge: string
  isNew: boolean
  tagline: string
  description: string
  category: 'core' | 'extended'
  problem: string
  solution: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  stats: ServiceStat[]
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
  metaTitle: string
  metaDescription: string
}

export const servicesData: ServiceData[] = [
  {
    slug: 'medical-billing',
    name: 'Medical Billing',
    shortDescription: 'End-to-end claim submission with 98%+ clean claim rates — from charge capture to insurance payment.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Accurate Claims. Faster Payments. Zero Hassle.',
    description: 'Charge entry, coding, clean claim submission, and real-time tracking — handled end-to-end so you get paid faster.',
    category: 'core',
    problem: 'A single coding error or missed modifier can turn a legitimate claim into a denial or underpayment — costing your practice thousands each month without you even realizing it. Most in-house billing teams are overwhelmed and undertrained for specialty-specific nuances.',
    solution: 'Our CPC-certified coders review every charge, apply the right CPT and ICD-10 codes for your specialty, and submit clean claims within 24 hours of service. We handle the full payer lifecycle so your team never has to chase a claim.',
    features: [
      { icon: 'specialty', title: 'Multi-Specialty Coding', description: 'Certified coders trained in 20+ specialties — from internal medicine to orthopedics, psychiatry, and beyond.' },
      { icon: 'clock', title: 'Same-Day Submission', description: 'Claims submitted within 24 hours of charge entry — no backlogs, no delays.' },
      { icon: 'integration', title: 'EHR Integration', description: 'Works with Epic, Athena, eClinicalWorks, Tebra, AdvancedMD, drchrono, and more.' },
      { icon: 'modifier', title: 'Modifier & Bundling Expertise', description: 'Correct application of modifiers (25, 59, 95, GT, etc.) to protect against improper bundling rejections.' },
      { icon: 'paper', title: 'Electronic & Paper Claims', description: 'EDI 837 electronic submission for speed plus paper CMS-1500/UB-04 when required.' },
      { icon: 'track', title: 'Real-Time Claim Tracking', description: 'Every submitted claim tracked through acceptance, adjudication, and payment.' },
    ],
    process: [
      { step: '01', title: 'Charge Capture', description: 'Provider documents service in EHR. Our team pulls charges daily — no batch delays.' },
      { step: '02', title: 'Coding Review', description: 'CPC-certified coder reviews, corrects, and optimizes codes for your specialty.' },
      { step: '03', title: 'Clean Claim Build', description: 'Claim built to each payer\'s specific requirements to maximize first-pass acceptance.' },
      { step: '04', title: 'Electronic Submission', description: 'Clean claim submitted electronically within 24 hours — tracked to confirmation.' },
    ],
    stats: [
      { value: '98%+', label: 'Clean Claim Rate' },
      { value: '<24h', label: 'Submission Turnaround' },
      { value: '20+', label: 'Specialties Covered' },
      { value: '$0', label: 'Setup Fee' },
    ],
    faqs: [
      { q: 'How do you handle coding for my specific specialty?', a: 'We assign a billing specialist with specific training in your specialty. They understand the nuances — from E&M level selection to procedure-specific modifiers — so your claims are coded accurately for maximum reimbursement.' },
      { q: 'What EHR systems do you work with?', a: 'We integrate with all major EHR and practice management systems including Epic, Athenahealth, eClinicalWorks, Tebra, AdvancedMD, drchrono, NextGen, and others. If you use it, we can work with it.' },
      { q: 'How will I know when claims are submitted and paid?', a: 'You receive weekly claim status updates and a monthly dashboard showing submission volume, acceptance rates, payments received, and any pending items. Your account manager is also available for any real-time questions.' },
      { q: 'Do you handle both facility and professional billing?', a: 'Yes. We handle professional billing (CMS-1500) for physician practices as well as facility billing (UB-04) for ambulatory surgery centers and outpatient facilities.' },
    ],
    relatedSlugs: ['ar-follow-up', 'denial-management', 'payment-posting'],
    metaTitle: 'Medical Billing Services | SwiftBilling RCM',
    metaDescription: 'Expert medical billing and charge entry with 98%+ clean claim rates. CPC-certified coders, same-day submission, EHR integration. Free audit.',
  },

  {
    slug: 'ar-follow-up',
    name: 'AR Follow-Up',
    shortDescription: 'Systematic pursuit of every unpaid insurance claim — from 30-day to 120-day aged receivables.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Every Dollar Owed. Chased Down. Collected.',
    description: 'Aged receivables worked by priority — payer calls, resubmissions, and escalations until every dollar is recovered.',
    category: 'core',
    problem: 'The average medical practice has 15–25% of its revenue sitting in unpaid claims older than 90 days. Most of it quietly gets written off as "uncollectible." That\'s revenue you already earned — it\'s just stuck in your AR.',
    solution: 'We segment your AR by age, dollar value, and payer — then work it systematically. Our team makes direct payer calls, submits corrected claims, and escalates to formal appeals when needed. Nothing falls through the cracks.',
    features: [
      { icon: 'priority', title: 'Aged AR Prioritization', description: 'Claims segmented by 30/60/90/120+ days and dollar value — highest-value claims worked first.' },
      { icon: 'phone', title: 'Direct Payer Follow-Up', description: 'Live calls to payer provider lines plus portal follow-up for every open claim.' },
      { icon: 'resubmit', title: 'Claim Resubmission', description: 'Corrected claims resubmitted immediately when additional information is required.' },
      { icon: 'escalate', title: 'Denial Escalation', description: 'Any denied claim during follow-up is immediately escalated to our denial management team.' },
      { icon: 'report', title: 'Monthly AR Aging Reports', description: 'Full AR aging breakdown by payer, provider, and claim age delivered every month.' },
      { icon: 'protocol', title: 'Payer-Specific Protocols', description: 'Custom follow-up workflows for each payer — because every insurance company handles claims differently.' },
    ],
    process: [
      { step: '01', title: 'AR Audit', description: 'We pull a full aging report and categorize every open claim by priority, age, and dollar value.' },
      { step: '02', title: 'Payer Follow-Up', description: 'Direct calls and portal checks for each open claim — we get real status, not just "in process."' },
      { step: '03', title: 'Resolution', description: 'Claims resolved by payment, resubmission, corrected billing, or escalation to appeal.' },
      { step: '04', title: 'Report & Prevent', description: 'Monthly AR trends reported with root cause analysis to prevent the same issues recurring.' },
    ],
    stats: [
      { value: '35%', label: 'Avg Reduction in AR Days' },
      { value: '90', label: 'Days to Clean Up Backlog' },
      { value: '95%', label: 'Aged Claims Resolved' },
      { value: '120+', label: 'Day AR Worked Too' },
    ],
    faqs: [
      { q: 'How quickly do you work through our existing AR backlog?', a: 'For most practices, we complete an initial AR cleanup within 60–90 days. After that, AR follow-up becomes part of our ongoing monthly workflow so new aged claims never accumulate.' },
      { q: 'What happens to very old claims — over 180 days?', a: 'We evaluate each one individually. Claims beyond timely filing limits may be written off, but we document every action. Surprisingly, many "too old" claims are still collectible — we always try before recommending write-off.' },
      { q: 'How do you report on AR follow-up progress?', a: 'You receive a monthly AR aging report comparing current vs. prior month, a breakdown by payer and age bucket, and notes on major recoveries. Your account manager also presents findings during your monthly review call.' },
    ],
    relatedSlugs: ['denial-management', 'payment-posting', 'medical-billing'],
    metaTitle: 'Medical AR Follow-Up Services | SwiftBilling RCM',
    metaDescription: 'Dedicated AR follow-up that recovers unpaid insurance claims. 35% average reduction in AR days. Free audit for your practice.',
  },

  {
    slug: 'denial-management',
    name: 'Denial Management',
    shortDescription: 'Every denied claim reviewed, appealed, and resubmitted — with root-cause analysis to stop recurrence.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Denied Claims Come Back. Every Time.',
    description: 'Every denial reviewed, appealed, and fixed at the root — so it never hits twice.',
    category: 'core',
    problem: 'The national average denial rate is 10–15%, and most practices appeal fewer than half of them. Every unworked denial is direct revenue loss — but worse, the same denials keep happening because nobody fixes the root cause.',
    solution: 'Every denial gets a dedicated review within 24 hours. We categorize the root cause, correct the claim or draft a formal appeal, resubmit within 72 hours, and track denial trends by payer — so we\'re eliminating problems, not just putting out fires.',
    features: [
      { icon: 'alert', title: 'Same-Day Denial Capture', description: 'Every denial flagged and categorized the same day it\'s received from the payer.' },
      { icon: 'root', title: 'Root Cause Analysis', description: 'Denials categorized by type (coding, eligibility, auth, timely filing) so patterns are visible.' },
      { icon: 'letter', title: 'Formal Appeal Letters', description: 'Professional appeal letters drafted with supporting documentation for complex clinical denials.' },
      { icon: 'resubmit', title: '72-Hour Resubmission', description: 'Corrected claims or appeals submitted within 72 hours of denial receipt.' },
      { icon: 'trend', title: 'Payer Pattern Tracking', description: 'Denial trends tracked by payer, CPT code, and provider — reported monthly.' },
      { icon: 'prevent', title: 'Denial Prevention Feedback', description: 'Findings fed back to the billing team to prevent future denials at the source.' },
    ],
    process: [
      { step: '01', title: 'Capture', description: 'All denials identified and flagged same day — zero denials sit unworked.' },
      { step: '02', title: 'Root Cause', description: 'Denial categorized: coding error, eligibility, prior auth, timely filing, bundling, or other.' },
      { step: '03', title: 'Correct & Appeal', description: 'Claim corrected and resubmitted, or formal appeal drafted with documentation.' },
      { step: '04', title: 'Track & Prevent', description: 'Denial trends reported monthly — root causes fixed upstream.' },
    ],
    stats: [
      { value: '95%', label: 'Denial Overturn Rate' },
      { value: '72h', label: 'Resubmission Turnaround' },
      { value: '60%', label: 'Reduction in Denial Rate' },
      { value: '100%', label: 'Denials Worked — None Ignored' },
    ],
    faqs: [
      { q: 'What types of denials do you handle?', a: 'All types — coding errors, eligibility issues, missing prior authorization, timely filing, bundling disputes, coordination of benefits, and clinical medical necessity denials. We handle both technical and clinical appeals.' },
      { q: 'How do you prevent the same denial from happening again?', a: 'We track denial patterns by payer and CPT code. When a pattern emerges — say, a payer consistently denying a specific modifier — we update our billing protocols and alert your team to address it at the source.' },
      { q: 'What is your denial overturn rate?', a: 'We overturn approximately 95% of appealed denials. Some denials (timely filing past deadline, legitimate exclusions) are non-recoverable, but we evaluate every single one before recommending a write-off.' },
    ],
    relatedSlugs: ['prior-authorization', 'eligibility-verification', 'ar-follow-up'],
    metaTitle: 'Medical Billing Denial Management | SwiftBilling RCM',
    metaDescription: 'Expert denial management with 95% overturn rate. Every denied claim reviewed, appealed, and resubmitted within 72 hours. Free audit.',
  },

  {
    slug: 'payment-posting',
    name: 'Payment Posting',
    shortDescription: 'Same-day posting of all insurance and patient payments with full reconciliation and underpayment detection.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Every Payment Posted. Every Discrepancy Caught.',
    description: 'Same-day ERA/EOB posting with full reconciliation — books always current, underpayments always caught.',
    category: 'core',
    problem: 'Delayed or inaccurate payment posting creates a ripple effect: your AR reports are wrong, secondary billing is delayed, patient balances aren\'t generated, and payer underpayments go undetected for months — sometimes forever.',
    solution: 'We post every ERA and EOB the same day it\'s received, reconcile every payment against your contracted rates, generate patient balances immediately, and flag underpayments for immediate follow-up. Your financial picture is always accurate and up to date.',
    features: [
      { icon: 'lightning', title: 'Same-Day ERA Processing', description: 'All Electronic Remittance Advices posted the same day received — no batch-of-the-week delays.' },
      { icon: 'eob', title: 'Manual EOB Posting', description: 'Paper EOBs manually posted with the same accuracy as electronic remittances.' },
      { icon: 'secondary', title: 'Secondary & Tertiary Billing', description: 'Patient balance and secondary payer claims generated immediately after primary adjudication.' },
      { icon: 'reconcile', title: 'Contract Reconciliation', description: 'Every payment compared against your contracted rate — underpayments flagged for appeal.' },
      { icon: 'balance', title: 'Patient Balance Generation', description: 'Patient responsibility calculated and posted immediately after insurance payment.' },
      { icon: 'accuracy', title: '99.9% Posting Accuracy', description: 'Triple-check process ensures payments are applied to the correct claim, patient, and provider.' },
    ],
    process: [
      { step: '01', title: 'Receive', description: 'ERA files pulled daily; paper EOBs scanned and indexed same day received.' },
      { step: '02', title: 'Post', description: 'Payment applied to correct claim with all adjustment codes captured accurately.' },
      { step: '03', title: 'Reconcile', description: 'Payment compared to contracted rate — underpayments and discrepancies flagged.' },
      { step: '04', title: 'Balance & Bill', description: 'Patient responsibility posted; secondary claims or patient statements generated.' },
    ],
    stats: [
      { value: 'Same Day', label: 'Posting Turnaround' },
      { value: '99.9%', label: 'Posting Accuracy' },
      { value: '100%', label: 'Payments Reconciled' },
      { value: '0', label: 'Underpayments Missed' },
    ],
    faqs: [
      { q: 'How do you handle payer underpayments?', a: 'Every payment is compared against your contracted fee schedule. When a payer pays less than contracted, we flag it, document it, and submit a payment dispute or balance billing request. Most practices are losing 3–7% of revenue to undetected underpayments.' },
      { q: 'What happens after the primary payer posts — do you handle secondary billing?', a: 'Yes. Immediately after the primary insurance pays, we generate and submit the secondary (and tertiary) claim with the primary EOB attached. We also generate the patient statement for any remaining patient responsibility.' },
      { q: 'How does this integrate with our EHR or practice management system?', a: 'We post directly into your existing practice management system — no migration needed. We work inside Epic, Athena, eClinicalWorks, Tebra, AdvancedMD, and all major systems.' },
    ],
    relatedSlugs: ['ar-follow-up', 'medical-billing', 'patient-calling'],
    metaTitle: 'Medical Billing Payment Posting Services | SwiftBilling RCM',
    metaDescription: 'Same-day payment posting with 99.9% accuracy. Full ERA/EOB reconciliation and underpayment detection. Free billing audit.',
  },

  {
    slug: 'credentialing',
    name: 'Provider Credentialing',
    shortDescription: 'Full provider enrollment across all major payers — so you start billing from day one, not day 90.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Credentialed Fast. Billing From Day One.',
    description: 'CAQH to payer enrollment handled end-to-end — faster contracting, less revenue lost while you wait.',
    category: 'core',
    problem: 'Credentialing delays cost new providers 3–4 months of insurance revenue. One missed document, an outdated CAQH profile, or a dropped payer inquiry can push your go-live date back by weeks — and nobody tells you until it\'s already late.',
    solution: 'We handle every step of credentialing from application to activation, follow up with payers weekly, and use provisional billing strategies to recover revenue during the waiting period. You onboard in 5–7 business days and start billing immediately.',
    features: [
      { icon: 'network', title: '50+ Payer Networks', description: 'Enrollment with all major commercial plans, Medicare, Medicaid, and regional payers.' },
      { icon: 'caqh', title: 'CAQH Management', description: 'CAQH profile created, completed, and attested — maintained through re-credentialing cycles.' },
      { icon: 'track', title: 'Status Tracking Dashboard', description: 'Live credentialing status board so you always know where every application stands.' },
      { icon: 'group', title: 'Group & Individual', description: 'Both individual provider and group practice enrollment handled simultaneously.' },
      { icon: 'recred', title: 'Re-Credentialing', description: 'Proactive re-credentialing management so your enrollments never lapse.' },
      { icon: 'provisional', title: 'Provisional Billing Strategy', description: 'We advise on retroactive billing strategies to recover revenue earned during the pending period.' },
    ],
    process: [
      { step: '01', title: 'Document Collection', description: 'We gather all required documents: DEA, state license, malpractice, NPI, tax info — in 5–7 days.' },
      { step: '02', title: 'CAQH Setup', description: 'CAQH profile created or updated and attested for immediate payer access.' },
      { step: '03', title: 'Payer Applications', description: 'Applications submitted to all requested payers simultaneously — no sequential bottleneck.' },
      { step: '04', title: 'Weekly Follow-Up', description: 'We contact each payer weekly for status and push for faster processing where possible.' },
    ],
    stats: [
      { value: '5–7', label: 'Day Onboarding' },
      { value: '50+', label: 'Payer Networks' },
      { value: '0', label: 'Revenue Lost to Lapsed Creds' },
      { value: '100%', label: 'Applications Tracked to Completion' },
    ],
    faqs: [
      { q: 'How long does the credentialing process typically take?', a: 'Commercial payers typically take 60–90 days. Medicare and Medicaid can range from 30–120 days. We submit all applications simultaneously and follow up weekly to compress timelines wherever possible.' },
      { q: 'Can we bill patients while credentialing is pending?', a: 'You can see patients and collect self-pay or bill as out-of-network during the pending period. Once credentialed, many payers allow retroactive billing back to your application date — we advise you on exactly how to maximize recovery.' },
      { q: 'What payers do you credential with?', a: 'All major commercial payers (BCBS, Aetna, Cigna, UnitedHealth, Humana), Medicare Part B, state Medicaid programs, managed Medicaid plans, and regional/local plans. If a payer accepts providers in your area, we credential with them.' },
    ],
    relatedSlugs: ['medical-billing', 'eligibility-verification', 'prior-authorization'],
    metaTitle: 'Provider Credentialing Services | SwiftBilling RCM',
    metaDescription: 'Fast provider credentialing with 50+ payer networks. 5-7 day onboarding, weekly payer follow-up, no revenue gaps. Free consultation.',
  },

  {
    slug: 'reporting-analytics',
    name: 'Reporting & Analytics',
    shortDescription: 'Monthly KPI dashboards and custom financial reports — full visibility into your practice\'s performance.',
    badge: 'Core Service',
    isNew: false,
    tagline: 'Full Visibility. No Black Boxes. Ever.',
    description: 'Monthly reports on every metric that matters — run your practice on data, not guesswork.',
    category: 'core',
    problem: 'Most practices have no idea what their real collection rate is, which payers are underperforming, or how much revenue is silently disappearing into denials. You can\'t fix a problem you can\'t see — and most billing companies don\'t show you the full picture.',
    solution: 'Every month, you receive a comprehensive financial performance dashboard covering collections by payer, denial rates, AR aging, provider productivity, and year-over-year comparisons. No black boxes — every number explained by your account manager.',
    features: [
      { icon: 'dashboard', title: 'Monthly KPI Dashboard', description: 'Comprehensive financial snapshot delivered by the 10th of each month — covering 15+ key metrics.' },
      { icon: 'payer', title: 'Payer Performance Analysis', description: 'Collections, denial rates, and AR by payer — so you can see which plans are underperforming.' },
      { icon: 'provider', title: 'Provider-Level Reports', description: 'Revenue, volume, and productivity metrics broken out by individual provider.' },
      { icon: 'trend', title: 'Denial Trend Analysis', description: 'Denial rates tracked by CPT code, payer, and denial reason over time.' },
      { icon: 'ar', title: 'AR Aging Analysis', description: 'Full AR aging breakdown compared month-over-month with recovery tracking.' },
      { icon: 'custom', title: 'Custom Report Requests', description: 'Need a specific view? We build custom reports on request — included in your service.' },
    ],
    process: [
      { step: '01', title: 'Track', description: 'All billing activity, payments, and denials captured in real-time throughout the month.' },
      { step: '02', title: 'Compile', description: 'Monthly metrics aggregated, anomalies identified, and trends compared to prior periods.' },
      { step: '03', title: 'Deliver', description: 'Full dashboard delivered by the 10th of each month via email and your client portal.' },
      { step: '04', title: 'Review', description: 'Optional monthly review call with your account manager to walk through findings and action items.' },
    ],
    stats: [
      { value: '15+', label: 'KPIs Tracked Monthly' },
      { value: '10th', label: 'Dashboard Delivered By' },
      { value: '100%', label: 'Transparency — No Black Boxes' },
      { value: 'Custom', label: 'Reports on Request' },
    ],
    faqs: [
      { q: 'What metrics are included in the monthly dashboard?', a: 'Your dashboard includes: gross charges, net collections, collection rate, clean claim rate, denial rate, AR aging by bucket, average days in AR, top denial reasons, collections by payer, and provider productivity. We also include month-over-month and year-over-year comparisons.' },
      { q: 'Can I request reports that aren\'t in the standard dashboard?', a: 'Yes. Custom report requests are included in your service at no extra charge. If you need a CPT-level revenue breakdown, a payer-specific denial analysis, or a provider comparison report, we build it.' },
      { q: 'How do I access my reports?', a: 'Reports are delivered via email as a PDF summary and in a secure client portal where you can access all historical reports. Your account manager is always available to walk through any number in detail.' },
    ],
    relatedSlugs: ['ar-follow-up', 'denial-management', 'medical-billing'],
    metaTitle: 'Medical Billing Reporting & Analytics | SwiftBilling RCM',
    metaDescription: 'Monthly KPI dashboards and custom financial reports for your medical practice. Full billing transparency with 15+ metrics tracked. Free audit.',
  },

  {
    slug: 'prior-authorization',
    name: 'Prior Authorization',
    shortDescription: 'Proactive PA submission, tracking, and appeals — so services are always pre-approved before rendered.',
    badge: 'New Service',
    isNew: true,
    tagline: 'No Authorization Gaps. No Last-Minute Denials.',
    description: 'Verification, submission, tracking, and PA appeals — fully handled before a single claim is touched.',
    category: 'extended',
    problem: 'Insurers now require prior authorization for 40% more procedures than five years ago — and a single missing PA results in a full claim denial. Managing authorizations has become a full-time job most practices can\'t afford, and the cost of getting it wrong is catastrophic.',
    solution: 'We intercept the PA requirement at the scheduling stage, submit the request same day, track status daily, and attach the authorization number to the claim before billing. Retroactive PA appeals are also handled when emergency services were provided without pre-approval.',
    features: [
      { icon: 'verify', title: 'PA Requirement Verification', description: 'Real-time check at scheduling — we confirm whether a PA is required before the patient arrives.' },
      { icon: 'submit', title: 'Same-Day PA Submission', description: 'Authorization requests submitted the same day they\'re identified — no waiting.' },
      { icon: 'track', title: 'Daily Status Tracking', description: 'We check PA status every day until a decision is received — no authorization lost in limbo.' },
      { icon: 'attach', title: 'Auth-to-Claim Matching', description: 'Authorization number verified and attached to every claim before submission — no billing without auth.' },
      { icon: 'retro', title: 'Retroactive PA Requests', description: 'Emergency services rendered without prior auth? We pursue retroactive authorization on your behalf.' },
      { icon: 'appeal', title: 'PA Denial Appeals', description: 'Denied prior auths are appealed immediately with clinical documentation — peer-to-peer reviews coordinated.' },
    ],
    process: [
      { step: '01', title: 'Identify', description: 'PA requirement flagged at scheduling — patient visit, procedure, and payer cross-checked instantly.' },
      { step: '02', title: 'Submit', description: 'PA request submitted same day with all required clinical documentation.' },
      { step: '03', title: 'Track', description: 'Daily status checks with the payer until approval or denial is received.' },
      { step: '04', title: 'Confirm', description: 'Approval confirmed, auth number attached to claim — billing proceeds only with active authorization.' },
    ],
    stats: [
      { value: '90%+', label: 'PA Approval Rate' },
      { value: 'Same Day', label: 'Submission Turnaround' },
      { value: '85%', label: 'Reduction in Auth Denials' },
      { value: '100%', label: 'Auth Numbers Verified Before Billing' },
    ],
    faqs: [
      { q: 'How do you know which procedures require prior authorization?', a: 'We maintain an up-to-date payer-specific PA requirement database and verify requirements in real-time for each payer, CPT code, and diagnosis combination. PA requirements change frequently — we track those changes so you don\'t have to.' },
      { q: 'What if a prior authorization is denied?', a: 'We immediately initiate an appeal with supporting clinical documentation. For complex cases, we coordinate a peer-to-peer review between the payer\'s medical reviewer and your clinical team — these are often the most effective path to overturning a PA denial.' },
      { q: 'How does this work with our scheduling team?', a: 'We work alongside your scheduling staff. When an appointment is booked for a PA-required service, we\'re notified (via your EHR or a simple referral form) and take it from there — your team doesn\'t need to manage the PA process at all.' },
    ],
    relatedSlugs: ['eligibility-verification', 'denial-management', 'medical-billing'],
    metaTitle: 'Prior Authorization Management Services | SwiftBilling RCM',
    metaDescription: 'Proactive prior authorization management with 90%+ approval rate. Same-day submission, daily tracking, PA denial appeals. Free audit.',
  },

  {
    slug: 'eligibility-verification',
    name: 'Eligibility Verification',
    shortDescription: 'Real-time insurance verification before every appointment — eliminating the #1 cause of claim denials.',
    badge: 'New Service',
    isNew: true,
    tagline: 'Verify Before You See. Collect Before You Bill.',
    description: 'Coverage, deductibles, and benefits verified 24–48h before every visit — so your front desk is never caught off guard.',
    category: 'core',
    problem: '25% of all claim denials are caused by eligibility issues — inactive coverage, wrong subscriber ID, plan changes, or coordination of benefits errors. Every single one of these is 100% preventable with a single verification check before the visit.',
    solution: 'We verify insurance eligibility for every scheduled patient 24–48 hours in advance, pull a full benefits breakdown, flag any coverage issues to your front desk, and update the patient record with accurate insurance information before they walk in the door.',
    features: [
      { icon: 'verify', title: 'Real-Time Eligibility Checks', description: 'Eligibility verified directly against payer systems — not cached or delayed data.' },
      { icon: 'benefits', title: 'Full Benefits Breakdown', description: 'Deductible (met and remaining), copay, coinsurance, out-of-pocket max, and covered services.' },
      { icon: 'coverage', title: 'Coverage Date Verification', description: 'Active effective date and termination date confirmed — catches mid-month terminations others miss.' },
      { icon: 'cob', title: 'Coordination of Benefits', description: 'Primary and secondary insurance identified and ordered correctly before billing.' },
      { icon: 'batch', title: 'Batch Next-Day Verification', description: 'All next-day appointments verified in batch the evening before — front desk ready at open.' },
      { icon: 'alert', title: 'Front Desk Alerts', description: 'Any ineligibility or coverage issues alerted to your front desk in time to contact the patient.' },
    ],
    process: [
      { step: '01', title: 'Schedule', description: 'Patient appointment booked in your EHR — we pick up the schedule daily.' },
      { step: '02', title: 'Verify', description: 'Insurance eligibility checked in real-time 24–48 hours before the appointment.' },
      { step: '03', title: 'Benefits Pull', description: 'Full benefits summary pulled: deductible, copay, OOP max, and covered services.' },
      { step: '04', title: 'Alert & Update', description: 'Issues flagged to front desk; patient record updated with verified insurance data.' },
    ],
    stats: [
      { value: '80%', label: 'Reduction in Eligibility Denials' },
      { value: '24-48h', label: 'Before Appointment' },
      { value: '100%', label: 'of Appointments Verified' },
      { value: 'All Major', label: 'Payers Covered' },
    ],
    faqs: [
      { q: 'How far in advance do you verify eligibility?', a: 'We verify 24–48 hours before each appointment. This gives your front desk enough time to contact the patient if there\'s an issue — such as lapsed coverage or a high outstanding deductible — before they arrive.' },
      { q: 'What if a patient\'s coverage is inactive?', a: 'We alert your front desk immediately with the specific issue (inactive plan, wrong ID, etc.) and suggest action — whether that\'s verifying alternative coverage, updating the patient\'s insurance on file, or collecting self-pay at time of service.' },
      { q: 'Do you verify secondary insurance as well?', a: 'Yes. We identify and verify both primary and secondary insurance, confirm coordination of benefits order, and document both plans in the patient record so billing flows correctly after the visit.' },
    ],
    relatedSlugs: ['prior-authorization', 'patient-calling', 'medical-billing'],
    metaTitle: 'Eligibility Verification Services | SwiftBilling RCM',
    metaDescription: 'Real-time insurance eligibility verification before every appointment. Eliminate eligibility denials, verify benefits, alert your front desk. Free audit.',
  },

  {
    slug: 'patient-calling',
    name: 'Patient Balance Collection',
    shortDescription: 'Professional, HIPAA-compliant patient balance calls that recover what insurance doesn\'t pay.',
    badge: 'New Service',
    isNew: true,
    tagline: 'Professional Calls That Actually Collect.',
    description: 'Professional balance follow-up calls that recover what insurance doesn\'t — while protecting patient relationships.',
    category: 'extended',
    problem: 'With high-deductible health plans now covering over 50% of commercially insured patients, patients owe 30–40% of the total bill. Yet most practices collect less than 50 cents on every patient-owed dollar — and most billing companies only chase insurance, completely ignoring patient balances.',
    solution: 'We handle the full patient collection cycle: statement generation, structured follow-up calls, payment plan setup, and online payment facilitation — all with scripts designed to collect more while maintaining the respect patients deserve.',
    features: [
      { icon: 'statement', title: 'Patient Statement Generation', description: 'Clear, easy-to-understand statements generated and sent immediately after insurance adjudication.' },
      { icon: 'phone', title: 'Structured Balance Calls', description: 'Friendly, professional calls within 30 days of statement — HIPAA-compliant scripts that explain and collect.' },
      { icon: 'plan', title: 'Payment Plan Setup', description: 'Flexible payment plans offered for balances over $200 — increasing collection without alienating patients.' },
      { icon: 'charity', title: 'Financial Assistance Screening', description: 'Patients who qualify for charity care or financial assistance identified and guided through the process.' },
      { icon: 'dispute', title: 'Bill Dispute Resolution', description: 'Patient billing disputes handled professionally — reducing complaints and improving satisfaction.' },
      { icon: 'hipaa', title: 'HIPAA-Compliant Process', description: 'All patient communication follows strict HIPAA guidelines — calls, voicemails, and statements.' },
    ],
    process: [
      { step: '01', title: 'Post Balance', description: 'Patient responsibility calculated and posted after insurance pays — statement generated immediately.' },
      { step: '02', title: 'Statement Sent', description: 'Patient receives a clear statement by mail or email within 3–5 days of balance being posted.' },
      { step: '03', title: 'Follow-Up Call', description: 'Friendly balance call made within 30 days if no payment received — explanation and payment taken.' },
      { step: '04', title: 'Plan or Collect', description: 'Payment taken by phone or online, or payment plan established and documented.' },
    ],
    stats: [
      { value: '40%', label: 'Increase in Patient Collections' },
      { value: '60%', label: 'Reduction in Patient Write-Offs' },
      { value: '30 Days', label: 'First Follow-Up Call' },
      { value: '3x', label: 'Average ROI' },
    ],
    faqs: [
      { q: 'How do you handle patients who dispute their bill?', a: 'Our team is trained to explain the patient\'s Explanation of Benefits (EOB) in plain English, clarify what insurance paid and why the patient owes the balance, and resolve misunderstandings without escalating to complaints. Most disputes are resolved on the first call.' },
      { q: 'What payment methods do you accept on behalf of the practice?', a: 'We accept credit/debit cards by phone and can direct patients to your online payment portal. All payment information is handled securely — card numbers are never stored.' },
      { q: 'How do you protect our patient relationships?', a: 'We use empathetic, non-aggressive calling scripts specifically designed for healthcare. Our representatives are trained to be helpful, not collections agents. Most patients appreciate receiving a call that actually explains their bill clearly.' },
    ],
    relatedSlugs: ['eligibility-verification', 'payment-posting', 'ar-follow-up'],
    metaTitle: 'Patient Balance Collection Services | SwiftBilling RCM',
    metaDescription: 'Professional patient balance follow-up with 40% increase in patient collections. HIPAA-compliant calls, payment plans, dispute resolution. Free audit.',
  },

  {
    slug: 'patient-scheduling',
    name: 'Patient Scheduling',
    shortDescription: 'Virtual front desk support — appointment booking, reminders, and no-show follow-up without the overhead.',
    badge: 'New Service',
    isNew: true,
    tagline: 'A Full Front Desk. Without the Overhead.',
    description: 'Calls, reminders, and new patient intake handled for you — a virtual front desk that works like your own.',
    category: 'extended',
    problem: 'Every missed call is a missed appointment. Every no-show is lost revenue. And every minute your clinical staff spends answering phones is a minute not spent on patient care. Small practices especially struggle with the volume — and can\'t afford to hire a dedicated front desk team.',
    solution: 'We act as your virtual front desk — answering appointment calls, booking in your EHR, sending reminders, following up on no-shows, and collecting new patient information before the visit. Your patients get a professional experience and your team stays focused on care.',
    features: [
      { icon: 'phone', title: 'Inbound Appointment Scheduling', description: 'We answer scheduling calls and book appointments directly in your EHR per your protocols.' },
      { icon: 'reminder', title: 'Automated Appointment Reminders', description: 'Text and email reminders sent 48h and 24h before each appointment — reducing no-shows by up to 30%.' },
      { icon: 'noshow', title: 'No-Show Follow-Up', description: 'Every no-show contacted within 24 hours to reschedule — recovering lost appointment slots.' },
      { icon: 'intake', title: 'New Patient Intake', description: 'Insurance collected, demographic forms sent, and patient entered in your system before the visit.' },
      { icon: 'referral', title: 'Referral Coordination', description: 'Incoming referrals scheduled and coordinated directly with the referring provider\'s office.' },
      { icon: 'message', title: 'After-Hours Messages', description: 'After-hours voicemail monitored and actioned next business day — no appointment requests missed.' },
    ],
    process: [
      { step: '01', title: 'Onboarding', description: 'We learn your scheduling rules, EHR system, and provider preferences — typically 5–7 days.' },
      { step: '02', title: 'Go Live', description: 'Phone line forwarding or dedicated line set up — we start taking calls from day one.' },
      { step: '03', title: 'Schedule & Remind', description: 'Appointments booked in your EHR and automated reminders sent to every patient.' },
      { step: '04', title: 'Track & Report', description: 'Monthly report on call volume, no-show rate, fill rate, and new patient intake.' },
    ],
    stats: [
      { value: '30%', label: 'Reduction in No-Shows' },
      { value: '25%', label: 'Increase in Appointment Fill Rate' },
      { value: '5–7', label: 'Day Setup' },
      { value: '100%', label: 'Calls Answered — None Missed' },
    ],
    faqs: [
      { q: 'How do you learn our scheduling protocols?', a: 'During onboarding (5–7 days), we shadow your current scheduling process, document your appointment types, provider availability, and rules, and configure your EHR access. By go-live, we schedule just like your own team would.' },
      { q: 'What EHR systems do you work with for scheduling?', a: 'We work with all major EHR and practice management systems that allow external access — Epic, Athena, eClinicalWorks, Tebra, AdvancedMD, and others. We schedule directly in your system, not a parallel one.' },
      { q: 'Do you handle after-hours calls?', a: 'We monitor after-hours voicemail and action appointment requests first thing the next business day. For practices that need live after-hours coverage, we can discuss extended coverage options.' },
    ],
    relatedSlugs: ['eligibility-verification', 'prior-authorization', 'patient-calling'],
    metaTitle: 'Virtual Patient Scheduling Services | SwiftBilling RCM',
    metaDescription: 'Virtual front desk and patient scheduling — reduce no-shows by 30%, increase fill rate, handle new patient intake. Free consultation.',
  },
  {
    slug: 'patient-acquisition',
    name: 'Patient Acquisition',
    shortDescription: 'Profile optimization, directory listings, and online presence setup so new and growing practices attract the right patients from day one.',
    badge: 'New Service',
    isNew: true,
    tagline: 'More Patients. More Revenue. Handled.',
    description: 'Google Ads, local SEO, and GBP that fills your schedule and grows your practice.',
    category: 'extended',
    problem: 'Most medical billing companies help you collect revenue from existing patients — but nobody helps you grow your patient panel. New providers can wait months to fill their schedule, and established practices lose patients to better-marketed competitors every day, all while paying a separate marketing agency that doesn\'t understand healthcare.',
    solution: 'We combine our deep healthcare knowledge with proven digital marketing strategies — Google Ads targeted to patients actively searching for your specialty, local SEO to dominate "near me" searches, and a fully optimized Google Business Profile. You get more patients, and we handle their billing too — one partner for the full revenue cycle.',
    features: [
      { icon: 'google', title: 'Google Ads Management', description: 'Targeted search ads for patients actively looking for your specialty — only paying per click from real potential patients.' },
      { icon: 'seo', title: 'Local SEO Optimization', description: 'Rank on the first page of Google for "[your specialty] near me" searches — the highest-intent patients online.' },
      { icon: 'gbp', title: 'Google Business Profile', description: 'Full setup and optimization of your Google Business Profile — the #1 driver of local patient discovery.' },
      { icon: 'review', title: 'Online Reputation Management', description: 'Strategy to grow your Google reviews — the single biggest factor in a patient choosing your practice.' },
      { icon: 'landing', title: 'Patient Landing Pages', description: 'High-converting landing pages built for your ads — designed specifically to turn visitors into booked appointments.' },
      { icon: 'analytics', title: 'Monthly Performance Reports', description: 'Clear monthly reports showing new patient leads, cost per lead, ad spend, and ROI — no marketing jargon.' },
    ],
    process: [
      { step: '01', title: 'Practice Audit', description: 'We assess your current online presence — Google ranking, reviews, website, and local competition.' },
      { step: '02', title: 'Strategy & Setup', description: 'Google Ads account built, keywords researched, GBP optimized, and landing page created — ready in 7–10 days.' },
      { step: '03', title: 'Launch & Monitor', description: 'Campaigns go live. We monitor performance daily and optimize bids, targeting, and ad copy continuously.' },
      { step: '04', title: 'Report & Scale', description: 'Monthly report delivered with leads, cost per patient, and ROI. Winning campaigns scaled, underperformers cut.' },
    ],
    stats: [
      { value: '7–10', label: 'Days to Launch' },
      { value: '3x', label: 'Average Return on Ad Spend' },
      { value: '#1', label: 'Differentiator vs. Other RCM Companies' },
      { value: '100%', label: 'Healthcare-Focused Strategy' },
    ],
    faqs: [
      { q: 'Is this service legal and compliant for medical practices?', a: 'Absolutely. Google Ads and local SEO for medical practices is completely legitimate and widely used by hospitals, health systems, and private practices across the US. We follow all Google healthcare advertising policies and ensure all ad content is accurate and compliant.' },
      { q: 'What specialties does this work best for?', a: 'It works exceptionally well for any specialty where patients actively search online — primary care, urgent care, dermatology, orthopedics, mental health, OB-GYN, pediatrics, and concierge medicine. We tailor the strategy to your specialty and local market.' },
      { q: 'How is this different from a regular marketing agency?', a: 'A regular agency doesn\'t understand medical billing, insurance mix, or what a "high-value" patient looks like for your specialty. We do — because we\'re already managing your revenue cycle. We optimize for the patients who are most likely to be insured, compliant, and revenue-positive for your practice.' },
      { q: 'Do I need a website already?', a: 'Not necessarily. We can build a focused patient landing page as part of this service. If you have an existing website, we optimize it for local SEO. A full website build is available as an add-on.' },
    ],
    relatedSlugs: ['patient-scheduling', 'eligibility-verification', 'credentialing'],
    metaTitle: 'Patient Acquisition for Medical Practices | SwiftBilling RCM',
    metaDescription: 'Google Ads, local SEO, and Google Business Profile for medical practices. Attract new patients while we handle their billing. Free consultation.',
  },
]

export function getService(slug: string): ServiceData | undefined {
  return servicesData.find(s => s.slug === slug)
}

const coreServiceOrder = [
  'eligibility-verification',
  'medical-billing',
  'ar-follow-up',
  'denial-management',
  'payment-posting',
  'credentialing',
  'reporting-analytics',
]
export const coreServices = coreServiceOrder
  .map(slug => servicesData.find(s => s.slug === slug))
  .filter((s): s is ServiceData => s !== undefined)
export const extendedServices = servicesData.filter(s => s.category === 'extended')
