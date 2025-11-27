const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de SendGrid
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');  // Reemplaza con tu propia API Key de SendGrid

// Middleware para analizar las solicitudes JSON
app.use(bodyParser.json());

// Ruta para manejar la creación de la cita
app.post('/crear-cita', (req, res) => {
  const { pacienteEmail, medicoEmail, fecha, motivo } = req.body;

  // Mensaje para el paciente
  const msgPaciente = {
    to: pacienteEmail,
    from: 'no-reply@tusistema.com',
    subject: 'Confirmación de tu cita médica',
    text: `Estimado/a paciente,\n\nTu cita médica ha sido confirmada para el día ${fecha}. Motivo: ${motivo}.\n\nSaludos cordiales.`,
  };

  // Mensaje para el médico
  const msgMedico = {
    to: medicoEmail,
    from: 'no-reply@tusistema.com',
    subject: 'Nueva cita médica asignada',
    text: `Estimado/a doctor/a,\n\nTienes una nueva cita médica programada para el día ${fecha}. Motivo: ${motivo}.\n\nSaludos cordiales.`,
  };

  // Enviar el correo al paciente
  sgMail.send(msgPaciente)
    .then(() => sgMail.send(msgMedico))
    .then(() => {
      res.status(200).send('Citas y correos enviados con éxito');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error enviando correos');
    });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
