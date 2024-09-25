// Função para validar o formato do email
function validarEmail(email) {
    // Expressão regular para validar o formato do email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmail.test(email);
}

// Função para validar se a senha contém apenas números
function validarSenha(senha) {
    // Expressão regular para validar que a senha contenha apenas números
    const regexSenha = /^[0-9]+$/;
    return regexSenha.test(senha);
}

// Evento de envio do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para validação
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('error-message');
    
    // Verificar se o email está no formato correto
    if (!validarEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        return;
    }
    
    // Verificar se a senha contém apenas números
    if (!validarSenha(senha)) {
        errorMessage.textContent = 'A senha deve conter apenas números.';
        return;
    }

    // Se tudo estiver correto, o formulário é enviado (ou outras ações podem ser definidas aqui)
    errorMessage.textContent = ''; // Limpa a mensagem de erro
    alert('Login efetuado com sucesso!');
    // Aqui você pode redirecionar o usuário ou enviar o formulário conforme necessário
});

// Redirecionar para a página de cadastro ao clicar no botão "Cadastre-se agora mesmo!"
document.getElementById('cadastroBtn').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});
