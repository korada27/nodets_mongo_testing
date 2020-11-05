process.env.NODE_ENV = 'test';

import app from "../lib/app";
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as conn from '../lib/db';
var request = require('supertest');

chai.use(chaiHttp);



describe('Contact Testing', function () {
    // beforeEach((done) => {
    //     conn.connect()
    //       .then(() => done())
    //       .catch((err) => done(err));
    // })
    
    // afterEach((done) => {
    //     conn.close()
    //       .then(() => done())
    //       .catch((err) => done(err));
    //   })

    it("Get Contact", function (done) {
        request(app)
            .get('/contact')
            .then((res) => {
                // console.log("Data", JSON.parse(res.text).message);
                done();
            })
    });
    it("create Contact", function (done) {
        var reqObj = {
            "firstName":"Abhijeeth",
            "lastName": "D",
            "email":"abi@gmail.com",
            "phone":9998789878,
            "company":"BB4"
        }
        request(app)
            .post('/contact')
            .send(reqObj)
            .then((res) => {
                // console.log("Data", JSON.parse(res.text));
                done();
            })
    });
})