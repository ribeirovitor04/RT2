import Calculo from "./calculo";

class Potenciacao extends Calculo {
    public calcular(n1: number, n2: number): number {
        return n1 ** n2
    }
}

export default Potenciacao