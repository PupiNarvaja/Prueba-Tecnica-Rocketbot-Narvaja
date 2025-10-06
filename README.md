# Prueba-Tecnica-Rocketbot-Narvaja
Ésta es mi propuesta a las consignas otorgadas para la entrevista técnica de Rocketbot.

## Requisitos Técnicos
* Node.js (versión utilizada: 22.20.0 LTS)
* npm (versión utilizada: 8.18.0)

## Instalación de Dependencias
1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/PupiNarvaja/Prueba-Tecnica-Rocketbot-Narvaja
    cd '.\Prueba Técnica Rocketbot - Narvaja\'
    ```

2.  Instalar los módulos necesarios:
    ```bash
    npm install
    ```

3.  Crear un archivo `.env` en la raíz del proyecto y agregar (para facilitar su uso, daré información sensible, no sería el caso en un escenario real):
    ```env
    NODE_ENV: "development"
    PORT=3000

    APP_USERNAME="admin"
    PASSWORD="secret"

    # JWT
    JWT_SECRET=RocketBotSaturno
    JWT_EXPIRES_IN=1h

    # OpenWeather
    OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
    OPENWEATHER_API_KEY=<TU_API_KEY>
    ```

## Iniciar el Proyecto

Para iniciar el servidor en modo desarrollo (con reinicio automático usando `nodemon`):

```bash
npm run dev
```

Para iniciar el servidor en modo producción:

```bash
npm start
```

## Dependencias utilizadas
- [express.js](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [axios](https://www.npmjs.com/package/axios)

#### Dependencias de desarrollo
- [nodemon](https://www.npmjs.com/package/nodemon)

## Ejemplos
### POST /login
- Headers: 
    - Content-Type: application/json
- Body:
    ```
    {
        "username": "admin",
        "password": "secret"
    }
    ```

#### Resultado esperado:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU"
}
```

> token de ejemplo generado en jwt.io

#### Casos de error:
- Username y/o password incorrectas:
```
{
  "message": "Invalid credentials."
}
```


### GET /weather/current/:city
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> token de ejemplo generado en jwt.io

#### Resultado esperado:
```
{
    "city": "Buenos Aires",
    "country": "AR",
    "weather": "Clouds",
    "description": "overcast clouds",
    "temperature": 285.03,
    "clouds": 91
}
```

#### Casos de error:
- Ciudad mal escrita o incompleta:
```
{
    "message": "City 'BuenosAir' not found."
}
```

### GET /weather/forecast/:city
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> token de ejemplo generado en jwt.io

#### Resultado esperado:
```
{
    "city": "Córdoba",
    "country": "AR",
    "numPeriods": 40,
    "periods": [
        {
            "timestamp": 1759730400,
            "dateTime": "2025-10-06 06:00:00",
            "temperature": 284.47,
            "weather": "Clear",
            "description": "clear sky"
        },

        ...

        {
            "timestamp": 1760151600,
            "dateTime": "2025-10-11 03:00:00",
            "temperature": 295.68,
            "weather": "Clouds",
            "description": "few clouds"
        }
    ]
}
```

#### Casos de error:
- Ciudad mal escrita o incompleta:
```
{
    "message": "City 'cordob' not found."
}
```

### GET /posts
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> token de ejemplo generado en jwt.io

#### Resultado esperado:
```
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },

    ...

    {
        "userId": 10,
        "id": 100,
        "title": "at nam consequatur ea labore ea harum",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    }
]
```

#### Casos de error:
- Servicio no disponible:
```
{
    "message": "This service is currently unavailable."
}
```

### POST /posts
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".
- Body:
    ```
    {
        "userId": "1",
        "body": "Hello world!"
    }
    ```

> token de ejemplo generado en jwt.io


#### Resultado esperado:
```
{
    "userId": "1",
    "body": "Hello world!",
    "id": 101
}
```

#### Casos de error:
- Servicio no disponible:
```
{
    "message": "This service is currently unavailable."
}
```


### GET /posts/:userId
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> **Importante:** token de ejemplo generado en jwt.io

#### Resultado esperado:
```
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },

    ...
]
```

#### Casos de error:
- Servicio no disponible:
```
{
    "message": "This service is currently unavailable."
}
```


## Rutas protegidas
Al utilizar JWT, junto a un middleware, protegemos aquellas rutas que requieran autenticación.
Asi se ven los mensajes recibidos en distintos casos:
- Fallo al intentar obtener el token del header:
```
{
    "message": "Access denied. Bearer Token missing or improperly formatted."
}
```

- Token expirado:
```
{
    "message": "Please, log in again."
}
```

- Error de jsonwebtoken:
```
{
    "message": "Log in failed."
}
```

## Manejo de endpoints inexistentes
Para express, las respuestas 404 no son resultados de errores, sino la ausencia de trabajo por hacer, por lo que recomienda crear un middleware que capture los intentos de acceder a aquellos endpoints inexistentes en nuestra API.

La respuesta ante tales situaciones se ve algo asi:
```
{
    "message": "Endpoint '/fakeendpoint' not found."
}
```