/*
document.addEventListener('DOMContentLoaded', () => {
    // Recupera o carrinho do localStorage ou inicializa um carrinho vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Seleciona o elemento que exibe o total e o botão de finalizar a compra
    const totalElement = document.querySelector('.total h3');
    const finalizarBtn = document.querySelector('#finalizar-compra');

    // Função para adicionar um produto ao carrinho
    const adicionarProduto = (produto, preco) => {
        // Adiciona o produto ao carrinho
        carrinho.push({ produto, preco });
        // Atualiza o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        // Atualiza a exibição do carrinho
        atualizarCarrinho();
    };

    // Função para remover um produto do carrinho
    const removerProduto = (index) => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        // Remove o produto pelo índice
        carrinho.splice(index, 1);
        // Atualiza o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        // Atualiza a exibição do carrinho
        atualizarCarrinho();
    };

    // Função para atualizar a exibição do carrinho
    const atualizarCarrinho = () => {
        const carrinhoContainer = document.querySelector('.carrinho');
        carrinhoContainer.innerHTML = ''; // Limpa o carrinho exibido
        let total = 0;

        // Adiciona cada item do carrinho à interface
        carrinho.forEach((item, index) => {
            total += parseFloat(item.preco); // Calcula o total
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <p>${item.produto} - R$ ${item.preco}</p>
                <button onclick="removerProduto(${index})">Remover</button>
            `;
            carrinhoContainer.appendChild(itemElement);
        });

        // Atualiza o total exibido
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    };

    // Atualiza o carrinho ao carregar a página
    atualizarCarrinho();

    // Adiciona event listeners aos botões de adicionar produtos ao carrinho
    document.querySelectorAll('button[data-id]').forEach(button => {
        button.addEventListener('click', () => {
            const produto = button.getAttribute('data-id');
            const preco = button.getAttribute('data-preco');
            adicionarProduto(produto, preco);
        });
    });

    // Finaliza a compra e redireciona para a página de confirmação
    finalizarBtn.addEventListener('click', () => {
        if (carrinho.length > 0) {
            window.location.href = 'confirmacao.html';
        } else {
            alert('Seu carrinho está vazio!');
        }
    });
});

// Função para adicionar um serviço ao carrinho
function adicionarAoCarrinho(servico, tipoPet, preco) {
    // Recupera o carrinho do localStorage ou inicializa um carrinho vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o serviço selecionado ao carrinho
    carrinho.push({
        servico: servico,
        tipoPet: tipoPet,
        preco: preco
    });

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Exibe uma mensagem de confirmação
    alert("Serviço agendado e adicionado ao carrinho!");
}
*/


document.addEventListener('DOMContentLoaded', () => {
    // Função para atualizar a exibição do carrinho
    const atualizarCarrinho = () => {
        // Seleciona o container do carrinho
        const carrinhoContainer = document.querySelector('.carrinho');
        const totalElement = document.querySelector('.total h3');
        let total = 0;

        // Recupera o carrinho do localStorage ou inicializa um carrinho vazio
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        // Limpa o carrinho exibido
        carrinhoContainer.innerHTML = '';

        // Adiciona cada item do carrinho à interface
        carrinho.forEach((item, index) => {
            total += parseFloat(item.preco); // Calcula o total
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <p>${item.produtoNome} - R$ ${item.preco}</p>
                <button class="remover" data-index="${index}">Remover</button>
            `;
            carrinhoContainer.appendChild(itemElement);
        });

        // Atualiza o total exibido
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

        // Adiciona os listeners para o botão de remoção
        document.querySelectorAll('.remover').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removerProduto(index);
            });
        });
    };

    // Função para remover um produto do carrinho
    const removerProduto = (index) => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        // Remove o produto pelo índice
        carrinho.splice(index, 1);
        // Atualiza o carrinho no localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        // Atualiza a exibição do carrinho
        atualizarCarrinho();
    };

    // Atualiza o carrinho ao carregar a página
    atualizarCarrinho();

    // Finaliza a compra e redireciona para a página de confirmação
    const finalizarBtn = document.querySelector('#finalizar-compra');
    finalizarBtn.addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        if (carrinho.length > 0) {
            window.location.href = 'confirmacao.html';
        } else {
            alert('Seu carrinho está vazio!');
        }
    });

    // Direciona para pagina de produtos
    const continuarBtm = document.querySelector('#continuar-compra');
    continuarBtm.addEventListener('click', () => {
        window.location.href = 'produtos.html'; // Corrigido para o botão de continuar compra
    });
});
