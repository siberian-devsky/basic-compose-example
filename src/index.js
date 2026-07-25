import express from 'express'
import path from 'path'

const PORT = 8822
const app = express()

app.use(express.static('public'))
app.set('views')
app.set('view engine', 'pug')

const sendError = (code, message) => res.send(`Request error: ${code}: ${message}`)

app.get('/health', (req, res) => {
    res.setHeader("made-up-header-health", "/health")

    if (res.statusCode !== 200) {
        sendError(res.statusCode, res.statusMessage)
    } else {
        res.send(res.statusCode)
    }
})

app.get('/', (req, res) => {
    res.setHeader("made-up-header-root", "/")
    if (res.statusCode !== 200) {
        sendError(res.statusCode, res.statusMessage)
    } else {
        res.render('index', {
            clock: `${Date(Date.now())}`
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
