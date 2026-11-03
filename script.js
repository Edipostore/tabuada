const formulario = document.querySelector("#form-tabuada");
const campoNumero = document.querySelector("#numero");
const mensagem = document.querySelector("#mensagem");
const resultado = document.querySelector("#resultado");
const tituloResultado = document.querySelector("#titulo-resultado");
const listaTabuada = document.querySelector("#lista-tabuada");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const numero = campoNumero.valueAsNumber;
    if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
        mensagem.textContent = "Digite um número inteiro entre 1 e 10 para continuar.";
        campoNumero.setAttribute("aria-invalid", "true");
        resultado.hidden = true;
        listaTabuada.replaceChildren();
        campoNumero.focus();
        return;
    }

    mensagem.textContent = "";
    campoNumero.removeAttribute("aria-invalid");
    tituloResultado.textContent = `Tabuada do ${numero}`;
    listaTabuada.replaceChildren();

    for (let multiplicador = 1; multiplicador <= 10; multiplicador += 1) {
        const item = document.createElement("li");
        const operacao = document.createElement("span");
        const produto = document.createElement("strong");

        operacao.textContent = `${numero} × ${multiplicador}`;
        produto.textContent = String(numero * multiplicador);
        item.append(operacao, produto);
        listaTabuada.appendChild(item);
    }

    resultado.hidden = false;
});

campoNumero.addEventListener("input", () => {
    mensagem.textContent = "";
    campoNumero.removeAttribute("aria-invalid");
});
