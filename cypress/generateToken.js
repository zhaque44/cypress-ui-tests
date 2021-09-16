const {ConfidentialClientApplication} = require('@azure/msal-node')

new ConfidentialClientApplication({
  auth: {
    authority: 'https://login.microsoftonline.com/your-id',
    clientId: '',
    clientSecret: '',
  },
})
  .acquireTokenByClientCredential({
    scopes: [`/.default`],
  })
  .then(({accessToken}) => console.log(accessToken))
