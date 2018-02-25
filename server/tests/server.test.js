const expect = require('expect')
const request = require('supertest')
const { ObjectID } = require('mongodb')

const { app } = require('../server')
const { API, CURRENCIES, USERS } = require('../constants')

const getAllCurrencies = require('../queries/getAllCurrencies')
const deleteAllCurrencies = require('../queries/deleteAllCurrencies')
const postManyCurrencies = require('../queries/postManyCurrencies')
const getCurrencyById = require('../queries/getCurrencyById')
const deleteAllUsers = require('../queries/deleteAllUsers')
const postNewUser = require('../queries/postNewUser')
const getAllUsers = require('../queries/getAllUsers')

const currencies = [{
    name: 'EUR',
    _id: new ObjectID()
}]



describe('CURRENCIES', () => {
    beforeEach(done => {
        deleteAllCurrencies().then(() => done())
    })

    beforeEach(done => {
        postManyCurrencies(currencies).then(() => done())
    })
    describe('POST', () => {

        it('should create a new currency', done => {
            const name = 'CHF'

            request(app)
                .post(API + CURRENCIES)
                .send({ name })
                .expect(200)
                .expect(res => {
                    expect(res.body.name).toBe(name)
                })
                .end((err, res) => {
                    if (err) {
                        return done(err)
                    }

                    getAllCurrencies().then(currencies => {
                        expect(currencies.length).toBe(2)
                        done()
                    }).catch(err => done(err))
                })
        })
    })

    describe('GET', () => {

        it('should get currency by id', done => {
            request(app)
                .get(API + CURRENCIES + `/${currencies[0]._id.toHexString()}`)
                .expect(200)
                .expect(res => {
                    expect(res.body.currency.name).toBe(currencies[0].name)
                })
                .end(done)
        })
    })

    describe('DELETE', () => {
        it('should delete currency by id', done => {
            request(app)
                .delete(API + CURRENCIES + `/${currencies[0]._id.toHexString()}`)
                .expect(200)
                .expect(res => {
                    expect(res.body.currency.name).toBe(currencies[0].name)
                })
                .end((err, res) => {
                    if (err) {
                        return done(err)
                    }

                    getAllCurrencies().then(currencies => {
                        expect(currencies.length).toBe(0)
                        done()
                    }).catch(err => done(err))
                })
        })
    })

    describe('PUT', () => {
        it('should edit currency by id', done => {
            const body = {
                name: 'EURO'
            }
            request(app)
                .put(API + CURRENCIES + `/${currencies[0]._id.toHexString()}`)
                .send(body)
                .expect(200)
                .expect(res => {
                    expect(res.body.currency.name).toBe(body.name)
                })
                .end(done)
        })
    })
})

describe('USERS', () => {
    beforeEach(done => {
        deleteAllUsers().then(() => done())
    })

    describe('POST', () => {
        it('shold create new user', done => {
            const body = {
                email: 'umardedic@gmail.com',
                password: 'stargazers'
            }

            request(app)
                .post(API + USERS)
                .send(body)
                .expect(200)
                .expect(res => {
                    expect(res.body.email).toBe(body.email)
                })
                .end((err, res) => {
                    if (err) {
                        return done(err)
                    }

                    getAllUsers().then(users => {
                        expect(currencies.length).toBe(1)
                        done()
                    }).catch(err => done(err))
                })
        })
    })
})