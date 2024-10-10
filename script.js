const produtosContainer = document.querySelector('#container-produtos')
const botaoProdutos = document.querySelector('#botao-produtos')
const clientesContainer = document.querySelector('#container-clientes')
const botaoClientes = document.querySelector('#botao-clientes')

function carregarProdutos() {
    fetch('./produtos.json')
        .then(response => response.json())
        .then(produtos => {
            
            produtos.map(produto => {
                const card = document.createElement('div')
                card.classList.add('card-produto')

                const info = document.createElement('div')

                const titulo = document.createElement('h3')
                titulo.textContent = produto.nome
                
                const img = document.createElement('img')
                img.src = produto.imagem;
                img.alt = produto.nome;

                const descricao = document.createElement('p')
                descricao.textContent = produto.descricao
                descricao.classList.add('descricao-produto')
                card.appendChild(img)
                info.appendChild(titulo)
                info.appendChild(descricao)
                card.appendChild(info)
                produtosContainer.appendChild(card)
            })
            quantidadeProdutos = produtos.length
            produtosContainer.createElement('style')
            produtosContainer.style.add('--quantidade-produtos', quantidadeProdutos)
        })
}

botaoProdutos.addEventListener('click', () => {
    produtosContainer.classList.toggle('active')})

carregarProdutos()

botaoClientes.addEventListener('click', () => {
    clientesContainer.classList.toggle('active')})
