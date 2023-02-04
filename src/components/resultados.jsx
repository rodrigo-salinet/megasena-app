import React, { Component } from 'react';
// import $ from 'jquery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './resultados.css';
import {
    results
} from './results';
import {
    cbx_exibir,
    quantificarDestaques,
    buscaJogos,
    verOrdem
} from './notificacoes';
import {
    cbxs_dezena,
    temDezenaSelecionada,
    repeticoesDezenas,
    probabilidadesSorteios,
    atrasosSorteios,
    maisMenosSorteados,
    getCbxSession
} from './jogatina';

/**
 * Elements from resultados.jsx
 */
export const div_concursos = React.createRef();
export var linhas_concursos = React.createRef();
export const linha_titulos = React.createRef();
export const concurso = React.createRef();
export const data_sorteio = React.createRef();
export const dezena1 = React.createRef();
export const dezena2 = React.createRef();
export const dezena3 = React.createRef();
export const dezena4 = React.createRef();
export const dezena5 = React.createRef();
export const dezena6 = React.createRef();

/**
 * Functions/Methods from resultados.jsx
 */

/**
 * este método tem por objetivo definir o valor asc na variável ordenar na sessão do javascript e recarregar a página
 */
export const setAsc = (e) => {
    try {
        window.sessionStorage.setItem("ordenar", "asc");
        window.location.reload();

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * este método tem por objetivo definir o valor desc na variável ordenar na sessão do javascript e recarregar a página
 */
export const setDesc = (e) => {
    try {
        window.sessionStorage.setItem("ordenar", "desc");
        window.location.reload();

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * este método tem por objetivo localizar as 6 dezenas de acordo com o que estiver selecionado nas dezenas da jogatina
 */
export const localizarDezenas = (e) => {
    try {
        let cbx_dezena_tmp;
        let colunas_tmp;


        for (let lin = 0; lin < linhas_concursos.length; lin++) {
            if (linhas_concursos[lin] != null) {
                colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");

                for (let col = 0; col < colunas_tmp.length; col++) {
                    if (colunas_tmp[col].ariaLabel === "dezena") {
                        cbx_dezena_tmp = cbxs_dezena[colunas_tmp[col].innerText].current;

                        window.sessionStorage.removeItem(cbx_dezena_tmp.id);
                        colunas_tmp[col].classList.remove("destaque");
                        if (cbx_dezena_tmp.checked === true) {
                            window.sessionStorage.setItem(cbx_dezena_tmp.id, "checked");
                            colunas_tmp[col].classList.add("destaque");
                        }
                    } else { continue; }
                }
            }
        }

        ocultarExibirLinhas();
        quantificarDestaques();
        buscaJogos();

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * este método tem por objetivo exibir ou ocultar as linhas de acordo com o checkbox cbx_exibir, em quais células da div_concursos tiverem (ou não) a classe css destaque
 */
export const ocultarExibirLinhas = (e) => {
    try {
        let achou_destaque = "n";
        let colunas_tmp;

        for (var l = 0; l < linhas_concursos.length; l++) {
            if (linhas_concursos[l] !== null) {
                linhas_concursos[l].style.display = null;

                colunas_tmp = linhas_concursos[l].getElementsByClassName("col");
                achou_destaque = "n";

                for (var col = 0; col < colunas_tmp.length; col++) {
                    if (colunas_tmp[col].classList.contains("destaque")) {
                        achou_destaque = "s";
                    }
                }

                if (achou_destaque === "n" && cbx_exibir.current !== null && cbx_exibir.current.checked === true && temDezenaSelecionada() === true) {
                    linhas_concursos[l].style.display = "none";
                }
            }
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por objetivo mostrar com destaque a linha selecionada, cujo link está na col_notificacoes
 */
export const verSorteio = (e) => {
    try {
        let concurso_encontrado;
        // let linha_encontrada;
        let colunas_tmp;
        for (let i = 0; i < linhas_concursos.length; i++) {
            linhas_concursos[i].classList.remove("destacar_linha");
            colunas_tmp = linhas_concursos[i].getElementsByClassName("col");
            if (colunas_tmp[0].innerText === e.target.ariaLabel && colunas_tmp[0].ariaLabel === "concurso") {
                concurso_encontrado = linhas_concursos[i];
                // linha_encontrada = i + 1;
            }
        }

        concurso_encontrado.classList.add("destacar_linha");
        // window.scrollTo(0, (($("#div_concursos").outerHeight() / linhas_concursos.length) * linha_encontrada) - 35);
        concurso_encontrado.scrollIntoView({block: "center"});

        return true;
    } catch(e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por objetivo selecionar / "jogar" as dezenas do concurso selecionado / clicado na linha da coluna Núm
 */
export const selecionarConcurso = (e) => {
    try {
        let colunas_tmp;
        for (let lin = 0; lin < linhas_concursos.length; lin++) {
            linhas_concursos[lin].classList.remove("destacar_linha");
            colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");
            for (let col = 0; col < colunas_tmp.length; col++) {
                colunas_tmp[col].classList.remove("destaque");
            }
        }

        for (let i = 1; i < cbxs_dezena.length; i++) {
            cbxs_dezena[i].current.checked = false;
        }

        let linha_atual = e.target.parentNode;
        linha_atual.classList.add("destacar_linha");

        let cols_linha_atual = linha_atual.getElementsByClassName("col");
        for (let col = 0; col < cols_linha_atual.length; col++) {
            if (cols_linha_atual[col].ariaLabel === "dezena") {
                cbxs_dezena[cols_linha_atual[col].innerText].current.checked = true;
            }
        }

        localizarDezenas();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por objetivo selecionar uma dezena a partir da célula da div_concursos que tiver o atributo aria-label={"dezena"}
 */
export const selecionarDezena = (e) => {
    try {
        let cbx_tmp = cbxs_dezena[e.target.innerText].current;
        if (cbx_tmp.checked === true) {
            cbx_tmp.checked = false;
        } else {
            cbx_tmp.checked = true;
        }
        localizarDezenas();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade retornar os valores de uma matriz (arr) em ordem ascendente
 */
export const vSortAsc = (arr) => arr.sort((a, b) => a > b ? 1 : -1);

/**
 * Este método tem por finalidade retornar os valores de uma matriz (arr) em ordem ascendente
 */
export const vSortDesc = (arr) => arr.sort((a, b) => a < b ? 1 : -1);

/**
 * Esta é a classe default Resultados
 */
export default class Resultados extends Component {
    /**
     * Aqui são definidos os eventos/funções globais dos objetos do ambiente, após a renderização (mount) de todos os elementos.
     */
    componentDidMount() {

        /**
         * Aqui são verificadas as dezenas selecionadas carregadas na sessão
         */
        getCbxSession();

        /**
         * Aqui são destacados os números cujas dezenas selecionadas na jogatina
         */
        localizarDezenas();

        /**
         * Aqui é carregada a exibição dos números mais e menos sorteados
         */
        maisMenosSorteados();

        /**
         * Aqui é carregada a exibição dos números mais e menos atrasados
         */
        atrasosSorteios();

        /**
         * Aqui é carregada a exibição das probabilidades dos números
         */
        probabilidadesSorteios();

        /**
         * Aqui é carregada a exibição da média de intervado de repetições dos números
         */
        repeticoesDezenas();

        /**
         * Aqui é verificada qual a ordem de exibição dos números por sorteio carregada na sessão ordem_sorteio
         */
        verOrdem();

        /**
         * Aqui é definida a variável linhas_concursos que recebe a collection de elementos com a tag "row" que estão dentro do elemento div_concursos
         */
        linhas_concursos = div_concursos.current.getElementsByClassName('row');

    };

    render() {
        let ordem_sorteio = window.sessionStorage.getItem("ordem_sorteio");

        let dez1;
        let dez2;
        let dez3;
        let dez4;
        let dez5;
        let dez6;

        let dezenas_tmp;

        let rows = [];
        for (let i = 0; i < results.length; i++) {
            dezenas_tmp = [
                results[i].d1,
                results[i].d2,
                results[i].d3,
                results[i].d4,
                results[i].d5,
                results[i].d6
            ];

            switch (ordem_sorteio) {
                case "sorteio":
                    dez1 = dezenas_tmp[0];
                    dez2 = dezenas_tmp[1];
                    dez3 = dezenas_tmp[2];
                    dez4 = dezenas_tmp[3];
                    dez5 = dezenas_tmp[4];
                    dez6 = dezenas_tmp[5];
                    break;
                case "asc":
                    dezenas_tmp = vSortAsc(dezenas_tmp);
                    dez1 = dezenas_tmp[0];
                    dez2 = dezenas_tmp[1];
                    dez3 = dezenas_tmp[2];
                    dez4 = dezenas_tmp[3];
                    dez5 = dezenas_tmp[4];
                    dez6 = dezenas_tmp[5];
                    break;
                case "desc":
                    dezenas_tmp = vSortDesc(dezenas_tmp);
                    dez1 = dezenas_tmp[0];
                    dez2 = dezenas_tmp[1];
                    dez3 = dezenas_tmp[2];
                    dez4 = dezenas_tmp[3];
                    dez5 = dezenas_tmp[4];
                    dez6 = dezenas_tmp[5];
                    break;
                default:
                    dez1 = dezenas_tmp[0];
                    dez2 = dezenas_tmp[1];
                    dez3 = dezenas_tmp[2];
                    dez4 = dezenas_tmp[3];
                    dez5 = dezenas_tmp[4];
                    dez6 = dezenas_tmp[5];
            };

            rows.push(
                <Row
                    id={"linha_" + results[i].concurso}
                    key={i}
                >
                    <Col
                        id={"concurso_" + results[i].concurso}
                        title={"Clique aqui para selecionar / jogar este concurso"}
                        onClick={selecionarConcurso}
                        aria-label={"concurso"}
                    >
                        {results[i].concurso}
                    </Col>
                    <Col
                        id={"data_sorteio_" + results[i].concurso}
                        aria-label={"data_sorteio"}
                    >
                        {results[i].date}
                    </Col>
                    <Col
                        id={"dezena1_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez1}
                    </Col>
                    <Col
                        id={"dezena2_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez2}
                    </Col>
                    <Col
                        id={"dezena3_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez3}
                    </Col>
                    <Col
                        id={"dezena4_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez4}
                    </Col>
                    <Col
                        id={"dezena5_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez5}
                    </Col>
                    <Col
                        id={"dezena6_" + results[i].concurso}
                        aria-label={"dezena"}
                        onClick={selecionarDezena}
                        title={"Clique aqui para selecionar / jogar este número"}
                    >
                        {dez6}
                    </Col>
                </Row>
            );
        };

        let ordenar = window.sessionStorage.getItem("ordenar");
        switch (ordenar) {
            case "asc":
                rows = rows.reverse();
                break;
            default:
                // rows = rows;
                ordenar = "desc";
                window.sessionStorage.setItem("ordenar", "desc");
        };

        let limitar = parseInt(window.sessionStorage.getItem("limitar"));
        switch (true) {
            case limitar > 0:
                rows.length = limitar;
                break;
            default:
                // rows.length = rows.length;
                limitar = 0;
                window.sessionStorage.setItem("limitar", 0);
        };

        return (
            <React.StrictMode>
                <div
                    className={"resultados"}
                >
                    <Container
                        id={"linha_titulos"}
                        ref={linha_titulos}
                    >
                        <Row>
                            <Col
                                id={"concurso"}
                                ref={concurso}
                                aria-label={"titulo"}
                            >
                                Núm
                            </Col>
                            <Col
                                id={"data_sorteio"}
                                ref={data_sorteio}
                                aria-label={"titulo"}
                            >
                                Data
                            </Col>
                            <Col 
                                id={"dezena1"}
                                ref={dezena1}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D1
                            </Col>
                            <Col 
                                id={"dezena2"}
                                ref={dezena2}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D2
                            </Col>
                            <Col 
                                id={"dezena3"}
                                ref={dezena3}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D3
                            </Col>
                            <Col 
                                id={"dezena4"}
                                ref={dezena4}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D4
                            </Col>
                            <Col 
                                id={"dezena5"}
                                ref={dezena5}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D5
                            </Col>
                            <Col 
                                id={"dezena6"}
                                ref={dezena6}
                                aria-label={"titulo"}
                                className={"dezenas_titulo"}
                            >
                                D6
                            </Col>
                        </Row>
                    </Container>
                    <Container
                        // fluid
                        id={"div_concursos"}
                        ref={div_concursos}
                        className={"grid-striped"}
                    >
                        {rows}
                    </Container>
                </div>
            </React.StrictMode>
        );
    }
};