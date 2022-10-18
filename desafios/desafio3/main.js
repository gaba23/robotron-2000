const lista = document.querySelector('.lista');
let listaMostrada = false;
lista.hidden = true;

document.querySelector('[data-controle]').addEventListener("click", () => {
    if(listaMostrada === false) {
        lista.hidden = false;
        listaMostrada = true;
    }
    else{
        lista.hidden = true;
        listaMostrada = false;
    }
})