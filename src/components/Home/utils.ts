import { scrollToSection } from '../Menu/utils';

export function buildFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

export function scrollToContactSection(): void {
  scrollToSection('contact');
}

export function scrollToHashSection(hash: string): void {
  const sectionId = hash.replace('#', '');
  if (!sectionId) return;
  scrollToSection(sectionId);
}
