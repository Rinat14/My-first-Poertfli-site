const lightModeBtn = document.querySelector('.light-mode-button__btn');

(function() {
	lightModeBtn.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode');
		lightModeBtn.classList.toggle('active');
		lightModeBtn.parentElement.classList.toggle('active');
	});
})();