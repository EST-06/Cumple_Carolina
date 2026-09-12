/* ============================================================
   CONFIGURACIÓN DEL EVENTO
   Edita únicamente los valores de este objeto para personalizar
   la invitación. No es necesario tocar el resto del código.
============================================================ */
const EVENT_CONFIG = {
  nombre: "[ NOMBRE ]",
  edad: "[ EDAD ]",

  // Fecha y hora del evento (zona horaria Colombia, UTC-05:00)
  fechaISO: "2026-09-19T18:00:00-05:00",
  fechaTexto: "19 DE SEPTIEMBRE",
  hora: "[ HORA ]",

  lugar: "[ LUGAR ]",
  direccion: "[ DIRECCIÓN ]",
  dressCode: "[ DRESS CODE ]",

  // Enlaces (reemplazar por los reales antes de compartir)
  maps: "AQUI_LINK_GOOGLE_MAPS",
  spotify: "AQUI_LINK_SPOTIFY",
  formulario: "AQUI_LINK_FORMULARIO",
  drive: "AQUI_LINK_GOOGLE_DRIVE",

  // Mensaje de invitación (editable)
  mensaje:
    "Hay momentos que se vuelven aún más especiales cuando los compartimos con las personas que queremos. Por eso quiero invitarte a celebrar conmigo este día tan especial.",

  // Información sobre regalos (editable)
  regaloTexto:
    "Lo más importante es compartir este día contigo. Pero si deseas tener un detalle, puedes hacerlo de la siguiente manera:",
  regaloInfo: "[ INFORMACIÓN SOBRE REGALO ]",
};

window.EVENT_CONFIG = EVENT_CONFIG;
