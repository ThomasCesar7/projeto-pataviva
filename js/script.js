const velocidade = 50;

(() => {

    const textos = document.querySelectorAll(".texto-animado");
    textos.forEach((elemento) => {

        const texto = elemento.textContent;
        let i = 0;
        let timeout;

        const digitar = () => {
            clearTimeout(timeout);

            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                timeout = setTimeout(digitar, velocidade);
            }
        };

        const apagar = () => {
            clearTimeout(timeout);

            if (i > 0) {
                elemento.textContent = texto.substring(0, i - 1);
                i--;
                timeout = setTimeout(apagar, velocidade);
            }
        };

        elemento.textContent = "";
        const observer = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    digitar();
                } else {
                    apagar();
                }
            });

        }, {
            threshold: 0.2
        });

        observer.observe(elemento);
    });
})();
