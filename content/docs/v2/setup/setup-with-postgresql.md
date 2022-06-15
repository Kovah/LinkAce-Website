---
title: Setup with PostgreSQL
weight: 30
---

By default, LinkAce requires using MySQL for the regular setup. To use PostgreSQL, please follow the specific instructions below depending on whether you use Docker or not.


## Setup with Docker

Follow the steps **1** to **4** of the basic [**Docker installation guide**]({{< relref path="docs/v1/setup/setup-with-docker" >}}), but do not start the built-in setup now.

Stop the Docker container now.

```
docker-compose stop
```

Replace `DB_CONNECTION=mysql` with `DB_CONNECTION=pgsql` and set the correct port of the database in `DB_PORT=5432`  in your `.env` file.  
Additionally, add `SETUP_COMPLETED=true` to the .env file as LinkAce does not support Postgres in the built-in setup yet.  
After that run the following command to prepare the database:

```
docker-compose up -d
docker exec -it linkace_app_1 php artisan migrate
```

After that, generate a new admin account by running the following account. You will be asked for a username, email address and a password.

```
docker exec -it linkace_app_1 php artisan registeruser
```

You can now open LinkAce in your browser and should be able to use the application.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features.
{{</ alert >}}


---


## Setup without Docker

Follow the steps **1** to **4** of the [regular installation guide]({{< relref path="docs/v1/setup/setup-without-docker.md" >}}), but do not start the built-in setup now.

Replace `DB_CONNECTION=mysql` with `DB_CONNECTION=pgsql` and set the correct port of the database in `DB_PORT=5432`  in your `.env` file.
After that run the following command to prepare the database:

```
php artisan migrate
```

After that, generate a new admin account by running the following account. You will be asked for a username, email address and a password.

```
php artisan registeruser
```

You can now open LinkAce in your browser and should be able to use the application.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features.
{{</ alert >}}

---

Next Step: [Post-Setup Steps]({{< relref path="docs/v1/setup/post-setup.md" >}})
