export const federal = [
    /**
     * Federal
     * São utilizados 5 globos que sorteiam simultaneamente uma bola por vez, formando o milhar do prêmio, observando-se o universo de bilhetes emitidos para cada extração, conforme o quadro abaixo:
     * As variáveis abaixo, de federal_globo1 a federal_globo6, têm em seu conteúdo, respectivamente:
     * [0] Ordem dos globos,
     * [1] Correspondência,
     * [2] Bolas Numeradas. Extrações de até 100.000 bilhetes
     * Valores (Tabela) retirada do site oficial da mega sena (https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx)
     * Data 28/12/2022
     */
    { federal_globo1: [1, "Dezena de milhar", "0 a 9"] }, // Dezena de milhar: 99.999
    { federal_globo2: [2, "Unidade de milhar", "0 a 9"] }, // Unidade de milhar: 9.999
    { federal_globo3: [3, "Centena", "0 a 9"] }, // Centena: 999
    { federal_globo4: [4, "Dezena", "0 a 9"] }, // Dezena: 99
    { federal_globo5: [5, "Unidade", "0 a 9"] }, // Unidade: 9
    { federal_globo6: [6, "Decimal", "0.1 a 9"] } // Decimal: 0.9 -> Este não consta do site oficial, apenas um valor presumido pela lógica
];