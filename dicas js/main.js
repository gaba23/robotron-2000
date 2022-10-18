let livro = {
titulo: "Cangaceiro JavaScript",
autor: "Flávio Almeida",
genero: "Front-ed",
editora: "Casa do código",
preco: 31.92
};

console.log(livro);

var livros = [
    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:31.92
},
    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:21.89},

    {titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco:31.92},
];

console.log(livros);

console.log(livro.preco);
console.log(livros[0]["autor"], livros[0].autor);

livros[1].genero = "UX e Design";
//alterar o conteudo
console.log(livros)
livros[0].estoque = "11 unidades";
//adicionar um conteudo

delete livros[1].autor;
// deleta um item
delete livros[1];
//deletar o índice completamente

console.log(this === window); // true
// O window representa uma janela que contém o elemento DOM da página acessada. No objeto window é definida todas variáveis globais e funções que são executadas em um navegador.

console.log(this)

var livros = {
    titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92,
    chamaLivro: function() {
        return this.autor;
    }
}
console.log('O autor do livro se chama ' + livros.chamaLivro())

var livros = {
    titulo: "Cangaceiro JavaScript",  
    autor: "Flávio Almeida", 
    genero: "Front-end", 
    editora: "Casa do código", 
    preco: 31.92,
    alteraAutor: function() {
        return this.autor = "Pedro Marins";
    },
}

console.log('É possível alterar o nome do autor para ' + livros.alteraAutor())