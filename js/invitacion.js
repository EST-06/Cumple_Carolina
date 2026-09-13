window.initInvitacion = function () {
  const cfg = window.EVENT_CONFIG || {};

  if (window.buildStarfield) {
    window.buildStarfield(document.querySelector(".hero .starfield"), 70);
    window.buildStarfield(document.querySelector(".rsvp .starfield"), 40);
  }

  // ----- Datos del evento -----
  document.querySelectorAll(".hero__bigName").forEach((el) => (el.textContent = cfg.nombre || el.textContent));

  const dateTextEl = document.getElementById("eventDateText");
  if (dateTextEl && cfg.fechaTexto) dateTextEl.textContent = cfg.fechaTexto;

  const setById = (id, value) => {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  };

  setById("infoFecha", cfg.fechaTexto);
  setById("infoHora", cfg.hora);
  setById("infoLugar", cfg.lugar);
  setById("infoDireccion", cfg.direccion);
  setById("infoDress", cfg.dressCode);

  setById("presupuestoHora", cfg.horaPista);
  setById("presupuestoPersonas", cfg.personasPorPista ? `${cfg.personasPorPista} personas` : undefined);
  setById("presupuestoZapatos", cfg.valorZapatos);

  const messageText = document.getElementById("messageText");
  if (messageText && cfg.mensaje) messageText.textContent = cfg.mensaje;

  const mapsBtn = document.getElementById("btnComoLlegar");
  if (mapsBtn && cfg.maps) mapsBtn.setAttribute("href", cfg.maps);

  // ----- Contador regresivo -----
  const target = new Date(cfg.fechaISO || "2026-09-19T14:30:00-05:00");
  const elDays = document.getElementById("cdDays");
  const elHours = document.getElementById("cdHours");
  const elMins = document.getElementById("cdMins");
  const elSecs = document.getElementById("cdSecs");
  const countdownEl = document.querySelector(".countdown");
  const doneMsg = document.getElementById("cdDoneMsg");

  const pad2 = (n) => String(n).padStart(2, "0");
  let timer = null;

  function tick() {
    const diffMs = target.getTime() - Date.now();

    if (diffMs <= 0) {
      [elDays, elHours, elMins, elSecs].forEach((el) => el && (el.textContent = "00"));
      if (countdownEl) countdownEl.style.display = "none";
      if (doneMsg) doneMsg.classList.add("is-visible");
      clearInterval(timer);
      return;
    }

    const totalSec = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    if (elDays) elDays.textContent = String(days);
    if (elHours) elHours.textContent = pad2(hours);
    if (elMins) elMins.textContent = pad2(mins);
    if (elSecs) elSecs.textContent = pad2(secs);
  }

  tick();
  timer = setInterval(tick, 1000);

  // ----- Lightbox de galería -----
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".lightbox__close");

  if (lightbox && lightboxImg && closeBtn) {
    function openLightbox(src) {
      lightboxImg.src = src;
      lightbox.classList.add("is-active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-active");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".gallery__img").forEach((img) => {
      img.addEventListener("click", () => openLightbox(img.src));
    });

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("is-active")) closeLightbox();
    });
  }

  if (window.initReveal) window.initReveal(document);
};
