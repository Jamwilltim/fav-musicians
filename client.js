const section = document.getElementById("artistsSec");
const artist = document.getElementById("artist")
const toggleButton = document.getElementById("toggleUPDOWN");
const containerf = document.getElementById("container-fluid") 

toggleButton.addEventListener("click", function() {
    section.classList.toggle("artist-hidden");
    artist.classList.toggle("artist-hidden");

    if (section.classList.contains("artist-hidden")) {
        containerf.style.backgroundPosition = "center";
        containerf.style.backgroundSize = "contain";
    } else {
        const artistsSecHeight = section.clientHeight;
        const actualHeight = window.innerHeight;
        const remainder = actualHeight - artistsSecHeight;
        containerf.style.backgroundSize = `auto ${remainder}px`;
    }
});