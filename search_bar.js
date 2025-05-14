const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
	const filtre = searchInput.value.toLowerCase();
	const items = document.querySelectorAll('#pageList li');

	items.forEach(item => {
		const texte = item.textContent.toLowerCase();
		item.style.display = texte.includes(filtre) ? '' : 'none';
	});
});