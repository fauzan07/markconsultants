'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  FiActivity, FiArrowRight, FiArrowUpRight, FiBarChart2, FiBriefcase, FiCheck,
  FiChevronRight, FiClock, FiCloud, FiGlobe, FiHeart, FiLayers, FiLifeBuoy,
  FiLock, FiMail, FiMapPin, FiMessageCircle, FiMonitor, FiPhone, FiSearch,
  FiServer, FiSettings, FiShield, FiStar, FiTrendingUp, FiUsers, FiZap,
} from 'react-icons/fi';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import FloatingButtons from '../components/FloatingButtons';
import styles from './page.module.scss';

const services = [
  { title: 'Managed IT Services', icon: FiServer, image: '/images/team-meeting.jpg', brief: 'Keep your IT environment dependable, visible and ready for the next stage of growth. We combine proactive support with clear ownership.', detail: 'From day-to-day support to infrastructure monitoring and technology planning, we help your team stay focused on business.' },
  { title: 'Cloud Email Service with Cyber Security Solutions', icon: FiCloud, image: '/images/cloud-network.jpg', brief: 'Move collaboration to the cloud with the security controls, identity hygiene and guidance your users need to work confidently.', detail: 'Make cloud email and collaboration easier to manage while reducing avoidable risk and improving productivity.' },
  { title: 'IT Infrastructure Setup Solution', icon: FiLayers, image: '/images/hero-server.jpg', brief: 'Design and implement a resilient technology foundation for a new office, business expansion or critical refresh.', detail: 'We turn requirements into a practical setup across networks, endpoints, servers, connectivity and documentation.' },
  { title: 'Digital Marketing and Transformation with ORM', icon: FiTrendingUp, image: '/images/cybersecurity.jpg', brief: 'Bring your digital presence, customer journey and online reputation into one focused transformation roadmap.', detail: 'Build momentum with connected digital experiences, smarter processes and a more consistent brand presence.' },
  { title: 'New NGO Setup Consulting', icon: FiHeart, image: '/images/ngo-community.jpg', brief: 'Launch your NGO with the operational, technology and digital building blocks needed to serve communities well.', detail: 'We help new organisations start with clear systems, sustainable tools and a technology plan that can grow with impact.' },
];

const benefits = [
  ['17 years of experience', 'Practical perspective built across evolving business and technology environments.', FiClock],
  ['Transparent pricing', 'Clear scopes, clear expectations and recommendations grounded in value.', FiBarChart2],
  ['Dedicated support', 'A responsive partner who understands the context behind your technology.', FiLifeBuoy],
  ['Secure solutions', 'Security considered from the start, not added as an afterthought.', FiLock],
  ['Cost optimisation', 'Smarter technology investment with less waste and better operational visibility.', FiZap],
];

const industries = ['SMEs', 'Enterprises', 'NGOs', 'Healthcare', 'Education', 'Retail', 'Professional Services', 'Manufacturing'];
const steps = [
  ['01', 'Consult', 'We listen first, map your current reality and identify the highest-value opportunities.'],
  ['02', 'Plan', 'You get a practical roadmap, clear priorities and a path that respects your budget.'],
  ['03', 'Implement', 'We put the right technology, controls and workflows in place with care.'],
  ['04', 'Support', 'Your environment keeps improving with responsive support and ongoing guidance.'],
];
const testimonials = [
  ['“Mark Consultants helped us move from reactive firefighting to a much more dependable IT operation. The clarity has made a real difference.”', 'Operations Head', 'Growing enterprise'],
  ['“The team took the time to understand our constraints and recommended solutions we could actually use. Practical, responsive and thoughtful.”', 'Founder', 'SME client'],
  ['“We finally have a technology partner who can speak both business and security. Their guidance made our next phase feel manageable.”', 'Programme Director', 'NGO client'],
];

function SectionIntro({ eyebrow, title, children, light = false }) {
  return <div className={`${styles.sectionIntro} ${light ? styles.introLight : ''}`}><span className={styles.eyebrow}>{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}

export default function HomePage() {
  const [selectedService, setSelectedService] = useState('');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const chooseService = (service) => {
    setSelectedService(service);
    window.setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 20);
  };

  return (
    <>
      <Header />
      <main>
        <section id="home" className={styles.hero}>
          <Image className={styles.heroImage} src="/images/hero-server.jpg" alt="Blue-lit server racks in a modern data centre" fill priority sizes="100vw" />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGrid} />
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <span className={styles.heroKicker}><i /> Indian IT consulting & technology solutions</span>
              <h1>Simplify, Secure and <em>Transform</em> Your IT</h1>
              <p>Mark Consultants helps businesses build dependable, secure and future-ready technology environments that move growth forward.</p>
              <div className={styles.heroActions}><a className={styles.primaryButton} href="#contact">Get Free Consultation <FiArrowUpRight /></a><a className={styles.textButton} href="#services">Explore our services <FiArrowRight /></a></div>
              <div className={styles.trustRow}><span><b>17+</b> Years Experience</span><span><b>24/7</b> Managed IT</span><span><b>Cloud</b> & Cybersecurity</span></div>
            </div>
            <div className={styles.heroSignal}><div className={styles.signalTop}><span className={styles.statusDot} /> Systems made clearer</div><div className={styles.signalLine}><span>Operational confidence</span><b>92%</b></div><div className={styles.signalBar}><i /></div><div className={styles.signalMeta}><span>Secure by design</span><span>Growth ready</span></div></div>
          </div>
          <a href="#about" className={styles.scrollCue}><span>Scroll to explore</span><FiArrowRight /></a>
        </section>

        <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutVisual}><div className={styles.imageFrame}><Image src="/images/about-team.jpg" alt="Business team collaborating around a table" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><div className={styles.imageAccent} /><div className={styles.experienceBadge}><strong>17</strong><span>Years of experience<br />in IT solutions</span></div><div className={styles.visualLabel}><FiActivity /> Building better systems</div></div>
              <div className={styles.aboutContent}><SectionIntro eyebrow="About Mark Consultants" title="IT should remove friction — not create it.">Mark Consultants is an Indian IT consulting and technology solutions company dedicated to helping businesses simplify, secure and transform their IT infrastructure.</SectionIntro><p>With 17 years of industry experience, we deliver reliable, scalable and cost-effective IT products, services and solutions tailored to the evolving needs of businesses.</p><p>Our expertise spans Managed IT Services, IT Infrastructure Management, IT Audits, Facility Management Services (FMS), Cloud Email & Collaboration, Cloud Security, Cybersecurity, Enterprise Mobility Management, Application Development, Website Development and Digital Solutions.</p><p>We work with organisations to improve operational efficiency, strengthen cybersecurity, optimise technology investments and build a future-ready digital environment.</p><p>At Mark Consultants, we believe technology should not just support business operations; it should accelerate business growth.</p><div className={styles.commitment}><FiCheck /><span><b>Our commitment:</b> Trusted Advice. Smart Technology. Secure Business Growth.</span></div></div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.founderSection}`}>
          <div className={styles.container}><div className={styles.founderGrid}><div className={styles.founderPortrait}><Image src="/images/majid-ayub-khan.png" alt="Majid Ayub Khan, Consultant, Founder and CEO of Mark Consultants" fill sizes="(max-width: 768px) 100vw, 34vw" /><span className={styles.founderStamp}>MARK<br />CONSULTANTS</span></div><div className={styles.founderCopy}><span className={styles.eyebrow}>Leadership with purpose</span><h2>Meet the person behind the partnership.</h2><p className={styles.founderLead}>Majid Ayub Khan is a Consultant, Founder and CEO of Mark Consultants.</p><p>With a practical, people-first approach to technology, Majid helps organisations make confident decisions about IT, security, cloud and digital transformation. His focus is simple: turn complexity into useful systems that help businesses and communities move forward.</p><div className={styles.founderSignature}><span className={styles.signatureLine} /><div><strong>Majid Ayub Khan</strong><span>Consultant · Founder & CEO</span></div></div></div></div></div>
        </section>

        <section id="vision" className={`${styles.section} ${styles.visionSection}`}>
          <div className={styles.container}><SectionIntro eyebrow="Direction with purpose" title="A partner for the road ahead.">Our vision and mission keep every recommendation grounded in the outcomes that matter to your organisation.</SectionIntro><div className={styles.visionGrid}><article className={styles.visionCard}><div className={styles.cardIcon}><FiGlobe /></div><span className={styles.cardNumber}>01</span><h3>Our Vision</h3><p>To become a trusted and preferred IT consulting and technology solutions partner for businesses across India and beyond.</p><p>We envision a digitally empowered business ecosystem where organisations of every size can access innovative technology, secure cloud infrastructure and intelligent IT solutions to achieve sustainable growth, operational excellence and long-term success.</p></article><article className={`${styles.visionCard} ${styles.missionCard}`}><div className={styles.cardIcon}><FiTarget /></div><span className={styles.cardNumber}>02</span><h3>Our Mission</h3><p>Our mission is to empower businesses through reliable, innovative and cost-effective IT products, services and solutions.</p><ul><li>Delivering dependable Managed IT Services and IT infrastructure solutions.</li><li>Enabling secure cloud email, collaboration and cloud transformation.</li><li>Strengthening business security through modern cybersecurity solutions.</li><li>Helping organisations optimise IT costs and maximise technology ROI.</li><li>Providing professional IT consulting, audit and implementation services.</li><li>Building long-term customer relationships through transparency, expertise and dedicated support.</li></ul></article></div></div>
        </section>

        <section id="services" className={`${styles.section} ${styles.servicesSection}`}>
          <div className={styles.container}><div className={styles.splitIntro}><SectionIntro eyebrow="What we do" title="Technology support that earns its place in your business.">From dependable infrastructure to more confident digital growth, our services are designed around clarity, security and measurable usefulness.</SectionIntro><a className={styles.outlineButton} href="#contact">Talk to an expert <FiArrowUpRight /></a></div><div className={styles.servicesGrid}>{services.map((service, index) => { const Icon = service.icon; return <article className={`${styles.serviceCard} ${index === 0 ? styles.featuredService : ''}`} key={service.title}><div className={styles.serviceImage}><Image src={service.image} alt={`${service.title} visual`} fill sizes="(max-width: 768px) 100vw, 33vw" /><div /></div><div className={styles.serviceBody}><div className={styles.serviceIcon}><Icon /></div><span className={styles.serviceIndex}>0{index + 1}</span><h3>{service.title}</h3><p>{service.brief}</p><button className={styles.quoteButton} type="button" onClick={() => chooseService(service.title)}>Get Quote <FiArrowUpRight /></button></div></article>; })}</div></div>
        </section>

        <section id="why-us" className={`${styles.section} ${styles.whySection}`}>
          <div className={styles.container}><div className={styles.whyGrid}><div><SectionIntro eyebrow="Why choose us" title="The confidence to make the next move.">Technology decisions are easier when you have a partner who combines experience, honesty and real-world follow-through.</SectionIntro><a className={styles.primaryButton} href="#contact">Start a conversation <FiArrowUpRight /></a></div><div className={styles.benefitGrid}>{benefits.map(([title, text, Icon]) => <div className={styles.benefit} key={title}><span><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></div>
        </section>

        <section className={styles.stats}><div className={styles.container}><div className={styles.statsIntro}><span className={styles.eyebrow}>Built for better outcomes</span><p>Practical expertise. Measurable momentum.</p></div><div className={styles.statList}><div><strong>17+</strong><span>Years</span></div><div><strong>100+</strong><span>Clients <small>placeholder</small></span></div><div><strong>250+</strong><span>Projects <small>placeholder</small></span></div><div><strong>24/7</strong><span>Support <small>placeholder</small></span></div></div></div></section>

        <section id="industries" className={`${styles.section} ${styles.industriesSection}`}><div className={styles.container}><div className={styles.industriesGrid}><div className={styles.industriesVisual}><Image src="/images/team-meeting.jpg" alt="Team meeting in a modern workspace" fill sizes="(max-width: 900px) 100vw, 48vw" /><div className={styles.industriesTag}><FiUsers /> Built around people</div></div><div><SectionIntro eyebrow="Industries we serve" title="Context matters. So does the sector you work in.">We bring a practical, adaptable approach to organisations at different stages of their technology journey.</SectionIntro><div className={styles.industryPills}>{industries.map((industry) => <span key={industry}><FiCheck />{industry}</span>)}</div><p className={styles.industryNote}>Whether you are modernising a growing SME, strengthening a healthcare environment or setting up a new NGO, we help make technology more useful to the people it serves.</p></div></div></div></section>

        <section className={`${styles.section} ${styles.processSection}`}><div className={styles.container}><SectionIntro eyebrow="How we work" title="A clear process. No unnecessary mystery.">We keep the path from first conversation to ongoing support visible, collaborative and grounded in action.</SectionIntro><div className={styles.processGrid}>{steps.map(([number, title, text], index) => <div className={styles.processStep} key={number}><span className={styles.processNumber}>{number}</span>{index < steps.length - 1 && <span className={styles.processLine} />}<h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

        <section className={`${styles.section} ${styles.testimonialsSection}`}><div className={styles.container}><div className={styles.testimonialsHeader}><SectionIntro eyebrow="Client perspective" title="Good technology should feel like progress.">A few placeholders for the stories your future clients will tell.</SectionIntro><div className={styles.sliderControls}><button type="button" onClick={() => setTestimonialIndex((testimonialIndex + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial"><FiChevronRight /></button><span>0{testimonialIndex + 1} / 0{testimonials.length}</span><button type="button" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)} aria-label="Next testimonial"><FiChevronRight /></button></div></div><div className={styles.testimonialCard}><FiStar className={styles.quoteMark} /><blockquote>{testimonials[testimonialIndex][0]}</blockquote><div><strong>{testimonials[testimonialIndex][1]}</strong><span>{testimonials[testimonialIndex][2]}</span></div></div></div></section>

        <section className={`${styles.section} ${styles.faqSection}`}><div className={styles.container}><div className={styles.faqGrid}><SectionIntro eyebrow="Questions, answered" title="A little more clarity before we talk.">If you do not see your question here, call 9930525424 or send us a message — we are happy to help you find the right place to start.</SectionIntro><FAQ /></div></div></section>

        <section className={styles.ctaBanner}><div className={styles.ctaGlow} /><div className={styles.container}><div><span className={styles.eyebrow}>Your next chapter starts with a clear first step</span><h2>Ready to secure and grow your business?</h2></div><a className={styles.lightButton} href="#contact">Get a Free Consultation <FiArrowUpRight /></a></div></section>

        <section id="contact" className={`${styles.section} ${styles.contactSection}`}><div className={styles.container}><div className={styles.contactGrid}><div className={styles.contactFormCard}><span className={styles.eyebrow}>Let&apos;s make IT work harder for you</span><h2>Tell us where you want to go.</h2><p>Share a little about your requirements and our team will come back with a thoughtful next step.</p><ContactForm selectedService={selectedService} /></div><div className={styles.contactDetails}><SectionIntro eyebrow="Contact Mark Consultants" title="A trusted conversation is a good place to begin.">We are here to help you simplify, secure and transform your IT environment.</SectionIntro><div className={styles.contactList}><a href="tel:+919930525424"><span><FiPhone /></span><div><small>Call us</small><strong>9930525424</strong></div></a><a href="mailto:mk@markconsultants.in"><span><FiMail /></span><div><small>Email us</small><strong>mk@markconsultants.in</strong><strong>Sales@markconsultants.in</strong></div></a><div><span><FiMapPin /></span><div><small>Visit us</small><strong>[ADD OFFICE ADDRESS HERE]</strong></div></div></div><div className={styles.mapWrap}><iframe title="Google Maps location placeholder for Mark Consultants" src="https://www.google.com/maps?q=%5BADD+OFFICE+ADDRESS+HERE%5D&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className={styles.mapNote}>Map embed ready for the confirmed office address.</div></div></div></div></div></section>
      </main>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><div className={styles.footerBrand}><a className={styles.footerLogo} href="#home" aria-label="Mark Consultants home"><Image src="/images/mark-consultants-logo.png" alt="Mark Consultants" width={225} height={72} /></a><p>Trusted Advice. Smart Technology. Secure Business Growth.</p><div className={styles.socials}><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiUsers /></a><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FiMessageCircle /></a><a href="mailto:mk@markconsultants.in" aria-label="Email"><FiMail /></a></div></div><div><h3>Explore</h3><a href="#about">About Us</a><a href="#vision">Vision & Mission</a><a href="#services">Our Services</a><a href="#why-us">Why Us</a></div><div><h3>Services</h3>{services.slice(0, 4).map((service) => <a href="#services" key={service.title}>{service.title.split(' with ')[0]}</a>)}</div><div><h3>Contact</h3><a href="tel:+919930525424">9930525424</a><a href="mailto:mk@markconsultants.in">mk@markconsultants.in</a><a href="mailto:Sales@markconsultants.in">Sales@markconsultants.in</a></div></div><div className={styles.footerBottom}><span>© 2026 Mark Consultants. All rights reserved.</span><span>Built for secure business growth.</span></div></div></footer>
      <FloatingButtons />
    </>
  );
}

function FiTarget(props) {
  return <FiShield {...props} />;
}
