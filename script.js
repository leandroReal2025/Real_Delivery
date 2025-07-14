const cont_prod = document.getElementById('container-produtos');

const produtos = [
    {
        img: "./img/prog.png",
        nome: "Progressiva Vegetal Havana - 500 ML",
        desc: "Alinha os fios, reduz o frizz e proporciona brilho intenso com efeito duradouro",
        link: "https://entrega.logzz.com.br/pay/mem37nr45/progcreme150"
    },
    {
        img: "./img/relogioD20.png",
        nome: "Novo Smartwatch D20",
        desc: "Um dispositivo inteligente que combina, estilo tecnologia e saúde, com alta definição você pode visualizar suas notificações, chamadas e mensagens com clareza incrível mesmo sob a luz do sul",
        link: "https://entrega.logzz.com.br/pay/mem5mn487/1-unidade-relogio-smart-oferta-4"
    }
];

produtos.forEach((element) => {
    let novoLink = document.createElement("a");
    novoLink.target = "_blank";
    novoLink.classList.add("container-links");

    novoLink.innerHTML = `
        <img src=${element.img} alt="imagem ${element.nome}">
        <div class="info-produto">
            <span class="titulo-info">${element.nome}</span>
            <span class="desc-info">${element.desc}</span>
        </div>`;
    novoLink.href = element.link;
    cont_prod.appendChild(novoLink);
});
