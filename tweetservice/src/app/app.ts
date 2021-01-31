import express, { Request } from 'express'
import lookup from './twitter/lookup'

const app = express()

app.get('/tweet/:id', (req: Request<{ id: string }>, res) => {
  lookup(req.params.id)
  res.status(200).json({ text: 'halo' })
})

export default app
