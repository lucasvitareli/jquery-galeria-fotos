$(document).ready(function() {
    // Quando o botão dentro do header for clicado, o contúdo dentro da tag 'form' escorrega para baixo
    $('header button').click(function() {
        $('form').slideDown();
    }) 

    // Quando clicar no botao 'Cancelar', o conteúdo dentro da tag 'form' sobe de volta
    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    // Quando o formulário for submetido, previne a ação padrão (envio do formulário)
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaImagemURL = $('#endereco-url').val()
        const novoItem =$('<li style="display: none"></li>')
        $(`<img src="${novaImagemURL}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${novaImagemURL}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-url').val('')
    })
})



