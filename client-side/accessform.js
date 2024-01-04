const buttonclicked = document.getElementById("addArtist");
const item1 = document.getElementById("item1-default");
const item2 = document.getElementById("item2-default");
const item3 = document.getElementById("item3-default");
const item6 = document.getElementById("item6-default");
const artist = document.getElementsByClassName("artist");
const toggleUPDOWNButton = document.getElementById("toggleUPDOWN");

buttonclicked.addEventListener("click", () => {
    const formcontainer = document.getElementById("form-container");
    const formcontainer2 = document.getElementById("form-container2");
    formcontainer2.style.display = "block";
    formcontainer.style.display = "block";
    item1.style.display = "none";
    item2.classList.toggle("hidden");
    item3.style.display="none";
    item6.style.display = "none";
    toggleUPDOWNButton.click();

    for(let i = 0; i < artist.length; i++) {
        artist[i].classList.toggle("hidden");
    }
});

const formbutton = document.getElementById("form-button");

formbutton.addEventListener("click", () => {
    const formcontainer = document.getElementById("form-container");
    const formcontainer2 = document.getElementById("form-container2");
    formcontainer.style.display = "none";
    formcontainer2.style.display = "none";
    item1.style.display = "flex";
    item2.classList.remove("hidden");
    item3.style.display="grid";
    item6.style.display = "block";

    for(let i = 0; i < artist.length; i++) {
        artist[i].classList.remove("hidden");
    }
})