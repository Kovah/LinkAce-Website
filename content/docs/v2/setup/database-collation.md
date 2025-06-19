---
title: Adjusting the Database Collation
weight: 100
---

The default collation used for the database is `utf8mb4_bin`. This was chosen to be the default because back in LinkAce v1 there were severe issues with checks for unique links because of how databases handle Unicode characters. This may lead to issues with sorting entries by their name.

Changing the collation of a database from a binary collation (such as `utf8mb4_bin`) to a non-binary collation involves several steps. The process varies slightly for MySQL, PostgreSQL, and SQLite. The following steps may lead you through the process of changing the database collation.

{{< alert type="danger" >}}
Proceed with caution and ALWAYS make a backup of your database! I am not responsible for ANY data loss. Also, there is no further support on this topic.
{{</ alert >}}

---

## For MySQL / MariaDB

1. **Check Current Collation:**

   ```sql
   SELECT schema_name, default_character_set_name, default_collation_name
   FROM information_schema.schemata
   WHERE schema_name = 'your_database_name';
   ```

2. **Change Database Default Collation:**
   Change the database's default collation:

   ```sql
   ALTER DATABASE your_database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```

3. **Update Table Collation:**
   Update each table to use the new collation:

   ```sql
   ALTER TABLE your_table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```

   Repeat for all tables in the database.

4. **Update Columns Collation:**
   For any text columns (`VARCHAR`, `TEXT`, etc.), ensure they are using the desired collation:

   ```sql
   ALTER TABLE your_table_name
   MODIFY your_column_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```

   Adjust `VARCHAR(255)` and the table/column names accordingly.

5. **Verify Changes:**
   Check that the changes have been applied:

   ```sql
   SELECT table_schema, table_name, character_set_name, collation_name
   FROM information_schema.tables
   WHERE table_schema = 'your_database_name';
   ```

---

## For PostgreSQL

1. **Check Current Encoding and Collation:**

   ```sql
   \l your_database_name
   ```

2. **Change Database Collation:**
   PostgreSQL does not support changing the collation of an existing database. You need to create a new database with the desired collation and migrate the data:

   ```sql
   CREATE DATABASE new_database_name
   WITH TEMPLATE = template0
   ENCODING = 'UTF8'
   LC_COLLATE = 'en_US.utf8'
   LC_CTYPE = 'en_US.utf8';
   ```

3. **Migrate Data:**
   Use `pg_dump` and `pg_restore` to migrate the data:

   ```bash
   pg_dump old_database_name > dump.sql
   psql -d new_database_name -f dump.sql
   ```

4. **Verify Changes:**
   Check the new database settings:

   ```sql
   \l new_database_name
   ```

---

## For SQLite

1. **Check Current Encoding:**
   SQLite databases typically use `UTF-8` encoding by default. To check:

   ```sql
   PRAGMA encoding;
   ```

2. **Export and Modify Collation:**
   SQLite does not natively support changing collations like MySQL or PostgreSQL. You need to recreate the database schema with the desired collation.

    * **Export Database Schema:**

      ```bash
      sqlite3 old_database.db .schema > schema.sql
      ```

    * **Edit Collations:**
      Modify `COLLATE BINARY` in the `schema.sql` file to the desired collation (e.g., `COLLATE NOCASE`).

    * **Export Data:**

      ```bash
      sqlite3 old_database.db .dump > data.sql
      ```

3. **Create New Database:**

   ```bash
   sqlite3 new_database.db < schema.sql
   sqlite3 new_database.db < data.sql
   ```

4. **Verify Changes:**
   Check the schema of the new database:

   ```sql
   PRAGMA table_info(your_table_name);
   ```
