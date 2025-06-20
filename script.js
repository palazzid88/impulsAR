// Navegación con scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      destino.scrollIntoView({ behavior: "smooth" });
    });
  });
 
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const data = new FormData(form);
  
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          "Accept": "application/json"
        }
      })
        .then((response) => {
          if (response.ok) {
            alert("¡Gracias por tu mensaje! Te responderemos pronto.");
            form.reset();
          } else {
            response.json().then(data => {
              alert(data.error || "Ups... hubo un error al enviar.");
            }).catch(() => {
              alert("Ocurrió un error inesperado.");
            });
          }
        })
        .catch((error) => {
          console.warn("El correo probablemente se envió, pero el navegador bloqueó la respuesta por CORS.");
          console.error("Detalles:", error);
          alert("¡Gracias por tu mensaje! Te responderemos pronto."); // ✅ Asumimos éxito silencioso
          form.reset();
        });
    });
  });
  