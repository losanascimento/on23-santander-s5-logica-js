let primeiranota=+ prompt ("Informe a primeira nota:");
let segundanota=+ prompt ("Informe a segunda nota:");
let terceiranota=+ prompt ("Informe a terceira nota:");

let media= ((primeiranota + segundanota + terceiranota)/3);

if (media >= 7) {
    alert ("Parabéns! Você está aprovada(o)")
} else if (media >= 5) {
    alert ("Aluna(o) em recuperação")
}
else {
    alert ("Aluna(o) reprovada(o)")
}
