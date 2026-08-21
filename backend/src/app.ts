import express from 'express'

const app = express()

// ─── Middlewares ──────────────────────────────────────────────────────────────

app.use(express.json())

// ─── Health Check ─────────────────────────────────────────────────────────────

app.get('/api/v1/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// ─── Error Handler ────────────────────────────────────────────────────────────

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal Server Error' })
  }
)

export default app
