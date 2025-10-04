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
    ```

## Iniciar el Proyecto

Para iniciar el servidor en modo desarrollo (con reinicio automático usando `nodemon`):

```bash
npm run dev
```

## Dependencias utilizadas
- express.js
- dotenv
#### Dependencias de desarrollo
- nodemon

## Ejemplos (Postman)
#### POST /login (credenciales correctas)
- URL: http://localhost:3000/login
- MÉtodo: POST
- Headers: 
    - Content-Type: application/json
- Body:
    {
        "username": "admin",
        "password": "secret"
    }

Resultado esperado:
{
  "message": "Hi admin."
}

#### POST /login (credenciales incorrectas)
- URL: http://localhost:3000/login
- MÉtodo: POST
- Headers: 
    - Content-Type: application/json
- Body:
    {
        "username": "adminn",
        "password": "secrett"
    }

Resultado esperado:
{
  "message": "Invalid credentials."
}
