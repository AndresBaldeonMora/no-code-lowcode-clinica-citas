# Ecosistema No Code/Low Code para Gestión de Citas Médicas en una Clínica

## 1. Descripción General

Este proyecto implementa un ecosistema basado en herramientas No Code y Low Code para gestionar citas médicas en una clínica. Permite registrar pacientes, administrar doctores, crear citas médicas y enviar correos automáticos de confirmación. El sistema integra Airtable como base de datos central, Retool como interfaz administrativa y un backend en Node.js desplegado mediante Docker en Railway.

El objetivo principal es digitalizar y automatizar el proceso de programación de citas médicas utilizando tecnologías modernas, escalables y de rápida implementación.

---

## 2. Arquitectura General

### Base de Datos – Airtable
- Tablas: Pacientes, Doctores, Citas  
- Dashboard visual con reportes  
- API para consultas y actualizaciones desde Retool

### Interfaz – Retool
- CRUD de pacientes  
- CRUD de doctores  
- Registro de citas con validaciones  
- Integración mediante consultas REST  
- Limpieza de inputs y manejo de errores visuales

### Backend – Node.js + Express
- API REST para envío de correos  
- Integración con SendGrid  
- Endpoint principal: `/crear-cita`  
- Manejo de variables de entorno  
- Contenerizado mediante Docker

### Despliegue – Railway
- Construcción automática de la imagen Docker  
- Ejecución del contenedor  
- Gestión de variables de entorno  
- URL pública consumida desde Retool

---

## 3. Instalación del Backend (Local)

### Clonar repositorio
```
git clone https://github.com/usuario/no-code-lowcode-clinica-citas.git
cd no-code-lowcode-clinica-citas
```

### Instalar dependencias
```
npm install
```

### Crear archivo `.env`
```
SENDGRID_API_KEY=
AIRTABLE_API_KEY=
AIRTABLE_BASE=
PORT=3000
```

### Iniciar servidor
```
node server.js
```

Backend disponible en:
```
http://localhost:3000
```

---

## 4. Instalación mediante Docker

### Construir imagen
```
docker build -t citas-backend .
```

### Ejecutar contenedor
```
docker run -p 3000:3000 --env-file .env citas-backend
```

---

## 5. Variables de Entorno

```
SENDGRID_API_KEY=      # API Key de SendGrid
AIRTABLE_API_KEY=      # API Key de Airtable
AIRTABLE_BASE=         # ID de la Base de Airtable
PORT=3000
```

---

## 6. Créditos

Proyecto realizado por:

- **Andres Baldeon Mora** – 202121057@urp.edu.pe  
- **Alvaro Enrique Wong Quispe** – 202010311@urp.edu.pe  

---
