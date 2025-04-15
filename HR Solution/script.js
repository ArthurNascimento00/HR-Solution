document.getElementById("contact-form").onsubmit = function(event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
    this.reset();
};