window.addEventListener('scroll', function() {
    let header = document.querySelector(".encabezado");
    header.classList.toggle("abajo", window.scrollY > 0);
  });