export function isValidIranPhone(phone: string): boolean {
  return /^0?9\d{9}$/.test(String(phone).replace(/[\s-]/g, ""));
}

export function missingFields(fields: Record<string, string>, required: string[]): string[] {
  return required.filter((f) => !fields[f] || !fields[f].trim());
}

export function findPhoneField(fields: Record<string, string>): string | undefined {
  return Object.keys(fields).find((k) => k.toLowerCase().includes("phone"));
}
