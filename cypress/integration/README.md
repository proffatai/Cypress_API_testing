### Testing API which uses OAuth2.0 is quite different from API with other kind of authentication method.
In OAuth2.0, we need to first provide certain information  such as client id, client secret, grant type and/or scope to the Auth server which now in turn generate a  refresh / access token that tends to expire after some certain amount of time. With this access token gotten from the auth server, we can now pass this with the request in other to be able to access the endpoints.

We can now pass the refresh token as we would normally do to the authorization attribute of the request we want to send.


To create an OAuth2.0 test, we can create the information such as client id, client secret etc. that we need to send to the oauth server on `http://coop.apps.symfonycasts.com` then we register on the app and navigate `Your Applications` tab to create an application for ourself.

We  need to provide any name as our application name, any url whatsoever as our redirect url e.g `https://www.google.com` and then we can select the scope / list of endpoints that we want.

On creating the application, the app provides us with the following information:
client id, client secret, redirect url and the scope that we would be sending to the OAuth server so we can get a refresh token.

### How do we get the refresh token

We can decide to just generate the token directly on the app by clicking the Generate a token button but I wouldnt go that route. I would rather have to send the information gotten to the server and then get the token from the server.