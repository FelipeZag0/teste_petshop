// Adiciona um listener ao botão de agendamento para capturar o clique
document.getElementById('finalizar-agendamento').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão
    
    // Exibe a mensagem de serviço agendado
    alert("Serviço agendado");

    // Redireciona para a página "index.html" após o alerta
    window.location.href = './index.html';
});
