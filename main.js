document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // SCROLL SUAVE
  // =========================
  const btnImpacto = document.getElementById("btn-impacto");

  if (btnImpacto) {
    btnImpacto.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.getElementById("impacto");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  }

  // =========================
  // AUDIO
  // =========================
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  if (audio) {
    audio.volume = 0.15;

    audio.play().catch(() => {
      document.addEventListener("click", () => audio.play(), { once: true });
    });

    if (musicBtn) {
      musicBtn.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          musicBtn.textContent = "🔇 Silenciar";
        } else {
          audio.pause();
          musicBtn.textContent = "🔊 Música";
        }
      });
    }
  }

  // =========================
  // LISTA COLAPSABLE
  // =========================
  const lista = document.getElementById("lista-nombres");
  const toggleBtn = document.getElementById("toggle-nombres");

  if (lista && toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      lista.classList.toggle("max-h-48");
      toggleBtn.textContent =
        lista.classList.contains("max-h-48") ? "Ver más ↓" : "Ver menos ↑";
    });
  }

// =========================
// SLIDER (AUTO + LOOP)
// =========================

const slider = document.querySelector(".slider");

if (slider) {
  let startX;
  let scrollLeft;
 let animationId;
const speed = 2;

function autoScroll() {
  slider.scrollLeft += speed;

  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
    slider.scrollLeft = 0;
  }

  animationId = requestAnimationFrame(autoScroll);
}

function startAutoScroll() {
  animationId = requestAnimationFrame(autoScroll);
}

function stopAutoScroll() {
  cancelAnimationFrame(animationId);
}

  startAutoScroll();

  // 👉 arrastrar con mouse
  slider.addEventListener("mousedown", (e) => {
    stopAutoScroll();
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mousemove", (e) => {
    if (e.buttons !== 1) return;
    const walk = (e.pageX - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("mouseup", startAutoScroll);
  slider.addEventListener("mouseleave", startAutoScroll);

  // 👉 arrastrar con dedo
  slider.addEventListener("touchstart", (e) => {
    stopAutoScroll();
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("touchmove", (e) => {
    const walk = (e.touches[0].pageX - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener("touchend", startAutoScroll);
}


// =========================
// GALERÍA — MODAL IMAGEN
// =========================

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.getElementById("modal-close");

document.querySelectorAll(".slide-track img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

});
// =========================
// FUNCIONES GLOBALES
// =========================

function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function changeImage(imgId, src) {
  const img = document.getElementById(imgId);
  if (img) img.src = src;
}

// =========================
// ABRIR MODAL
// =========================
function openModal(nombre) {
  const modal = document.getElementById(`modal-${nombre}`);
  if (!modal) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Bloquear scroll del body
  document.body.classList.add("overflow-hidden");
}

// =========================
// CERRAR MODAL
// =========================
function closeModal(nombre) {
  const modal = document.getElementById(`modal-${nombre}`);
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Restaurar scroll
  document.body.classList.remove("overflow-hidden");
}

// =========================
// CAMBIAR IMAGEN
// =========================
function changeImage(id, src) {
  const img = document.getElementById(id);
  if (img) {
    img.src = src;
  }
}
