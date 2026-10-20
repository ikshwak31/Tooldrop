# ToolDrop

## AI task search on Cloudflare Pages

The `/api/search` Pages Function uses Cloudflare Workers AI embeddings to rank the tools in `src/data/tools.js` against a natural-language task. It uses the `@cf/baai/bge-base-en-v1.5` model and keeps the tool catalogue embeddings in memory for the lifetime of a function instance. The browser falls back to keyword and task-term matching if the AI endpoint is unavailable.

To enable semantic search in production:

1. Open the ToolDrop project under **Workers & Pages** in the Cloudflare dashboard.
2. Go to **Settings → Bindings → Add → Workers AI**.
3. Set the binding name to `AI` and save.
4. Redeploy the Pages project so the binding is available to the function.

Workers AI usage is billed by Cloudflare. Searches will continue to use the local keyword fallback if the binding is not enabled or the AI service is temporarily unavailable.
