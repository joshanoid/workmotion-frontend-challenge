import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import employees from './routes/employees'

const app = express()
const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}

app.use(cors(options))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(employees)

const { PORT = 3001 } = process.env

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on ${PORT}...`)
})
