import { useState } from 'react'

export default function Navbar({ currentPage, onNavigate }) {
  const [hovered, setHovered] = useState(null)

  const links = [
    { label: 'Discover', page: 'home' },
    { label: 'Categories', page: 'categories' },
    { label: 'New Drops', page: 'newdrops' },
    { label: 'Blog', page: 'blog' },
  ]

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px', height: '64px',
      background: 'rgba(8,11,18,0.88)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <span onClick={() => onNavigate('home')} style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.5rem',
        letterSpacing: '-0.5px', color: '#e8edf5', cursor: 'pointer',
      }}>
        Tool<span style={{ color: '#00f0a0' }}>Drop</span>
      </span>

      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', alignItems: 'center' }}>
        {links.map(({ label, page }) => (
          <li key={page}>
            <span onClick={() => onNavigate(page)} style={{
              color: currentPage === page ? '#e8edf5' : hovered === page ? '#e8edf5' : '#5a6580',
              fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', cursor: 'pointer',
              borderBottom: currentPage === page ? '1px solid #00f0a0' : 'none', paddingBottom: '2px',
            }}
              onMouseEnter={() => setHovered(page)}
              onMouseLeave={() => setHovered(null)}
            >
              {label}
            </span>
          </li>
        ))}
        <li>
          <span onClick={() => onNavigate('submit')} style={{
            background: '#00f0a0', color: '#000', padding: '8px 20px',
            borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
          }}>
            Submit Tool
          </span>
        </li>
      </ul>
    </nav>
  )
}
