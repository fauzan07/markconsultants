'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import styles from './FAQ.module.scss';

const questions = [
  ['What does a managed IT service include?', 'Managed IT Services can include proactive monitoring, endpoint support, infrastructure maintenance, patching, security checks and a dependable escalation path for your team. We shape the coverage around your business and existing environment.'],
  ['Can you help us move email and collaboration to the cloud?', 'Yes. We help plan and secure cloud email and collaboration environments, including migration planning, identity controls, backup considerations and user adoption support.'],
  ['How do you approach cybersecurity for a growing business?', 'We start with the fundamentals: understand your users, assets and exposure, then prioritise practical controls such as access governance, endpoint protection, backups, awareness and ongoing review.'],
  ['Do you support one-time infrastructure projects?', 'Yes. Mark Consultants can support IT infrastructure setup, refresh and implementation projects, whether you need a new office environment or a more resilient foundation for growth.'],
  ['How quickly will someone respond to my enquiry?', 'Share the context through the form or call 9930525424. Our team will review your requirements and respond with the most useful next step for your situation.'],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return <div className={styles.list}>{questions.map(([question, answer], index) => <div className={`${styles.item} ${open === index ? styles.open : ''}`} key={question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><FiChevronDown aria-hidden="true" /></button><div id={`faq-answer-${index}`} className={styles.answer} role="region"><p>{answer}</p></div></div>)}</div>;
}
