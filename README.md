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

## Ejemplos (Postman)
### POST /login (credenciales correctas)
- Headers: 
    - Content-Type: application/json
- Body:
    ```
    {
        "username": "admin",
        "password": "secret"
    }
    ```

Resultado esperado:
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU"
}
```

> token de ejemplo generado en jwt.io

### POST /login (credenciales incorrectas)
- Headers: 
    - Content-Type: application/json
- Body:
    ```
    {
        "username": "adminn",
        "password": "secrett"
    }
    ```

Resultado esperado:
```
{
  "message": "Invalid credentials."
}
```


### GET /weather/:city (credenciales correctas)
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> token de ejemplo generado en jwt.io

Resultado esperado:
```
{
    "coord": {
        "lon": -58.3772,
        "lat": -34.6132
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 294.16,
        "feels_like": 294.09,
        "temp_min": 294,
        "temp_max": 296.06,
        "pressure": 1005,
        "humidity": 68,
        "sea_level": 1005,
        "grnd_level": 1004
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.12,
        "deg": 0
    },
    "clouds": {
        "all": 75
    },
    "dt": 1759687401,
    "sys": {
        "type": 1,
        "id": 8224,
        "country": "AR",
        "sunrise": 1759656253,
        "sunset": 1759701555
    },
    "timezone": -10800,
    "id": 3435910,
    "name": "Buenos Aires",
    "cod": 200
}
```

### GET /weather/:city (city mal escrita)
- Headers: 
    - Content-Type: application/json
    - Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTc1OTc2NDQ1N30.b6Tq2PmyBRXcpy-NUlROhaGJOLfXa1mhvsG9n5QvJYU".

> token de ejemplo generado en jwt.io

Resultado esperado:
```
{
    "message": "External service error."
}
```