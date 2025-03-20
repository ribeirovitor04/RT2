import Calculo from "./calculo";

class Divisao extends Calculo{
    public calcular(numero1: number, numero2: number): number {
        return numero1 / numero2
    }
}

export default Divisao