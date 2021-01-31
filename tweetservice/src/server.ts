import dotenv from 'dotenv'
import path from 'path'
import app from './app/app'

const PORT = 4000
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

app.listen(PORT, () => {
  console.log(`listenning on ${PORT}`)
})
