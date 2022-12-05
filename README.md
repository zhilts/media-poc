# Media POC
Proof of concept project aimed to test different approaches for finding similar media files library.

## Prepare

### Start

```shell
docker compose up -d
```

### Init DB

```shell
docker compose run --rm api python manage.py migrate
```

### Create user

```shell
docker compose run --rm api python manage.py createsuperuser
```

## Entry points

### User Web App
http://localhost

### Admin Web App
http://localhost/admin
