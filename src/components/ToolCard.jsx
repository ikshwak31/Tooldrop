export default function ToolCard({ tool, delay = 0 }) {
  const status = tool.badge || 'FREEMIUM'
  const tags = (tool.tags || []).filter(tag => tag !== tool.category).slice(0, 2)

  return (
    <article className="tool-card" style={{ animationDelay: `${Math.min(delay, .35)}s` }}>
      <div className="tool-card-top">
        <div className="tool-icon" aria-hidden="true">{tool.icon || '✳'}</div>
        <span className="tool-card-status" data-status={status}>{status}</span>
      </div>
      {tool.isNew && <span className="tool-card-new">JUST ADDED</span>}
      <h3>{tool.name}</h3>
      <p className="tool-card-description">{tool.desc || tool.description || ''}</p>
      <div className="tool-card-tags">
        {tags.map(tag => <span className="tool-card-tag" key={tag}>{tag}</span>)}
      </div>
      <div className="tool-card-footer">
        <span className="tool-card-category">{tool.category}</span>
        <a className="tool-card-visit" href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${tool.name}`}>
          Visit tool <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
