import { tools } from '../../src/data/tools.js'

const MODEL = '@cf/baai/bge-base-en-v1.5'
const RESULT_LIMIT = 8
const MIN_SIMILARITY = 0.2
let toolEmbeddingsPromise

function toolText(tool) {
  const tasks = (tool.searchTerms || []).join(', ').slice(0, 1500)
  return `${tool.name}. ${tool.category}. ${tool.desc}. Tags: ${(tool.tags || []).join(', ')}. Tasks: ${tasks}`.slice(0, 1800)
}

function cosineSimilarity(a, b) {
  let dot = 0
  let normA = 0
  let normB = 0
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

function getToolEmbeddings(AI) {
  if (!toolEmbeddingsPromise) {
    toolEmbeddingsPromise = AI.run(MODEL, { text: tools.map(toolText) })
      .then(result => {
        if (!Array.isArray(result?.data) || result.data.length !== tools.length) {
          throw new Error('Unexpected embeddings response')
        }
        return result.data
      })
      .catch(error => {
        toolEmbeddingsPromise = undefined
        throw error
      })
  }
  return toolEmbeddingsPromise
}

export async function onRequestPost({ request, env }) {
  const requestOrigin = request.headers.get('Origin')
  if (requestOrigin !== new URL(request.url).origin) {
    return Response.json({ error: 'Invalid origin' }, { status: 403 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Request body must be JSON' }, { status: 400 })
  }

  const query = typeof body.query === 'string' ? body.query.trim().slice(0, 200) : ''
  if (query.length < 2) {
    return Response.json({ results: [] }, { headers: { 'Cache-Control': 'no-store' } })
  }
  if (!env.AI) {
    return Response.json({ error: 'Workers AI binding is not configured' }, { status: 503 })
  }

  try {
    const [toolEmbeddings, queryResult] = await Promise.all([
      getToolEmbeddings(env.AI),
      env.AI.run(MODEL, { text: [query] }),
    ])
    const queryEmbedding = queryResult?.data?.[0]
    if (!Array.isArray(queryEmbedding)) throw new Error('Unexpected query embedding response')

    const ranked = tools
      .map((tool, index) => ({ name: tool.name, score: cosineSimilarity(queryEmbedding, toolEmbeddings[index]) }))
      .filter(result => Number.isFinite(result.score))
      .sort((a, b) => b.score - a.score)
    const relevant = ranked.filter(result => result.score >= MIN_SIMILARITY).slice(0, RESULT_LIMIT)
    const results = relevant.length ? relevant : ranked.slice(0, 3)

    return Response.json({ results }, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return Response.json({ error: 'Semantic search is temporarily unavailable' }, { status: 502 })
  }
}
