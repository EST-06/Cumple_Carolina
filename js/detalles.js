window.initDetalles = function () {
  const cfg = window.EVENT_CONFIG || {};

  const playlistBtn = document.getElementById("btnPlaylist");
  if (playlistBtn && cfg.spotify) playlistBtn.setAttribute("href", cfg.spotify);

  const driveBtn = document.getElementById("btnDrive");
  if (driveBtn && cfg.drive) driveBtn.setAttribute("href", cfg.drive);

  const rsvpBtn = document.getElementById("btnRsvp");
  if (rsvpBtn && cfg.formulario) rsvpBtn.setAttribute("href", cfg.formulario);

  const giftBox = document.querySelector(".gift__box");
  if (giftBox && cfg.regaloInfo) giftBox.textContent = cfg.regaloInfo;

  const giftText = document.querySelector(".gift__text");
  if (giftText && cfg.regaloTexto) giftText.textContent = cfg.regaloTexto;

  const messageText = document.querySelector(".message__text");
  if (messageText && cfg.mensaje) messageText.textContent = cfg.mensaje;
};
