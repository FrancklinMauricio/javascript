function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = 'manha-menor.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18) {
        img.src = 'tarde-menor.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite-menor.png'
        document.body.style.background = '#515154'
    }
}