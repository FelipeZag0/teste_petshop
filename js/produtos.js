document.querySelectorAll('.carrossel').forEach(carrossel => {
    const imagens = carrossel.querySelectorAll('.carrossel-imagens img');
    let currentImageIndex = 0;

    const prevButton = carrossel.querySelector('.carrossel-prev');
    const nextButton = carrossel.querySelector('.carrossel-next');

    // Função para atualizar o carrossel
    function updateCarrossel() {
        imagens.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    // Evento do botão "Anterior"
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imagens.length - 1;
        updateCarrossel();
    });

    // Evento do botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < imagens.length - 1) ? currentImageIndex + 1 : 0;
        updateCarrossel();
    });

    // Inicia o carrossel
    updateCarrossel();

    // Navegação automática
    setInterval(function () {
        nextButton.click();  // Faz a imagem avançar automaticamente
    }, 5000);  // Troca de imagem a cada 5 segundos
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões "Adicionar ao Carrinho"
    document.querySelectorAll('button[data-id]').forEach(button => {
        button.addEventListener('click', () => {
            // Recupera o produto e o preço dos atributos data
            const produtoId = button.getAttribute('data-id');
            const preco = button.getAttribute('data-preco');
            const produtoNome = button.parentElement.querySelector('h3').innerText;

            // Recupera o carrinho do localStorage ou inicializa um carrinho vazio
            let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

            // Adiciona o produto ao carrinho
            carrinho.push({ produtoId, produtoNome, preco });

            // Atualiza o carrinho no localStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            // Exibe uma mensagem de confirmação
            alert(`${produtoNome} adicionado ao carrinho!`);
        });
    });
});

// Função para agendar serviço de banho
document.getElementById('agendar-banho').addEventListener('click', function () {
    var servicoBanho = document.getElementById('servico-banho').value; // Obtém o tipo de serviço de banho selecionado
    if (servicoBanho) { // Verifica se o tipo de serviço foi selecionado
        window.location.href = 'agendamento.html'; // Redireciona para a página de agendamento
    } else {
        alert('Por favor, selecione o tipo de serviço para o banho.'); // Exibe alerta se o tipo de serviço não foi selecionado
    }
});

// Função para agendar serviço de tosa
document.getElementById('agendar-tosa').addEventListener('click', function () {
    var servicoTosa = document.getElementById('servico-tosa').value; // Obtém o tipo de serviço de tosa selecionado
    if (servicoTosa) { // Verifica se o tipo de serviço foi selecionado
        window.location.href = 'agendamento.html'; // Redireciona para a página de agendamento
    } else {
        alert('Por favor, selecione o tipo de serviço para a tosa.'); // Exibe alerta se o tipo de serviço não foi selecionado
    }
});