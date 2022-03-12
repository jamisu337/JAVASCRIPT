function carregar() {
    var texto = document.getElementById('texto')
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#64605d'
        texto.innerHTML = 'BOM DIA'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#e7d6aa'
        texto.innerHTML = 'BOA TARDE'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#162e46'
        texto.innerHTML = 'BOA NOITE'
    }
}
