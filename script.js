/* ==========================================================
   CONFIGURACIÓN PERSONAL — edita solo este bloque
   ========================================================== */
const CONFIG = {
  nombre: "Jose Álvarez",
  iniciales: "JA",
  rol: "Desarrollador Fullstack",
  disponibilidad: "Disponible para nuevos proyectos",
  foto: "img/perfil.jpg",          // Pon tu foto en la carpeta img/ con este nombre
  email: "tu@correo.com",
  whatsapp: "https://wa.me/520000000000", // Tu número con código de país, sin + ni espacios
  github: "https://github.com/Vazter09",
  linkedin: "https://linkedin.com/in/tu-usuario",
};

/* ==========================================================
   LÓGICA — no hace falta tocar nada de aquí abajo
   ========================================================== */
document.querySelectorAll("[data-campo]").forEach((el) => {
  const campo = el.dataset.campo;
  const valor = CONFIG[campo];
  if (valor === undefined) return;

  if (el.tagName === "IMG") {
    el.src = valor;
    el.addEventListener("error", () => el.classList.add("is-hidden"));
  } else if (el.tagName === "A") {
    const prefijo = campo === "email" ? "mailto:" : "";
    el.href = prefijo + valor;
  } else {
    el.textContent = valor;
  }
});

document.querySelectorAll(".avatar-fallback").forEach((el) => {
  el.textContent = CONFIG.iniciales;
});

document.getElementById("anio").textContent = new Date().getFullYear();
