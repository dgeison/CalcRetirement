const nome = "Silvana";
const sexo = "F";
const idade = 72;
const contribuicao = 20;

/* A soma da idade e do tempo de contribuição deve ser igual a 85 anos para as mulheres e a 95 anos para os homens. Para efeito de carência, o trabalhador deve comprovar que trabalhou efetivamente 180 meses. Também não há idade mínima. O tempo total de contribuição deve ser 35 anos para homens, e 30 anos para mulheres. */

// Condição para aposentadoria
const calculoContribuicao = idade + contribuicao

// Método 1
if (sexo == "F"){
    if (contribuicao >= 30 && calculoContribuicao >= 85){
        console.log(`A ${nome} poderá se aposentar`)
    } else{
        console.log(`${nome} Não tem tempo!`)
    }
    
} else{
   if (sexo == "M" ){
        if(contribuicao >= 35 && calculoContribuicao >= 95){
            console.log(`A ${nome} poderá se aposentar`)
        } else{
            console.log(`A ${nome} Não tem tempo`)
        }
    }
}

console.log("**--------------------------**")
console.log("**--------------------------**")
console.log("**--------------------------**")

// Método 2 -> essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}