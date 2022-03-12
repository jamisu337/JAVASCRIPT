
function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res')
    var fot = document.getElementById('foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade<10){
                //ciança
                fot.innerHTML = "fotinha da criança [M]"
            }else if (idade < 21){
                //jovem
                fot.innerHTML = "fotinha do adolecente[M]"
            }else if (idade < 50){
                //adulto
                fot.innerHTML = "fotinha do adulto[M]"
            }else {
                //idoso
                fot.innerHTML = "fotinha do idoso[M]"
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade<10){
                //ciança
                fot.innerHTML = "fotinha da criança[F]"
            }else if (idade < 21){
                //jovem
                fot.innerHTML = "fotinha da adolecente[F]"
            }else if (idade < 50){
                //adulto
                fot.innerHTML = "fotinha do adulto[F]"
            }else {
                //idoso
                fot.innerHTML = "fotinha da idoso[F]"
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        /*res.appendChild(img)
        img.setAttribute()*/
    }
}
