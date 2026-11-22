import { Inter, Poppins } from 'next/font/google';
import '../styles/_globals.scss';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-poppins', display: 'swap' });

export const metadata = {
  title: 'Mark Consultants | IT Consulting & Technology Solutions',
  description: 'Mark Consultants helps businesses simplify, secure and transform their IT infrastructure with managed services, cloud, cybersecurity and digital solutions.',
  keywords: ['IT consulting India', 'managed IT services', 'cloud security', 'cybersecurity', 'IT infrastructure'],
  openGraph: {
    title: 'Mark Consultants | Simplify, Secure and Transform Your IT',
    description: 'Trusted advice, smart technology and secure business growth for businesses across India and beyond.',
    type: 'website',
    siteName: 'Mark Consultants',
    images: [{ url: '/images/hero-server.jpg', width: 1800, height: 1010, alt: 'Blue-lit server racks in a modern data centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Consultants | IT Consulting & Technology Solutions',
    description: 'Trusted Advice. Smart Technology. Secure Business Growth.',
    images: ['/images/hero-server.jpg'],
  },
  icons: { icon: '/favicon.svg' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mark Consultants',
  description: 'Indian IT consulting and technology solutions company.',
  telephone: '+91-9930525424',
  email: ['mk@markconsultants.in', 'Sales@markconsultants.in'],
  address: { '@type': 'PostalAddress', streetAddress: '[ADD OFFICE ADDRESS HERE]', addressCountry: 'IN' },
  url: '/',
  areaServed: 'IN',
  serviceType: 'IT consulting and technology solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}
