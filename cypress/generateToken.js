const {ConfidentialClientApplication} = require('@azure/msal-node')

new ConfidentialClientApplication({
  auth: {
    authority: 'https://login.microsoftonline.com/fcb2b37b-5da0-466b-9b83-0014b67a7c78',
    clientId: '',
    clientSecret: '',
  },
})
  .acquireTokenByClientCredential({
    scopes: [`/.default`],
  })
  .then(({accessToken}) => console.log(accessToken))
