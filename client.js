const artistsSection = document.getElementById("artistsSec");
const toggleButton = document.getElementById("toggleUPDOWN");
const content = document.getElementById("content");


toggleButton.addEventListener("click", () => {
	artistsSection.classList.toggle("artist-hidden");
	toggleButton.classList.toggle("arrow-change");
	content.classList.toggle("content-change");
});