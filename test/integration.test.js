const app = require('../src/app')
const {describe, it} = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe('Fibonacci API integration testing', () => {
    it('Should return error when i send a string in params', (done) => {
        chai.request(app)
            .get('/api/v1/fibonacci/asd')
            .end((err, res) => {
                chai.assert.equal(res.status, 400)
                chai.assert.equal(res.body.error, true)
                chai.assert.equal(res.body.status, 400)
                chai.assert.equal(res.body.data, "Send a valid positive Number")
                done()
            })
    })
    it('Should return error when I send negative numbers in params', (done) => {
        chai.request(app)
            .get('/api/v1/fibonacci/-5')
            .end((err, res) => {
                chai.assert.equal(res.status, 400)
                chai.assert.equal(res.body.error, true)
                chai.assert.equal(res.body.status, 400)
                chai.assert.equal(res.body.data, "Send a valid positive Number")
                done()
            })
    })
    it('Should return 55 when I send 10 in params', (done) => {
        chai.request(app)
            .get('/api/v1/fibonacci/10')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                chai.assert.equal(res.body.error, false)
                chai.assert.equal(res.body.status, 200)
                chai.assert.equal(res.body.data, 55)
                done()
            })
    })
    it('Should return 610 when I send 15 in params', (done) => {
        chai.request(app)
            .get('/api/v1/fibonacci/15')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                chai.assert.equal(res.body.error, false)
                chai.assert.equal(res.body.status, 200)
                chai.assert.equal(res.body.data, 610)
                done()
            })
    })
    it('Should return 354224848179262000000 when I send 100 in params', (done) => {
        chai.request(app)
            .get('/api/v1/fibonacci/100')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                chai.assert.equal(res.body.error, false)
                chai.assert.equal(res.body.status, 200)
                chai.assert.equal(res.body.data, 354224848179262000000)
                done()
            })
    })
})
