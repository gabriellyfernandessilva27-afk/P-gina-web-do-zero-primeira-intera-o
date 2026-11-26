
// ESPERAR O HTML CARREGAR
document.addEventListener("DOMContentLoaded", function () {

    // BOTÕES DE CURTIDA
    const artigos = document.querySelectorAll("article");

    artigos.forEach((artigo, indice) => {

        const botoes = artigo.querySelectorAll(
            ".botoes-container button"
        );

        botoes.forEach((botao, numero) => {

            const chave = `curtida-${indice}-${numero}`;

            // Recuperar curtidas salvas
            let curtidas = Number(localStorage.getItem(chave)) || 0;

            // Recuperar se o usuário já curtiu
            const jaCurtiu = localStorage.getItem(chave + "-ativo") === "true";

            const contador = botao.querySelector("span");

            if (contador) {
                contador.textContent = curtidas;
            }

            if (jaCurtiu) {
                botao.classList.add("curtiu");
            }

            // AÇÃO DO BOTÃO
            botao.addEventListener("click", function () {

                let ativo = localStorage.getItem(chave + "-ativo") === "true";

                if (ativo) {
                    curtidas = Math.max(0, curtidas - 1);
                    ativo = false;
                    botao.classList.remove("curtiu");
                } else {
                    curtidas++;
                    ativo = true;
                    botao.classList.add("curtiu");
                }

                localStorage.setItem(chave, curtidas);
                localStorage.setItem(chave + "-ativo", ativo);

                if (contador) {
                    contador.textContent = curtidas;
                }

            });

        });

    });


    // MODO CLARO E ESCURO
    const botaoTema = document.getElementById("theme-toggle");

    // Recuperar tema salvo
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");
    }

    // Alternar tema
    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("tema", "escuro");
        } else {
            localStorage.setItem("tema", "claro");
        }

    });

});
