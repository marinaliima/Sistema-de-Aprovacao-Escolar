let alunos = ["João", "Maria", "Pedro", "Ana"];
let notas = [[80, 70, 90], [90, 80, 100], [70, 70, 10], [100, 90, 95]];
let presenca = [[true, false, true, true], [true, false, true, false], [true, true, true, true], [true, true, true, false]];
let melhorMedia = 0;
let melhorAluno = "";

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

    if ((media >= 70) && (porcentagemPresenca[i] >= 75)){
        console.log("Aprovado(a)!");
    } else if ((media >= 50) && (porcentagemPresenca[i] >= 75)){
        console.log("Recuperação.");
    } else {
        console.log("Reprovado(a).");
    }
    console.log();

    if (media > melhorMedia){
        melhorMedia = media;
        melhorAluno = alunos[i];
    }

    if (i === (alunos.length) - 1){
        console.log("——————————————————————————————————————————————");
        console.log();
        console.log("O melhor desempenho foi de " + melhorAluno + ", com média " + melhorMedia + "!"); 
    }
}