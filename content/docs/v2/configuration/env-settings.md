---
title: Advanced Settings
weight: 200
---

The following settings can be added to the `.env` file and changed as you need them. 

```bash
# Only relevant for URLs generated when using LinkAce CLI commands
APP_URL=http://localhost

# The environment is usually 'production' but may be changed to 'local' for development
APP_ENV=production

# Enable the debug more if you are running into issues or while developing
APP_DEBUG=false

# Change the timezone of the core application here. It does not affect the timezone set in the user settings but changes how LinkAce saves dates and times in the database. Be very careful when using this setting as it can have unintended site effects! There won't be any support for broken applications due to a changed timezone.
APP_TIMEZONE=UTC

# Set the time after a session expires automatically, in minutes. Default is 7 days. You may also define a specific domain.
SESSION_LIFETIME=10080
SESSION_DOMAIN=
SESSION_SECURE_COOKIE=[true/false]

# Configure the API rate limit here: the first number defines the number of requests, the second the time frame
# for the requests. 60,1 is the default which means: 60 requests per 1 minute
API_RATE_LIMIT=60,1


## Mail configuration
MAIL_FROM_ADDRESS=your@email.com
MAIL_FROM_NAME=LinkAce
# Set the driver used for sending email here, default is `log`
MAIL_MAILER=smtp
# Set the SMTP host and its port here
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
# Set the username used to connect to the SMTP server here
MAIL_USERNAME=null
# Set the password used to connect to the SMTP server here
MAIL_PASSWORD=null
# If your SMTP server uses encrypted connections, enable it here by setting the variable to `tls`
MAIL_ENCRYPTION=null
# If you want to use Sendmail, set the path here
MAIL_SENDMAIL_PATH="/usr/sbin/sendmail -bs -i"


## Advanced database configuration
# Some of these configuration options are only available for specific database systems
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=linkace
DB_USERNAME=linkace
DB_PASSWORD=superSecurePassword

DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci
DB_ENGINE=InnoDB
DB_SOCKET=
DATABASE_URL="mysql://sandy:secret@192.168.10.10:3306/db"


## Meta generation
## Configure how LinkAce should handle HTTP requests when fetching the meta data of websites when adding links.
# The user agent may be customized to enhance credibility.
APP_USER_AGENT="LinkAce/1 (https://github.com/Kovah/LinkAce)"
# The timeout is 10 seconds by default. If you encounter failed meta generation more often, consider increasing this.
META_GENERATION_TIMEOUT=20
# You also can add custom headers, for example to customize the Accept-Language header. Multiple headers must be separated by a pipe (|).
META_GENERATION_CUSTOM_HEADERS="Accept-Language=fr-CH,fr;q=0.9,en|referer=https://example.com"


#### Backup configuration
# Enable backups here
BACKUP_ENABLED=false
# Choose the destination of the backup. If you set up AWS S3 credentials below you may choose 'cloud' which is used
# as a synonym for AWS. Leave blank or set to 'local_backups' if you want to store backups within /storage/app/backups.
BACKUP_DISK=s3
# You may disable notifications for backups. Not recommended, as possible issues may not be reported.
BACKUP_NOTIFICATIONS_ENABLED=[true/false]
# The notification email may be used to get backup notifications, Mail must be configured for this to work!
BACKUP_NOTIFICATION_EMAIL=your@email.com
# Maximum size of the backups in megabytes
BACKUP_MAX_SIZE=512
# Backup tasks are run nightly every day. You can change the hour of the executions here
BACKUP_CLEAN_HOUR="01:00"
BACKUP_RUN_HOUR="02:00"


## Amazon Web Services (AWS) S3 configuration
# Define the key ID, the access key, the region and your bucket name here if you want to use AWS S3 for backups.
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

# Advanced S3 settings, only use them if you know what you are doing
AWS_SCHEME=https
AWS_BUCKET_ENDPOINT=[true/false]
AWS_PATH_STYLE_ENDPOINT=[true/false]
AWS_ACCELERATE_ENDPOINT=[true/false]
AWS_FIPS_ENDPOINT=[true/false]
AWS_DUAL_STACK_ENDPOINT=[true/false]


## Redis cache configuration
# Set the Redis connection here if you want to use it
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=ChangeThisToASecurePassword!
REDIS_PORT=6379
REDIS_DB=0

## Memcache cache configuration
MEMCACHED_PERSISTENT_ID=
MEMCACHED_USERNAME=
MEMCACHED_PASSWORD=
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211


# You can completely disable all audit logs for LinkAce with this option
AUDITING_ENABLED=[true/false]

# Set some trusted proxies if you want to enhance the security of LinkAce when it's running behind a proxy.
TRUSTED_PROXIES=*

# Configure LinkAce to report errors to Sentry.io
SENTRY_LARAVEL_DSN=
SENTRY_TRACES_SAMPLE_RATE=0.0

---

## You probably do not want to change any values below. Only continue if you know what you are doing.
## If you are using Redis, you may switch SESSION_DRIVER and CACHE_DRIVER to "redis" or "memcache" to improve performance.
SESSION_DRIVER=file
LOG_CHANNEL=stack
BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_DRIVER=database


## Using Redis sockets
# If you want to use Redis via a Unix socket, you can remove the hash before the following lines, but remove one before
# the "CACHE_DRIVER" line above. Also, set a proper path to your Redis socket.
CACHE_DRIVER=redis-socket
SESSION_CONNECTION=redis-socket
REDIS_SCHEME=unix
REDIS_PATH=/path/to/redis.sock
```
