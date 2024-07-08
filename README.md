# Toolbox Frontend

Este proyecto es el frontend de la aplicación Toolbox, construida con React y Redux.

## Estructura del Proyecto

- `src/`: Contiene todo el código fuente del frontend.
  - `actions/`: Define las acciones de Redux.
  - `components/`: Contiene los componentes de la UI.
  - `reducers/`: Define los reducers de Redux.
  - `services/`: Contiene funciones para interactuar con la API.
  - `store/`: Configura el store de Redux.
  - `pages/`: Contiene las páginas de la aplicación.

## Requisitos

- Node.js 16
- Docker (opcional)

## Ejecutar el Proyecto sin Docker

1. Clona el repositorio:
    ```bash
    git clone https://github.com/EdinsonRequena/toolbox-frontend.git
    cd toolbox-frontend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    npm run start
    ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Ejecutar el Proyecto con Docker

1. Corre el siguiente comando para construir y levantar los contenedores de Docker:
    ```bash
    docker-compose up --build
    ```

2. Abre [http://localhost:8080](http://localhost:8080) en tu navegador.

## Ejecutar los Tests

1. Corre los tests unitarios con Jest:
    ```bash
    npm test
    ```

## Notas

- Asegúrate de tener el backend corriendo para que la aplicación frontend funcione correctamente.
