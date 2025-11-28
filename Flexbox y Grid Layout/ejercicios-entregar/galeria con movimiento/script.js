// Obtener elementos del DOM
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.getElementsByClassName("close")[0];
const galleryItems = document.querySelectorAll(".gallery-item img");

// Añadir evento click a cada imagen de la galería
galleryItems.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex"; // Usamos flex para centrar
        modalImg.src = this.src;
    });
});

// Añadir evento click al botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal si se hace click fuera de la imagen
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
