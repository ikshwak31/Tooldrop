import { CATEGORIES } from '../data/tools'

const CATEGORY_MARKS = {
  All: '✳', Chatbot: '◉', Coding: '⌘', Image: '◌', Video: '▷', Audio: '♫', Writing: '¶',
  Design: '◇', Research: '⌕', Automation: '⟳', Data: '▦', Developer: '{ }', Productivity: '↗', SEO: '↗',
  Education: '∴', '3D': '⬡',
}

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter" aria-label="Filter tools by category">
      {CATEGORIES.map(category => (
        <button
          key={category}
          className={`category-chip${selected === category ? ' is-selected' : ''}`}
          aria-pressed={selected === category}
          onClick={() => onSelect(category)}
        >
          <span aria-hidden="true">{CATEGORY_MARKS[category] || '·'}</span>{category}
        </button>
      ))}
    </div>
  )
}
