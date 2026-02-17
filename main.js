document.addEventListener("DOMContentLoaded", () => {



// Scroll suave al hacer clic en VER IMPACTO SOCIAL
document.addEventListener('DOMContentLoaded', function() {
	const btnImpacto = document.getElementById('btn-impacto');
	if (btnImpacto) {
		btnImpacto.addEventListener('click', function(e) {
			e.preventDefault();
			const section = document.getElementById('impacto');
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
});


// =========================
// MODALES PILARES
// =========================

function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function changeImage(imgId, src) {
  const img = document.getElementById(imgId);
  if (img) {
    img.src = src;
  }
}
	

document.addEventListener("DOMContentLoaded", () => {

  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (!audio) return;

  audio.volume = 0.15;

  // 👉 Intentar reproducir automáticamente
  audio.play().catch(() => {
    console.log("Autoplay bloqueado. Esperando interacción...");

    // 👉 Reproducir en el primer clic del usuario
    document.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });

  // 👉 Botón de música
  if (btn) {
    btn.addEventListener("click", () => {

      if (audio.paused) {
        audio.play();
        btn.textContent = "🔇 Silenciar";
      } else {
        audio.pause();
        btn.textContent = "🔊 Música";
      }

    });
  }

});

document.addEventListener("DOMContentLoaded", () => {

  const lista = document.getElementById("lista-nombres");
  const btn = document.getElementById("toggle-nombres");

  if (!lista || !btn) return;

  btn.addEventListener("click", () => {

    if (lista.classList.contains("max-h-48")) {

      lista.classList.remove("max-h-48");
      btn.textContent = "Ver menos ↑";

    } else {

      lista.classList.add("max-h-48");
      btn.textContent = "Ver más ↓";

    }

  });

});



const slider = document.querySelector(".slider");
  const track = document.querySelector(".slide-track");

  let isDragging = false;
  let startX;
  let scrollLeft;

  /* ===== PAUSAR ANIMACIÓN AL ARRASTRAR ===== */
  slider.addEventListener("mousedown", () => {
    track.style.animationPlayState = "paused";
    isDragging = true;
  });

  slider.addEventListener("mouseup", () => {
    track.style.animationPlayState = "running";
    isDragging = false;
  });

  slider.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
    isDragging = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    slider.scrollLeft -= e.movementX;
  });

  /* ===== TOUCH ===== */
  slider.addEventListener("touchstart", () => {
    track.style.animationPlayState = "paused";
  });

  slider.addEventListener("touchend", () => {
    track.style.animationPlayState = "running";
  });

  slider.addEventListener("touchmove", (e) => {
    slider.scrollLeft -= e.touches[0].movementX || 2;
  });

  /* ===== MODAL ===== */
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".slide-track img").forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
});
