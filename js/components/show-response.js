
function response() {
    let from = document.getElementById("msg-form");
    let response = document.getElementById("response");

    from.style.display = "none";
    response.style.display = "block";
    response.innerHTML = "Mensagem enviada com sucesso!!!"
};