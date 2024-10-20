// Script para lidar com o envio do formulário
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Enviado com sucesso!"); // Exibe um alerta
    window.location.href = "/"; // Redireciona para a página inicial
});

$(document).ready(function () {
    // Função para ocultar a sidebar e mostrar o conteúdo clicado


    if ($(window).width() <= 768) {
        $('.sidebar').addClass('hidden'); // Oculta a sidebar no mobile
        $('.main-content').removeClass('hidden').show(); // Mostra o conteúdo principal
        $('.menuButton').show(); // Mostra o botão de voltar
    }

    // Lógica para o botão de voltar
    $('.menuButton').click(function () {
        if ($(window).width() <= 768) {
            $('.sidebar').removeClass('hidden'); // Mostra a sidebar novamente
            $('.main-content').hide(); // Oculta o conteúdo principal
            $('.menuButton').hide(); // Oculta o botão de voltar
        }
    });

    // Garante que o conteúdo principal permaneça visível ao carregar a página em desktop
    if ($(window).width() > 768) {
        $('.main-content').show(); // Mostra o conteúdo principal em dispositivos maiores
    }
});
