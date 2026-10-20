export default function Footer({ onNavigate }) {
  const links = [
    { label: 'About', page: 'about' },
    { label: 'Suggest a tool', page: 'submit' },
    { label: 'Journal', page: 'blog' },
    { label: 'Privacy', page: 'privacy' },
    { label: 'Contact', page: 'contact' },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-brand" onClick={() => onNavigate('home')}>tool<span>drop</span></div>
      <div className="footer-links">
        {links.map(link => <button key={link.page} onClick={() => onNavigate(link.page)}>{link.label}</button>)}
      </div>
      <p>© {new Date().getFullYear()} ToolDrop. Some links may be affiliate links; we may earn a commission at no extra cost to you.</p>
    </footer>
  )
}
