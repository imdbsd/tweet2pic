import dotenv from 'dotenv'
import path from 'path'
import app from './app/app'
import './configs'

const PORT = 4001
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

console.log({ env: process.env })

app.listen(PORT, () => {
  console.log(`listenning on ${PORT}`)
})
