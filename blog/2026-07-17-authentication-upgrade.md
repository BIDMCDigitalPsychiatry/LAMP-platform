---
slug: authentication-upgrade
title: "The mindLAMP Authentication Upgrade"
authors: [edenrozenblit, mattflathers]
tags: [authentication, announcements]
draft: false
---

mindLAMP is rolling out a phased upgrade to how the platform handles authentication, modernizing security for research and clinical teams while keeping disruption to a minimum. This post covers the whole upgrade: the rollout at a glance, then the full detail on what's changing, who's affected, and how to prepare.

<!-- truncate -->

## The rollout at a glance

- **Phase 1: Dashboard sign-in (live July 29).** A backward-compatible update to the LAMP Dashboard and JavaScript SDK: you now select your server with a button instead of typing an address. No one is logged out. → [Dashboard Update: Sign-In Changes (Phase 1)](/blog/dashboard-update-auth-phase-1)
- **Later this summer: server authentication, 2FA/OAuth, and API keys.** The core security upgrade, detailed below.

We'll notify all teams directly before each change goes live. Some specifics of the later phases may be refined before release; we'll confirm final details beforehand.

## Why This Update Matters

Since its initial release, mindLAMP has used basic authentication, a well-established and widely supported approach where credentials are sent with each API request over an encrypted connection. This model has served the platform reliably and remains secure when paired with TLS encryption, which mindLAMP enforces.

This update moves mindLAMP to a modern session-based authentication model with support for two-factor authentication (2FA) and OAuth. These changes bring mindLAMP in line with current best practices for health data platforms and add meaningful layers of protection for research and clinical environments:

- **Session-based authentication** reduces the surface area for credential exposure by eliminating the need to transmit passwords with each request. Sessions are managed server-side with configurable expiration and automatic rotation.
- **Two-factor authentication** ensures that access to staff accounts requires both a password and a second verification step, protecting against compromised credentials.
- **OAuth support** allows organizations to integrate mindLAMP login with their existing identity providers (e.g. Google), enabling centralized access management and single sign-on.
- **API keys** provide a dedicated, auditable mechanism for programmatic access, replacing the use of user credentials in scripts and pipelines.

Together, these changes strengthen mindLAMP's security posture across research, clinical, and self-hosted deployments while aligning with the expectations of IRBs, compliance teams, and IT security reviewers.

## Timeline

This update is planned for later this summer. We do not have a firm release date yet. **We'll publish a follow-up and notify all teams directly before it goes live.**

## Who Is Affected

| If you are... | Impact level |
|---------------|-------------|
| A researcher or coordinator using the mindLAMP dashboard | **High**: You will be logged out and required to set up two-factor authentication or OAuth on your next login. |
| A participant using the mindLAMP app | **Low**: We're working to keep participants unaffected; no logout is expected. |
| A developer or data scientist using LAMP-py (Python SDK) | **High**: LAMP-py will require an API key instead of a username and password. |
| A team running a self-hosted mindLAMP server | **None**: All client updates (dashboard, mobile apps, SDKs) are backwards compatible with currently released server versions. No action is required at this time. If you installed through LAMP Core and your agreement includes these updates, we'll work with you directly. Otherwise, reach out to **mindlamp@bidmc.harvard.edu** to discuss upgrade options. |

## What's Changing

### 1. Server-Side Sessions Replace Basic Authentication

The current mindLAMP server uses basic authentication, where the client sends credentials with each API request over TLS. The updated server introduces server-side sessions: after logging in, the server issues a session token that is used for subsequent requests. Credentials are only transmitted during the initial login.

**What this means in practice:**
- **Staff will be logged out** when the server is upgraded and will need to log in again. We're working to keep participant sessions uninterrupted.
- Participant sessions are long-lived and rotate automatically. The app handles this transparently.
- Staff sessions expire after a configurable period and require re-login.

### 2. Two-Factor Authentication and OAuth for Staff

All staff users (researchers, administrators, coordinators) will be required to add a second layer of security to their accounts. This is a one-time setup that happens on your first login after the update.

**First login after the update:**
1. Log in with your existing credentials.
2. You will be prompted to set up either **two-factor authentication (2FA)** via email, or **OAuth** (sign in with Google, etc.).
3. You must complete setup before you can access the dashboard. There is no option to skip.

**After setup:**
- If you chose 2FA, you'll receive a verification code by email each time you log in.
- If you chose OAuth, you'll sign in through your chosen provider.
- Multiple credentials can share the same 2FA email.

**If you chose OAuth:** Your credential must have been created with the same email you use for your OAuth provider. If the emails don't match, OAuth will not work. Contact your administrator if you need your credential email updated before the release.

**Participants are not affected by this requirement.** Two-factor and OAuth are only required for staff accounts.

### 3. Account Recovery and Credential Management

The process for managing staff accounts changes after they complete security setup:

| Situation | What to do |
|-----------|-----------|
| Staff user forgets their password | An administrator should **reset their account** via the credential manager (not delete the credential). This removes 2FA/OAuth, generates a temporary password, and logs the user out. |
| Staff user loses access to their 2FA email | Same process: administrator resets the account. |
| Staff user wants to switch from OAuth to 2FA (or vice versa) | Same process: administrator resets, user reconfigures on next login. |

**Important:** If a staff user has a problem with their account, reset it rather than deleting the credential and creating a new one.

Managing participant credentials is unchanged. Resetting a participant's password will invalidate their sessions and log them out as before.

### 4. Credential Changes

- **Participant credentials** are now created using usernames (not emails).
- **Staff credentials** must be created with email addresses.
- You may not have two credentials with the same email address, even across different researchers or if one has been deleted.
- Passwords are no longer stored on the credential object.

### 5. API Keys Replace Password-Based SDK Access

The current LAMP-py SDK authenticates using a username and password:
```python
import LAMP
LAMP.connect('user@example.com', 'password', 'server.example.com')
```

The updated SDK uses API keys for programmatic access:
```python
import LAMP
LAMP.connect(access_key='your-api-key', server_address='server.example.com')
```

**How to get an API key:**
1. An administrator opens the credential manager in the dashboard.
2. Click on the relevant credential and select "Manage API Keys."
3. Create a new key. **The key value is shown only once**: copy it immediately. If lost, you must generate a new one.

API key permissions are tied to the credential they are created for.

**If you have scripts or pipelines that use `LAMP.connect()` with a username and password, they will need to be updated to use an API key before or shortly after the release.**

## How to Prepare

**Researchers and coordinators (hosted on our server):**
- No action needed right now. When the update goes live, you will be logged out and prompted to set up 2FA or OAuth on your next login.
- If you plan to use OAuth, confirm that your credential email matches the email you use for your OAuth provider (Google, etc.). Contact us if you need it updated.

**Data scientists and developers using LAMP-py:**
- Plan to generate an API key after the update and update your scripts to use it.
- Review any automated pipelines that authenticate with username/password; these will stop working after the release.

**Self-hosted teams:**
- No action is required. All client updates remain compatible with your current server.
- If you installed mindLAMP through our LAMP Core team and your agreement includes these security updates, we will work with you directly to plan the upgrade.
- If you are running a self-hosted instance and would like to upgrade to take advantage of session-based auth, 2FA, and OAuth, please reach out to **mindlamp@bidmc.harvard.edu** to discuss options through our Core services process.

## Questions or Issues?

If you have questions about how these changes affect your study or workflow, or if you encounter any issues after the update, please email **mindlamp@bidmc.harvard.edu**. We're happy to help you plan for the transition.

We'll publish a follow-up post when the update is live with any final details or changes from what's described here.
