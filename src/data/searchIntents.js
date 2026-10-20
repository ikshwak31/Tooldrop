// Curated task language helps semantic search match natural descriptions to the
// catalogue. Add phrases to the relevant tool groups as users ask for new jobs.
export const searchIntents = [
  {
    tools: ['Canva AI', 'Adobe Acrobat AI', 'Adobe Express', 'Smallpdf AI', 'Beautiful.ai', 'Napkin AI'],
    terms: ['make a PDF', 'create a PDF', 'turn my work into a PDF', 'export as PDF', 'PDF maker', 'save as PDF', 'create a document', 'make a presentation into a PDF'],
  },
  {
    tools: ['Adobe Acrobat AI', 'Smallpdf AI'],
    terms: ['compress a PDF', 'shrink a PDF', 'reduce PDF file size', 'make a PDF smaller', 'merge PDFs', 'combine PDF files', 'split a PDF', 'edit a PDF', 'sign a PDF', 'convert PDF to Word', 'convert Word to PDF', 'convert images to PDF', 'OCR a scanned PDF'],
  },
  {
    tools: ['PDF.ai', 'Smallpdf AI', 'Adobe Acrobat AI', 'NotebookLM', 'ChatGPT', 'Claude', 'Gemini'],
    terms: ['chat with a PDF', 'ask questions about a PDF', 'summarize a PDF', 'read a long document', 'find answers in a document', 'extract information from a document', 'understand a contract', 'summarize a report'],
  },
  {
    tools: ['Adobe Express'],
    terms: ['compress images', 'compress an image', 'shrink image files', 'reduce image file size', 'make images smaller', 'optimize images for a website', 'resize a photo', 'resize an image', 'convert image format', 'compress JPG', 'compress PNG', 'compress WebP'],
  },
  {
    tools: ['remove.bg', 'Adobe Express', 'Canva AI', 'Photoroom'],
    terms: ['remove image background', 'remove photo background', 'make a transparent background', 'cut out an object from a photo', 'make a transparent PNG', 'create product photos', 'edit product images', 'replace an image background'],
  },
  {
    tools: ['Adobe Firefly', 'Midjourney', 'DALL-E 3', 'Ideogram', 'Leonardo AI', 'Flux', 'Playground AI', 'Recraft AI', 'Canva AI', 'Meta AI'],
    terms: ['generate an image with AI', 'create an image from text', 'make AI art', 'create an illustration', 'generate a poster', 'make social media graphics', 'create a product mockup', 'generate a picture'],
  },
  {
    tools: ['LOGO.com', 'Looka', 'Canva AI', 'Adobe Express'],
    terms: ['make a logo', 'create a logo for my business', 'design a brand identity', 'make a brand kit', 'create a business logo', 'design a social post', 'make a flyer'],
  },
  {
    tools: ['Gamma', 'Beautiful.ai', 'Canva AI', 'Napkin AI', 'Microsoft Copilot'],
    terms: ['make a presentation', 'create slides from a prompt', 'turn notes into slides', 'build a pitch deck', 'make a PowerPoint', 'create a slide deck', 'turn text into a diagram', 'make an infographic', 'create a flowchart', 'visualize an idea'],
  },
  {
    tools: ['NotebookLM', 'PDF.ai', 'Smallpdf AI', 'ChatGPT', 'Claude', 'Gemini', 'Notion AI'],
    terms: ['summarize my documents', 'summarize PDFs', 'summarize research papers', 'turn notes into a summary', 'make study notes', 'create a study guide', 'ask questions about my files', 'compare documents', 'summarize a website'],
  },
  {
    tools: ['NotebookLM', 'Perplexity AI', 'Consensus', 'Elicit', 'Scite', 'ChatGPT', 'Claude'],
    terms: ['research a topic', 'find academic papers', 'search scientific studies', 'summarize research literature', 'find evidence and sources', 'compare research papers', 'check citations', 'find answers with citations'],
  },
  {
    tools: ['DeepL', 'DeepL Write', 'ChatGPT', 'Claude', 'Gemini', 'HeyGen'],
    terms: ['translate text', 'translate a document', 'translate a PDF', 'translate a video', 'translate subtitles', 'translate speech', 'rewrite text in another language', 'make writing sound natural'],
  },
  {
    tools: ['Grammarly', 'DeepL Write', 'QuillBot', 'Wordtune', 'Claude', 'ChatGPT', 'Jasper AI', 'Copy.ai', 'Writesonic', 'Rytr'],
    terms: ['write an email', 'write a blog post', 'write marketing copy', 'rewrite this paragraph', 'paraphrase text', 'fix grammar', 'improve my writing', 'change the tone', 'write product descriptions', 'draft social media posts', 'summarize text'],
  },
  {
    tools: ['Fireflies.ai', 'Fathom', 'Krisp AI', 'Otter.ai', 'Descript', 'Notion AI'],
    terms: ['take meeting notes', 'transcribe a meeting', 'summarize a meeting', 'extract meeting action items', 'record a call', 'transcribe audio', 'transcribe a video', 'make a meeting recap', 'clean up background noise in a call'],
  },
  {
    tools: ['Krisp AI', 'Adobe Podcast AI', 'Descript'],
    terms: ['remove background noise from audio', 'make my microphone sound better', 'clean up a voice recording', 'enhance a podcast recording', 'remove echo from audio', 'improve speech quality'],
  },
  {
    tools: ['Sora', 'Runway ML', 'Pika Labs', 'Kling AI', 'Invideo AI', 'Veed.io', 'HeyGen', 'Synthesia'],
    terms: ['generate a video from text', 'make a video from a prompt', 'create a marketing video', 'make an avatar video', 'turn a script into a video', 'add subtitles to video', 'translate a video', 'edit a video with AI'],
  },
  {
    tools: ['Opus Clip', 'Veed.io', 'Descript', 'CapCut AI'],
    terms: ['turn a long video into short clips', 'make shorts from a podcast', 'create TikTok clips', 'repurpose video for social media', 'add captions to video', 'remove filler words from video'],
  },
  {
    tools: ['Suno', 'Udio', 'Mubert'],
    terms: ['make a song with AI', 'generate music', 'create background music', 'make music for a video', 'write a song with vocals', 'generate royalty free music'],
  },
  {
    tools: ['ElevenLabs', 'Adobe Podcast AI', 'Descript'],
    terms: ['turn text into speech', 'create a voiceover', 'generate an AI voice', 'clone a voice', 'narrate a script', 'make an audiobook', 'convert speech to text'],
  },
  {
    tools: ['Cursor', 'GitHub Copilot', 'Windsurf', 'Tabnine', 'Devin', 'Replit AI', 'ChatGPT', 'Claude', 'Gemini'],
    terms: ['write code', 'build an app', 'create a website', 'debug code', 'explain code', 'autocomplete code', 'generate a React component', 'make an app without coding', 'fix a programming error', 'review my code'],
  },
  {
    tools: ['Zapier AI', 'Make', 'n8n', 'Dify', 'Reclaim AI', 'Mem AI'],
    terms: ['automate repetitive work', 'connect apps together', 'build an automated workflow', 'create an AI agent', 'schedule my tasks', 'automate data entry', 'sync information between apps'],
  },
  {
    tools: ['Julius AI', 'Tableau AI', 'Obviously AI', 'ChatGPT', 'Microsoft Copilot'],
    terms: ['analyze a spreadsheet', 'ask questions about my data', 'make a chart from data', 'visualize spreadsheet data', 'find trends in data', 'predict business results', 'analyze a CSV file', 'create a dashboard'],
  },
  {
    tools: ['Surfer SEO', 'Ahrefs AI', 'Writesonic', 'Jasper AI', 'Copy.ai'],
    terms: ['improve SEO rankings', 'research keywords', 'optimize a blog post for search', 'write SEO content', 'audit my website', 'analyze backlinks', 'create meta descriptions'],
  },
  {
    tools: ['Khan Academy Khanmigo', 'ChatGPT', 'Claude', 'Gemini', 'NotebookLM'],
    terms: ['learn a subject', 'get help with homework', 'explain a difficult concept', 'practice a language', 'make flashcards', 'study for an exam', 'get a step by step tutor'],
  },
  {
    tools: ['Meshy', 'Luma AI'],
    terms: ['make a 3D model', 'generate a 3D asset from text', 'create 3D objects for a game', 'turn a video into a 3D scene', 'make textures for a 3D model'],
  },
  {
    tools: ['Figma AI'],
    terms: ['design an app interface', 'make a website mockup', 'create a wireframe', 'prototype a user interface', 'generate UI layouts', 'turn a prompt into a design', 'create design assets'],
  },
  {
    tools: ['Stable Diffusion'],
    terms: ['generate images with an open source model', 'run an image generator locally', 'create text to image art', 'generate images with custom models', 'make AI illustrations'],
  },
  {
    tools: ['Grok'],
    terms: ['find current news', 'search the web for recent information', 'get real time answers', 'look up what is happening now', 'ask questions about current events'],
  },
  {
    tools: ['Character.AI'],
    terms: ['chat with a fictional character', 'create an AI persona', 'roleplay with an AI character', 'practice a conversation with a character'],
  },
  {
    tools: ['Poe'],
    terms: ['try different AI chatbots', 'compare answers from AI models', 'chat with multiple AI models', 'find community made AI bots'],
  },
  {
    tools: ['Pi'],
    terms: ['have a natural conversation with AI', 'talk through an idea', 'brainstorm with a conversational assistant', 'get a supportive AI conversation'],
  },
  {
    tools: ['Bolt.new', 'Lovable', 'Replit AI'],
    terms: ['build a web app from a description', 'make an app without coding', 'turn an idea into a working website', 'create and deploy a full stack app'],
  },
  {
    tools: ['v0'],
    terms: ['generate React components', 'create a website UI from a prompt', 'build a Tailwind interface', 'make frontend code from a design idea'],
  },
  {
    tools: ['Framer AI'],
    terms: ['create and publish a website', 'build a landing page from a prompt', 'design a responsive website without code', 'make a business website'],
  },
  {
    tools: ['Hugging Face', 'Mistral AI'],
    terms: ['find open source AI models', 'use an LLM API', 'run or fine tune a language model', 'build an AI application with models', 'host a machine learning model'],
  },
  {
    tools: ['Krisp AI'],
    terms: ['remove background noise from a call', 'transcribe a meeting', 'make meeting notes and action items', 'improve microphone audio', 'create a meeting summary'],
  },
  {
    tools: ['Krea', 'Clipdrop', 'Magnific AI', 'Upscayl'],
    terms: ['upscale an image', 'make a photo higher resolution', 'sharpen a blurry image', 'restore an old photo', 'enhance image quality', 'remove unwanted objects from an image', 'clean up a photo', 'relight an image', 'edit an image with AI'],
  },
  {
    tools: ['Krea', 'Clipdrop'],
    terms: ['generate an image in real time', 'make a video from an image', 'create a 3D object from text', 'remove an object from a photo', 'replace an image background', 'create visuals from a prompt'],
  },
  {
    tools: ['Uizard', 'Figma AI'],
    terms: ['design an app screen from a prompt', 'turn a sketch into a wireframe', 'turn a screenshot into an editable design', 'create a mobile app mockup', 'design a website interface', 'make a product prototype'],
  },
  {
    tools: ['SciSpace', 'NotebookLM', 'Elicit', 'Consensus'],
    terms: ['understand a scientific paper', 'chat with a research paper', 'find papers for my literature review', 'write a literature review', 'extract data from research papers', 'create citations for academic writing'],
  },
  {
    tools: ['Rezi', 'Grammarly', 'ChatGPT', 'Claude'],
    terms: ['build a resume', 'write a CV', 'tailor my resume to a job', 'make my resume ATS friendly', 'write a cover letter', 'prepare for a job interview', 'improve resume bullet points'],
  },
  {
    tools: ['ClickUp Brain', 'Airtable AI', 'Miro AI', 'Notion AI'],
    terms: ['summarize my work tasks', 'ask questions about my project workspace', 'brainstorm ideas on a whiteboard', 'cluster brainstorming notes', 'turn notes into an action plan', 'summarize a project board', 'automate work in a team workspace'],
  },
  {
    tools: ['Murf AI', 'PlayHT', 'ElevenLabs'],
    terms: ['create a professional voiceover', 'narrate a video script', 'make a voice for an explainer video', 'generate natural sounding speech', 'turn a document into spoken audio', 'make audio narration'],
  },
  {
    tools: ['Lindy', 'Relevance AI', 'Zapier AI', 'Make', 'n8n'],
    terms: ['build an AI assistant for my business', 'create an AI agent for email', 'automate customer support tasks', 'automate a business process with AI', 'make an agent that uses my apps', 'delegate repetitive tasks to an AI assistant'],
  },
  {
    tools: ['Durable AI', 'Framer AI'],
    terms: ['build a website for my small business', 'make a business website with AI', 'create a website and business copy', 'launch a website without coding'],
  },
  {
    tools: ['Blackbox AI', 'Phind', 'Cursor', 'GitHub Copilot'],
    terms: ['search for code examples', 'ask a coding question', 'debug a programming error', 'find why my code is failing', 'explain an API to me', 'get technical answers with sources'],
  },
  {
    tools: ['Vapi', 'Retell AI'],
    terms: ['build an AI phone agent', 'automate phone calls with an AI voice', 'make an AI receptionist', 'answer customer calls automatically', 'create a conversational voice bot', 'handle inbound calls with AI'],
  },
  {
    tools: ['Interior AI', 'Canva AI', 'Krea'],
    terms: ['redesign my living room', 'visualize a new interior design', 'decorate an empty room', 'try different furniture and decor styles', 'stage a room for a property listing'],
  },
  {
    tools: ['Gamma', 'Beautiful.ai', 'Canva AI'],
    terms: ['turn a document into a presentation', 'make a deck from my outline', 'create a presentation from a report', 'turn my notes into a presentation', 'make slides for a business pitch'],
  },
  {
    tools: ['Genspark', 'Perplexity AI', 'ChatGPT', 'Claude', 'Gemini'],
    terms: ['research this topic and make a report', 'complete a multi step task for me', 'find information online and create a finished document', 'make a spreadsheet from research', 'create a presentation after researching a subject', 'use an AI agent to get work done'],
  },
  {
    tools: ['DeepSeek', 'Qwen Chat', 'ChatGPT', 'Claude', 'Gemini', 'Grok'],
    terms: ['ask an AI assistant a question', 'solve a difficult reasoning problem', 'explain a topic', 'analyze a file with AI', 'help me write or code with an AI chatbot'],
  },
  {
    tools: ['OpenRouter', 'Hugging Face', 'Mistral AI'],
    terms: ['compare different language models', 'access many AI models from one API', 'find an LLM API for my app', 'try different open source chat models', 'connect my application to multiple AI providers'],
  },
  {
    tools: ['Replicate', 'fal.ai', 'Hugging Face'],
    terms: ['run an AI model through an API', 'generate images programmatically', 'deploy a machine learning model', 'use hosted AI models without managing GPUs', 'build image or video generation into my app'],
  },
  {
    tools: ['Higgsfield', 'Captions', 'Krea', 'Runway ML'],
    terms: ['create a cinematic AI video', 'make an AI video advertisement', 'edit a video for social media with AI', 'generate video scenes from a prompt', 'create a talking avatar video for social media'],
  },
  {
    tools: ['Granola AI', 'tl;dv', 'Fireflies.ai', 'Fathom', 'Otter.ai'],
    terms: ['take notes in a video call', 'summarize a Zoom meeting', 'get meeting notes without a bot joining', 'create searchable meeting transcripts', 'capture decisions and action items from a call'],
  },
  {
    tools: ['Wispr Flow', 'Murf AI', 'PlayHT', 'ElevenLabs'],
    terms: ['dictate text with my voice', 'turn speech into polished writing', 'use voice typing on my computer', 'transcribe speech as I speak', 'write hands free using AI'],
  },
  {
    tools: ['Freepik AI', 'Krea', 'Canva AI', 'Adobe Firefly'],
    terms: ['generate creative assets for a design', 'find stock images and edit them with AI', 'create images and design resources', 'make a poster with AI image tools', 'generate and edit graphic design assets'],
  },
]
