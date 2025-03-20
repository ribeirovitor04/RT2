import * as readline from 'readline'
import Soma from './adicionar'
import Subtracao from './subtrair'
import Divisao from './dividir'
import Multiplicacao from './multiplicar'
import Mensagens from './mensagens'
import Potenciacao from './potencia'
import Radiciacao from './radiciacao'
import Equacao from './equacao'

let msg = new Mensagens

let iniciar = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question(`Digite os valores e a operacao: \n`, (valor) => {
        let conta = valor.split(' ')

        let n1 = Number(conta[0])
        let n2 = Number(conta[1])
        let op = conta[2]

        if (conta.length == 1) {
            op = conta[0]
        }

        switch (op) {
            case "Soma":
                let calculo = new Soma
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Subtracao":
                calculo = new Subtracao()
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Divisao":
                calculo = new Divisao()
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Multiplicacao":
                calculo = new Multiplicacao()
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Potenciacao":
                calculo = new Potenciacao()
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Radiciacao":
                calculo = new Radiciacao()
                console.log(`O resultado da sua conta é: ${calculo.calcular(n1, n2)} \n`)
                break
            case "Equacao":
                rl.close() 

                const rlEquacao = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                })

                rlEquacao.question("Digite os valores de a, b e c separados por espaço:\n", (valores) => {
                    let coeficientes = valores.split(' ').map(Number)

                    if (coeficientes.length !== 3 || coeficientes.some(isNaN)) {
                        console.log("Entrada inválida! Certifique-se de digitar três números separados por espaço.")
                    } else {
                        let equacao = new Equacao()
                        console.log(`O resultado da equação é: ${equacao.calcular(coeficientes[0], coeficientes[1], coeficientes[2])} \n`)
                    }

                    rlEquacao.close()
                    iniciar() 
                })
                return 
            case "Sair":
                console.log(`Até mais...`)
                rl.close()
                return
            default:
                console.log((`Operacao nao reconhecida! \n`) +
                    (`Tente: Soma, Subtracao, Multiplicacao, Divisao, Potenciacao, Radiciacao e Equacao \n`) +
                    (`Para encerrar digite "Sair" \n`))
        }

        rl.close()
        if (op != "Sair") {
            iniciar()
        }
    })
}

msg.boasVindas()
msg.listarOpcoes()
msg.comoUsar()
iniciar()