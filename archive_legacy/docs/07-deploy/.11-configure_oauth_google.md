# Configure OAuth for Google #

For Oauth integration more broadly, please follow the documentation linked here: https://docs.lamp.digital/develop/oauth_oidc/

Configure the Google Cloud App for MindLAMP:

To use Google OAuth we’ll need to generate credentials for MindLAMP
1.	Create a Project in Google Cloud App as explained here: https://developers.google.com/identity/protocols/oauth2/web-server#enable-apis
2.	Create an OAuth Client in the Credentials section as explained here:
https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred

    a.	Note that you’ll need to add the dashboard url in the authorized urls. (FE: https://dashboard.lamp.digital)

    b.	As redirect url you’ll need to add the OAuth entry point of the app. That’s the dashboard url followed by “/oauth”. (FE: https://dashboard.lamp.digital/oauth)
 
 3.	Copy the client id and the client secret as we’ll need the to configure the server.

Configure OAuth in the MindLAMP server:

Now that we have the credentials we’ll need to add a few environment variables to the MindLAMP server.

    OAUTH="on"
    OAUTH_AUTH_URL="https://accounts.google.com/o/oauth2/v2/auth"
    OAUTH_TOKEN_URL=" https://oauth2.googleapis.com/token "
    OAUTH_CLIENT_ID="<i>client id here</i>"
    OAUTH_CLIENT_SECRET="<i>client secret here</i>"
    OAUTH_REDIRECT_URI="<i>dashboard URL here</i>/oauth"
    OAUTH_SCOPE="https://www.googleapis.com/auth/userinfo.email"
    TOKEN_SECRET="<i>LAMP defined secret here</i>"

Remember that `OAUTH_REDIRECT_URI` must be exactly the same as the redirect URI the client was set up with.

