require("dotenv").config(); // Cargar variables de entorno desde el archivo .env
const express = require("express");
const sgMail = require("@sendgrid/mail");
const bodyParser = require("body-parser");
const axios = require("axios"); // Para hacer peticiones HTTP a Airtable

const app = express();
const port = process.env.PORT || 3000;

// Configuración de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Asegúrate de que la API Key de SendGrid esté correctamente cargada

// Middleware para analizar las solicitudes JSON
app.use(bodyParser.json());

// Ruta para crear la cita y enviar correo
app.post("/crear-cita", async (req, res) => {
  const { pacienteEmail, fecha, motivo, doctor } = req.body;

  // Verificar que todos los parámetros estén presentes
  if (!pacienteEmail || !fecha || !motivo || !doctor) {
    return res.status(400).send("Faltan parámetros requeridos en la solicitud");
  }

  // Crear el mensaje de correo para el paciente
  const msgPaciente = {
    to: pacienteEmail, // El correo del paciente
    from: "andresbaldeonmora1@gmail.com", // Correo verificado de SendGrid
    subject: "Confirmación de tu cita médica",
    text: `Estimado/a paciente,\n\nTu cita médica ha sido confirmada para el día ${fecha}. Motivo: ${motivo}.\n\nEl médico asignado es: ${doctor}.\n\nSaludos cordiales.`,
  };

  // Enviar el correo de confirmación de cita
  sgMail
    .send(msgPaciente)
    .then(() => {
      res.status(200).send("Cita creada y correo enviado al paciente con éxito");
    })
    .catch((error) => {
      console.error("Error enviando correo:", error);
      res.status(500).send("Error enviando correo al paciente");
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
