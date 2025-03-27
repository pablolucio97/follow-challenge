export function formatZipCode(zipCode: string): string {
  return `${zipCode.slice(0, 5)}-${zipCode.slice(5)}`;
}