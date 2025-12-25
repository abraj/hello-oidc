module.exports = async ({ 
    token,      // ID Token in compact, unparsed format
    payload,    // parsed ID Token payload
    target_uri, // target URI for redirect
    req,        // Express Request
    res         // Express Response
}) => {
 
    console.log('LoginSync received:',JSON.stringify(payload,null,4))
    // TODO
    // lookup user from your DB with payload.sub user identifier
    // create a user in DB if not found if open registration
    return({
        // accessDenied: true, // will set auth.isLoggedIn = false
        // target_uri: '/custom-redirect', // override redirect URI
        // updatedAuth: {}, // auth object stored in cookie
    })
}
