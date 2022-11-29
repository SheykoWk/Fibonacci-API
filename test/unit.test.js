const fibonacci = require('../src/utils/fibonacci')
const {describe, it} = require('mocha')
const { assert } = require('chai')


describe('Fibonacci unit testing', () => {
    it('Should return 0 when i send 0 in params', (done) => {
        const result = fibonacci(0)
        assert.equal(result, 0)
        done()
    })
    it('Should return 1 when I send 2 in params', (done) => {
        const result = fibonacci(2)
        assert.equal(result, 1)
        done()
    })
    it('Should return 55 when I send 10 in params', (done) => {
        const result = fibonacci(10)
        assert.equal(result, 55)
        done()
    })
    it('Should return 610 when I send 15 in params', (done) => {
        const result = fibonacci(15)
        assert.equal(result, 610)
        done()
    })
    it('Should return 354224848179262000000 when I send 100 in params', (done) => {
        const result = fibonacci(100)
        assert.equal(result, 354224848179262000000)
        done()
    })
})



