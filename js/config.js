/* ============================================================
   CONFIGURACIÓN DEL EVENTO
   Edita únicamente los valores de este objeto para personalizar
   la invitación. No es necesario tocar el resto del código.
============================================================ */
const EVENT_CONFIG = {
  nombre: "Carolina",

  // Fecha y hora del evento (zona horaria Colombia, UTC-05:00)
  fechaISO: "2026-09-19T14:30:00-05:00",
  fechaTexto: "Sábado 19 de septiembre",
  hora: "2:30 PM",

  lugar: "Centro Comercial Metrópolis",
  direccion: "Av. 68 #75a – 50, Bogotá",
  dressCode: "Rosado, morado o azul",

  // Enlace directo a la ruta (Google Maps)
  maps:
    "https://www.google.com/maps/dir/6.1143921,-75.3802178/Centro+Comercial+Metr%C3%B3polis+%2B,+Av.+68+%2375a+%E2%80%93+50,+Bogot%C3%A1/@5.1899107,-76.0532283,8z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x8e3f9b504583010f:0x3b7d1b18f2a7cb55!2m2!1d-74.082871!2d4.6804519!3e0?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D",

  // Mensaje de invitación (editable)
  mensaje:
    "Hay momentos que se vuelven aún más especiales cuando los compartimos con las personas que queremos. Por eso quiero invitarte a celebrar conmigo este día tan especial.",

  // Presupuesto compartido por pista (bowling)
  horaPista: "$121.000",
  personasPorPista: 6,
  valorZapatos: "$6.000",

  // Galería "Algunos momentos": agrega aquí el nombre de cada foto
  // (deben estar en assets/fotos/). Se van acomodando en mosaico solas.
  galeria: [
    "foto-1.jpeg",
    "foto-2.jpeg",
    "foto-3.jpeg",
    "foto-4.jpeg",
    "foto-5.jpeg",
    "foto-6.jpeg",
    "foto-7.jpeg",
    "foto-8.jpeg",
    "foto-9.jpeg",
    "foto-10.jpeg",
    "foto-11.jpeg",
    "foto-12.jpeg",
  ],
};

window.EVENT_CONFIG = EVENT_CONFIG;
