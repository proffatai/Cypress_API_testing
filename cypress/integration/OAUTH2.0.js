it('POST Request of OAuth2.0 API', ()=>{
    let accessToken='' //my access token is not known at first


    cy.request({
        method:'POST',
        url:'http://coop.apps.symfonycasts.com/token', // visit this url to view the result
        form: true,
        body: {
            "client_id":"Adesanmi",
            "client_secret":"7a7f3d757d97ca7c16f10b86e908e673", // we are sending these information to the OAuth server so can get a refresh toke
            "grant_type":"client_credentials"
             }
       
    }).then((response)=> // we are intrested in extracting the refresh token from the server
     {
        accessToken=response.body.access_token // we are storing the refresh token to a out variable. Note, the response body has
        // an attribute called access_token and that was what we extracted and stored it in our user defined variable 
        cy.request({
            method:'GET',
            url:"http://coop.apps.symfonycasts.com/api/me", // visit this url to view the result
            headers:{
                'Authorization': 'Bearer ' +accessToken // for APIs that need authorizations
               },
           
        }).then((response)=>{
           
           if (expect(response.status).to.be.eq(200)) {
            cy.log(accessToken)
           }
        })
      })
})
