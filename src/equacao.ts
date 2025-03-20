class Equacao {
    public calcular(a: number, b: number, c: number): number[] | string {
        if (a === 0) {
            return "O coeficiente 'a' não pode ser zero em uma equação de segundo grau.";
        }
    
        const delta = b * b - 4 * a * c;
    
        if (delta < 0) {
            return "A equação não possui raízes reais.";
        }
    
        const raizDelta = Math.sqrt(delta);
        const x1 = (-b + raizDelta) / (2 * a);
        const x2 = (-b - raizDelta) / (2 * a);
    
        return delta === 0 ? [x1] : [x1, x2];
    }
}

export default Equacao