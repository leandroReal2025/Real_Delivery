const cont_prod = document.getElementById('container-produtos');

const produtos = [
    {
        img: "../img/prog.png",
        nome: "Progressiva Vegetal Havana - 500 ML",
        desc: "Alinha os fios, reduz o frizz e proporciona brilho intenso com efeito duradouro",
        link: "https://entrega.logzz.com.br/pay/mem37nr45/progcreme150"
    }
];

produtos.forEach((element) => {
    let novoLink = document.createElement("a");
    novoLink.target = "blank";
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
