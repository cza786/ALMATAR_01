# ALMATAR

Next.js website with a separate Sanity content studio.

## Local setup

Use Node.js 24 LTS and npm. From the project directory:

```powershell
npm.cmd ci
npm.cmd --prefix studio ci
```

Create `.env.local` from `.env.example` if it does not already exist, then fill in the settings for your Sanity project. Keep real API tokens in `.env.local` and do not commit them.

Start the website:

```powershell
npm.cmd run dev
```

Open http://localhost:3000.

In a second terminal, start the content studio:

```powershell
npm.cmd run studio:dev
```

Open http://localhost:3333 and sign in with a Sanity account that has access to the configured project. The Sanity CLI needs permission to create its configuration in your user profile on first launch.

On Windows, `npm.cmd` works when PowerShell execution policy blocks `npm.ps1`. On macOS or Linux, use `npm` instead.

Contact email delivery requires `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in `.env.local`, using a sender authorized by your Resend account. Restart the website after changing environment settings.

## Production build

```powershell
npm.cmd run build
npm.cmd run start
```

Build the studio separately with `npm.cmd run studio:build`.
