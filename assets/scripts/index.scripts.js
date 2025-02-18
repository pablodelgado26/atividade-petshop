const public_key = "cu1qq5jEzvnY76lkm";
const secret_key = "fPJnru6zG2_uQvZPdWD42";

(function () {
    emailjs.init(public_key)
})();

document
    .getElementById("contatoForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        if (!nome || !email || !mensagem) {
            alert("Por favor, Preencha todos os campos!");
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem,
        };

        const serviceID = "service_3ir4aos";
        const templateID = "template_8iomafg";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mensagem").value = "";
                console.log(res);
                alert("Mensagem enviada com sucesso!");
            })
            .catch((err) => console.log(err));
    });