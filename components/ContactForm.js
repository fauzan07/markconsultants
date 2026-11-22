'use client';

import { useState } from 'react';
import { FiArrowUpRight, FiCheckCircle, FiLoader } from 'react-icons/fi';
import styles from './ContactForm.module.scss';

const services = [
  'Managed IT Services',
  'Cloud Email Service with Cyber Security Solutions',
  'IT Infrastructure Setup Solution',
  'Digital Marketing and Transformation with ORM',
  'New NGO Setup Consulting',
  'Other',
];

const initialForm = { fullName: '', company: '', email: '', phone: '', service: '', message: '', consent: false, website: '' };

export default function ContactForm({ selectedService = '' }) {
  const [form, setForm] = useState({ ...initialForm, service: selectedService });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', text: '' });
    if (!form.consent) { setStatus({ type: 'error', text: 'Please confirm that we may contact you about your enquiry.' }); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setStatus({ type: 'error', text: 'Please enter a valid email address.' }); return; }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) { setStatus({ type: 'error', text: 'Please enter a valid 10-digit Indian phone number.' }); return; }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong.');
      setStatus({ type: 'success', text: data.message || 'Thanks — your enquiry is on its way to our team.' });
      setForm(initialForm);
    } catch (error) {
      setStatus({ type: 'error', text: error.message || 'We could not send your enquiry. Please try calling us directly.' });
    } finally { setIsSubmitting(false); }
  };

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.formGrid}>
        <label>Full Name*<input name="fullName" value={form.fullName} onChange={update} placeholder="Your full name" required /></label>
        <label>Company Name<input name="company" value={form.company} onChange={update} placeholder="Your organisation" /></label>
        <label>Email*<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required /></label>
        <label>Phone*<input name="phone" inputMode="numeric" value={form.phone} onChange={update} placeholder="10-digit mobile number" required /></label>
      </div>
      <label>Service Interested In*<select name="service" value={form.service} onChange={update} required><option value="">Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
      <label>Message*<textarea name="message" value={form.message} onChange={update} placeholder="Tell us what you would like to improve, secure or build." rows="5" required /></label>
      <label className={styles.honeypot} aria-hidden="true">Website<input tabIndex="-1" autoComplete="off" name="website" value={form.website} onChange={update} /></label>
      <label className={styles.consent}><input type="checkbox" name="consent" checked={form.consent} onChange={update} required /><span>I agree to be contacted by Mark Consultants regarding this enquiry.</span></label>
      {status.text && <div className={`${styles.status} ${status.type === 'success' ? styles.success : styles.error}`} role="status">{status.type === 'success' && <FiCheckCircle aria-hidden="true" />}{status.text}</div>}
      <button className={styles.submit} type="submit" disabled={isSubmitting}>{isSubmitting ? <><FiLoader className={styles.spin} /> Sending enquiry…</> : <>Send Enquiry <FiArrowUpRight aria-hidden="true" /></>}</button>
    </form>
  );
}
