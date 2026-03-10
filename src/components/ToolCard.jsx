import { useState } from 'react'

const badgeStyles = {
  FREE:      { background: 'rgba(0,240,160,0.1)',  color: '#00f0a0' },
  PAID:      { background: 'rgba(255,107,53,0.1)', color: '#ff6b35' },
  FREEMIUM:  { background: 'rgba(0,170,255,0.1)',  color: '#0af'    },
}

export default function ToolCard({ tool, delay = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#0f1420',
        border: `1px solid ${hovered ? 'rgba(0,240,160,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px', padding: '24px', cursor: 'pointer',
        transition: 'all 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
        position: 'relative', overflow: 'hidden',
        animation: `fadeUp 0.5s ease ${delay}s both`,
      }}
    >
      {/* Hover glow overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,240,160,0.04), transparent)',
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s', pointerEvents: 'none',
      }} />

      {/* Top Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <div style={{
          width: '48px', height: '48px', borderRadius: '12px',
          background: tool.iconBg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
        }}>
          {tool.icon}
        </div>
        <span style={{
          ...badgeStyles[tool.badge],
          fontFamily: "'DM Mono', monospace", fontSize: '0.65rem',
          padding: '3px 9px', borderRadius: '999px', letterSpacing: '0.5px', fontWeight: 500,
        }}>
          {tool.badge}
        </span>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.1rem',
        marginBottom: '6px', letterSpacing: '-0.3px', color: '#e8edf5',
      }}>
        {tool.name}
      </div>

      {/* Description */}
      <div style={{ color: '#5a6580', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
        {tool.description}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
        {tool.tags.map(tag => (
          <span key={tag} style={{
            background: 'rgba(0,240,160,0.08)', color: '#00f0a0',
            fontSize: '0.72rem', fontFamily: "'DM Mono', monospace",
            padding: '3px 10px', borderRadius: '4px', letterSpacing: '0.3px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: '#5a6580' }}>
          <span style={{ color: '#f5c518', letterSpacing: '-1px' }}>
            {'★'.repeat(tool.stars)}{'☆'.repeat(5 - tool.stars)}
          </span>
          {tool.rating}
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{
            background: 'transparent', border: '1px solid rgba(0,240,160,0.3)',
            color: '#00f0a0', fontFamily: "'Outfit', sans-serif", fontSize: '0.8rem',
            fontWeight: 500, padding: '6px 16px', borderRadius: '6px',
            cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
          }}
        >
          Try Free →
        </a>
      </div>
    </div>
  )
}
