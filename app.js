/****************************************************************************************************
 *  Objetivo: Ciar uma calculadora
 *  Data: 16/08/2023
 *  Autor: Carlos
 *  Versão: 1.0
 ****************************************************************************************************/

var readline = require('readline');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 })
 
 entradaDados.question('Qual a primeiro número? ', function(num1){
    let valor1 = num1.replace(',','.');

    entradaDados.question('Qual operação deseja realizar? (+, -, *, /)   ', function(operador){
        let oper = operador;

        entradaDados.question('Qual a segundo número? ', function(num2){
            let valor2 = num2.replace(',','.');

            if(valor1 == ' ' || valor2 == ' '){
                console.log('ERROR: Todas as notas devem ser preenchidas')
                entradaDados.close();
            }else if(isNaN(valor1) || isNaN(valor2)){
                console.log('ERROR: Todas as notas devem ser preenchidas somente com números')
                entradaDados.close();
            }else if(valor2 == 0){
                console.log('ERROR: O segundo valor não pode ser 0')
                entradaDados.close();
            }

            if(oper == '+'){
                let resultado = Number(valor1) + Number(valor2)
                console.log(valor1 + ' + ' + valor2 + ' = ' + resultado)
            }else if(oper == '-'){
                let resultado = Number(valor1) - Number(valor2)
                console.log(valor1 + ' - ' + valor2 + ' = ' + resultado)
            }else if(oper == '*'){
                let resultado = Number(valor1) * Number(valor2)
                console.log(valor1 + ' * ' + valor2 + ' = ' + resultado)
            }else if(oper == '/'){
                let resultado = Number(valor1) / Number(valor2)
                console.log(valor1 + ' / ' + valor2 + ' = ' + resultado)
            }

            entradaDados.close();
        })    
    })
 })