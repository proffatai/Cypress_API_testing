/// <reference types="cypress" />

describe('HTTP ENDPOINTS TESTING', ()=>{

    it('GET Request',()=>{
        cy.request({
           method:'GET',
           url:'https://httpbin.org/get '
        }).then(response=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('url')
        })
    })

    it('POST Request',()=>{
        cy.request({
           method:'POST',
           url:'https://httpbin.org/post',
           body:{
            "sex":"female",
            "name":"Aminat",
            "age":23
           }
        }).then(response=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('url')
            expect(response.body).to.have.property('json') // checking if the response has a json as a property
            expect(response.body.json).to.deep.equal( // checking if the correct json is received. So we are comparing the json received to that which we sent
            {
                "sex":"female",
                "name":"Aminat",
                "age":23
               }
                ) 
        })
    })

    it('PUT Request',()=>{
        cy.request({
           method:'PUT',
           url:'https://reqres.in/api/users/2',
           body:{
            "sex":"female",
            "name":"Aminat",
            "age":23
           }
        }).then(response=>{
            expect(response.status).to.be.equal(200)
            expect(response.body).to.have.property('updatedAt')
            expect(response.body).to.contains( // checking if the correct json is received. So we are comparing the json received to that which we sent
            {
                "sex":"female",
                "name":"Aminat",
                "age":23
               }
                ) 
        })
    })
}) 