function Contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = `Impossivel contar`
        //window.alert('ERRO')
    } else {
        res.innerHTML = `Contando...`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (i < f) {
        for (c = i; c <= f;c += p) {
            res.innerHTML += `${c} `
        }
    } else {
        for (c = i; c >= f;c -= p) {
            res.innerHTML += `${c} `
        }
    }
    }
}
