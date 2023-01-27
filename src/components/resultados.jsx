import React, { Component } from 'react';
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
    buscaJogos
} from './notificacoes';
import {
    cbxs_dezena,
    temDezenaSelecionada
} from './jogatina';

/**
 * Elements from resultados.jsx
 */
export const div_concursos = React.createRef();
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


        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
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

        let linhas_concursos = div_concursos.current.getElementsByClassName('row');

        for (var l = 1; l < linhas_concursos.length; l++) {
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
        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
        for (let i = 0; i < linhas_concursos.length; i++) {
            linhas_concursos[i].classList.remove("destacar_linha");
        }

        let indicador = parseInt(e.target.ariaLabel);
        if (window.sessionStorage.getItem("ordenar") !== "asc") {
            indicador = linhas_concursos.length - indicador;
        }

        linhas_concursos[indicador].classList.add("destacar_linha");
        linhas_concursos[indicador].scrollIntoView({ block : 'center' });

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
        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
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
            // console.log(dezenas_tmp.sort((a,b) => a.dezenas_tmp - b.dezenas_tmp));

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
                rows = rows;
                ordenar = "desc";
                window.sessionStorage.setItem("ordenar", "desc");
        };

        let limitar = parseInt(window.sessionStorage.getItem("limitar"));
        switch (true) {
            case limitar > 0:
                rows.length = limitar;
                break;
            default:
                rows.length = rows.length;
                limitar = 0;
                window.sessionStorage.setItem("limitar", 0);
        };

        return (
            <React.StrictMode>
                <Container fluid
                    id={"div_concursos"}
                    ref={div_concursos}
                    className={"grid-striped"}
                >
                    <Row 
                        id={"linha_titulos"}
                        ref={linha_titulos}
                    >
                        <Col
                            id={"concurso"}
                            ref={concurso}
                            aria-label={"titulo"}
                        >
                            <b
                                onClick={setAsc}
                                title={"Clique aqui para ordenar esta coluna em ordem ascendente"}
                            >
                                ↓
                            </b>
                            <span
                                title={window.sessionStorage.getItem("ordenar")}
                            >
                                Núm
                            </span>
                            <b
                                onClick={setDesc}
                                title={"Clique aqui para ordenar esta coluna em ordem descendente"}
                            >
                                ↑
                            </b>
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
                        >
                            D1
                        </Col>
                        <Col 
                            id={"dezena2"}
                            ref={dezena2}
                            aria-label={"titulo"}
                        >
                            D2
                        </Col>
                        <Col 
                            id={"dezena3"}
                            ref={dezena3}
                            aria-label={"titulo"}
                        >
                            D3
                        </Col>
                        <Col 
                            id={"dezena4"}
                            ref={dezena4}
                            aria-label={"titulo"}
                        >
                            D4
                        </Col>
                        <Col 
                            id={"dezena5"}
                            ref={dezena5}
                            aria-label={"titulo"}
                        >
                            D5
                        </Col>
                        <Col 
                            id={"dezena6"}
                            ref={dezena6}
                            aria-label={"titulo"}
                        >
                            D6
                        </Col>
                    </Row>
                    {rows}
                </Container>
            </React.StrictMode>
        );
    }
};