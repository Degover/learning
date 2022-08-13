import express  from 'express'
import ip from 'ip'
import dotenv from 'dotenv'
import cors from 'cors'
import HttpStatus from './controller/patient.controller.js'
import Response from './domain/response.js'
import log from './util/logger.js'

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000
const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.get('/', (req, res) => res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patient API, v1.0.0 - All Systems Go')))
app.listen(PORT, () => log.info(`Server running on ${ip.address()}:${PORT}`))
