# Arquitectura del Sistema – Ecosistema No Code/Low Code para Gestión de Citas Médicas

## 1. Descripción General

La arquitectura del sistema está basada en un ecosistema de herramientas **No Code** y **Low Code**, con el objetivo de digitalizar y automatizar la gestión de citas médicas en una clínica.  
La solución se construye de forma modular, utilizando servicios en la nube que permiten reducir el desarrollo tradicional de código, pero manteniendo buenas prácticas de diseño, integración y escalabilidad.

---

## 2. Problema Real y Alcance

Actualmente, muchas clínicas pequeñas y consultorios gestionan sus citas médicas de forma manual (hojas de cálculo, agendas físicas, llamadas telefónicas o mensajes sueltos por WhatsApp).  
Este enfoque genera varios problemas:

- Doble registro de información y datos inconsistentes.  
- Errores al agendar citas o solapamiento de horarios.  
- Falta de recordatorios al paciente → alta tasa de inasistencias.  
- No existe un historial ordenado de citas por paciente.  
- No hay métricas ni reportes para la toma de decisiones (médicos más demandados, horarios pico, etc.).

El sistema propuesto busca **resolver este problema real** mediante:

- Un registro centralizado de pacientes, médicos y citas.  
- Automatización de confirmaciones y recordatorios.  
- Envío de encuestas de satisfacción posteriores a la atención.  
- Dashboards con indicadores clave para la clínica.

El alcance del proyecto incluye el flujo completo desde el registro de la cita hasta la encuesta posterior a la atención.

---

## 3. Visión General de la Solución

La solución se basa en tres pilares:

1. **Aplicación Low Code (Retool / Bubble):** interfaz administrativa usada por el personal de la clínica y los médicos.
2. **Base de Datos No Code (Airtable):** repositorio central de información y origen de dashboards.
3. **Motor de Automatización (Make / Zapier):** encargado de ejecutar acciones automáticas en función de eventos (nuevas citas, proximidad de la fecha, cierre de atención, etc.).

Los pacientes interactúan de forma indirecta con el sistema a través de correos electrónicos y formularios (por ejemplo, la encuesta de satisfacción).

---

## 4. Componentes del Sistema

### 4.1. Aplicación Low Code (Retool / Bubble)

La aplicación Low Code es la capa de presentación para el personal administrativo y médico.  
Desde este componente se realizan las siguientes acciones:

- Registrar y actualizar datos de pacientes.  
- Registrar y reprogramar citas médicas.  
- Visualizar el calendario de citas.  
- Consultar el estado de las citas (Programada, Confirmada, Finalizada, Cancelada).  
- Marcar que una cita ha sido atendida.

La aplicación se conecta directamente con Airtable mediante integraciones nativas o APIs proporcionadas por la plataforma.

---

### 4.2. Base de Datos No Code (Airtable)

Airtable funciona como el **repositorio central de datos**.  
Las tablas principales son:

- **Pacientes:** datos de identificación y contacto.  
- **Médicos:** información básica y especialidad.  
- **Citas:** fecha, hora, paciente, médico, estado.  
- **Encuestas:** resultados de satisfacción de los pacientes.

Además, Airtable se utiliza para construir **vistas y dashboards**, donde se muestran:

- Número de citas por día/semana/mes.  
- Tasa de asistencia vs. inasistencia.  
- Médicos más solicitados.  
- Resultados de las encuestas de satisfacción.

---

### 4.3. Automatizaciones (Make / Zapier)

Este componente implementa los **flujos automáticos** del sistema.  
Ejemplos de automatizaciones:

- Cuando se crea una cita en Airtable → enviar correo de **confirmación** al paciente.  
- 24 horas antes de la fecha de la cita → enviar **recordatorio** al paciente.  
- Después de marcar una cita como "Finalizada" → enviar **encuesta de satisfacción**.  
- Cuando el paciente responde la encuesta → registrar automáticamente la respuesta en la tabla de **Encuestas** en Airtable.

Estas automatizaciones se configuran mediante escenarios o workflows visuales, sin necesidad de escribir código tradicional.

---

### 4.4. Usuarios del Sistema

- **Usuario Administrativo:** gestiona pacientes, citas y reportes.  
- **Médico:** consulta su agenda y marca citas como atendidas.  
- **Paciente:** recibe comunicaciones (confirmaciones, recordatorios, encuestas) y responde formularios.

---

## 5. Flujo de Datos Extremo a Extremo

El flujo de datos del sistema sigue estos pasos:

1. El usuario administrativo registra al paciente y crea una cita desde la aplicación Low Code.  
2. La aplicación Low Code envía la información a Airtable, donde se almacena la nueva cita.  
3. Airtable dispara un evento que es detectado por Make/Zapier, el cual envía un **correo de confirmación** al paciente.  
4. Cuando se aproxima la fecha de la cita (por ejemplo, 24 horas antes), Make/Zapier ejecuta un flujo programado que envía un **recordatorio** al paciente.  
5. Tras la atención médica, el administrativo o el médico actualiza el estado de la cita a "Finalizada" en la aplicación Low Code (y, por lo tanto, en Airtable).  
6. Make/Zapier detecta el cambio de estado y envía una **encuesta de satisfacción** al paciente.  
7. Al completar la encuesta, las respuestas son registradas automáticamente en la tabla de **Encuestas** en Airtable.  
8. Los responsables de la clínica pueden revisar dashboards en Airtable para analizar rendimiento, satisfacción y demanda.

---

## 6. Tópicos del Curso Integrados en la Arquitectura

La arquitectura implementa de forma efectiva varios tópicos del curso:

- **No Code:**  
  - Uso de Airtable como base de datos en la nube y herramienta de reporting.  

- **Low Code:**  
  - Uso de Retool/Bubble para construir la aplicación de gestión sin programación tradicional.  

- **Workflows / BPM:**  
  - Diseño del flujo de proceso completo mediante un diagrama BPMN, alineado con la arquitectura.  

- **Automatización y Flujos (Herramientas No Code):**  
  - Uso de Make/Zapier para implementar recordatorios, confirmaciones y encuestas de forma automática.  

Esta integración de **3+ tópicos** cumple y supera el requisito mínimo del curso y aporta complejidad técnica adecuada.

---

## 7. Complejidad Técnica y Escalabilidad

Aunque el proyecto se basa en herramientas No Code/Low Code, la arquitectura propuesta introduce una complejidad técnica adecuada:

- Integración entre múltiples plataformas en la nube.  
- Manejo de eventos basados en tiempo (recordatorios).  
- Gestión de estados del ciclo de vida de una cita.  
- Registro y análisis de métricas a través de encuestas y dashboards.

Además, la solución es **escalable**:

- Se pueden añadir nuevas automatizaciones en Make/Zapier (por ejemplo, SMS o WhatsApp).  
- Es posible integrar otros servicios mediante APIs (calendarios, facturación, etc.).  
- La estructura de tablas en Airtable puede ampliarse con nuevos campos y relaciones.  
- La aplicación Low Code puede incorporar nuevas pantallas o roles.

Esta arquitectura permite que el sistema crezca si la clínica lo requiere, manteniendo una base sólida para un entorno cercano a producción.
