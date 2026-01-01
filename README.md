# hello-oidc

**Ref:**
- https://www.hello.dev/docs/sdks/express/
- https://www.hello.dev/docs/quickstarts/express/#test-your-server
- https://www.hello.dev/docs/apis/web-client/

**NOTE:**
- _client secret_ generated in [Hellō console](https://console.hello.coop/) but never used 🤔
- For local development replace _hello.baadal.dev_ with _localhost:3001_

**.env**  
_localhost:_ HELLO_COOKIE_SECRET  
_production:_ HELLO_COOKIE_SECRET, HOST (hello.baadal.dev)  

**Start server**
- Create `.env` file with keys `HELLO_COOKIE_SECRET`, `HOST`
- `npm run pm2:start`
- `npm run pm2:stop`
- `pm2 ls`

**Auth status:**
- https://hello.baadal.dev/api/hellocoop?op=auth
- https://hello.baadal.dev/user
- https://hello.baadal.dev/

**Login:**
- https://hello.baadal.dev/api/hellocoop?op=login
- https://hello.baadal.dev/login

**Logout:**  
- https://hello.baadal.dev/api/hellocoop?op=logout
- https://hello.baadal.dev/api/hellocoop?op=logout&target_uri=%2Fapi%2Fhellocoop%3Fop%3Dauth
- https://hello.baadal.dev/logout

**Protected:**
- https://hello.baadal.dev/protected
- https://hello.baadal.dev/admin/page
