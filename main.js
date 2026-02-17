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
  // SLIDER
  // =========================
  const slider = document.querySelector(".slider");

  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScroll;
    const speed = 2.5;

    function startAutoScroll() {
      autoScroll = setInterval(() => {
        slider.scrollLeft += speed;
      }, 16);
    }

    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    startAutoScroll();

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      stopAutoScroll();
      startX = e.pageX;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      startAutoScroll();
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      startAutoScroll();
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const walk = (e.pageX - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener("touchstart", (e) => {
      stopAutoScroll();
      startX = e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", startAutoScroll);

    slider.addEventListener("touchmove", (e) => {
      const walk = (e.touches[0].pageX - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });
  }

}); // ← ESTE CIERRE FALTABA

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
