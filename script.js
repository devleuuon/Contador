function contar () {
var home = window.document.getElementById('inicio')
var end = window.document.getElementById('fim')
var pass = window.document.getElementById('passo')
var res = window.document.getElementById('msg')

if (home.value.length === 0 || end.value.length === 0 || pass.value.length === 0) { //.length não executa campo em limpo.
window.alert('Erro! Complete todos os dados!')
} else { //início do else.
    res.innerHTML = 'Contando...'

var h = Number(home.value) //convertendo string em number.
var e = Number(end.value)
var p = Number(pass.value)

for (let c = h; c <= e; c += p){ //=+ concatenação com pass.
res.innerHTML += `${c} \u{1F449}` //+= concatenação com linha 10.
} // U+1F449 original do site de emoji, tem que mudar p js.
} // final do else.
res.innerHTML += `\u{1F3C1}` //EMOJI FINAL.
}
