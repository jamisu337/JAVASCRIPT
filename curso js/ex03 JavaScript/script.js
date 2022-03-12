
function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passos = document.getElementById('txtp')
    var res = document.getElementById("contagem")

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert ('[ERRO] confira os dados')
    } else if (fim.value.length < inicio.value.length) {
        res.innerHTML = "contando:"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0){
            window.alert('passo invalido! considerando passo = 1')
            p = 1
        }
        for(var c = i ; c >= f ; c = c - p){
            res.innerHTML += `${c} -> `
        }
    } else {
        res.innerHTML = "contando:"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        if (p <= 0){
            window.alert('passo invalido! considerando passo = 1')
            p = 1
        }
        for(var c = i ; c <= f ; c += p){
            res.innerHTML += `${c} -> `
        }
    }
}