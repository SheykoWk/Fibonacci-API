//? Dependencies
const express = require('express')
const morgan = require('morgan');
const cors = require('cors')

const fibonacci = require('./utils/fibonacci')
const {error, success} = require('./utils/responses')

//? Initial Config
const app = express()
const port = process.env.PORT || 9000
const host = process.env.HOST || `http://localhost:${port}`

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
    success(req, res, 200, {
        routes: {
            fibonacci: `${host}/api/v1/fibonacci/2`
        }
    })
})

app.get('/api/v1/fibonacci/:num', (req, res) => {
    const { num } = req.params 
    
    if(Math.sign(Number(num)) != 1 && Math.sign(Number(num)) != 0 ){
        return error(req, res, 400, 'Send a valid positive Number')

    }
    success(req, res, 200, fibonacci(num))
})

app.listen(port, () => {
    console.log(`Server started on ${host}`)
})

module.exports = app