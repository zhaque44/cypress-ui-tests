const {ConfidentialClientApplication} = require('@azure/msal-node')

new ConfidentialClientApplication({
  auth: {
    authority: 'https://login.microsoftonline.com/fcb2b37b-5da0-466b-9b83-0014b67a7c78',
    clientId: '44e606a8-a6b9-4fab-b8b0-e0bc740b6ed5',
    clientSecret: 'T8fkS-dGm7_J4DM6kn-E2Q0t2HR~-r4.a-',
  },
})
  .acquireTokenByClientCredential({
    scopes: [`44e606a8-a6b9-4fab-b8b0-e0bc740b6ed5/.default`],
  })
  .then(({accessToken}) => console.log(accessToken))