---
title: Setup with SQLite
weight: 31
---

By default, LinkAce requires using MySQL for the regular setup. To use SQLite, please follow the specific instructions below depending on whether you use Docker or not.

{{< alert type="danger" >}}
I currently **discourage** using SQLite for LinkAce because of ongoing issues with the database system. If you have a MySQL or PostgreSQL database at hand, please use this instead.  
Issue related to SQLite: [#327](https://github.com/Kovah/LinkAce/issues/327)
{{</ alert >}}


## Setup with Docker

Follow the steps **1** and **2** of the [**Docker installation guide**]({{< relref path="docs/v1/setup/setup-with-docker/_index.md" >}}), and do not start the Docker setup now.

The database file needs to be created. You can do this by using the following command which assumes that the database file is located in the same directory as the docker-compose.yml file and is called `database.sqlite`:

```
touch database.sqlite
chmod 0777 database.sqlite
```

To persist your SQLite database, add the following line to the `volumes` section in your docker-compose.yml file:

```
volumes:
  - ./database.sqlite:/app/database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/app/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.  
Additionally, add `SETUP_COMPLETED=true` to the .env file as LinkAce does not support Postgres in the built-in setup yet.  
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

Lastly, change `SETUP_COMPLETED=false` to `SETUP_COMPLETED=true` in your `.env` file.

You can now open LinkAce in your browser and should be able to use the application.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features.
{{</ alert >}}


---


## Setup without Docker

Follow the steps **1** to **4** of the [regular installation guide]({{< relref path="docs/v1/setup/setup-without-docker.md" >}}), and do not start the built-in setup right now. The database file needs to be created, so run the following command:

```
touch database/database.sqlite
```

Replace `DB_DATABASE=linkace` with `DB_DATABASE=/path-to-linkace/database/database.sqlite` in your `.env` file and replace `DB_CONNECTION=mysql` with `DB_CONNECTION=sqlite`.
After that run the following command to prepare the database:

```
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
