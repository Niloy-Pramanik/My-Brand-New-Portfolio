'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FORMSPREE_ENDPOINT } from '@/lib/data';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useReveal, VIEWPORT_OFFSET } from '@/lib/animations';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { revealVariants } = useReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionHeading line1="LET&rsquo;S WORK" line2="TOGETHER" />

      <motion.form
        onSubmit={handleSubmit}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_OFFSET}
        className="flex flex-col gap-6 max-w-3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-sawad-muted mb-2 block">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="sawad-input"
            />
          </div>
          <div>
            <label className="text-sm text-sawad-muted mb-2 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="sawad-input"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-sawad-muted mb-2 block">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="sawad-input resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="sawad-submit mt-2"
        >
          {isLoading
            ? 'Sending...'
            : status === 'success'
            ? 'Message Sent'
            : status === 'error'
            ? 'Error — Try Again'
            : 'Submit'}
        </button>
      </motion.form>
    </section>
  );
}
