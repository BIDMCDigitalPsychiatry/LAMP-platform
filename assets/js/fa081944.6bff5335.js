"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2794],{58334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"develop/oauth_oidc","title":"OAuth2/OIDC Support","description":"Introduction","source":"@site/docs/08-develop/10-oauth_oidc.md","sourceDirName":"08-develop","slug":"/develop/oauth_oidc","permalink":"/develop/oauth_oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/10-oauth_oidc.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1732048441000,"sidebarPosition":10,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Writing Documentation","permalink":"/develop/Repositories/writing-documentation"},"next":{"title":"Migrating from CouchDB to MongoDB","permalink":"/develop/couchdb-migration"}}');var o=t(74848),s=t(28453);const r={},l="OAuth2/OIDC Support",a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Example using Keycloak",id:"example-using-keycloak",level:3},{value:"Set up a custom OAuth solution with MindLAMP",id:"set-up-a-custom-oauth-solution-with-mindlamp",level:4},{value:"Create and start the Keycloak server",id:"create-and-start-the-keycloak-server",level:4},{value:"Development mode",id:"development-mode",level:4},{value:"Production mode",id:"production-mode",level:4},{value:"Set up a realm",id:"set-up-a-realm",level:4},{value:"Add an OAuth client",id:"add-an-oauth-client",level:4},{value:"Configure the client for MindLAMP",id:"configure-the-client-for-mindlamp",level:4},{value:"Set up the MindLAMP server",id:"set-up-the-mindlamp-server",level:4},{value:"Kubernetes Example",id:"kubernetes-example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"oauth2oidc-support",children:"OAuth2/OIDC Support"})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["The OAuth2/OIDC integration for the LAMP Platform allows 3rd party identity services systems your organization may already be using (such as ",(0,o.jsx)(n.strong,{children:"Azure Active Directory"})," or ",(0,o.jsx)(n.strong,{children:"AWS Cognito"}),") to be used for authentication and authorization. This integration works by ",(0,o.jsx)(n.strong,{children:"binding an existing mindLAMP ID"})," (such as a Participant ID or Researcher ID) ",(0,o.jsx)(n.strong,{children:"to an existing or new IdP identity"})," (that is, the Participant ID within mindLAMP must still be managed manually from the dashboard at this time). Additionally, when using IdPs such as Azure Active Directory, this integration also supports B2C identities; for example, if your hospital organization already has Azure configured and has just set up the LAMP Platform, patients will be able to use their personal Gmail or Twitter accounts (if allowed by your organization) to sign into mindLAMP on their personal devices."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Support for OAuth2/OIDC is under active development is a ",(0,o.jsx)(n.strong,{children:"BETA"})," feature at this time. For more information and assistance, ",(0,o.jsx)(n.a,{href:"mailto:team@digitalpsych.org",children:"contact us"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.p,{children:"New variables added to the MindLAMP Environment to support OAuth 2.0 Auth with different IdPs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_AUTH_URL"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is the URL that that we will use to fetch our authorization code from"}),"\n",(0,o.jsxs)(n.li,{children:["Example value: ",(0,o.jsx)(n.code,{children:"https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_TOKEN_URL"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is the URL we will use to exchange our authorization code for proper access/refresh tokens"}),"\n",(0,o.jsxs)(n.li,{children:["Example Value: ",(0,o.jsx)(n.code,{children:"https://login.microsoftonline.com/common/v2.0/oauth2/token"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_LOGOUT_URL"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This is the URL will be used when logging out of MindLAMP. Since the session with the provider is handled by the provider (Cookies stored in their domain keep the session open, generally) IdPs have their own logout URLs."}),"\n",(0,o.jsxs)(n.li,{children:["Example Value: ",(0,o.jsx)(n.code,{children:"https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=https://localhost:3001"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_CLIENT_ID"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Client ID given to us by our IdP when creating an OAuth Credential/Client"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_CLIENT_SECRET"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Secret given to us by the IdP when creating an OAuth Credential/Client"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TOKEN_SECRET"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Secret that will be used to sign/validate tokens created inside the mindlamp platform"}),"\n",(0,o.jsxs)(n.li,{children:["Example Value: ",(0,o.jsx)(n.code,{children:"QfTjWnZq4t7w!z%C*F-JaNdRgUkXp2s5u8x/A?D(G+KbPeShVmYq3t6w9y$B&E)H"})]}),"\n",(0,o.jsx)(n.li,{children:"Can be anything"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_REDIRECT_URI"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"URL that we will be redirected to after authentication with our IdP"}),"\n",(0,o.jsxs)(n.li,{children:["Example Value: ",(0,o.jsx)(n.code,{children:"http://localhost:3001/"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH_SCOPE"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The set of permissions we will be requesting of our IdP"}),"\n",(0,o.jsx)(n.li,{children:"Example values and notes: offline_access should always be present, it asks the IdP to emit refresh tokens."}),"\n",(0,o.jsx)(n.li,{children:"For B2C, the Azure Client ID needs to be part of the scope or Azure won't emit Access Tokens"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"OAUTH"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This value signifies if the API accetps/handles OAuth Login correctly."}),"\n",(0,o.jsxs)(n.li,{children:["Example Values: ",(0,o.jsx)(n.code,{children:"on"}),"/",(0,o.jsx)(n.code,{children:"off"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"All of the values should be strings."})})}),"\n",(0,o.jsx)(n.h3,{id:"example-using-keycloak",children:"Example using Keycloak"}),"\n",(0,o.jsx)(n.h4,{id:"set-up-a-custom-oauth-solution-with-mindlamp",children:"Set up a custom OAuth solution with MindLAMP"}),"\n",(0,o.jsxs)(n.p,{children:["In this example we set up an existing MindLAMP server with ",(0,o.jsx)(n.a,{href:"https://www.keycloak.org/",children:"Keycloak"}),", an open source identity provider which supports the OAuth 2 flow. This choice is supplied as an example; other OAuth 2 solutions could be used."]}),"\n",(0,o.jsx)(n.h4,{id:"create-and-start-the-keycloak-server",children:"Create and start the Keycloak server"}),"\n",(0,o.jsxs)(n.p,{children:["The Docker Compose file you need to use depends on whether you want to run the server in development or production mode. Choose the right one below, save it to a ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," file and then run ",(0,o.jsx)(n.code,{children:"docker compose -f <path to file>/docker-compose.yaml"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"development-mode",children:"Development mode"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Click to expand"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"    version: '3'\n    services:\n      keycloak:\n        image: quay.io/keycloak/keycloak:17.0.0\n        command: start-dev\n        environment:\n          KEYCLOAK_ADMIN: admin\n          KEYCLOAK_ADMIN_PASSWORD: <admin password here>\n          KC_DB: postgres\n          KC_DB_URL_HOST: <database host here>\n          KC_DB_USERNAME: mindlamp\n          KC_DB_PASSWORD: <database password here>\n        ports:\n          - 8080:8080\n        depends_on:\n          - db\n\n      db:\n        image: postgres:latest\n        environment:\n          POSTGRES_USER: mindlamp\n          POSTGRES_PASSWORD: <database password here>\n          POSTGRES_DB: keycloak\n        ports:\n          - 5432:5432\n"})})]}),"\n",(0,o.jsx)(n.h4,{id:"production-mode",children:"Production mode"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Click to expand"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'    version: \'3\'\n    services:\n      keycloak:\n        image: quay.io/keycloak/keycloak:17.0.0\n        command: ["start", "--auto-build"]\n        environment:\n          KC_HEALTH_ENABLED: true\n          KC_METRICS_ENABLED: true\n          KC_HOSTNAME: <hostname here>\n          KEYCLOAK_ADMIN: admin\n          KEYCLOAK_ADMIN_PASSWORD: <admin password here>\n          KC_HTTPS_KEY_STORE_FILE: /tmp/keystore\n          KC_HTTPS_KEY_STORE_PASSWORD: <key store password here>\n          KC_DB: postgres\n          KC_DB_URL_HOST: <database host here>\n          KC_DB_USERNAME: mindlamp\n          KC_DB_PASSWORD: <database password here>\n        ports:\n          - 8443:8443\n        depends_on:\n          - db\n        volumes:\n          - <key store file here>:/tmp/keystore\n\n      db:\n        image: postgres:latest\n        environment:\n          POSTGRES_USER: mindlamp\n          POSTGRES_PASSWORD: Password01\n          POSTGRES_DB: keycloak\n        ports:\n          - 5432:5432\n'})})]}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you match ",(0,o.jsx)(n.code,{children:"<database password here>"})," for both containers. In production mode, HTTPS support is mandatory, so you also need to provide a valid key store file."]}),"\n",(0,o.jsxs)(n.p,{children:["Please refer to ",(0,o.jsx)(n.a,{href:"https://www.keycloak.org/server/all-config",children:"https://www.keycloak.org/server/all-config"})," for a complete list of build and configuration options."]}),"\n",(0,o.jsx)(n.h4,{id:"set-up-a-realm",children:"Set up a realm"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open a web browser and go to Keycloak hostname (e.g., ",(0,o.jsx)(n.a,{href:"https://0.0.0.0:8443",children:"https://0.0.0.0:8443"})," if you are in the host in production mode).\n",(0,o.jsx)(n.img,{alt:"The Keycloak home screen",src:t(85232).A+"",width:"2560",height:"1116"}),"\nClick ",(0,o.jsx)(n.strong,{children:"Administration Console"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter the credentials you specified in the ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," file and click ",(0,o.jsx)(n.strong,{children:"Sign In"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["On the top left corner of the screen, hover over ",(0,o.jsx)(n.strong,{children:"Master"})," (this is what the default realm is called) and click on the ",(0,o.jsx)(n.strong,{children:"Add realm"})," button that will appear."]}),"\n",(0,o.jsxs)(n.li,{children:["Enter a name for the new realm (for example, ",(0,o.jsx)(n.code,{children:"MindLAMP"}),") and click ",(0,o.jsx)(n.strong,{children:"Create"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Once the realm is created, you can add one or more clients for the MindLAMP server to interact with."}),"\n",(0,o.jsx)(n.h4,{id:"add-an-oauth-client",children:"Add an OAuth client"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Clients"})," from the sidebar on the left and then click ",(0,o.jsx)(n.strong,{children:"Create"})," on the right."]}),"\n",(0,o.jsxs)(n.li,{children:["Specify a client ID (for example, ",(0,o.jsx)(n.code,{children:"spa"}),") and pick ",(0,o.jsx)(n.code,{children:"openid-connect"})," as the client protocol. Click on ",(0,o.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"configure-the-client-for-mindlamp",children:"Configure the client for MindLAMP"}),"\n",(0,o.jsx)(n.p,{children:"A few settings need to be set up for the new client to work with MindLAMP."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.strong,{children:"Access Type"})," to ",(0,o.jsx)(n.code,{children:"confidential"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Turn on ",(0,o.jsx)(n.strong,{children:"Implicit Flow Enabled"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Under ",(0,o.jsx)(n.strong,{children:"Valid Redirect URIs"}),", add an item for every MindLAMP dashboard that will log in through this client. The ",(0,o.jsx)(n.em,{children:"exact"})," URL(s) must be specified, otherwise log in will be rejected by Keycloak."]}),"\n",(0,o.jsxs)(n.li,{children:["Set up any other options that are needed. When you are finished, click on ",(0,o.jsx)(n.strong,{children:"Save"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Switch to the ",(0,o.jsx)(n.strong,{children:"Credentials"})," tab and copy the client secret. You will need it for the following step."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"set-up-the-mindlamp-server",children:"Set up the MindLAMP server"}),"\n",(0,o.jsxs)(n.p,{children:["Finally a few environment variables need to be added to the MindLAMP server. Here's an example of what the OAuth section of the ",(0,o.jsx)(n.code,{children:".env"})," file could look like:"]}),"\n",(0,o.jsxs)(n.p,{children:['OAUTH="on"\nOAUTH_AUTH_URL="https://',(0,o.jsx)("i",{children:"hostname here"}),">/realms/",(0,o.jsx)("i",{children:"realm name"}),'/protocol/openid-connect/auth"\nOAUTH_TOKEN_URL="https://',(0,o.jsx)("i",{children:"hostname here"}),"/realms/",(0,o.jsx)("i",{children:"realm name"}),'/protocol/openid-connect/token"\nOAUTH_LOGOUT_URL="https://',(0,o.jsx)("i",{children:"hostname here"}),"/realms/",(0,o.jsx)("i",{children:"realm name"}),'/protocol/openid-connect/logout"\nOAUTH_CLIENT_ID="',(0,o.jsx)("i",{children:"client name here"}),'"\nOAUTH_CLIENT_SECRET="',(0,o.jsx)("i",{children:"client secret here"}),'"\nOAUTH_REDIRECT_URI="',(0,o.jsx)("i",{children:"dashboard URL here"}),'"\nOAUTH_SCOPE="openid offline_access"\nOAUTH_STATE="12345"\nOAUTH_NONCE="67890"']}),"\n",(0,o.jsxs)(n.p,{children:["Hostname needs to be the same as specified in the ",(0,o.jsx)(n.code,{children:"docker-compose.yaml"})," file. The ",(0,o.jsx)(n.code,{children:"OAUTH_LOGOUT_URL"})," is not mandatory, but it is needed so that the user is automatically logged out from Keycloak when they log out from the dashboard."]}),"\n",(0,o.jsxs)(n.p,{children:["Remember that ",(0,o.jsx)(n.code,{children:"OAUTH_REDIRECT_URI"})," must be exactly the same as the redirect URI the client was set up with."]}),"\n",(0,o.jsxs)(n.p,{children:["For further specifications on configuring Oauth for Google see the documentation here: ",(0,o.jsx)(n.a,{href:"https://docs.lamp.digital/deploy/configure_oauth_google",children:"https://docs.lamp.digital/deploy/configure_oauth_google"})]}),"\n",(0,o.jsx)(n.h2,{id:"kubernetes-example",children:"Kubernetes Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="mindlamp-server.yml"',children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mindlamp-server\n  labels:\n    app: mindlamp-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mindlamp-server\n  strategy:\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app: mindlamp-server\n    spec:\n      containers:\n      - name: server\n        image: {redactedValue}/mindlamp_server:latest\n        imagePullPolicy: Always\n        resources: \n          limits:\n            cpu: "1000m"\n            memory: "2000Mi"\n          requests:\n            cpu: "50m"\n            memory: "100Mi"\n        livenessProbe:\n          exec:\n            command:\n            - /bin/sh\n            - -c\n            - "wget --no-verbose --tries=1 --spider http://localhost:3000  || exit 1"\n        env:\n        - name: CDB\n          value: "http://admin:varDbPass@couchdb-internal:5984/"\n        - name: NATS_SERVER\n          value: message-queue:4222\n        - name: REDIS_HOST\n          value: redis://cache:6379/0\n        - name: HTTPS\n          value: "off"\n        - name: PUSH_API_GATEWAY\n          value: "https://app-gateway.lamp.digital/push"\n        - name: PUSH_API_KEY\n          value: "varPushAPIKey"\n        - name: ROOT_KEY\n          value: "varRootKey"\n        - name: OAUTH_AUTH_URL\n          value: "https://login.microsoftonline.com/*7BredactedValue*7D/oauth2/v2.0/authorize"\n        - name: OAUTH_TOKEN_URL\n          value: "https://login.microsoftonline.com/common/v2.0/oauth2/token"\n        - name: OAUTH_LOGOUT_URL\n          value: "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=api:**B7BredactedValue*7D"\n        - name: OAUTH_CLIENT_ID\n          value: "varOauthClientId"\n        - name: OAUTH_CLIENT_SECRET\n          value: "varOauthClientSecret"\n        - name: TOKEN_SECRET\n          value: "varOauthTokenSecret"\n        - name: OAUTH_REDIRECT_URI\n          value: "{redactedValue}"\n        - name: OAUTH_SCOPE\n          value: "openid offline_access"\n        - name: OAUTH\n          value: "on"\n      restartPolicy: Always\n      serviceAccountName: ""\n      volumes: null\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},85232:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak_home-36a4a4c833cc18a93824184c40f2c07f.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);