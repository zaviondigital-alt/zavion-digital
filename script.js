// Zavion Digital

console.log("Zavion Digital website loaded!");


// Add a small scroll effect to the header

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }

});