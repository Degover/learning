import express  from 'express'
import ip from 'ip'
import dotenv from 'dotenv'
import cors from 'cors'
import HttpStatus from './controller/patient.controller.js'
import Response from './domain/response.js'
import log from './util/logger.js'
import patientRoutes from './route/pacient.route.js'

dotenv.config()

const PORT = process.env.SERVER_PORT || 3000
const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.use('/patients', patientRoutes)

app.get('/', (req, res) => res.send(new Response(HttpStatus.OK.code, HttpStatus.OK.status, 'Patient API, v1.0.0 - All Systems Go')))
app.all('*', (req, res) => res.status(HttpStatus.NOT_FOUND)
    .send(new Response(HttpStatus.NOT_FOUND.code, HttpStatus.NOT_FOUND.status, 'Route does not exist on the server')))
app.listen(PORT, () => log.info(`Server running on ${ip.address()}:${PORT}`))
