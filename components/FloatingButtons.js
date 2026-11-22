import { FiArrowUp, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import styles from './FloatingButtons.module.scss';

export default function FloatingButtons() {
  return <div className={styles.stack} aria-label="Quick contact actions"><a className={styles.whatsapp} href="https://wa.me/919930525424" target="_blank" rel="noreferrer" aria-label="Chat with Mark Consultants on WhatsApp"><FaWhatsapp /></a><a className={styles.call} href="tel:+919930525424" aria-label="Call Mark Consultants"><FiPhone /></a><a className={styles.top} href="#home" aria-label="Back to top"><FiArrowUp /></a></div>;
}
