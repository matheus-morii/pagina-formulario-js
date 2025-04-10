const btnEnviar = document.getElementById("btn-enviar")
const campoRequired = document.querySelectorAll(".campo-required")
const inputText = document.querySelectorAll(".input")

inputText.forEach(function (input, index) {
    btnEnviar.addEventListener("click", function (evento) {
        evento.preventDefault()
        console.log(input.value);

        if (input.value === "") {
            input.classList.add("required");
            input.classList.remove("valid");
            campoRequired[index].classList.add("required")
        } else {
            input.classList.remove("required")
            input.classList.add("valid")
            campoRequired[index].classList.remove("required")

        }
    })
})