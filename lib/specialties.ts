// Single source for specialty names.
// SECTION_SPECIALTIES: the cards in the homepage Specialties section (components/Specialties.tsx is
// type checked against this list, so a card name can't drift from it).
// FORM_SPECIALTIES: the contact form dropdown = section names + EXTRA_FORM_SPECIALTIES, sorted, "Other" last.
// The API route accepts only these values.

export const SECTION_SPECIALTIES = [
  'Family Medicine', 'Cardiology', 'Psychiatry', 'Internal Medicine', 'Orthopedics', 'Urgent Care',
  'Pediatrics', 'Nephrology', 'Dermatology', 'Neurology', 'Gastroenterology', 'Pain Management',
  'Radiology', 'Oncology', 'Pulmonology', 'OB/GYN', 'Endocrinology', 'Physical Therapy',
  'Occupational Therapy', 'General Surgery',
] as const

export type SectionSpecialty = (typeof SECTION_SPECIALTIES)[number]

/** Specialties offered in the form that don't have a card in the Specialties section */
export const EXTRA_FORM_SPECIALTIES = [
  'Mental and Behavioral Health', 'Chiropractic', 'Urology', 'Podiatry', 'Multi Specialty',
] as const

export const OTHER_SPECIALTY = 'Other'

export const FORM_SPECIALTIES: readonly string[] = [
  ...[...new Set<string>([...SECTION_SPECIALTIES, ...EXTRA_FORM_SPECIALTIES])].sort((a, b) => a.localeCompare(b, 'en')),
  OTHER_SPECIALTY,
]
