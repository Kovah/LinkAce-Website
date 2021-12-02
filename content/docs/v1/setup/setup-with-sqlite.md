---
title: Setup with SQLite
weight: 31
---

By default, LinkAce requires using MySQL for the regular setup. To use SQLite, please follow the specific instructions below depending on whether you use Docker or not.


## Setup with Docker

Follow the steps **1** and **2** of the [**Docker installation guide**]({{< relref path="docs/v1/setup/setup-with-docker/_index.md" >}}), and do not start the Docker setup now. The database file needs to be created, so run the following commands:

```
docker exec -it linkace_app_1 touch database/database.sqlite
```

To persist your SQLite database, add the following line to the `volumes` section in your docker-compose.yml file:

```
volumes:
  - ./database.sqlite:/app/database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/app/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.
After that run the following command to prepare start the application:

```
docker-compose up -d
docker exec -it linkace_app_1 php artisan key:generate
docker exec -it linkace_app_1 php artisan migrate
```

After that, generate a new admin account by running the following command. You will be asked for a username, email address and a password.

```
docker exec -it linkace_app_1 php artisan registeruser
```

You can now open LinkAce in your browser and should be able to use the application.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features.
{{</ alert >}}


---


## Setup without Docker

Follow the steps **1** and **2** of the [regular installation guide]({{< relref path="docs/v1/setup/setup-without-docker.md" >}}), and do not start the Docker setup now. The database file needs to be created, so run the following command:

```
touch database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/path-to-linkace/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.
After that run the following command to prepare the database:

```
php artisan key:generate
php artisan migrate
```

After that, generate a new admin account by running the following command. You will be asked for a username, email address and a password.

```
php artisan registeruser
```

You can now open LinkAce in your browser and should be able to use the application.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features.
{{</ alert >}}

---


Next Step: [Post-Setup Steps]({{< relref path="docs/v1/setup/post-setup.md" >}})
