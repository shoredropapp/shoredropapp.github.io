/** Contact phone for weather / refunds / cancellations (Twilio not required yet). */

export function phoneDigits(raw: string): string {
  return raw.replace(/\D/g, "");
}

export function isValidContactPhone(raw: string): boolean {
  const digits = phoneDigits(raw);
  if (digits.length === 11 && digits.startsWith("1")) return true;
  return digits.length >= 10 && digits.length <= 15;
}

export const CONTACT_PHONE_REQUIRED_MESSAGE =
  "Enter a phone number so we can reach you about cancellations, refunds, or emergencies.";
