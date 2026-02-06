
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




