import { useEffect, useState } from 'react'

const examples = ['Compress a product photo', 'Turn notes into slides', 'Understand a research paper']

export default function Hero({ onSearch, searchValue, searching = false, toolCount = 124 }) {
  const [query, setQuery] = useState(searchValue || '')

  useEffect(() => setQuery(searchValue || ''), [searchValue])

  const updateQuery = value => {
    setQuery(value)
    onSearch(value)
  }

  return (
    <section className="hero page-width">
      <div className="hero-copy">
        <div className="eyebrow">A considered directory of AI tools</div>
        <h1>Find the right tool<br />for <em>what you do.</em></h1>
        <p className="hero-description">Skip the endless lists. Tell us what you’re working on and we’ll point you to a useful place to start.</p>

        <form className="hero-search" onSubmit={event => { event.preventDefault(); onSearch(query) }}>
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="What are you trying to get done?"
            aria-label="Describe what you need help with"
            value={query}
            onChange={event => updateQuery(event.target.value)}
            onKeyDown={event => { if (event.key === 'Escape') updateQuery('') }}
          />
          {query && <button className="search-clear" type="button" aria-label="Clear search" onClick={() => updateQuery('')}>×</button>}
          <button className="search-submit" type="submit" disabled={searching || !query.trim()}>
            {searching ? 'Searching…' : 'Find tools'} <span aria-hidden="true">↗</span>
          </button>
        </form>

        <div className="search-examples">
          <span>Try</span>
          {examples.map(example => <button key={example} onClick={() => updateQuery(example)}>{example}</button>)}
        </div>
        <div className="search-status" aria-live="polite">
          <span className={searching ? 'status-dot is-searching' : 'status-dot'} />
          {searching ? 'Making sense of your request' : 'Search by task, not by tool name'}
        </div>
      </div>

      <aside className="hero-aside" aria-label="How ToolDrop works">
        <div className="aside-topline"><span>HOW TOOLDROP HELPS</span><span>PLAIN LANGUAGE → TOOLS</span></div>
        <div className="aside-illustration" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit-center">✳</div>
          <span className="orbit-label label-one">your task</span>
          <span className="orbit-label label-two">a good fit</span>
          <span className="orbit-label label-three">less searching</span>
        </div>
        <p className="aside-caption">From “I need to…”<br /><strong>to “this is the one.”</strong></p>
        <div className="aside-footer"><span>{toolCount} tools to explore</span><span aria-hidden="true">↘</span></div>
      </aside>
    </section>
  )
}
