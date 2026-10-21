import { useState } from 'react'
import { CATEGORIES } from '../data/tools'

const inputStyle = {
  width: '100%', background: '#fbfff5',
  border: '1px solid rgba(18,60,48,0.12)',
  color: '#123c30', fontFamily: "'DM Sans', sans-serif",
  padding: '12px 16px', borderRadius: '10px',
  outline: 'none', fontSize: '0.95rem', marginBottom: '16px',
  transition: 'border-color 0.2s',
}

export default function SubmitPage() {
  const [form, setForm] = useState({ name: '', url: '', category: '', badge: '', description: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = () => {
    if (form.name && form.url && form.category) setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', padding: '100px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '24px' }}>🎉</div>
      <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800, fontSize: '2rem', color: '#123c30', marginBottom: '16px' }}>
        Tool Submitted!
      </h2>
      <p style={{ color: '#597267', lineHeight: 1.7 }}>
        Thanks for submitting! We review all tools manually before listing them. If approved, it'll be live within 48 hours.
      </p>
    </div>
  )

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '660px', margin: '0 auto', padding: '60px 24px 80px' }}>
      <div style={{ marginBottom: '40px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(6,71,52,0.08)',
          border: '1px solid rgba(6,71,52,0.2)', color: '#064734',
          fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem',
          padding: '6px 14px', borderRadius: '999px', marginBottom: '20px',
        }}>
          // SUBMIT A TOOL
        </div>
        <h1 style={{
          fontFamily: "'Fraunces', Georgia, serif", fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-1.5px',
          color: '#123c30', marginBottom: '16px',
        }}>
          Add Your AI Tool
        </h1>
        <p style={{ color: '#597267', lineHeight: 1.7 }}>
          Know a great AI tool that's not listed yet? Submit it and we'll review it within 48 hours.
        </p>
      </div>

      <div style={{ background: '#fbfff5', border: '1px solid rgba(18,60,48,0.12)', borderRadius: '20px', padding: '36px' }}>

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Tool Name *</label>
        <input style={inputStyle} placeholder="e.g. Grammarly" value={form.name} onChange={e => update('name', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(18,60,48,0.12)'} />

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Tool Website URL *</label>
        <input style={inputStyle} placeholder="https://yourtool.com" value={form.url} onChange={e => update('url', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(18,60,48,0.12)'} />

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Category *</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.category} onChange={e => update('category', e.target.value)}>
          <option value="">Select a category...</option>
          {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Pricing</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.badge} onChange={e => update('badge', e.target.value)}>
          <option value="">Select pricing...</option>
          <option value="FREE">Free</option>
          <option value="FREEMIUM">Freemium</option>
          <option value="PAID">Paid</option>
        </select>

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Short Description</label>
        <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
          placeholder="What does this tool do? (2-3 sentences)"
          value={form.description} onChange={e => update('description', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(18,60,48,0.12)'} />

        <label style={{ display: 'block', color: '#123c30', fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>Your Email (optional)</label>
        <input style={inputStyle} placeholder="so we can notify you when it's live" value={form.email} onChange={e => update('email', e.target.value)}
          onFocus={e => e.target.style.borderColor = 'rgba(6,71,52,0.4)'}
          onBlur={e => e.target.style.borderColor = 'rgba(18,60,48,0.12)'} />

        <button
          onClick={handleSubmit}
          style={{
            width: '100%', background: '#064734', color: '#f7ffef',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '1rem',
            padding: '14px', border: 'none', borderRadius: '10px',
            cursor: 'pointer', transition: 'opacity 0.2s', marginTop: '8px',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Submit Tool →
        </button>
      </div>
    </div>
  )
}
