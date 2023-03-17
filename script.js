function gerar() { 
var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

if (num.value.length == 0) {
    window.alert('Preencha o campo!')
    tab.innerHTML = ''
} else {
    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ''
    while(c <= 10) {
        var item = document.createElement('option')
        item.innerText = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}




}