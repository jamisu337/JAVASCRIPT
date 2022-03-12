function calcular(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltabe')
    if (num.value.length == 0){
        window.alert('por favor, digite um numero')
    }else {
        var n = Number(num.value)
        tab.innerHTML = '' //perguntat a fla se ele sabe pq n era pra ser seltabe aki
        for(var c=1;c<=10;c++){
            var item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}