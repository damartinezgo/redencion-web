
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
