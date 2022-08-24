///<reference types="cypress" />

describe("More on APIs", ()=>{
    let accessToken='2906f5320f9a493685c5c0fe11b91326181da804c34c54026d5d5ab1e11dc72e' //my access token

    it('POST Request',()=>{
        cy.request({
            method:'POST',
            url:"https://gorest.co.in/public/v2/posts",
            headers:{
                'Authorization': 'Bearer ' +accessToken // for APIs that need authorizations
               },
            body:{
                "name": "Fatai Ibrahim",
               "email": "profftai@gmail.com",
               "gender": "male",
               "status": "active"
                }
        }).then((response)=>{
           
            expect(response.status).to.be.eq(200)
            expect(response.body.data).has.property('email', 'proffatai@gmail.com')
            if(expect(response.body.data).to.have.property('id')){
                let Created_id=response.body.data.id
                return Created_id
            }    
        }).then((Created_id)=>{
        cy.request({
            method:'PUT',
            url:"https://gorest.co.in/public/v2/users/"+Created_id,
            body:{
                "name": "Fatai Ibrahim",
               "email": "proffatai@gmail.com",
               "gender": "male",
               "status": "inactive"
           },
        }).then((response2)=>{
            expect(response2.body).to.have.property('id')
            
        }
        )
    })
})
})