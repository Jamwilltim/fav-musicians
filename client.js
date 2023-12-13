const artistsSection = document.getElementById("artistsSec");
const toggleButton = document.getElementById("toggleUPDOWN");

toggleButton.addEventListener("click", () => {
	artistsSection.classList.toggle("artist-hidden");
	toggleButton.classList.toggle("arrow-change");
});

