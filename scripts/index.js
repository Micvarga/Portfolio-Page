function closeOffcanvas() {
    const element1 = document.getElementById("navButton");
    element1.classList.remove("offcanvas");
    const element2 = document.getElementById("offcanvasNavbar");
    element2.classList.remove("show");
    document.getElementById("navButton").setAttribute('aria-expanded', false);
}