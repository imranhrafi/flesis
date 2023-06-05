interface SocialIcon {
  icon: string;
  link: string;
}

interface Link {
  text: string;
  link: string;
}

export interface Address {
  location: string;
  address: string;
}

interface FooterData {
  title: string;
  icons?: SocialIcon[];
  links?: Link[];
  locations?: Address[];
}

export const socialIcons: SocialIcon[] = [
  { icon: 'FaFacebook', link: 'https://www.facebook.com/' },
  { icon: 'FaInstagram', link: 'https://www.instagram.com/' },
  { icon: 'FaLinkedin', link: 'https://www.linkedin.com/' },
  { icon: 'FaYoutube', link: 'https://www.youtube.com/' },
];

export const links: Link[] = [
  { text: 'Home', link: '/home' },
  { text: 'Service', link: '/service' },
  { text: 'About', link: '/about' },
  { text: 'Tools', link: '/tools' },
  { text: 'Contact', link: '/contact' },
];

export const about: Link[] = [
  { text: 'Partners', link: '/partners' },
  { text: 'Careers', link: '/careers' },
  { text: 'Press', link: '/press' },
  { text: 'Community', link: '/community' },
];

export const addresses: Address[] = [
  {
    location: 'Indonesia',
    address: 'Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881',
  },
  {
    location: 'Tokyo',
    address: '35 Mandalay Road 13–37 Mandalay Towers Singapore 308215',
  },
];

export const footerData: FooterData[] = [
  {
    title: 'Social Icons',
    icons: socialIcons,
  },
  {
    title: 'Links',
    links,
  },
  {
    title: 'About',
    links: about,
  },
  {
    title: 'Our Office',
    locations: addresses,
  },
];
