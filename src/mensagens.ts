class Mensagens {

        public listarOpcoes = () => {
            console.log(`Aqui você pode:`)
            console.log(`Soma, Subtracao, Multiplicacao ou Dividisao, Potenciacao, Radiciacao e Equacao números\n`)
        }
    
        public comoUsar = () => {
            console.log(`Para usar digite os números e a opção de cálculo separados por espaço como: "1.5 2.5 Soma"`)
            console.log(`Para realizar uma equacao de segundo grau digitar apenas Equacao e seguir as proximas informacoes`)
            console.log(`Para encerrar digite "Sair"\n`)
        }
    
        public boasVindas = () => {
            console.log('\nBem-vindo a calculadora polimórfica\n')
        }
    
    }

export default Mensagens