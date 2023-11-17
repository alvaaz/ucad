# Server

Este es el servidor que disponibiliza los datos de los partners; tales como su logo y el nombre. Estoy utilizando [KeystoneJS](https://keystonejs.com) el cuál es un CMS de implementación y uso muy sencillo.

## Antes de comenzar

Estoy utilizando Postgres como base de datos. Esa configuración la puedes revisar en [./keystone.ts](./keystone.ts).

```typescript
db: {
    provider: 'postgress',
    url: process.env.DATABASE_URL || 'DATABASE_URL_TO_REPLACE',
}
```

Cómo necesitamos una base de datos utilizo Docker para levantar un contenedor con esa imagen y poder trabajar en modo desarrollo.

Asegúrate de tener tu archivo `./env` con las variables `PGDATABASE`, `PGUSER` y `PGPASSWORD` seteadas.

Construir la imagen de Docker:

```bash
docker build -t mi-postgres .
```

Ejecutar el contenedor basado en la imagen construida:

```bash
docker run -d --name mi-postgres-container \
--env-file .env \
-v ${PWD}/db:/var/lib/postgresql/data \
-p 5432:5432 \
mi-postgres
```

Levantas el proyecto:

```bash
pnpm dev
```
