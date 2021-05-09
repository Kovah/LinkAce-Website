---
title: Setup with SQLite
weight: 30
---

By default, LinkAce requires using MySQL or PostgreSQL for the regular setup. To use SQLite, please follow the specific


## Setup with Docker

Follow the steps 1 to 4 of the [**Docker installation guide**]({{< relref path="docs/v1/setup/setup-with-docker.md" >}}), but do not start the built-in setup now. The database file needs to be created, so run the following commands:

```
docker exec -it linkace_app_1 touch database/database.sqlite
```

Stop the Docker container now.

```
docker-compose stop
```

To persist your SQLite database, add the following line to the `volumes` section in your docker-compose.yml file:

```
volumes:
  - ./database.sqlite:/app/database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/app/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.
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

Follow the steps 1 to 4 of the [regular installation guide]({{< relref path="docs/v1/setup/setup-without-docker.md" >}}), but do not start the built-in setup now. The database file needs to be created, so run the following command:

```
touch database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/app/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.
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
