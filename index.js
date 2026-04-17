while(!nome){
    var nome = prompt("Qual seu nome?: ");
}
while(!Number(renda)){
    var renda = prompt("Qual sua renda?(digite um numero): ");
}
while(!Number(qnt_despesas)){
    var qnt_despesas = prompt("Qual a quantidade de despesa (1-5)?(digite um numero): ");
}

if (qnt_despesas < 1) qnt_despesas = 1;
if (qnt_despesas > 5) qnt_despesas = 5;

soma = 0
for(i = 0; i < qnt_despesas; i++){
    var despesa = prompt(`Qual o valor da despesa ${i}?: `);
    soma += despesa
}

sobra = renda - despesa
if (sobra < 0){
    alert("⚠️ Atenção: você gastou mais do que ganhou.")
}else{
    if(sobra >= renda*3/10){
        alert("✅ Ótimo: boa margem de sobra.")
    }else{
        alert("🙂 Ok: dá para melhorar a sobra.")
    }
}

alert(`Nome: ${nome} | Renda: ${renda} | Total despesas: ${soma} | Sobra: ${sobra}`)
console.log(`Nome: ${nome} | Renda: ${renda} | Total despesas: ${soma} | Sobra: ${sobra}`)