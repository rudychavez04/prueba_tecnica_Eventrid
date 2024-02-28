# Rudy Christian Chavez Prueba Técnica Eventrid

Este repositorio contiene la prueba técnica para Eventrid.  
A continuación, se describen los detalles y las instrucciones para ejecutar el proyecto.

## Instalación

Instalar dependencias

```bash
  git clone git@github.com:rudychavez04/prueba_tecnica_Eventrid.git
  cd prueba_tecnica_Eventrid
  npm install
```

## Instrucciones de ejecución
Iniciar el servidor Frontend    
Esto iniciará el servidor frontend y podrás acceder a la aplicación por defecto en http://localhost:5173.
```bash
  npm run dev
```

Iniciar el servidor Backend  
Esto iniciará el servidor JSON Server y podrás acceder a la API en http://localhost:3001.
```bash
  npm run server
```


## Estructura de Carpetas

```javascript
|-- public/
|-- src/
    |-- assets/
        |-- image/
            |-- Login-image.jpg
            |-- Logo.png
    |-- components/
        |-- Login/
            |-- LoginForm.tsx
        |-- Main/
            |-- Card.tsx
            |-- RegisterForm.tsx
        |-- Navigation
            |-- Header.tsx
            |-- Sidebar.tsx
        |-- Pagination
            |-- Pagination.tsx
    |-- pages/
        |-- Login/
            |-- Login.tsx
        |-- Main.tsx
        |-- Register.tsx
    |-- App.tsx
    |-- index.css
    |-- main.tsx
|-- package.json
|-- db.json
```

## Dependencias Utilizadas

- **@fortawesome/react-fontawesome**: ^0.2.0
- **formik**: ^2.4.5
- **json-server**: ^0.17.4
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-icons**: ^4.12.0
- **react-router-dom**: ^6.22.1
- **remixicon**: ^4.2.0
- **yup**: ^1.3.3
- **tailwindcss**: "^3.4.1"

## Manejo de Inicio de Sesión

El inicio de sesión en este proyecto se gestiona mediante un proceso de autenticación de los usuarios de la siguiente manera:

1. **Autenticación de Credenciales**: Los usuarios ingresan sus credenciales en un formulario de inicio de sesión. Al enviar el formulario, se inicia un proceso de autenticación.

2. **Validación de Credenciales**: Se realiza una solicitud `fetch` al servidor para obtener la lista de usuarios almacenados en la base de datos. Luego, se realiza una búsqueda para verificar si existe un correo con el correo electronico proporcionado y si la contraseña coincide con la almacenada en la base de datos.

3. **Manejo de Casos de Uso**: Si las credenciales son válidas y coinciden con un usuario registrado, se redirige al usuario a la página principal, en caso de que las credenciales sean incorrectas o no se encuentre un correo correspondiente, se muestra una alerta informativa indicando que las credenciales ingresadas son incorrectas.

## Autor

- [@rudychavez04 [https://github.com/rudychavez04]) Frontend Developer

## Feedback

Si tiene algún comentario, comuníquese conmigo a rchristianchavez96@gmail.com
