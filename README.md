# GymPulse

Plataforma estática de investigación y catálogo de ejercicios de alto rendimiento construida con Spring Boot y Thymeleaf.

Este proyecto ahora presenta una experiencia pública sin autenticación ni base de datos dinámica, con contenido científico, pestañas de ejercicios y navegación centralizada.

## Backend (Spring Boot)

### Requisitos

- Java 17+
- Maven 3.9+

### Ejecutar

```bash
cd GymPulse
mvn spring-boot:run
```

Abre: **http://localhost:8081/**

### Despliegue en JAR

```bash
mvn -DskipTests package
java -jar target/gympulse-1.0.0.jar
```

Los recursos estáticos se sirven desde el classpath del JAR (`/css`, `/js`); no se requiere ninguna base de datos externa.

### Estructura Java

```
src/main/java/com/gympulse/
├── GymPulseApplication.java
└── controller/MainController.java       # Rutas públicas: /, /dashboard, /ejercicios, /investigacion

src/main/resources/
├── templates/dashboard.html
├── templates/ejercicios.html
├── templates/investigacion.html
└── static/css/styles.css
```

## Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` o `/dashboard` | Página principal del laboratorio de investigación y catálogo técnico |
| `/ejercicios` | Catálogo tabulado de ejercicios y biomecánica |
| `/investigacion` | Artículos científicos y hallazgos de rendimiento |

## Estado actual

- El sistema de login/registro ha sido removido.
- No hay lógica de sesión ni almacenamiento de usuarios.
- El sitio funciona como una experiencia estática enriquecida por Thymeleaf.
