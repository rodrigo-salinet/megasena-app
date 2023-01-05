/**
 * @const esta declaração de variável define qualquer variável estática (imutável, uma vez atribuído um valor a ela, este não pode ser alterado) do ambiente/interface, não sendo possível ser atribuída função na mesma, não podendo ser declarada sem valor definido.
 * @var esta declaração de variável define qualquer variável (modificável) do ambiente/interface, podendo ser atribuída função na mesma, podendo ser declarada sem valor definido.
 * @let esta declaração de variável define qualquer variável que estiver dentro de um bloco qualquer (método, if, for, while, etc...), sendo a mesma removida da memória na finalização do respectivo bloco a qual estiver inserida, não sendo possível ser atribuída função nesta declaração (let), podendo ser declarada sem valor definido.
 */


/** 
 * As variáveis abaixo, de probabilidade_6_dezenas a probabilidade_20_dezenas, têm em seu conteúdo, respectivamente:
 * [0] Quantidade de nº jogados,
 * [1] Valor de aposta,
 * [2] Probabilidade de acerto (1 em) Sena,
 * [3] Probabilidade de acerto (1 em) Quina,
 * [4] Probabilidade de acerto (1 em) Quadra
 * Valores (Tabela) retirada do site oficial da mega sena (https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx) 
 * Data 28/12/2022
 */
const probabilidade_6_dezenas = [6, 4.5, 50063860, 154518, 2332];
const probabilidade_7_dezenas = [7, 31.5, 7151980, 44981, 1038];
const probabilidade_8_dezenas = [8, 126, 1787995, 17192, 539];
const probabilidade_9_dezenas = [9, 378, 595998, 7791, 312];
const probabilidade_10_dezenas = [10, 945, 238399, 3973, 195];
const probabilidade_11_dezenas = [11, 2079, 108363, 2211, 129];
const probabilidade_12_dezenas = [12, 4158, 54182, 1317, 90];
const probabilidade_13_dezenas = [13, 7722, 29175, 828, 65];
const probabilidade_14_dezenas = [14, 13513.50, 16671, 544, 48];
const probabilidade_15_dezenas = [15, 22522.50, 10003, 370, 37];
const probabilidade_16_dezenas = [16, 36036, 6252, 260, 29];
const probabilidade_17_dezenas = [17, 55692, 4045, 188, 23];
const probabilidade_18_dezenas = [18, 83538, 2697, 139, 19];
const probabilidade_19_dezenas = [19, 122094, 1845, 105, 16];
const probabilidade_20_dezenas = [20, 174420, 1292, 81, 13];

/** 
 * As variáveis abaixo, de bolao_6_dezenas a bolao_20_dezenas, têm em seu conteúdo, respectivamente:
 * [0] Quantidade de números,
 * [1] Quantidade mínima de cotas para Bolão,
 * [2] Quantidade máxima de cotas para Bolão,
 * [3] Valor Mínimo da Cota,
 * [4] Valor Mínimo do Bolão,
 * [5] Valor Máximo do Bolão,
 * [6] Quantidade máxima de jogos no recibo
 * Valores (Tabela) retirada do site oficial da mega sena (https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx) 
 * Data 28/12/2022
 */
const bolao_6_dezenas = [6, 2, 9, 5, 10, 45, 10];
const bolao_7_dezenas = [7, 2, 63, 5, 31.5, 315, 10];
const bolao_8_dezenas = [8, 2, 100, 5, 126, 1260, 10];
const bolao_9_dezenas = [9, 2, 100, 5, 378, 3780, 10];
const bolao_10_dezenas = [10, 2, 100, 9.45, 945, 9450, 10];
const bolao_11_dezenas = [11, 2, 100, 20.79, 2079, 20790, 10];
const bolao_12_dezenas = [12, 2, 100, 41.58, 4158, 41580, 10];
const bolao_13_dezenas = [13, 2, 100, 77.22, 7722, 77220, 10];
const bolao_14_dezenas = [14, 2, 100, 135.13, 13513.5, 135135, 10];
const bolao_15_dezenas = [15, 2, 100, 225.22, 22522.5, 157657.5, 7];
const bolao_16_dezenas = [16, 2, 100, 360.36, 36036, 144144, 4];
const bolao_17_dezenas = [17, 2, 100, 556.92, 55692, 167076, 3];
const bolao_18_dezenas = [18, 2, 100, 835.38, 83538, 167076, 2];
const bolao_19_dezenas = [19, 2, 100, 1220.94, 122094, 122094, 1];
const bolao_20_dezenas = [20, 2, 100, 1744.20, 174420, 174420, 1];

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
const federal_globo1 = [1, "Dezena de milhar", "0 a 9"]; // Dezena de milhar: 99.999
const federal_globo2 = [2, "Unidade de milhar", "0 a 9"]; // Unidade de milhar: 9.999
const federal_globo3 = [3, "Centena", "0 a 9"]; // Centena: 999
const federal_globo4 = [4, "Dezena", "0 a 9"]; // Dezena: 99
const federal_globo5 = [5, "Unidade", "0 a 9"]; // Unidade: 9
const federal_globo6 = [6, "Decimal", "0.1 a 9"]; // Decimal: 0.9 -> Este não consta do site oficial, apenas um valor presumido pela lógica

/**
 * Aqui são definidas as variáveis estáticas do ambiente.
 */

// const hdn_sorteios = document.getElementById('hdn_sorteios'); // variável hdn_sorteios
const div_concursos = document.getElementById('div_concursos'); // variável tbody_concursos
const linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção tbody_concursos

const cbx_exibir = document.getElementById('cbx_exibir'); // variável cbx_exibir

const div_destaques = document.getElementById('div_destaques'); // variável div_destaques

const div_txt_notificacoes = document.getElementById('div_txt_notificacoes'); // variável div_txt_notificacoes

const linha_titulos = document.getElementById('linha_titulos'); // variável linha_titulos

/**
 * Aqui são definidas as variáveis globais do ambiente.
 */
var obj;
var destacar_celulas = [];

/**
 * Aqui é definida a classe verify e métodos derivados
 */
class verify {
    constructor (obj) {
        this.obj = obj;
    }

    /**
     * retorna o valor da variável GET da url
     * @obj
     */
    getGetVar(obj) {
        let $_GET = {};

        if (document.location.toString().indexOf('?') !== -1) {
            let query = document.location
                .toString()
                // get the query string
                .replace(/^.*?\?/, '')
                // and remove any existing hash string (thanks, @vrijdenker)
                .replace(/#.*$/, '')
                .split('&');

            let l = query.length;
            for (let i = 0; i < l; i++) {
                var aux = decodeURIComponent(query[i]).split('=');
                $_GET[aux[0]] = aux[1];
            }
        }

        //return the 'obj' query parameter
        return $_GET[obj];
    }

    /**
     * retorna o id do objeto
     * @obj
     */
    getObjId(obj) {
        return obj.id;
    }

    /**
     * retorna o nome do objeto
     * @obj
     */
    getObjName(obj) {
        return obj.name;
    }

    /**
     * retorna o valor do objeto
     * @obj
     */
    getObjValue(obj) {
        return (obj.value.trim()) ?? false; // Nullish Coalescing Operator (??)
    }

    /**
     * retorna as linhas de tabela tblObj
     * @tblObj
     */
    getTableRows(tblObj) {
        if (this.getTagName(tblObj) == 'table') { // valida antes se a tag do obj é table
            return tblObj.getElementsByTagName('tr');
        }
        return false; // retorna false no caso da tag do obj não ser table
    }

    /**
     * retorna o nome da tag do objeto em letras minúsculas
     * @obj
     */
    getTagName (obj) {
        return obj.tagName.toLowerCase();
    }

    /**
     * retorna verdadeiro se a tag do objeto for input
     * @obj
     */
    isInput(obj) {
        let objTagName = this.getTagName(obj); // getTagName retorna texto em minúsculo
        return (objTagName == "input") ? true : false;
    }

    /**
     * retorna o texto innerHTML de qualquer objeto em string
     * @obj
     */
    getInnerHTML(obj) {
        return obj.innerHTML.toString();
    }

    /**
     * retorna o texto do obj
     * @obj
     */
    getText (obj) {
        let objValue = this.getObjValue(obj);
        let objInnerHTML = this.getInnerHTML(obj);
        if (objValue) {
            return objValue;
        } else if (objInnerHTML) {
            return objInnerHTML;
        }
        return false;
    }

    /**
     * retorna o type (tipo) do obj em minúscula
     * @obj
     */
    getType(obj) {
        return obj.getAttribute('type').toLowerCase() ?? false;
    }

    /**
     * este método tem por objetivo remover todas as classe "destaque" de css
     */
    removerDestaques() {
        // let elements_destaque = document.getElementsByClassName("destaque");
        // let element_tmp;

        // for (let el = 0; el < elements_destaque.length; el++) {
        //     element_tmp = document.getElementById(elements_destaque[el].id);
        //     element_tmp.classList.remove("destaque");
        // }

        // for (let el = 0; el < elements_destaque.length; el++) {
        //     element_tmp = document.getElementById(elements_destaque[el].id);
        //     element_tmp.classList.remove("destaque");
        // }

        let linha_atual;
        let colunas_tmp;
        let col_tmp;

        // este loop retira os destaques de todas as células antes de fazer a verificação completa
        for (var l = 0; l < linhas_concursos.length; l++) { // função que contabiliza as linhas dos sorteios
            linha_atual = document.getElementById(linhas_concursos[l].id); // variável que recebe o objeto da linha atual do marcador [l]
            if (linha_atual != null) { // função que valida se a linha atual não for nula
                colunas_tmp = linha_atual.getElementsByTagName("td"); // variável que recebe temporariamente as células/colunas da linha atual do marcador [l]}
                for (var col = 0; col < colunas_tmp.length; col++) { // função que contabiliza as células/colunas da linha do marcador [col] atual
                    col_tmp = document.getElementById(colunas_tmp[col].id); // aqui seleciona a coluna atual da linha atual
                    if (col_tmp.id.indexOf("dezena") > -1) {
                        col_tmp.classList.remove("destaque");
                    }
                }
            }
        }

        return true;
    }

    /**
     * este método tem por objetivo adicionar em todas as células definidas na matriz estacar_celulas" a classe "destaque" de css
     */
    adicionarDestaques() {
        // este loop adiciona os destaques de todas as células inseridas na matriz "destacar_celulas"
        for (let d = 0; d < destacar_celulas.length; d++) { // função que contabiliza os índices da matriz "destacar_celulas"
            document.getElementById(destacar_celulas[d]).className = "destaque"; // aqui define a classe css "destaque" no índice da matriz "destacar_celulas" do marcador [d]
        }

        return true;
    }

    /**
     * este método tem por objetivo exibir as linhas <tr> que tiverem alguma célula <td> com a classe css "destaque", no caso da opção "Exibir somente encontrados" estiver selecionada, consequentemente ocultando as linhas <tr> que tiverem todas as célula <td> que não tiverem a classe css "destaque".
     */
    ocultarExibirLinhas() {
        let achou_linha = "n"; // variável que identificará se outra variável achou for verdadeira
        let achou_destaque = "n";
        let linha_atual;
        let colunas_tmp;
        let col_tmp;

        for (var l = 0; l < linhas_concursos.length; l++) { // função que contabiliza as linhas dos sorteios
            linha_atual = document.getElementById(linhas_concursos[l].id); // variável que recebe o objeto da linha atual do marcador [l]

            if (linha_atual != null) { // função que valida se a linha atual não for nula
                linha_atual.style.display = "table-row"; // ação para exibir linha
                colunas_tmp = linha_atual.getElementsByTagName("td"); // variável que recebe temporariamente as células/colunas da linha atual do marcador [l]}
                achou_destaque = "n";

                for (var col = 0; col < colunas_tmp.length; col++) { // função que contabiliza as células/colunas da linha do marcador [col] atual
                    col_tmp = document.getElementById(colunas_tmp[col].id); // aqui seleciona a coluna atual da linha atual
                    if (col_tmp.className == "destaque") {
                        achou_destaque = "s";
                    }
                }

                if (achou_destaque == "n" && cbx_exibir.checked == true && this.temDezenaSelecionada() == true) {
                    linha_atual.style.display = "none"; // ação para ocultar linha
                }
            }
        }

        return true;
    }

    /**
     * este método tem por objetivo localizar as 6 dezenas de acordo com o que estiver digitado nos campos Dezena1, Dezena2, Dezena3, Dezena4, Dezena5, e Dezena6.
     */
    localizarDezenas() {
        div_txt_notificacoes.innerHTML = "Aqui serão exibidas todas as notificações<br/>";

        let celula_dezena_tmp;
        let cbx_dezena_tmp;
        let posicao_encontrada_tmp;
        let linha_tmp;
        let str_celula_dezena_tmp;
        let celula_concurso_tmp;
        let colunas_tmp;

        destacar_celulas = [];
        destacar_celulas.length = 0;

        for (let lin = 0; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
            linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]

            if (linha_tmp != null) { // função que valida se a linha atual não for nula
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);

                for (let dez = 1; dez <= 6; dez++) { // loop que contabiliza as 6 células/colunas da linha do marcador [dez]
                    celula_dezena_tmp = document.getElementById("dezena" + dez + "_" + celula_concurso_tmp.innerHTML); // variável que recebe o objeto da celula atual do marcador [dez] e do celula_concurso_tmp.innerHTML

                    for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) { // loop que contabiliza os 6 campos/inputs do marcador [dez_tmp]

                        cbx_dezena_tmp = document.getElementById("cbx_dezena" + dez_tmp); // variável que recebe o objeto do checkbox da dezena temporária do marcador [dez_tmp]

                        if (cbx_dezena_tmp.checked == true) { // valida se o checkbox da respectiva dezena (dez_tmp) está selecionado

                            if (celula_dezena_tmp.innerHTML == dez_tmp) {
                                if (destacar_celulas.findIndex((element) => element == celula_dezena_tmp.id) < 0) { // valida se não encontrou algum id de célula já adicionado no índice da matriz "destacar_celulas"
                                    destacar_celulas.push(celula_dezena_tmp.id); // adiciona o id da célula no índice da matriz "destacar_celulas"
                                }
                            }
                        }
                    }
                }
            }
        }

        if (this.buscaQuadra(obj = "retornar") == true || this.buscaQuina(obj = "retornar") == true || this.buscaSena(obj = "retornar") == true) {
            div_txt_notificacoes.innerHTML = "";
        }

        this.removerDestaques();
        this.adicionarDestaques();
        this.ocultarExibirLinhas();
        this.buscaSena();
        this.buscaQuina();
        this.buscaQuadra();
        this.quantificarDestaques();

        return true;
    }

    /**
     * Este método tem por finalidade identificar todos os inputs da linha #campos e retornar true se todos os campos estiverem vazios
     */
    temDezenaSelecionada() {
        let cbx_tmp;

        for (let d = 1; d <= 60; d++) {
            cbx_tmp = document.getElementById("cbx_dezena" + d);
            if (cbx_tmp.checked) {
                return true;
            }
        }

        return false;
    }

    /**
     * Este método tem por finalidade buscar o sorteio de sena, conforme 6 dezenas selecionadas
     */
    buscaSena(obj) {
        let linha_tmp;
        let celula_dezena1_tmp;
        let celula_dezena2_tmp;
        let celula_dezena3_tmp;
        let celula_dezena4_tmp;
        let celula_dezena5_tmp;
        let celula_dezena6_tmp;
        let celulas_tmp = [];
        let dezenas = [];
        let celula_concurso_tmp;
        let colunas_tmp;

        for (let lin = 0; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
            linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]

            if (linha_tmp != null) {
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                celula_dezena1_tmp = document.getElementById("dezena1_" + celula_concurso_tmp.innerHTML);
                celula_dezena2_tmp = document.getElementById("dezena2_" + celula_concurso_tmp.innerHTML);
                celula_dezena3_tmp = document.getElementById("dezena3_" + celula_concurso_tmp.innerHTML);
                celula_dezena4_tmp = document.getElementById("dezena4_" + celula_concurso_tmp.innerHTML);
                celula_dezena5_tmp = document.getElementById("dezena5_" + celula_concurso_tmp.innerHTML);
                celula_dezena6_tmp = document.getElementById("dezena6_" + celula_concurso_tmp.innerHTML);

                if (celula_dezena1_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena1_tmp.id);
                    dezenas.push(celula_dezena1_tmp.innerHTML);
                }
                if (celula_dezena2_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena2_tmp.id);
                    dezenas.push(celula_dezena2_tmp.innerHTML);
                }
                if (celula_dezena3_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena3_tmp.id);
                    dezenas.push(celula_dezena3_tmp.innerHTML);
                }
                if (celula_dezena4_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena4_tmp.id);
                    dezenas.push(celula_dezena4_tmp.innerHTML);
                }
                if (celula_dezena5_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena5_tmp.id);
                    dezenas.push(celula_dezena5_tmp.innerHTML);
                }
                if (celula_dezena6_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena6_tmp.id);
                    dezenas.push(celula_dezena6_tmp.innerHTML);
                }

                if (celulas_tmp.length == 6) {
                    if (obj == "retornar") {
                        return true;
                    }

                    div_txt_notificacoes.innerHTML += "Achou sena (" + dezenas.toString() + ") no concurso <a href='javascript:megasena.verSorteio(" + celula_concurso_tmp.innerHTML + ")'>" + celula_concurso_tmp.innerHTML + "</a> de " + colunas_tmp[1].innerHTML + "<br/>";
                }

                celulas_tmp = [];
                celulas_tmp.length = 0;
                dezenas = [];
                dezenas.length = 0;
            }
        }

        return false;
    }

    /**
     * Este método tem por finalidade buscar o sorteio de quina, conforme 5 dezenas selecionadas
     */
    buscaQuina(obj) {
        let linha_tmp;
        let celula_dezena1_tmp;
        let celula_dezena2_tmp;
        let celula_dezena3_tmp;
        let celula_dezena4_tmp;
        let celula_dezena5_tmp;
        let celula_dezena6_tmp;
        let celulas_tmp = [];
        let dezenas = [];
        let celula_concurso_tmp;
        let colunas_tmp;

        for (let lin = 0; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
            linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
            if (linha_tmp != null) {
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                celula_dezena1_tmp = document.getElementById("dezena1_" + celula_concurso_tmp.innerHTML);
                celula_dezena2_tmp = document.getElementById("dezena2_" + celula_concurso_tmp.innerHTML);
                celula_dezena3_tmp = document.getElementById("dezena3_" + celula_concurso_tmp.innerHTML);
                celula_dezena4_tmp = document.getElementById("dezena4_" + celula_concurso_tmp.innerHTML);
                celula_dezena5_tmp = document.getElementById("dezena5_" + celula_concurso_tmp.innerHTML);
                celula_dezena6_tmp = document.getElementById("dezena6_" + celula_concurso_tmp.innerHTML);

                if (celula_dezena1_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena1_tmp.id);
                    dezenas.push(celula_dezena1_tmp.innerHTML);
                }
                if (celula_dezena2_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena2_tmp.id);
                    dezenas.push(celula_dezena2_tmp.innerHTML);
                }
                if (celula_dezena3_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena3_tmp.id);
                    dezenas.push(celula_dezena3_tmp.innerHTML);
                }
                if (celula_dezena4_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena4_tmp.id);
                    dezenas.push(celula_dezena4_tmp.innerHTML);
                }
                if (celula_dezena5_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena5_tmp.id);
                    dezenas.push(celula_dezena5_tmp.innerHTML);
                }
                if (celula_dezena6_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena6_tmp.id);
                    dezenas.push(celula_dezena6_tmp.innerHTML);
                }

                if (celulas_tmp.length == 5) {
                    if (obj == "retornar") {
                        return true;
                    }

                    div_txt_notificacoes.innerHTML += "Achou quina (" + dezenas.toString() + ") no concurso <a href='javascript:megasena.verSorteio(" + celula_concurso_tmp.innerHTML + ")'>" + celula_concurso_tmp.innerHTML + "</a> de " + colunas_tmp[1].innerHTML + "<br/>";
                }

                celulas_tmp = [];
                celulas_tmp.length = 0;
                dezenas = [];
                dezenas.length = 0;
            }
        }

        return false;
    }

    /**
     * Este método tem por finalidade buscar o sorteio de quadra, conforme 4 dezenas selecionadas
     */
    buscaQuadra(obj) {
        let linha_tmp;
        let celula_dezena1_tmp;
        let celula_dezena2_tmp;
        let celula_dezena3_tmp;
        let celula_dezena4_tmp;
        let celula_dezena5_tmp;
        let celula_dezena6_tmp;
        let celulas_tmp = [];
        let dezenas = [];
        let celula_concurso_tmp;
        let colunas_tmp;

        for (let lin = 0; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
            linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
            if (linha_tmp != null) {
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                celula_dezena1_tmp = document.getElementById("dezena1_" + celula_concurso_tmp.innerHTML);
                celula_dezena2_tmp = document.getElementById("dezena2_" + celula_concurso_tmp.innerHTML);
                celula_dezena3_tmp = document.getElementById("dezena3_" + celula_concurso_tmp.innerHTML);
                celula_dezena4_tmp = document.getElementById("dezena4_" + celula_concurso_tmp.innerHTML);
                celula_dezena5_tmp = document.getElementById("dezena5_" + celula_concurso_tmp.innerHTML);
                celula_dezena6_tmp = document.getElementById("dezena6_" + celula_concurso_tmp.innerHTML);

                if (celula_dezena1_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena1_tmp.id);
                    dezenas.push(celula_dezena1_tmp.innerHTML);
                }
                if (celula_dezena2_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena2_tmp.id);
                    dezenas.push(celula_dezena2_tmp.innerHTML);
                }
                if (celula_dezena3_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena3_tmp.id);
                    dezenas.push(celula_dezena3_tmp.innerHTML);
                }
                if (celula_dezena4_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena4_tmp.id);
                    dezenas.push(celula_dezena4_tmp.innerHTML);
                }
                if (celula_dezena5_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena5_tmp.id);
                    dezenas.push(celula_dezena5_tmp.innerHTML);
                }
                if (celula_dezena6_tmp.classList.contains("destaque") == true) {
                    celulas_tmp.push(celula_dezena6_tmp.id);
                    dezenas.push(celula_dezena6_tmp.innerHTML);
                }

                if (celulas_tmp.length == 4) {
                    if (obj == "retornar") {
                        return true;
                    }

                    div_txt_notificacoes.innerHTML += "Achou quadra (" + dezenas.toString() + ") no concurso <a href='javascript:megasena.verSorteio(" + celula_concurso_tmp.innerHTML + ")'>" + celula_concurso_tmp.innerHTML + "</a> de " + colunas_tmp[1].innerHTML + "<br/>";
                }

                celulas_tmp = [];
                celulas_tmp.length = 0;
                dezenas = [];
                dezenas.length = 0;
            }
        }

        return false;
    }

    /**
     * Este método tem por finalidade exibir na div_destaques a quantidade de células destacadas
     */
    quantificarDestaques() {
        div_destaques.innerHTML = "0";
        let class_destaques = document.getElementsByClassName("destaque");
        if (class_destaques.length > 0) {
            div_destaques.innerHTML = class_destaques.length;
        }

        return true;
    }

    kSortAsc(obj) {
        let keys = Object.keys(obj).sort()
            , sortedObj = {};

        for (let i in keys) {
            sortedObj[keys[i]] = obj[keys[i]];
        }

        return sortedObj;
    }

    vSortAsc(obj) {
        let values = Object.values(obj).sort()
            , sortedObj = {};

        for (let i in values) {
            sortedObj[values[i]] = obj[values[i]];
        }

        return sortedObj;
    }

    vSortDesc(obj) {
        let sortedObj = new Array();

        let keys = Object.keys(obj).sort()
            , sortedKeysObj = {};

        let values = Object.values(obj).sort()
            , sortedValuesObj = {};

        for (let i = (values.length - 1); i >= 0; i--) {
            sortedObj[values[i]] = obj[keys[i]];
        }

        return sortedObj;
    }

    /**
     * Este método tem por finalidade exibir as dezenas mais e menos sorteadas por ordem da quantidade de sorteios
     */
    maisMenosSorteados() {
        let dezenas = new Array();
        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = 0;
        }

        let linha_tmp;
        let colunas_tmp;
        let celula_concurso_tmp;
        let celula_dezena_tmp;
        let sorteios_por_dezena_asc = new Array();
        let sorteios_por_dezena_desc = new Array();

        for (let lin = 0; lin < linhas_concursos.length; lin++) {
            linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
            if (linha_tmp != null) {
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                for (let d = 1; d <=6; d++) {
                    celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerHTML);
                    for (let dez = 1; dez <= 60; dez++) {
                        if (dez == celula_dezena_tmp.innerHTML) {
                            dezenas[dez] += 1;
                        }
                    }
                }
            }
        }

        let col_qtd_dezena_tmp;
        for (let dez = 1; dez < dezenas.length; dez++) {
            col_qtd_dezena_tmp = document.getElementById("col_qtd_dezena" + dez);
            col_qtd_dezena_tmp.innerHTML = dezenas[dez];
        }

        let dezena_maior;
        let dezena_tmp;
        let dezenas_mais_sorteadas = new Array();
        let dezenas_tmp = dezenas;

        for (let dez = 1; dez <= 60; dez++) {
            dezena_tmp = 1;
            dezena_maior = dezenas_tmp[dezena_tmp];
            if (dezena_maior == undefined) {
                for (let min = 1; min <= 60; min++) {
                    if (dezenas_tmp[min] != undefined) {
                        dezena_tmp = min;
                        break;
                    }
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
                if (dezenas_tmp[dez_tmp] != undefined && dezena_maior < dezenas_tmp[dez_tmp]) {
                    dezena_tmp = dez_tmp;
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            if (dez <= 6) {
                document.getElementById("col_qtd_dezena" + dezena_tmp).className = "mais_sorteados";
            }

            if (dez >= 55) {
                document.getElementById("col_qtd_dezena" + dezena_tmp).className = "menos_sorteados";
            }

            dezenas_mais_sorteadas[dez] = "dezena" + dezena_tmp + ":" + dezena_maior;

            dezenas_tmp[dezena_tmp] = undefined;
        }

        return true;
    }

    atrasosSorteios() {
        let dezenas = new Array();
        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = 0;
        }

        let celula_dezena_tmp;
        let achou_dezena;
        let linha_tmp;
        let colunas_tmp;
        let celula_concurso_tmp;
        let celula_tmp;

        for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
            if (ordenar == "asc") {
                for (let lin = 0; lin < linhas_concursos.length; lin++) {
                    linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
                    if (linha_tmp != null) {
                        colunas_tmp = linha_tmp.getElementsByTagName("td");
                        celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                        achou_dezena = false;
                        dezenas[dez_tmp] += 1;
                        for (let d = 1; d <= 6; d++) {
                            celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerHTML);
                            if (celula_dezena_tmp.innerHTML == dez_tmp) {
                                dezenas[dez_tmp] = 0;
                                break;
                            }
                        }
                    }
                }
            } else {
                for (let lin = (linhas_concursos.length - 1); lin >= 0; lin--) {
                    linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
                    if (linha_tmp != null) {
                        colunas_tmp = linha_tmp.getElementsByTagName("td");
                        celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
                        achou_dezena = false;
                        dezenas[dez_tmp] += 1;
                        for (let d = 1; d <= 6; d++) {
                            celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerHTML);
                            if (celula_dezena_tmp.innerHTML == dez_tmp) {
                                dezenas[dez_tmp] = 0;
                                break;
                            }
                        }
                    }
                }
            }

            celula_tmp = document.getElementById("col_atraso_dezena" + dez_tmp);
            celula_tmp.innerHTML = dezenas[dez_tmp];
        }

        return true;
    }

    probabilidadesSorteios() {
        let aleatorio_tmp;
        let col_probabilidade_tmp;
        let combinacoes_possiveis = 8343977; // 50.063.860 é a quantidade total de combinações possíveis para uma aposta de 6 dezenas (esta quantidade total dividida por 6 é igual a 8343976,66)

        for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
            for (let i = 1; i <= combinacoes_possiveis; i++) {
                aleatorio_tmp = Math.floor(Math.random() * 61); // Por algum motivo tive que colocar 61 aqui, pois náo atinge o número máximo, ou seja, sempre vai atingir o número máximo do total - 1
                if (aleatorio_tmp == dez_tmp) {
                    col_probabilidade_tmp = document.getElementById("col_probabilidade_dezena" + dez_tmp);
                    col_probabilidade_tmp.innerHTML = i;
                    col_probabilidade_tmp.title = (i / (combinacoes_possiveis / 100)) + "%";
                    break;
                }
            }
        }

        return true;
    }

    // carregarSorteios() {
    //     let linhas_sorteios = hdn_sorteios.value.split("\n");
    //     let colunas_tmp;
    //     let linha_tmp;
    //     let col_concurso_tmp;
    //     let col_data_tmp;
    //     let col_dezena1_tmp;
    //     let col_dezena2_tmp;
    //     let col_dezena3_tmp;
    //     let col_dezena4_tmp;
    //     let col_dezena5_tmp;
    //     let col_dezena6_tmp;
    //     let tentativa_tmp;
    //     let l_tmp = 0;

    //     if (ordenar == "asc") {
    //         for (let l = (linhas_sorteios.length - 1); l >= 0 ; l--) {
    //             if (limitar > 0) {
    //                 if (l_tmp > (limitar - 1)) { break; } // Aqui ocorre a limitação de inserção / renderização
    //             }

    //             colunas_tmp = linhas_sorteios[l].split(",");
    //             linha_tmp = tbody_concursos.insertRow(l_tmp);
    //             linha_tmp.id = "linha_" + (colunas_tmp[0]);

    //             col_concurso_tmp = linha_tmp.insertCell(0);
    //             col_concurso_tmp.id = "concurso_" + (colunas_tmp[0]);
    //             col_concurso_tmp.innerHTML = colunas_tmp[0];
    //             col_concurso_tmp.setAttribute("onclick", "megasena.selecionarConcurso(this)");
    //             col_concurso_tmp.setAttribute("style", "cursor: pointer;");
    //             col_concurso_tmp.setAttribute("title", "Clique para selecionar / jogar este concurso");

    //             col_data_tmp = linha_tmp.insertCell(1);
    //             col_data_tmp.id = "data_sorteio_" + colunas_tmp[0];
    //             col_data_tmp.innerHTML = colunas_tmp[1];

    //             col_dezena1_tmp = linha_tmp.insertCell(2);
    //             col_dezena1_tmp.id = "dezena1_" + colunas_tmp[0];
    //             col_dezena1_tmp.innerHTML = colunas_tmp[2];

    //             col_dezena2_tmp = linha_tmp.insertCell(3);
    //             col_dezena2_tmp.id = "dezena2_" + colunas_tmp[0];
    //             col_dezena2_tmp.innerHTML = colunas_tmp[3];

    //             col_dezena3_tmp = linha_tmp.insertCell(4);
    //             col_dezena3_tmp.id = "dezena3_" + colunas_tmp[0];
    //             col_dezena3_tmp.innerHTML = colunas_tmp[4];

    //             col_dezena4_tmp = linha_tmp.insertCell(5);
    //             col_dezena4_tmp.id = "dezena4_" + colunas_tmp[0];
    //             col_dezena4_tmp.innerHTML = colunas_tmp[5];

    //             col_dezena5_tmp = linha_tmp.insertCell(6);
    //             col_dezena5_tmp.id = "dezena5_" + colunas_tmp[0];
    //             col_dezena5_tmp.innerHTML = colunas_tmp[6];

    //             col_dezena6_tmp = linha_tmp.insertCell(7);
    //             col_dezena6_tmp.id = "dezena6_" + colunas_tmp[0];
    //             col_dezena6_tmp.innerHTML = colunas_tmp[7];

    //             l_tmp++;
    //         }
    //     } else {
    //         for (let l = 0; l < linhas_sorteios.length; l++) {
    //             if (limitar > 0) {
    //                 if (l > (limitar - 1)) { break } // Aqui ocorre a limitação de inserção / renderização
    //             }

    //             colunas_tmp = linhas_sorteios[l].split(",");
    //             linha_tmp = tbody_concursos.insertRow(l);
    //             linha_tmp.id = "linha_" + (colunas_tmp[0]);

    //             col_concurso_tmp = linha_tmp.insertCell(0);
    //             col_concurso_tmp.id = "concurso_" + (colunas_tmp[0]);
    //             col_concurso_tmp.innerHTML = colunas_tmp[0];
    //             col_concurso_tmp.setAttribute("onclick", "megasena.selecionarConcurso(this)");
    //             col_concurso_tmp.setAttribute("style", "cursor: pointer;");
    //             col_concurso_tmp.setAttribute("title", "Clique para selecionar / jogar este concurso");

    //             col_data_tmp = linha_tmp.insertCell(1);
    //             col_data_tmp.id = "data_sorteio_" + colunas_tmp[0];
    //             col_data_tmp.innerHTML = colunas_tmp[1];

    //             col_dezena1_tmp = linha_tmp.insertCell(2);
    //             col_dezena1_tmp.id = "dezena1_" + colunas_tmp[0];
    //             col_dezena1_tmp.innerHTML = colunas_tmp[2];

    //             col_dezena2_tmp = linha_tmp.insertCell(3);
    //             col_dezena2_tmp.id = "dezena2_" + colunas_tmp[0];
    //             col_dezena2_tmp.innerHTML = colunas_tmp[3];

    //             col_dezena3_tmp = linha_tmp.insertCell(4);
    //             col_dezena3_tmp.id = "dezena3_" + colunas_tmp[0];
    //             col_dezena3_tmp.innerHTML = colunas_tmp[4];

    //             col_dezena4_tmp = linha_tmp.insertCell(5);
    //             col_dezena4_tmp.id = "dezena4_" + colunas_tmp[0];
    //             col_dezena4_tmp.innerHTML = colunas_tmp[5];

    //             col_dezena5_tmp = linha_tmp.insertCell(6);
    //             col_dezena5_tmp.id = "dezena5_" + colunas_tmp[0];
    //             col_dezena5_tmp.innerHTML = colunas_tmp[6];

    //             col_dezena6_tmp = linha_tmp.insertCell(7);
    //             col_dezena6_tmp.id = "dezena6_" + colunas_tmp[0];
    //             col_dezena6_tmp.innerHTML = colunas_tmp[7];
    //         }
    //     }

    //     return true;
    // }

    verSorteio(obj) {
        let linha_tmp = document.getElementById("linha_" + obj);
        linha_tmp.classList.add("destacar_linha");
        if (document.getElementById("linha_" + (obj + 1))) {
            window.open("#linha_" + (obj + 1), "_self");
        } else {
            window.open("#linha_titulos", "_self");
        }

        return true;
    }

    sugestaoAposta() {
        /**
         * Dicas extraídas do site https://www.somatematica.com.br/noticias/1.php :
         * 
         * 1 - Jogar pouco os números com final nove ou final zero, por saírem menos.
         * 2 - As dezenas 01, 02, 03, 11, 22, 44, 55, 48 e 57 saem pouco.
         * 3 - Não jogue números seguidos.
         * 4 - Não jogue em números que estejam na mesma linha vertical.
         * 5 - Divida a cartela em quatro quadrantes e distribua seu jogo entre eles. *** não entendi
         * 6 - Jogue sempre a mesma quantidade de dezenas pares e ímpares.
         * 7 - Prefira apenas um cartão com mais de seis dezenas do que vários cartões de seis dezenas.
         * 8 - Um jogo em que se preenche 12 dezenas utilizando essas regras teria mais chances de êxito. Daí, a necessidade de um bolão.
         * 
         * ******************************************************************************************************************************
         * 
         * Mais dicas extraídas do site https://br.doctorlotto.com/dicas/esquema-segredo-mega-sena/ :
         * 
         * 1 - A probabilidade de sair 6 dezenas pares em um sorteio é muito menor do que sair 3 pares e 3 ímpares
         * 2 - A chance de ocorrer um sorteio com números sequenciais é de 4 a cada 10 concursos
         * 3 - É muito mais provável você ganhar com 2 ou 3 números na mesma linha do que um em cada linha
         * 4 - Participar de bolões da Mega-Sena no Sorte Online podem aumentar as suas chances de ganhar
         * 
         * ******************************************************************************************************************************
         * 
         * Meu algoritmo (Filtro de todos os 60 números, de 1 a 60)
         * 
         * . Deixar no início da fila os números que estão a mais tempo sem ser sorteado;
         * 11 42 7 50 54 58 40 13 21 16 43 4 14 17 18 44 60 51 24 19 52 8 41 49 47 59 12 22 26 2 5 27 46 45 53 55 56 20 32 36 39 3 28 48 31 37 38 57 9 15 23 25 29 1 6 10 30 33 35
         * 
         * . Calcular a quantidade média de intervalo de jogos em que as dezenas do último sorteio foram repetidas anteriormente, para saber se as mesmas têm chance de serem sorteadas novamente, colocando no final da fila os que tiverem a média mais baixa, que o atraso é menor;
         * 1  -> 10 *
         * 6  -> 10 *
         * 10 -> 8  ***
         * 30 -> 9  **
         * 33 -> 9  **
         * 35 -> 9  **
         * 
         * . Calcular a quantidade média de intervalos de jogos em que os números mais sorteados foram repetidos anteriormente, para deixar no início da fila o número que está a mais tempo sem ser sorteado e/ou o número que é mais repetido e/ou que a média de intervalo é menor; Pé quente
         * 5  -> 9
         * 10 -> 8
         * 33 -> 9
         * 37 -> 9
         * 42 -> 9
         * 53 -> 8 *
         * 
         * . Calcular a quantidade média de intervalo de sorteios em que os números menos sorteados foram repetidos anteriormente, para saber se algum número está na fila de azarão a ser sorteado (idem algoritmo anterior);
         * 15 -> 11
         * 21 -> 11
         * 22 -> 11
         * 26 -> 11
         * 48 -> 10
         * 55 -> 11
         * 
         * Deixar por último:
         * 
         * . Deixar no fim da fila todos os números com final 9 e deixar apenas 1 no começo da fila, o qual estiver mais atrasado (a mais tempo sem ser sorteado);
         * 19 -> 11
         * 49 -> 9
         * 59 -> 8
         * 39 -> 4
         * 9  -> 1
         * 29 -> 1
         * 
         * 19 11 42 7 50 54 58 40 13 21 16 43 4 14 17 18 44 60 51 24 52 8 41 49 47 59 12 22 26 2 5 27 46 45 53 55 56 20 32 36 39 3 28 48 31 37 38 57 9 15 23 25 29 1 6 10 30 33 35
         * 
         * . Deixar no fim da fila todos os números menos sorteados e deixar apenas 1 no começo da fila, o qual estiver mais atrasado (a mais tempo sem ser sorteado); ok, já está certo
         * 
         * . A cada 10 jogos verificar se houve sorteio de algum número sequencial, para identificar se alguma sequência tem chance de ser repetida;
         * estatística complexa
         * 
         * . Caso alguma alguma sequência não tiver grande chance de ser repetida, filtrar os números sugeridos de modo que sejam enviados para o fim da fila os números sequenciais que estiverem a menos tempo sem ser sorteado, exemplo: se tive no começo da fila os número 1 e 2 na sequência, enviar para o fim da fila o número que estiver menos atrasado (a menos tempo sem ser sorteado);
         * 
         * 19 11 42 7 50 54 58 40 13 21 16 43 4 14 17 18 44 60 51 24 52 8 41 49 47 59 12 22 26 2 5 27 46 45 53 55 56 20 32 36 39 3 28 48 31 37 38 57 9 15 23 25 29 1 6 10 30 33 35
         * 
         * 17 -> 16
         * 18 -> 16
         * 37 -> 2
         * 38 -> 2
         * 
         * Aqui seria bom enviar pro final da fila se o número for identificado nos próximos algoritmos
         * 
         * . Deixar no fim da fila os números que, somado 10, estejam no início da fila, exemplo: se o número 1 estiver no início da fila (até 20 números iniciais) junto com o número 11, enviar para o final da fila o que estiver a menos tempo sorteado;
         * 
         * 19 11 42 7 50 54 58 40 13 21 16 43 4 14 17 18 44 60 51 24 *final da fila de 20 números* 52 8 41 49 47 59 12 22 26 2 5 27 46 45 53 55 56 20 32 36 39 3 28 48 31 37 38 57 9 15 23 25 29 1 6 10 30 33 35
         * 
         * 11 -> 48
         * 21 -> 24 ***
         * 51 -> 14 ***
         * 
         * 7  -> 37
         * 17 -> 16 ***
         * 
         * 50 -> 36
         * 40 -> 27 ***
         * 60 -> 15 ***
         * 
         * 4  -> 21 ***
         * 14 -> 17 ***
         * 24 -> 12 ***
         * 44 -> 15 ***
         * 54 -> 34
         * 
         * 58 -> 25
         * 18 -> 16 ***
         * 
         * 13 -> 24
         * 43 -> 23 ***
         * 
         * Sobrou o jogo 19 11 42 7 50 54 58 13 16
         * 
         * . Aproximar no início da fila um número não sequencial (pular o próximo ou número anterior) da mesma linha (1 a 10, 11 a 20, 21 a 30, 31 a 40, 41 a 50 e 51 a 60), pegar dos números do início da fila, os outros 8 números (excluindo/pulando o próximo ou anterior) da mesma linha e aproximar o qual estiver mais atrasado (a mais tempo sem ser sorteado);
         * 
         * 19 11 42 7 50 54 58 13 16
         * 
         * 4
         * 
         * . Último algoritmo a ser executado: Dividir cada jogo (de 6 a 20 números) em metade pares (de 3 a 10 números) e metade ímpares (de 3 a 10 números), não enviar para o fim da fila, mas apenas pescar os mesmos dentro dos números do início da fila.
         * 
         * 11 42 7 50 54 58 13 16 4 19
         * 
         * 11 13 7 42 50 54
         * 
         * 11 13 7 42 48 50
         * 
         * 11 13 7 42 48 54
         */

        let qtd_max_dezenas = 20;
        let valor_max_aposta = 174420;
        let dezenas_pares = 3;
        let dexenas_impares = 3;

        return true;
    }

    selecionarConcurso(obj) {
        let concurso_tmp = obj.innerHTML;
        let dezena_tmp;
        let numero_tmp;
        let cbx_tmp;

        for (let i = 1; i <= 60; i++) {
            cbx_tmp = document.getElementById("cbx_dezena" + i);
            cbx_tmp.checked = false;
        }

        for (let d = 1; d <= 6; d++) {
            dezena_tmp = document.getElementById("dezena" + d + "_" + concurso_tmp);
            numero_tmp = dezena_tmp.innerHTML;

            cbx_tmp = document.getElementById("cbx_dezena" + numero_tmp);
            cbx_tmp.checked = true;
        }

        this.localizarDezenas();

        return true;
    }

    repeticoesDezenas() {
        let dezenas = new Array();
        let linha_tmp;
        let col_tmp;
        let achou_dezena;
        let colunas_tmp;

        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = new Array();
            for (let lin = 0; lin < linhas_concursos.length; lin++) {
                linha_tmp = document.getElementById(linhas_concursos[lin].id);
                colunas_tmp = linha_tmp.getElementsByTagName("td");
                achou_dezena = 0;  // 0 para não achou dezena
                for (let col = 1; col <= 6; col++) {
                    col_tmp = document.getElementById("dezena" + col + "_" + colunas_tmp[0].innerHTML);
                    if (dez == col_tmp.innerHTML) {
                        achou_dezena = 1; // 1 para achou dezena
                        break;
                    }
                }
                dezenas[dez].push(achou_dezena);
            }
        }

        let intervalos = new Array();
        let intervalo_tmp = 0;
        for (let dez = 1; dez <= 60; dez++) {
            intervalos[dez] = new Array();
            intervalo_tmp = 0;
            for (let i = 0; i < dezenas[dez].length; i++) {
                intervalo_tmp++;
                if (dezenas[dez][i] == 1) {
                    intervalos[dez].push(intervalo_tmp);
                    intervalo_tmp = 0;
                }
            }
        }

        let soma_dezena_tmp = new Array();
        let dezena_tmp;
        for (let dez = 1; dez <= 60; dez++) {
            soma_dezena_tmp[dez] = 0;
            if (intervalos[dez].length == 0) { continue; }
            for (let i = 0; i < intervalos[dez].length; i++) {
                soma_dezena_tmp[dez] += intervalos[dez][i];
            }
            dezena_tmp = document.getElementById("col_repeticoes_dezena" + dez);
            dezena_tmp.innerHTML = parseInt(soma_dezena_tmp[dez] / intervalos[dez].length);
            dezena_tmp.title = soma_dezena_tmp[dez];
        }
    }
}

/**
 * esta variável estática "megasena" recebe a classe "verify", que por sua vez atribui todos os métodos derivados da mesma classe, desta forma iniciando a chamada da classe "verify" para uso em todas as tags <> (objetos DOM) desta página
 */
const megasena = new verify(obj);

var ordenar = megasena.getGetVar("ordenar"); // aqui seleciona a ordem de exibição dos concursos, "asc" para ascendente e "desc" para descendente
var limitar = megasena.getGetVar("limitar"); // aqui seleciona a limitação de exibição dos concursos

// megasena.carregarSorteios();
megasena.maisMenosSorteados();
megasena.atrasosSorteios();
megasena.probabilidadesSorteios();
megasena.repeticoesDezenas();

var get_vars = "./index.html?a=" + parseInt(Math.random() * 9999);

if (ordenar != undefined) {
    get_vars += "&ordenar=" + ordenar;
} else {
    ordenar = "desc";
}

if (limitar != undefined) {
    get_vars += "&limitar=" + limitar;
} else {
    limitar = 0;
}

window.history.pushState("this", "Jogar Megasena", get_vars);