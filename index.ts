import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

import TestRouter from './src/modules/Test/Test.router'
import { errorHandler } from 'middleware'
import { port } from 'config/database'

export const app = express()
const PORT = port

app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

app.use(express.json())
app.use(cors()) // TODO: Update this to fit our cors policy based on the env.

try {
  // app.use('/user', auth, logger, UsersRouter)

  app.use('/test', TestRouter)

  app.use(errorHandler)
} catch (err) {
  console.log('Server Error!!!', err)
  // Sentry.captureException(err)
}

export const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`GeneralUseAPI listening on PORT ${PORT}!`)
})
