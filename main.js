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
  // AUDIO DE FONDO
  // =========================
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  if (audio) {
    audio.volume = 0.15;

    audio.play().catch(() => {
      document.addEventListener("click", () => {
        audio.play();
      }, { once: true });
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
      if (lista.classList.contains("max-h-48")) {
        lista.classList.remove("max-h-48");
        toggleBtn.textContent = "Ver menos ↑";
      } else {
        lista.classList.add("max-h-48");
        toggleBtn.textContent = "Ver más ↓";
      }
    });
  }

  // =========================
  // SLIDER DRAG + AUTO
  // =========================
  const slider = document.querySelector(".slider");

  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => isDown = false);
    slider.addEventListener("mouseup", () => isDown = false);

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch móvil
    slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Auto scroll
    setInterval(() => {
      slider.scrollLeft += 3;
    }, 20);
  }

});

// =========================
// FUNCIONES GLOBALES (MODALES)
// =========================

function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

function changeImage(imgId, src) {
  const img = document.getElementById(imgId);
  if (img) img.src = src;
}
