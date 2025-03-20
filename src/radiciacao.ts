import Calculo from "./calculo";

class Radiciacao extends Calculo {
    public calcular(n1: number, n2: number): number {
        return n1 ** (1/n2)
    }
}

export default Radiciacao