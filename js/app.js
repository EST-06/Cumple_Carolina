const app = document.getElementById("app");

// Detecta la ruta base correcta para:
// - Local (Live Server / file://)
// - GitHub Pages (/NOMBRE_REPO/)
function getBasePath() {
  if (
    location.hostname === "127.0.0.1" ||
    location.hostname === "localhost" ||
    location.protocol === "file:"
  ) {
    return "./";
  }

  const parts = location.pathname.split("/").filter(Boolean);
  if (parts.length && parts[parts.length - 1].endsWith(".html")) parts.pop();

  return parts.length ? `/${parts[0]}/` : "/";
}

const BASE = getBasePath();
window.BASE = BASE;

function fixRelativePaths(container) {
  container.querySelectorAll("[src], [href]").forEach((el) => {
    const attr = el.hasAttribute("src") ? "src" : "href";
    const val = el.getAttribute(attr);
    if (!val) return;
    if (/^(https?:|data:|mailto:|tel:|#|\/)/i.test(val)) return;

    const cleaned = val.replace(/^(\.\/)+/, "").replace(/^(\.\.\/)+/, "");
    el.setAttribute(attr, `${BASE}${cleaned}`);
  });
}

async function loadInto(container, viewName) {
  const res = await fetch(`${BASE}pages/${viewName}.html`);
  if (!res.ok) throw new Error(`No pude cargar ${BASE}pages/${viewName}.html`);
  container.innerHTML = await res.text();
  fixRelativePaths(container);
}

async function navigate(viewName) {
  await loadInto(app, viewName);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  if (viewName === "portada" && window.initPortada) window.initPortada();
  if (viewName === "invitacion" && window.initInvitacion) window.initInvitacion();
}

window.navigate = navigate;
window.loadInto = loadInto;

document.addEventListener("DOMContentLoaded", () => {
  navigate("portada").catch(console.error);
});
