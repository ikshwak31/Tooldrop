import { useState } from 'react'

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { label: 'Discover', page: 'home' },
    { label: 'Categories', page: 'categories' },
    { label: 'New drops', page: 'new-drops' },
    { label: 'Journal', page: 'blog' },
  ]

  const navigate = page => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <button className="brand" onClick={() => navigate('home')} aria-label="ToolDrop home">
          <span className="brand-mark" aria-hidden="true">T</span>
          <span>tool<span>drop</span><small>THE AI TOOL INDEX</small></span>
        </button>

        <button className="nav-menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>

        <div className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(({ label, page }) => (
            <button key={page} className={`nav-link${currentPage === page ? ' is-active' : ''}`} onClick={() => navigate(page)}>
              {label}
            </button>
          ))}
          <button className="nav-submit" onClick={() => navigate('submit')}>Suggest a tool <span aria-hidden="true">↗</span></button>
        </div>
      </nav>
    </header>
  )
}
