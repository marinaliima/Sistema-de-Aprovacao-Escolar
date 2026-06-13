let alunos = ["João", "Maria", "Pedro", "Ana"];
let notas = [[8, 7, 9], [9, 8, 10], [7, 7.5, 8], [10, 9, 9.5]];
let presenca = [[true, false, true, true], [true, false, true, false], [true, true, true, true], [true, true, true, false]];

for (i = 0; i < alunos.length; i++) {

    let somas = [0, 0, 0, 0];
    for (i2 = 0; i2 < notas[i].length; i2++){
        //i2: índice de uma array dentro de outra array
        somas[i] += notas[i][i2];
    }

    let media = somas[i] / notas[i].length;
    
    let porcentagemPresenca = [0, 0, 0, 0];
    for (i2 = 0; i2 < presenca[i].length; i2++){
        if (presenca[i][i2] === true){
            porcentagemPresenca[i] += (100 / presenca[i].length);
            //porcentagem: valor em porcentagem de cada presença somado
        }
    }

    console.log("A média de " + alunos[i] + " foi: " + media + ".");
    console.log("Ele(a) obteve " + porcentagemPresenca[i] + "% de presença.");
    if ((media >= 6) && (porcentagemPresenca[i] >= 75)){
        console.log("Aprovado(a)!");
    } else {
        console.log("Reprovado.");
    }
    console.log();
}