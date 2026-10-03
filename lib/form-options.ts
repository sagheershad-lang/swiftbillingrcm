// Options for the contact form selects. The API route accepts only these exact values.

export const MONTHLY_COLLECTIONS = [
  'Under $25K',
  '$25K to $50K',
  '$50K to $150K',
  'Over $150K',
  'Not sure',
] as const

export const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
] as const

/** Returns the value only if it is one of the allowed options, otherwise an empty string */
export function pickOption(val: unknown, options: readonly string[]): string {
  return typeof val === 'string' && options.includes(val) ? val : ''
}
