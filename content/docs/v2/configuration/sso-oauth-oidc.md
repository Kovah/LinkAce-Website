---
title: SSO (Single-Sign-On) with OAuth or OIDC
weight: 130
---

You can connect LinkAce with an OAuth or OIDC provider to manage your users at a central place and let them login to
LinkAce with a single click. No separate registration needed. No duplicate passwords to save.

LinkAce supports various OAuth or OIDC providers.

## Supported providers

- Generic OIDC provider
- Auth0
- Authelia
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

| Config                     | Possible Options | Default | Description                                                                           |
|:---------------------------|:-----------------|---------|:--------------------------------------------------------------------------------------|
| `SSO_ENABLED`              | true/false       | `false` | Enable SSO authentication via OAuth or OIDC                                           |
| `SSO_REGISTRATION_ENABLED` | true/false       | `true`  | If set to false, users must have an existing SSO-enabled account to be able to login. |
| `REGULAR_LOGIN_DISABLED`   | true/false       | `false` | Disable the regular login form and user management.                                   |

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
SSO_ENABLED=true
REGULAR_LOGIN_DISABLED=true

SSO_AUTH0_ENABLED=true
SSO_AUTH0_BASE_URL=https://example.auth0.com/
SSO_AUTH0_CLIENT_ID=W+qVVdlLP32a2F.....
SSO_AUTH0_CLIENT_SECRET=U5qo0Le2stKK2vO87TTl.....
```

After adding this to your .env file, the regular login form vanishes and a button to login with Auth0 will show up when
users try to login.

Callback URL is `https://[[YOUR.LINKACE.INSTALL]]/auth/sso/[[SERVICE]]/callback` (replace service with whatever comes between `SSO_[[SERVICE]]_ENABLED` in your `.env` file)

---

## Provider Configuration

### Generic OpenID Connect Provider

{{< table >}}

| Config                   | Default | Description                                 |
|:-------------------------|:--------|:--------------------------------------------|
| `SSO_OIDC_ENABLED`       | `false` | Enable SSO authentication for OIDC          |
| `SSO_OIDC_BASE_URL`      |         | The OIDC base URL (details see below)       |
| `SSO_OIDC_CLIENT_ID`     |         | The OIDC client ID                          |
| `SSO_OIDC_CLIENT_SECRET` |         | The OIDC client secret                      |
| `SSO_OIDC_SCOPES`        |         | Additional scopes sent to the OIDC provider |

{{< / table >}}

The base URL must be set to the _OpenID Configuration URL_, but excluding the `.well-known/openid-configuration` part.
Example: If `https://auth.company.com/application/linkace/.well-known/openid-configuration` is your OIDC configuration 
URL, then `https://auth.company.com/application/linkace` must be your base URL.

### Auth0

{{< table >}}

| Config                    | Default | Description                           |
|:--------------------------|:--------|:--------------------------------------|
| `SSO_AUTH0_ENABLED`       | `false` | Enable SSO authentication for Zitadel |
| `SSO_AUTH0_BASE_URL`      |         | The Auth0 base URL                    |
| `SSO_AUTH0_CLIENT_ID`     |         | The Auth0 client ID                   |
| `SSO_AUTH0_CLIENT_SECRET` |         | The Auth0 client secret               |

{{< / table >}}

### Authelia
OIDC with Authelia works with the generic OIDC config. The critical succesfactor is the Authelia config, where PKCE needs to be disabled.

**configuration.yml (Authelia)**
```yaml {title="configuration.yml (Authelia)"}
identity_providers:
  oidc:
    clients:
      - client_id: 'linkace'
        client_name: 'linkace'
        client_secret: '[DIGEST OF SSO_OIDC_CLIENT_SECRET]'
        public: false
        authorization_policy: 'two_factor'
        require_pkce: false
        redirect_uris:
          - 'https://linkace.example.com/auth/sso/oidc/callback'
        scopes:
          - 'openid'
          - 'groups'
          - 'email'
          - 'profile'
        response_types:
          - 'code'
        grant_types:
          - 'authorization_code'
          - 'refresh_token'
        access_token_signed_response_alg: 'none'
        userinfo_signed_response_alg: 'none'
        token_endpoint_auth_method: 'client_secret_post'

```

**LinkAce configuration**

{{< table >}}

| Config                   | Default | Description                                 |
|:-------------------------|:--------|:--------------------------------------------|
| `SSO_OIDC_ENABLED`       | `false` | Enable SSO authentication for OIDC          |
| `SSO_OIDC_BASE_URL`      |         | The OIDC base URL (details see below)       |
| `SSO_OIDC_CLIENT_ID`     |         | The OIDC client ID                          |
| `SSO_OIDC_CLIENT_SECRET` |         | The OIDC client secret                      |
| `SSO_OIDC_SCOPES`        |         | Additional scopes sent to the OIDC provider |

{{< / table >}}



### Authentik

{{< table >}}

| Config                        | Default | Description                             |
|:------------------------------|:--------|:----------------------------------------|
| `SSO_AUTHENTIK_ENABLED`       | `false` | Enable SSO authentication for Authentik |
| `SSO_AUTHENTIK_BASE_URL`      |         | The Authentik base URL                  |
| `SSO_AUTHENTIK_CLIENT_ID`     |         | The Authentik client ID                 |
| `SSO_AUTHENTIK_CLIENT_SECRET` |         | The Authentik client secret             |

{{< / table >}}

### AWS Cognito

{{< table >}}

| Config                      | Default | Description                                       |
|:----------------------------|:--------|:--------------------------------------------------|
| `SSO_COGNITO_ENABLED`       | `false` | Enable SSO authentication for Cognito             |
| `SSO_COGNITO_HOST`          |         | The Cognito base URL                              |
| `SSO_COGNITO_CLIENT_ID`     |         | The Cognito client ID                             |
| `SSO_COGNITO_CLIENT_SECRET` |         | The Cognito client secret                         |
| `SSO_COGNITO_LOGIN_SCOPE`   |         | Comma-separated list of login scopes              |
| `SSO_COGNITO_SIGN_OUT_URL`  |         | Where to redirect to in LinkAce after logging out |

{{< / table >}}

### FusionAuth

{{< table >}}

| Config                         | Default | Description                              |
|:-------------------------------|:--------|:-----------------------------------------|
| `SSO_FUSIONAUTH_ENABLED`       | `false` | Enable SSO authentication for FusionAuth |
| `SSO_FUSIONAUTH_BASE_URL`      |         | The FusionAuth base URL                  |
| `SSO_FUSIONAUTH_CLIENT_ID`     |         | The FusionAuth client ID                 |
| `SSO_FUSIONAUTH_CLIENT_SECRET` |         | The FusionAuth client secret             |

{{< / table >}}

### Google

{{< table >}}

| Config                     | Default | Description                          |
|:---------------------------|:--------|:-------------------------------------|
| `SSO_GOOGLE_ENABLED`       | `false` | Enable SSO authentication for Google |
| `SSO_GOOGLE_CLIENT_ID`     |         | The Google client ID                 |
| `SSO_GOOGLE_CLIENT_SECRET` |         | The Google client secret             |

{{< / table >}}

### GitHub

{{< table >}}

| Config                     | Default | Description                          |
|:---------------------------|:--------|:-------------------------------------|
| `SSO_GITHUB_ENABLED`       | `false` | Enable SSO authentication for GitHub |
| `SSO_GITHUB_CLIENT_ID`     |         | The GitHub client ID                 |
| `SSO_GITHUB_CLIENT_SECRET` |         | The GitHub client secret             |

{{< / table >}}

### GitLab

{{< table >}}

| Config                     | Default              | Description                          |
|:---------------------------|:---------------------|:-------------------------------------|
| `SSO_GITLAB_ENABLED`       | `false`              | Enable SSO authentication for GitLab |
| `SSO_GITLAB_HOST`          | `https://gitlab.com` | The GitLab base URL                  |
| `SSO_GITLAB_BASE_URL`      |                      | The GitLab base URL                  |
| `SSO_GITLAB_CLIENT_ID`     |                      | The GitLab client ID                 |
| `SSO_GITLAB_CLIENT_SECRET` |                      | The GitLab client secret             |

{{< / table >}}

### Keycloak

{{< table >}}

| Config                       | Default | Description                            |
|:-----------------------------|:--------|:---------------------------------------|
| `SSO_KEYCLOAK_ENABLED`       | `false` | Enable SSO authentication for Keycloak |
| `SSO_KEYCLOAK_BASE_URL`      |         | The Keycloak base URL                  |
| `SSO_KEYCLOAK_CLIENT_ID`     |         | The Keycloak client ID                 |
| `SSO_KEYCLOAK_CLIENT_SECRET` |         | The Keycloak client secret             |
| `SSO_KEYCLOAK_REALM`         |         | The Keycloak realm                     |

{{< / table >}}

### Microsoft Azure

{{< table >}}

| Config                    | Default | Description                         |
|:--------------------------|:--------|:------------------------------------|
| `SSO_AZURE_ENABLED`       | `false` | Enable SSO authentication for Azure |
| `SSO_AZURE_CLIENT_ID`     |         | The Azure client ID                 |
| `SSO_AZURE_CLIENT_SECRET` |         | The Azure client secret             |
| `SSO_AZURE_TENANT_ID`     |         | The Azure tenant ID                 |

{{< / table >}}

### Okta

{{< table >}}

| Config                   | Default | Description                        |
|:-------------------------|:--------|:-----------------------------------|
| `SSO_OKTA_ENABLED`       | `false` | Enable SSO authentication for Okta |
| `SSO_OKTA_BASE_URL`      |         | The Okta base URL                  |
| `SSO_OKTA_CLIENT_ID`     |         | The Okta client ID                 |
| `SSO_OKTA_CLIENT_SECRET` |         | The Okta client secret             |

{{< / table >}}

### Zitadel

{{< table >}}

| Config                                 | Default | Description                                       |
|:---------------------------------------|:--------|:--------------------------------------------------|
| `SSO_ZITADEL_ENABLED`                  | `false` | Enable SSO authentication for Zitadel             |
| `SSO_ZITADEL_CLIENT_ID`                |         | The Zitadel Client ID                             |
| `SSO_ZITADEL_CLIENT_SECRET`            |         | The Zitadel Client Secret                         |
| `SSO_ZITADEL_BASE_URL`                 |         | The Zitadel base URL                              |
| `SSO_ZITADEL_ORGANIZATION_ID`          |         | The Zitadel organization ID                       |
| `SSO_ZITADEL_PROJECT_ID`               |         | The Zitadel project ID                            |
| `SSO_ZITADEL_POST_LOGOUT_REDIRECT_URI` | `/`     | Where to redirect to in LinkAce after logging out |

{{< / table >}}
