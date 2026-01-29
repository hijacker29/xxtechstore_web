Tech Store API - Backend

Bienvenido al corazón de XXTech Store. Esta es una API REST profesional construida con Node.js y Express, diseñada para gestionar el inventario y las ventas de una tienda de tecnología de última generación.

-Tecnologías Utilizadas

Runtime: Node.js 
Framework: Express.js 
Seguridad: CORS (Cross-Origin Resource Sharing) 
Variables de Entorno: Dotenv 
 
-Estructura del Proyecto
El proyecto sigue una arquitectura de carpetas limpia y escalable:

`src/controllers`: Contiene la lógica de negocio.
 `src/routes`: Define los puntos de acceso (endpoints) de la API.
 `src/app.js`: Configuración central de Express.
 `index.js`: Punto de entrada del servidor.

 Cómo empezar (Local)

1. Clonar el proyecto:
    ```bash
    git clone [https://github.com/hijacker29/xxtechstore_web.git](https://github.com/hijacker29/xxtechstore_web.git)
    ```
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Correr el servidor:
    ```bash
    node index.js
    ```
    El servidor estará disponible en: `http://localhost:3000`

-Endpoints Disponibles

| Método | Ruta | Descripción |
| -----  | ---- | ----------- |
| GET    | `/`  | Mensaje de bienvenida. |
| GET    | `/api/products` | Obtiene la lista completa de productos. |


 Autor
[Nestor_Mdm4] - software enginner
