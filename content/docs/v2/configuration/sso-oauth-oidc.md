---
title: SSO with OAuth or OIDC
weight: 30
---

You can connect LinkAce with an OAuth or OIDC provider to manage your users at a central place and let them login to
LinkAce with a single click. No separate registration needed. No duplicate passwords to save.

LinkAce supports various OAuth or OIDC providers.

## Supported providers

- Auth0
- Authentik
- AWS Cognito
- FusionAuth
- Google
- GitHub
- GitLab
- Keycloak
- Microsoft Azure
- Okta
- Zitadel

## General Configuration

To enable and configure Single Sign On, add the following configuration to your `.env` file. Please note that every SSO
provider has its own configuration which must be added to the .env file and properly set up if you want to use it.

{{< table >}}

| Config                   | Possible Options | Description                                         |
|:-------------------------|:-----------------|:----------------------------------------------------|
| `OAUTH_ENABLED`          | true/false       | Enable SSO authentication via OAuth or OIDC         |
| `REGULAR_LOGIN_DISABLED` | true/false       | Disable the regular login form and user management. |

{{< / table >}}

## User handling

While a user tries to login with any SSO provider, this is how the user account is handled:

- If a user with the same email address already exists, but no SSO details are present yet, this user is automatically
  connected to the user provided by the SSO provider. An internal ID is stored for that user.
- If a user with the same email address already exists and SSO details are present, the user is logged in and those
  fields are updated:
    - user name
    - authentication token (if applicable)
- If no user with the same email address exists, a new user is registered and the user is automatically logged in.

{{< alert type="info" >}}
If you disable your SSO provider after users registered with it, those users must manually reset their password via the
regular password reset feature.
{{</ alert >}}

## Example Configuration

```
OAUTH_ENABLED=true
REGULAR_LOGIN_DISABLED=true

OAUTH_AUTH0_ENABLED=true
OAUTH_AUTH0_BASE_URL=https://example.auth0.com/
OAUTH_AUTH0_CLIENT_ID=W+qVVdlLP32a2F.....
OAUTH_AUTH0_CLIENT_SECRET=U5qo0Le2stKK2vO87TTl.....
```

After adding this to your .env file, the regular login form vanishes and a button to login with Auth0 will show up when
users try to login.

---

## Provider Configuration

### Auth0

{{< table >}}

| Config                      | Default | Description                           |
|:----------------------------|:--------|:--------------------------------------|
| `OAUTH_AUTH0_ENABLED`       | `false` | Enable SSO authentication for Zitadel |
| `OAUTH_AUTH0_BASE_URL`      |         | The Auth0 base URL                    |
| `OAUTH_AUTH0_CLIENT_ID`     |         | The Auth0 client ID                   |
| `OAUTH_AUTH0_CLIENT_SECRET` |         | The Auth0 client secret               |

{{< / table >}}

### Authentik

{{< table >}}

| Config                          | Default | Description                             |
|:--------------------------------|:--------|:----------------------------------------|
| `OAUTH_AUTHENTIK_ENABLED`       | `false` | Enable SSO authentication for Authentik |
| `OAUTH_AUTHENTIK_BASE_URL`      |         | The Authentik base URL                  |
| `OAUTH_AUTHENTIK_CLIENT_ID`     |         | The Authentik client ID                 |
| `OAUTH_AUTHENTIK_CLIENT_SECRET` |         | The Authentik client secret             |

{{< / table >}}

### AWS Cognito

{{< table >}}

| Config                        | Default | Description                                       |
|:------------------------------|:--------|:--------------------------------------------------|
| `OAUTH_COGNITO_ENABLED`       | `false` | Enable SSO authentication for Cognito             |
| `OAUTH_COGNITO_HOST`          |         | The Cognito base URL                              |
| `OAUTH_COGNITO_CLIENT_ID`     |         | The Cognito client ID                             |
| `OAUTH_COGNITO_CLIENT_SECRET` |         | The Cognito client secret                         |
| `OAUTH_COGNITO_LOGIN_SCOPE`   |         | Comma-separated list of login scopes              |
| `OAUTH_COGNITO_SIGN_OUT_URL`  |         | Where to redirect to in LinkAce after logging out |

{{< / table >}}

### FusionAuth

{{< table >}}

| Config                           | Default | Description                              |
|:---------------------------------|:--------|:-----------------------------------------|
| `OAUTH_FUSIONAUTH_ENABLED`       | `false` | Enable SSO authentication for FusionAuth |
| `OAUTH_FUSIONAUTH_BASE_URL`      |         | The FusionAuth base URL                  |
| `OAUTH_FUSIONAUTH_CLIENT_ID`     |         | The FusionAuth client ID                 |
| `OAUTH_FUSIONAUTH_CLIENT_SECRET` |         | The FusionAuth client secret             |

{{< / table >}}

### Google

{{< table >}}

| Config                       | Default | Description                          |
|:-----------------------------|:--------|:-------------------------------------|
| `OAUTH_GOOGLE_ENABLED`       | `false` | Enable SSO authentication for Google |
| `OAUTH_GOOGLE_CLIENT_ID`     |         | The Google client ID                 |
| `OAUTH_GOOGLE_CLIENT_SECRET` |         | The Google client secret             |

{{< / table >}}

### GitHub

{{< table >}}

| Config                       | Default | Description                          |
|:-----------------------------|:--------|:-------------------------------------|
| `OAUTH_GITHUB_ENABLED`       | `false` | Enable SSO authentication for GitHub |
| `OAUTH_GITHUB_CLIENT_ID`     |         | The GitHub client ID                 |
| `OAUTH_GITHUB_CLIENT_SECRET` |         | The GitHub client secret             |

{{< / table >}}

### GitLab

{{< table >}}

| Config                       | Default              | Description                          |
|:-----------------------------|:---------------------|:-------------------------------------|
| `OAUTH_GITLAB_ENABLED`       | `false`              | Enable SSO authentication for GitLab |
| `OAUTH_GITLAB_HOST`          | `https://gitlab.com` | The GitLab base URL                  |
| `OAUTH_GITLAB_BASE_URL`      |                      | The GitLab base URL                  |
| `OAUTH_GITLAB_CLIENT_ID`     |                      | The GitLab client ID                 |
| `OAUTH_GITLAB_CLIENT_SECRET` |                      | The GitLab client secret             |

{{< / table >}}

### Keycloak

{{< table >}}

| Config                         | Default | Description                            |
|:-------------------------------|:--------|:---------------------------------------|
| `OAUTH_KEYCLOAK_ENABLED`       | `false` | Enable SSO authentication for Keycloak |
| `OAUTH_KEYCLOAK_BASE_URL`      |         | The Keycloak base URL                  |
| `OAUTH_KEYCLOAK_CLIENT_ID`     |         | The Keycloak client ID                 |
| `OAUTH_KEYCLOAK_CLIENT_SECRET` |         | The Keycloak client secret             |
| `OAUTH_KEYCLOAK_REALM`         |         | The Keycloak realm                     |

{{< / table >}}

### Microsoft Azure

{{< table >}}

| Config                      | Default | Description                         |
|:----------------------------|:--------|:------------------------------------|
| `OAUTH_AZURE_ENABLED`       | `false` | Enable SSO authentication for Azure |
| `OAUTH_AZURE_CLIENT_ID`     |         | The Azure client ID                 |
| `OAUTH_AZURE_CLIENT_SECRET` |         | The Azure client secret             |
| `OAUTH_AZURE_TENANT_ID`     |         | The Azure tenant ID                 |

{{< / table >}}

### Okta

{{< table >}}

| Config                     | Default | Description                        |
|:---------------------------|:--------|:-----------------------------------|
| `OAUTH_OKTA_ENABLED`       | `false` | Enable SSO authentication for Okta |
| `OAUTH_OKTA_BASE_URL`      |         | The Okta base URL                  |
| `OAUTH_OKTA_CLIENT_ID`     |         | The Okta client ID                 |
| `OAUTH_OKTA_CLIENT_SECRET` |         | The Okta client secret             |

{{< / table >}}

### Zitadel

{{< table >}}

| Config                                   | Default | Description                                       |
|:-----------------------------------------|:--------|:--------------------------------------------------|
| `OAUTH_ZITADEL_ENABLED`                  | `false` | Enable SSO authentication for Zitadel             |
| `OAUTH_ZITADEL_CLIENT_ID`                |         | The Zitadel Client ID                             |
| `OAUTH_ZITADEL_CLIENT_SECRET`            |         | The Zitadel Client Secret                         |
| `OAUTH_ZITADEL_BASE_URL`                 |         | The Zitadel base URL                              |
| `OAUTH_ZITADEL_ORGANIZATION_ID`          |         | The Zitadel organization ID                       |
| `OAUTH_ZITADEL_PROJECT_ID`               |         | The Zitadel project ID                            |
| `OAUTH_ZITADEL_POST_LOGOUT_REDIRECT_URI` | `/`     | Where to redirect to in LinkAce after logging out |

{{< / table >}}
