it('GET Request', ()=>{
    let accessToken='2906f5320f9a493685c5c0fe11b91326181da804c34c54026d5d5ab1e11dc72e' //my access token


    cy.request({
        method:'GET',
        url:"https://gorest.co.in/public/v2/users", // visit this url to view the result
        headers:{
            'Authorization': 'Bearer ' +accessToken // for APIs that need authorizations
           },
       
    }).then((response)=>{
       
        expect(response.status).to.be.eq(200)
    })
})
