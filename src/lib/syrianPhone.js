export const SYRIAN_PHONE_PREFIX = '+963 ';
export const SYRIAN_PHONE_PATTERN = /^\+963\s\d{8,9}$/;

export function normalizeSyrianPhone(value, fallback = SYRIAN_PHONE_PREFIX) {
  const input = String(value || '').trim();

  // Keep the country prefix locked in place and reject pasted foreign prefixes.
  if (!input.startsWith('+963')) return fallback;

  const localDigits = input.slice(4).replace(/\D/g, '').slice(0, 9);
  return `${SYRIAN_PHONE_PREFIX}${localDigits}`;
}

export function isValidSyrianPhone(value) {
  return SYRIAN_PHONE_PATTERN.test(String(value || '').trim());
}
