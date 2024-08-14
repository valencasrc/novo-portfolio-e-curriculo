$(document).ready(function () {
    let texts = ["Olá, me chamo Lucas Valença", "Sou Desenvolvedor Fullstack", "Tenho 29 anos"];
    let count = 0;

    // Animação de texto no cabeçalho
    setInterval(function () {
        $("#header-animation").fadeOut(500, function () {
            $(this).text(texts[count]).fadeIn(500);
        });
        count = (count + 1) % texts.length;
    }, 3000);

    // Alternância de seções
    $('.menu-item').on('click', function () {
        let target = $(this).data('target');
        $('.content-section').hide();
        $('#' + target).fadeIn(500);

        // Fechar o menu lateral no mobile após selecionar uma seção
        if ($(window).width() <= 768) {
            $('.sidebar').removeClass('active');
        }
    });

    // Mostrar a primeira seção por padrão
    $('#sobremim').show();

    // Alternância do menu lateral no mobile
    $('.menu-toggle').on('click', function() {
        $('.sidebar').toggleClass('active');
    });
});
