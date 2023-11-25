/*const h1selecionado = document.querySelector("h1");

h1selecionado.textContent = "Aula sobre Dom";
h1selecionado.innerText = new Date().toLocaleString("pt-BR");

console.log(h1selecionado);

const circulo = document.getElementById("circulo");

function mudarParaDia() {
    circulo.style.background = "yellow";
}

function mudarParaNoite() {
    circulo.style.background = "grey";
}

function mudar() {
    circulo.classList.toggle("noite");
}

const botoes = document.getElementsByTagName("button");

console.log(botoes);

h1selecionado.innerText = "Dom";
h1selecionado.style.background = "black";
h1selecionado.style.color = "blue";*/

const lista = document.querySelector("ul");

/*for(let i = 0; i < 4; i++)*/ 
    const fruta = prompt("digite uma fruta");

    /*lista.innerHTML = lista.innerHTML + "<li>" + fruta + "</li>";*/
    lista.innerHTML += lista.innerHTML + `<li> ${fruta} </li>`;