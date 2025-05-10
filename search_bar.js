const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
	const filtre = searchInput.value.toLowerCase();
	const items = document.querySelectorAll('#pageList li');

	items.forEach(item => {
		const texte = item.textContent.toLowerCase();
		item.style.display = texte.includes(filtre) ? '' : 'none';
	});
});

//function search(event) {
	//event.preventDefault(); // prevent reloading
	//const term = document.getElementById('searchInput').value;
	//alert("Search function not implemented.\nYou typed: " + term);
//}

//document.addEventListener('DOMContentLoaded', () => {
	//alert('Welcome to my site!');
//});

//<button onclick="window.location.href='index.html';">
    //Home page
//</button>