// Edit the email address inside the POST request before you rerun so that you create a new user

it("POST Request", () => {
  let accessToken =
    "2906f5320f9a493685c5c0fe11b91326181da804c34c54026d5d5ab1e11dc72e"; //my access token
  cy.request({
    method: "POST", // creating new user
    url: "https://gorest.co.in/public/v2/users",
    headers: {
      Authorization: "Bearer " + accessToken, // for APIs that need authorizations
    },
    body: {
      name: "Fatai Abiodn",
      email: "ibsaa@yhoo.m", //you can always edit the email address and run again to see action
      gender: "male",
      status: "inactive",
    },
  })
    .then((response) => {
      let user = response.body.id; // getting the id of the newly created user
      expect(response.status).to.be.eq(201); //Assertion to verify successful POST request
      return user
    })
    .then((user) => {
      cy.request({
        method: "GET", // getting the new record after POST request
        url: "https://gorest.co.in/public/v2/users/"+user, // visit this url to view the result
        headers: {
          Authorization: "Bearer " + accessToken, // for APIs that need authorizations
        },
      }).then((response) => {
        let user = response.body.id; // getting the id of the newly created user
        expect(response.status).to.be.eq(200);
        return user
      });
    })
    .then((user) => {
  
      cy.request({
        method: "DELETE", //deleting that new user
        url: "https://gorest.co.in/public/v2/users/"+ user, // passing the id so we can delete it
        headers: {
          Authorization: "Bearer " + accessToken, // for APIs that need authorizations
        },
      }).then((response) => {
        expect(response.status).to.be.eq(204); //Assertion to verify deletion
      });
    });
});
