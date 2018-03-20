const superagent = require('superagent')
const expect = require('expect.js')

describe('express rest api server', function () {
    let id

    it('post object', function (done) {
        superagent.post('http://localhost:3000/prizes/test')
            .send({
                prize_value: 'Prize Test 1',
                prize_type: 'money',
                prize_probability: 0,
                prize_spots: 1,
                editable: false,
                brand_name: 'Youwager'
            })
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(res.body.length).to.eql(1)
                expect(res.body[0]._id.length).to.eql(24)
                id = res.body[0]._id
                done()
            })
    })

    it('retrieves an object', function (done) {
        superagent.get('http://localhost:3000/prizes/test/' + id)
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body._id.length).to.eql(24)
                expect(res.body._id).to.eql(id)
                done()
            })
    })

    it('retrieves a collection', function (done) {
        superagent.get('http://localhost:3000/prizes/test')
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(res.body.length).to.be.above(0)
                expect(res.body.map(function (item) { return item._id })).to.contain(id)
                done()
            })
    })


    it('updates an object', function (done) {
        superagent.put('http://localhost:3000/prizes/test/' + id)
            .send({
                prize_value: 'Prize Test 1 - update',
                prize_type: 'freeplay',
                prize_probability: 1,
                prize_spots: 2,
                editable: false,
                brand_name: 'Youwager'
            })
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body.msg).to.eql('success')
                done()
            })
    })

    it('checks an updated object', function (done) {
        superagent.get('http://localhost:3000/prizes/test/' + id)
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body._id.length).to.eql(24)
                expect(res.body._id).to.eql(id)
                expect(res.body.name).to.eql('Peter')
                done()
            })
    })    


    it('removes an object', function (done) {
        superagent.del('http://localhost:3000/prizes/test/' + id)
            .end(function (e, res) {
                // console.log(res.body)
                expect(e).to.eql(null)
                expect(typeof res.body).to.eql('object')
                expect(res.body.msg).to.eql('success')
                done()
            })
    })  
});