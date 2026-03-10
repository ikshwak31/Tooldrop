const styles = {
  hero: {
    position: 'relative', zIndex: 1,
    textAlign: 'center', padding: '100px 20px 80px',
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    background: 'rgba(0,240,160,0.08)', border: '1px solid rgba(0,240,160,0.2)',
    color: '#00f0a0', fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
    padding: '6px 14px', borderRadius: '999px', marginBottom: '28px',
    letterSpacing: '0.5px', animation: 'fadeDown 0.6s ease both',
  },
  dot: {
    width: '6px', height: '6px', background: '#00f0a0',
    borderRadius: '50%', animation: 'pulse 1.5s infinite', display: 'inline-block',
  },
  h1: {
    fontFamily: "'Syne', sans-serif", fontWeight: 800,
    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05,
    letterSpacing: '-2px', marginBottom: '24px',
    animation: 'fadeDown 0.6s ease 0.1s both', color: '#e8edf5',
  },
  accent: {
    background: 'linear-gradient(90deg, #00f0a0, #0af)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sub: {
    color: '#5a6580', fontSize: '1.15rem', maxWidth: '520px',
    margin: '0 auto 40px', lineHeight: 1.7, fontWeight: 300,
    animation: 'fadeDown 0.6s ease 0.2s both',
  },
  searchWrap: {
    display: 'flex', maxWidth: '560px', margin: '0 auto 60px',
    animation: 'fadeDown 0.6s ease 0.3s both',
  },
  input: {
    flex: 1, background: '#0f1420', border: '1px solid rgba(255,255,255,0.07)',
    color: '#e8edf5', fontFamily: "'Outfit', sans-serif", fontSize: '1rem',
    padding: '16px 24px', borderRadius: '12px 0 0 12px', outline: 'none',
  },
  btn: {
    background: '#00f0a0', color: '#000', fontFamily: "'Outfit', sans-serif",
    fontWeight: 600, fontSize: '0.95rem', padding: '16px 28px',
    border: 'none', borderRadius: '0 12px 12px 0', cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  stats: {
    display: 'flex', justifyContent: 'center', gap: '48px',
    animation: 'fadeDown 0.6s ease 0.4s both',
    flexWrap: 'wrap',
  },
  stat: { textAlign: 'center' },
  statNum: {
    fontFamily: "'Syne', sans-serif", fontSize: '2rem',
    fontWeight: 800, color: '#00f0a0',
  },
  statLabel: { color: '#5a6580', fontSize: '0.8rem', letterSpacing: '0.5px', marginTop: '2px' },
}

export default function Hero({ onSearch }) {
  return (
    <section style={styles.hero}>
      <div style={styles.badge}>
        <span style={styles.dot}></span>
        NEW DROPS EVERY WEEK
      </div>

      <h1 style={styles.h1}>
        Discover the<br />
        <span style={styles.accent}>Best AI Tools</span><br />
        Before Everyone Else
      </h1>

      <p style={styles.sub}>
        ToolDrop curates the most powerful AI tools across every category — tested, reviewed, and ranked so you don't have to waste time searching.
      </p>

      <div style={styles.searchWrap}>
        <input
          type="text"
          placeholder="Search 500+ AI tools..."
          style={styles.input}
          onChange={e => onSearch(e.target.value)}
        />
        <button style={styles.btn}>Search</button>
      </div>

      <div style={styles.stats}>
        {[
          { num: '500+', label: 'TOOLS LISTED' },
          { num: '48', label: 'CATEGORIES' },
          { num: '12K+', label: 'MONTHLY USERS' },
          { num: 'Weekly', label: 'NEW DROPS' },
        ].map(s => (
          <div key={s.label} style={styles.stat}>
            <div style={styles.statNum}>{s.num}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
