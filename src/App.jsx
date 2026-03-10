import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ToolCard from './components/ToolCard'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import CategoriesPage from './pages/CategoriesPage'
import NewDropsPage from './pages/NewDropsPage'
import SubmitPage from './pages/SubmitPage'
import AboutPage from './pages/AboutPage'
import { ContactPage, PrivacyPage } from './pages/ContactPrivacyPage'
import { tools } from './data/tools'

function Orbs() {
  return (
    <>
      {[
        { w: 600, h: 600, bg: '#00f0a0', top: '-200px', left: '-200px' },
        { w: 500, h: 500, bg: '#0af', bottom: '-100px', right: '-150px' },
        { w: 300, h: 300, bg: '#ff6b35', top: '40%', left: '55%' },
      ].map((o, i) => (
        <div key={i} style={{
          position: 'fixed', borderRadius: '50%', filter: 'blur(120px)',
          pointerEvents: 'none', zIndex: 0, opacity: 0.15,
          width: o.w, height: o.h, background: o.bg,
          top: o.top, left: o.left, bottom: o.bottom, right: o.right,
        }} />
      ))}
    </>
  )
}

function HomePage({ onNavigate }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return tools.filter(tool => {
      const matchSearch = !search ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase()) ||
        tool.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
      const matchCat = category === 'All' || tool.category === category
      return matchSearch && matchCat
    })
  }, [search, category])

  const featured = filtered.filter(t => t.featured)
  const rest = filtered.filter(t => !t.featured)

  return (
    <>
      <Hero onSearch={setSearch} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
            Browse by Category <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>// 48 CATEGORIES</span>
          </h2>
        </div>
        <CategoryFilter selected={category} onSelect={setCategory} />
        {featured.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '20px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
                🔥 Trending Now <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>// FEATURED</span>
              </h2>
              <span onClick={() => onNavigate('newdrops')} style={{ color: '#5a6580', fontSize: '0.85rem', cursor: 'pointer' }}>View all →</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '48px' }}>
              {featured.map((tool, i) => <ToolCard key={tool.id} tool={tool} delay={i * 0.05} />)}
            </div>
          </>
        )}
        {rest.length > 0 && (
          <>
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.4rem', letterSpacing: '-0.5px', color: '#e8edf5' }}>
                All Tools <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.75rem', color: '#00f0a0', fontWeight: 400, marginLeft: '10px' }}>// {rest.length} RESULTS</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {rest.map((tool, i) => <ToolCard key={tool.id} tool={tool} delay={i * 0.05} />)}
            </div>
          </>
        )}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: '#5a6580' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔍</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#e8edf5', marginBottom: '8px' }}>No tools found</div>
            <div>Try a different search term or category</div>
          </div>
        )}
      </div>
      <div style={{ position: 'relative', zIndex: 1, background: 'linear-gradient(135deg, rgba(0,240,160,0.06), rgba(0,170,255,0.04))', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '48px 24px', marginBottom: '80px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.8rem', marginBottom: '10px', color: '#e8edf5' }}>💰 Earn With ToolDrop</h2>
        <p style={{ color: '#5a6580', marginBottom: '24px' }}>Every tool on this site has an affiliate program. When you refer users, you earn commissions.</p>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#5a6580', display: 'inline-block', background: '#0f1420', padding: '6px 14px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)' }}>
          // Some links on this site are affiliate links. We earn a commission at no extra cost to you.
        </span>
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <Newsletter />
      </div>
    </>
  )
}

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (page) {
      case 'blog':       return <BlogPage />
      case 'categories': return <CategoriesPage onSelectCategory={() => navigate('home')} />
      case 'newdrops':   return <NewDropsPage />
      case 'submit':     return <SubmitPage />
      case 'about':      return <AboutPage />
      case 'contact':    return <ContactPage />
      case 'privacy':    return <PrivacyPage />
      default:           return <HomePage onNavigate={navigate} />
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Orbs />
      <Navbar currentPage={page} onNavigate={navigate} />
      {renderPage()}
      <Footer onNavigate={navigate} />
    </div>
  )
}
