///<reference types="cypress" />

const { use } = require("chai")

describe("More on APIs", ()=>{
    let accessToken='2906f5320f9a493685c5c0fe11b91326181da804c34c54026d5d5ab1e11dc72e' //my access token

    it.skip('DELETE Request',()=>{
        cy.request({
            method:'DELETE',
            url:"https://gorest.co.in/public/v2/users/2652",// edit the id to delete a new user
            headers:{
                'Authorization': 'Bearer ' +accessToken // for APIs that need authorizations
               },
           
        }).then((response)=>{
           
            expect(response.status).to.be.eq(204)   
        })
    })
})
