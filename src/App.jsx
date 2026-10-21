import { useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryFilter from './components/CategoryFilter'
import ToolCard from './components/ToolCard'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import CategoriesPage from './pages/CategoriesPage'
import NewDropsPage from './pages/NewDropsPage'
import SubmitPage from './pages/SubmitPage'
import AboutPage from './pages/AboutPage'
import { ContactPage, PrivacyPage } from './pages/ContactPrivacyPage'
import { tools, CATEGORIES } from './data/tools'

const SEARCH_STOP_WORDS = new Set([
  'i', 'me', 'my', 'we', 'our', 'you', 'your', 'the', 'a', 'an', 'and', 'or', 'of', 'for', 'to', 'in', 'on', 'with',
  'is', 'are', 'be', 'it', 'this', 'that', 'these', 'those', 'please', 'help', 'need', 'want', 'looking', 'find', 'get',
  'some', 'something', 'way', 'tool', 'tools', 'app', 'apps', 'ai', 'online', 'can', 'could', 'would', 'do', 'does',
  'how', 'what', 'which', 'who', 'where', 'when', 'will', 'should', 'something', 'anything', 'just', 'know', 'best', 'one',
])

const SEARCH_SYNONYMS = [
  ['compress', 'compressor', 'compressing', 'compression', 'shrink', 'shrinking', 'reduce', 'smaller', 'downsize', 'optimize', 'optimise', 'minify'],
  ['image', 'images', 'photo', 'photos', 'picture', 'pictures', 'graphic', 'graphics', 'jpg', 'jpeg', 'png', 'webp'],
  ['pdf', 'pdfs', 'document', 'documents', 'doc', 'docs', 'paperwork'],
  ['create', 'creates', 'creating', 'creation', 'make', 'makes', 'build', 'building', 'generate', 'generating', 'design', 'produce', 'turn'],
  ['remove', 'removing', 'erase', 'cutout', 'cutouts', 'transparent', 'background', 'backdrop'],
  ['summarize', 'summarise', 'summary', 'summaries', 'shorten', 'brief', 'overview', 'recap'],
  ['translate', 'translation', 'translated', 'translating', 'language', 'localize', 'localise'],
  ['convert', 'converter', 'conversion', 'transform', 'export'],
  ['transcribe', 'transcription', 'transcript', 'captions', 'subtitles', 'speech', 'spoken'],
  ['meeting', 'meetings', 'call', 'calls', 'conversation', 'conversations'],
  ['presentation', 'presentations', 'slides', 'slide', 'deck', 'powerpoint', 'ppt'],
  ['diagram', 'diagrams', 'flowchart', 'flowcharts', 'infographic', 'infographics', 'mindmap', 'visualize', 'visualise'],
  ['write', 'writing', 'rewrite', 'rewriting', 'paraphrase', 'paraphrasing', 'copy', 'draft'],
  ['upscale', 'upscaling', 'enhance', 'enhancer', 'sharpen', 'resolution', 'blurry'],
]

function localSearchScore(tool, query) {
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const indexedWords = new Set(normalize([
    tool.name, tool.desc, tool.category, ...(tool.tags || []), ...(tool.searchTerms || []),
  ].join(' ')).match(/[a-z0-9]+/g) || [])
  const queryWords = (normalize(query).match(/[a-z0-9]+/g) || []).filter(word => !SEARCH_STOP_WORDS.has(word))
  if (!queryWords.length) return 0

  const matchedWords = queryWords.filter(word => {
    const synonymSet = SEARCH_SYNONYMS.find(group => group.includes(word))
    return synonymSet ? synonymSet.some(synonym => indexedWords.has(synonym)) : indexedWords.has(word)
  }).length
  const score = matchedWords / queryWords.length
  return score >= 0.5 ? score : 0
}

function HomePage() {
  const navigate = useNavigate()
  // BUG #8 FIX: read category from URL search param so CategoriesPage can pre-select it
  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category') || 'All'

  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState(urlCategory)
  const [aiSearch, setAiSearch] = useState(null)
  const [searchingAI, setSearchingAI] = useState(false)
  const [pricing, setPricing] = useState('All')
  const [sort, setSort] = useState('relevance')

  useEffect(() => {
    const query = search.trim().toLowerCase()
    if (query.length < 2) {
      setAiSearch(null)
      setSearchingAI(false)
      return undefined
    }

    const controller = new AbortController()
    const timer = window.setTimeout(async () => {
      setSearchingAI(true)
      try {
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('AI search is unavailable')
        const result = await response.json()
        setAiSearch({ query, results: result.results || [] })
      } catch (error) {
        if (error.name !== 'AbortError') setAiSearch(null)
      } finally {
        if (!controller.signal.aborted) setSearchingAI(false)
      }
    }, 350)

    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [search])

  const handleCategorySelect = (cat) => {
    setCategory(cat)
    // Keep URL in sync so the page is shareable/bookmarkable
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const rankedResults = aiSearch?.query === q && aiSearch.results.length ? aiSearch.results : null
    const scores = rankedResults
      ? new Map(rankedResults.map(result => [result.name, result.score]))
      : null
    const localScores = new Map(tools.map(tool => [tool.name, localSearchScore(tool, q)]))
    const matches = tools.filter(tool => {
      const matchSearch = !q || (scores
        ? scores.has(tool.name)
        : localScores.get(tool.name) > 0)
      const matchCat = category === 'All' || tool.category === category
      const plan = tool.badge === 'FREE' ? 'Free' : tool.badge === 'PAID' ? 'Paid' : 'Freemium'
      const matchPricing = pricing === 'All' || plan === pricing
      return matchSearch && matchCat && matchPricing
    })

    return matches.sort((a, b) => {
      if (sort === 'free') {
        const usability = t => t.freePlanUsability === 'regular' ? 0 : t.freePlanUsability === 'occasional' ? 1 : 2
        return usability(a) - usability(b) || ((scores?.get(b.name) ?? localScores.get(b.name)) - (scores?.get(a.name) ?? localScores.get(a.name)))
      }
      return (scores?.get(b.name) ?? localScores.get(b.name)) - (scores?.get(a.name) ?? localScores.get(a.name))
    })
  }, [search, category, aiSearch, pricing, sort])

  const showNew = !search && category === 'All'
  const featured = showNew ? filtered.filter(t => t.isNew === true).slice(-6).reverse() : []
  const featuredNames = new Set(featured.map(tool => tool.name))
  const rest = filtered.filter(tool => !featuredNames.has(tool.name))

  return (
    <>
      <Hero onSearch={setSearch} searchValue={search} searching={searchingAI} toolCount={tools.length} />

      <div className={`home-directory page-width${search ? ' is-searching' : ''}`}>
        {search && <section className="search-results-block" aria-label="Search results">
          <div className="search-results-meta" aria-live="polite">
            <div><strong>{filtered.length} {filtered.length === 1 ? 'match' : 'matches'}</strong><span> for “{search}”</span></div>
            <button onClick={() => setSearch('')}>Clear search</button>
          </div>
          <div className="discovery-controls">
            <label>Pricing <select value={pricing} onChange={e => setPricing(e.target.value)}><option>All</option><option>Free</option><option>Freemium</option><option>Paid</option></select></label>
            <label>Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="relevance">Relevance</option><option value="free">Free-plan usability</option></select></label>
          </div>
          {rest.length > 0 && <div className="tool-grid">{rest.map((tool, index) => <ToolCard key={tool.name} tool={tool} delay={index * .012} />)}</div>}
          {filtered.length === 0 && <div className="home-empty"><div className="home-empty-mark" aria-hidden="true">⌕</div><h2>No matches just yet</h2><p>Try a broader phrase, remove a filter, or browse a category.</p><button onClick={() => { setPricing('All'); setSearch(''); handleCategorySelect('All') }}>Show the full directory</button></div>}
        </section>}

        <section className="home-section" aria-labelledby="category-heading">
          <div className="section-heading">
            <div>
              <h2 id="category-heading">Browse by category</h2>
              <p>Start with the kind of work you have in mind.</p>
            </div>
            <span className="category-count">{CATEGORIES.length - 1} categories</span>
          </div>
          <CategoryFilter selected={category} onSelect={handleCategorySelect} />
        </section>

        {!search && <div className="discovery-controls"><label>Pricing <select value={pricing} onChange={e => setPricing(e.target.value)}><option>All</option><option>Free</option><option>Freemium</option><option>Paid</option></select></label><label>Sort <select value={sort} onChange={e => setSort(e.target.value)}><option value="relevance">Relevance</option><option value="free">Free-plan usability</option></select></label></div>}

        {featured.length > 0 && (
          <section className="home-section" aria-labelledby="new-tools-heading">
            <div className="section-heading">
              <div><h2 id="new-tools-heading">Fresh on the list</h2><p>Recently added places to explore.</p></div>
              <button className="section-link" onClick={() => navigate('/new-drops')}>See all new drops ↗</button>
            </div>
            <div className="tool-grid">
              {featured.map((tool, index) => <ToolCard key={tool.name} tool={tool} delay={index * .035} />)}
            </div>
          </section>
        )}

        {!search && rest.length > 0 && (
          <section className="home-section" aria-labelledby="directory-heading">
            <div className="section-heading">
              <div><h2 id="directory-heading">The directory</h2><p>{rest.length} tools, organized around the work they help with.</p></div>
              {search && <span className="category-count">Best matches first</span>}
            </div>
            <div className="tool-grid">
              {rest.map((tool, index) => <ToolCard key={tool.name} tool={tool} delay={index * .012} />)}
            </div>
          </section>
        )}

        {!search && filtered.length === 0 && (
          <div className="home-empty">
            <div className="home-empty-mark" aria-hidden="true">⌕</div>
            <h2>No matches just yet</h2>
            <p>Try a broader phrase or browse the categories above.</p>
            <button onClick={() => { setSearch(''); handleCategorySelect('All') }}>Show the full directory</button>
          </div>
        )}
      </div>

      <section className="submit-callout page-width">
        <div><h2>Know a tool we should include?</h2><p>Help someone find their next useful tool.</p></div>
        <button onClick={() => navigate('/submit')}>Suggest a tool <span aria-hidden="true">↗</span></button>
      </section>
    </>
  )
}

function AppLayout() {
  const navigate  = useNavigate()
  const location  = useLocation()
  // Derives the active nav key — strips leading slash
  const currentPage = location.pathname.replace(/^\//, '') || 'home'

  return (
    <div className="site-shell">
      <Navbar
        currentPage={currentPage}
        onNavigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)}
      />
      <main className="site-main"><Routes>
        <Route path="/"           element={<HomePage />} />
        {/* BUG #8 FIX: pass category to navigate so CategoriesPage selection works */}
        <Route path="/categories" element={<CategoriesPage onSelectCategory={(cat) => navigate(`/?category=${cat}`)} />} />
        <Route path="/new-drops"  element={<NewDropsPage />} />
        <Route path="/blog"       element={<BlogPage />} />
        <Route path="/submit"     element={<SubmitPage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="/privacy"    element={<PrivacyPage />} />
        {/* BUG #9 FIX: catch-all so unknown URLs don't show a blank content area */}
        <Route path="*"           element={<HomePage />} />
      </Routes></main>
      <Footer onNavigate={(p) => navigate(p === 'home' ? '/' : `/${p}`)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
