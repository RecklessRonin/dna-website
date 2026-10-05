// Single source for company details. Change them here, every page updates.
// Anything set to an empty string is hidden on the site rather than shown blank.

export const company = {
  name: 'DnA Engineering', // brand styling, as in the logo
  legalName: 'DNA Engineering Ltd',
  // TODO(Dan): Companies House number and registered office. Legally required on the site.
  companyNumber: '',
  registeredOffice: '',
  location: 'Telford, Shropshire',
  // TODO(Dan): confirm the phone number to publish.
  phone: '',
  email: 'info@dna-engineering.co.uk',
  linkedin: '', // TODO(Dan): company LinkedIn URL, or leave empty to hide
};

// Contact form endpoint. Empty = form hidden, phone/email shown instead.
// Options: Formspree (free tier) or IONOS Deploy Now Pro PHP mailer.
export const contactFormAction = '';

export const nav = [
  { href: '/services/', label: 'Commercial BMS' },
  { href: '/#domestic', label: 'Domestic' },
  { href: '/systems/', label: 'Systems' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
];

// Engineers' availability calendar (staff only), linked from the footer
export const staffLogin = 'https://booking.dna-engineering.co.uk/login';

// Header and footer call to action
export const cta = { href: '/contact/', label: 'Request a site survey' };

// Accreditation and platform-partner logos for the strip under the hero.
// Empty = strip hidden. TODO(Dan): add names, plus logo files in public/images/.
export const accreditations: { name: string; logo?: string }[] = [];
