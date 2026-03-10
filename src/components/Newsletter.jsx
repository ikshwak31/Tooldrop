import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.includes('@')) {
      setSubmitted(true)
    }
  }

  return (
    <div style={{
      maxWidth: '600px', margin: '0 auto 80px',
      padding: '48px', background: '#161d2e',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '24px', textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif", fontSize: '1.8rem',
        fontWeight: 800, marginBottom: '10px', letterSpacing: '-0.5px', color: '#e8edf5',
      }}>
        Get Weekly Drops 📬
      </h2>
      <p style={{ color: '#5a6580', marginBottom: '24px', fontSize: '0.9rem' }}>
        New AI tools land every week. Be the first to know — no spam, just the best drops.
      </p>

      {submitted ? (
        <div style={{
          background: 'rgba(0,240,160,0.1)', border: '1px solid rgba(0,240,160,0.3)',
          color: '#00f0a0', padding: '14px 24px', borderRadius: '10px',
          fontFamily: "'DM Mono', monospace", fontSize: '0.85rem',
        }}>
          ✅ You're on the list! Welcome to ToolDrop.
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            style={{
              flex: 1, background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
              color: '#e8edf5', fontFamily: "'Outfit', sans-serif",
              padding: '12px 16px', borderRadius: '8px', outline: 'none', fontSize: '0.9rem',
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              background: '#00f0a0', color: '#000', fontWeight: 600,
              fontFamily: "'Outfit', sans-serif", padding: '12px 20px',
              border: 'none', borderRadius: '8px', cursor: 'pointer',
              fontSize: '0.9rem', whiteSpace: 'nowrap',
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  )
}
