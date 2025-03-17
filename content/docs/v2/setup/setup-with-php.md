---
title: Setup without Docker
weight: 40
---

The application was developed with being used with Docker in mind. All following steps will try to work around this but cannot be guaranteed to work in every environment. Please remember that you need shell access to work with LinkAce.

## Requirements

* A Linux-based server with full command line access
* The `storage` directory inside LinkAce must be writable by the web server
* **PHP 8.1 to 8.4**, with the following extensions
    * BCMath
    * Ctype
    * DOM
    * Fileinfo
    * JSON
    * Mbstring
    * OpenSSL
    * PDO
    * Tokenizer
    * XML
* A database server with one of the following databases running:
    * MySQL 5.6+ (recommended)
    * PostgreSQL 9.4+
    * SQLite 3.8.8+
    * SQL Server 2017+ (not tested, may work)
* If your database is not running on the same server as LinkAce, you need to install the corresponding database clients:
  * MySQL: [mysql-client](https://dev.mysql.com/doc/refman/8.4/en/mysql.html) or [mariadb-client](https://mariadb.com/docs/server/connect/clients/mariadb-client/)
  * PostgreSQL: [postgresql-client and postgresql-dev](https://www.postgresql.org/)
  * SQLite: [sqlite](https://sqlite.org/download.html)
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters and the LinkAce search feature.

Older PHP versions will **not** be supported in any way. Please do yourself a favor and do not expose yourself or your users to any risks by using an outdated PHP version.


## Installation Process

### 1. Get the .zip file

Download the LinkAce .zip package from the [release page](https://github.com/Kovah/LinkAce/releases/latest).

Extract all files and place them wherever you need them. This obviously depends on how and where you want to run the
app.

### 2. Edit the .env file

Make a copy of the `.env.example` file and name it `.env`. Please do not change any values in it now!

### 3. Generate a secret key

Run the following command to generate a secret key for your application and prepare LinkAce for the setup:

```
php artisan key:generate
```

### 4. Point your web server to /public

For security reasons the application won't run from the base folder where you extracted the files to. Instead, point your web server to the `/public` directory in your LinkAce folder.

If you are using Apache, LinkAce already ships with a proper .htaccess file.

If you are using nginx, please add the following lines to your nginx configuration file:

```
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header X-Content-Type-Options "nosniff";

location / {
  try_files $uri $uri/ /index.php?$query_string;
}

location ~* \.(?:css|js|map|scss)$ {
  expires 7d;
  access_log off;
  add_header Cache-Control "public";
  try_files $uri @fallback;
}

error_page 404 /index.php;
```

### 5. Run the built-in setup

Now open the URL pointing to LinkAce in your browser. The built-in setup should start. Follow the instructions to configure a database and register your user account.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) to fully enable all features, including automated backups and link checks.
{{</ alert >}}

---

## Completing the installation without the built-in setup

If you run into issues with the built-in setup via the web, you may try to complete the installation via the command line.

Follow the instructions above until step 4. Then run the following commands. Please note that the database configuration must be done in the .env file BEFORE running the following commands.

```bash
php artisan migrate
php artisan setup:complete
php artisan registeruser --admin
```

The last command lets you create your first admin user. After all commands were successful, you can login right away at `http://localhost` or your domain pointing to LinkAce.
