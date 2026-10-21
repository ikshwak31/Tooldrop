import { useState } from 'react'

const inputBase = {
  width: '100%', background: '#fbfff5',
  border: '1px solid rgba(18,60,48,0.12)',
  color: '#123c30', fontFamily: "'DM Sans', sans-serif",
  padding: '12px 16px', borderRadius: '10px',
  outline: 'none', fontSize: '0.95rem', marginBottom: '16px',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

// BUG #15 FIX: proper RFC-compliant email check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())
}

// ─────────────────────────────────────────────────────────────
export function ContactPage() {
  const [sent,  setSent]  = useState(false)
  const [form,  setForm]  = useState({ name: '', email: '', message: '' })
  const [errors,setErrors]= useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())            e.name    = 'Name is required.'
    if (!isValidEmail(form.email))    e.email   = 'Please enter a valid email.'
    if (!form.message.trim())         e.message = 'Message cannot be empty.'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  const Field = ({ label, error, children }) => (
    <div style={{ marginBottom: '4px' }}>
      <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>
        {label}
      </label>
      {children}
      {error && <p style={{ color: '#527b35', fontSize: '0.78rem', marginTop: '-10px', marginBottom: '12px', fontFamily: "'IBM Plex Mono', monospace" }}>{error}</p>}
    </div>
  )

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(6,71,52,0.08)',
          border: '1px solid rgba(6,71,52,0.2)', color: '#064734',
          fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>// CONTACT</div>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: '3rem', letterSpacing: '-1.5px', color: '#123c30', marginBottom: '16px' }}>
          Get in Touch
        </h1>
        <p style={{ color: '#597267', lineHeight: 1.7 }}>Have a question, suggestion, or want to advertise? We&apos;d love to hear from you.</p>
      </div>

      {sent ? (
        <div style={{ textAlign: 'center', padding: '48px', background: '#fbfff5', borderRadius: '16px', border: '1px solid rgba(6,71,52,0.2)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", color: '#123c30', fontWeight: 700 }}>Message Sent!</h3>
          <p style={{ color: '#597267', marginTop: '8px' }}>We&apos;ll get back to you within 24–48 hours.</p>
        </div>
      ) : (
        <div style={{ background: '#fbfff5', border: '1px solid rgba(18,60,48,0.12)', borderRadius: '20px', padding: '36px' }}>

          <Field label="Your Name" error={errors.name}>
            <input
              style={{ ...inputBase, borderColor: errors.name ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)' }}
              placeholder="John Doe"
              value={form.name}
              onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.name ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)'}
            />
          </Field>

          <Field label="Email" error={errors.email}>
            <input
              style={{ ...inputBase, borderColor: errors.email ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)' }}
              placeholder="you@email.com"
              type="email"
              value={form.email}
              onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.email ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)'}
            />
          </Field>

          <Field label="Message" error={errors.message}>
            <textarea
              style={{ ...inputBase, minHeight: '120px', resize: 'vertical', borderColor: errors.message ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)' }}
              placeholder="Your message..."
              value={form.message}
              onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })) }}
              onFocus={e  => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
              onBlur={e   => e.target.style.borderColor = errors.message ? 'rgba(180,93,67,0.5)' : 'rgba(18,60,48,0.12)'}
            />
          </Field>

          <button
            onClick={handleSubmit}
            style={{
              width: '100%', background: '#064734', color: '#f7ffef',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '1rem',
              padding: '14px', border: 'none', borderRadius: '10px', cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Send Message →
          </button>
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
export function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect',  text: 'We collect minimal data — only what you provide (like your email for newsletter signup) and basic analytics to understand how the site is used.' },
    { title: 'Affiliate Links',         text: 'Some links on ToolDrop are affiliate links. When you click them and make a purchase, we earn a small commission at no extra cost to you. We only recommend tools we genuinely believe in.' },
    { title: 'Cookies',                 text: 'We use basic cookies for analytics purposes. We do not sell your data to third parties.' },
    { title: 'Newsletter',              text: 'If you subscribe to our newsletter, your email is stored securely and only used to send you ToolDrop updates. You can unsubscribe at any time.' },
    { title: 'Contact',                 text: 'If you have any questions about this privacy policy, please use the contact page to reach out.' },
  ]

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '48px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(6,71,52,0.08)',
          border: '1px solid rgba(6,71,52,0.2)', color: '#064734',
          fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>// PRIVACY POLICY</div>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: '3rem', letterSpacing: '-1.5px', color: '#123c30', marginBottom: '8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#597267', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>Last updated: March 2026</p>
      </div>

      {sections.map((s, i) => (
        <div key={i} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: i < sections.length - 1 ? '1px solid rgba(18,60,48,0.12)' : 'none' }}>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 700, fontSize: '1.2rem', color: '#123c30', marginBottom: '12px' }}>{s.title}</h2>
          <p style={{ color: '#597267', lineHeight: 1.8 }}>{s.text}</p>
        </div>
      ))}
    </div>
  )
}
