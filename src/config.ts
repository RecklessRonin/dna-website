// Single source for company details. Change them here, every page updates.
// Anything set to an empty string is hidden on the site rather than shown blank.

export const company = {
  name: 'DNA Engineering',
  legalName: 'DNA Engineering Ltd',
  // TODO(Dan): Companies House number and registered office. Legally required on the site.
  companyNumber: '',
  registeredOffice: '',
  location: 'Telford, Shropshire',
  // TODO(Dan): confirm the phone number to publish.
  phone: '',
  email: 'enquiries@dna-engineering.co.uk', // TODO(Dan): confirm this mailbox exists
  linkedin: '', // TODO(Dan): company LinkedIn URL, or leave empty to hide
};

// Contact form endpoint. Empty = form hidden, phone/email shown instead.
// Options: Formspree (free tier) or IONOS Deploy Now Pro PHP mailer.
export const contactFormAction = '';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services/', label: 'Services' },
  { href: '/systems/', label: 'Systems' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
