let alunos = ["João", "Maria", "Pedro", "Ana"];
let notas = [[8, 7, 9], [9, 8, 10], [7, 6, 8], [10, 9, 9]];
let presenca = [true, false, true, true];

for (let i = 0; i < alunos.length; i++) {
    let media = (notas[i][1] + notas[i][2] + notas[i][3])/3;
};

//for (i = 0; i < alunos.length; i++) {
//    console.log(alunos[i] + ": " + notas[i] + " - Presença: " + presenca[i]);
//};