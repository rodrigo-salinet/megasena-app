import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    cbx_exibir,
    div_tbl_notificacoes,
    txt_limit
} from './notificacoes';

/**
 * Este método tem por objetivo 
 */

// Self-invoking function
// ( () => {
//     // do something here
//     })()

// export class NewCols extends Component {
//     render() {
//         const { celula_concurso_tmp , verSorteio , txt_tmp } = this.props;

//         return (
//             <React.Fragment>
//                 <Col
//                     className={"col-md-auto"}
//                 >
//                     {txt_tmp}
//                 </Col>
//                 <Col
//                     onClick={verSorteio}
//                     className={"col-sm-1 m-0 p-0"}
//                     role={"button"}
//                     title={"Clique aqui para ver o concurso."}
//                 >
//                     {celula_concurso_tmp.innerText}
//                 </Col>
//             </React.Fragment>
//         );
//     }
// };

// export const state = {
//     /**
//      * Aqui são definidas as variáveis globais do ambiente.
//      */
//     destacar_celulas: [],

//     get_vars: "/?a=" + parseInt(Math.random() * 9999)
// };

// /**
//  * retorna o valor da variável 'ordenar' GET da url
//  */
// export const getOrdenar = (e) => {
//     try {
//         let $_GET = {};

//         if (document.location.toString().indexOf('?') !== -1) {
//             let query = document.location
//                 .toString()
//                 // get the query string
//                 .replace(/^.*?\?/, '')
//                 // and remove any existing hash string (thanks, @vrijdenker)
//                 .replace(/#.*$/, '')
//                 .split('&');

//             let l = query.length;
//             for (let i = 0; i < l; i++) {
//                 var aux = decodeURIComponent(query[i]).split('=');
//                 $_GET[aux[0]] = aux[1];
//             }
//         }

//         //return the 'obj' query parameter
//         return $_GET['ordenar'];
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * retorna o valor da variável 'ordenar' GET da url
//  */
// export const getLimitar = (e) => {
//     try {
//         let $_GET = {};

//         if (document.location.toString().indexOf('?') !== -1) {
//             let query = document.location
//                 .toString()
//                 // get the query string
//                 .replace(/^.*?\?/, '')
//                 // and remove any existing hash string (thanks, @vrijdenker)
//                 .replace(/#.*$/, '')
//                 .split('&');

//             let l = query.length;
//             for (let i = 0; i < l; i++) {
//                 var aux = decodeURIComponent(query[i]).split('=');
//                 $_GET[aux[0]] = aux[1];
//             }
//         }

//         //return the 'obj' query parameter
//         return $_GET['limitar'];
//     } catch (e) {
//         return e.message;
//     }
// };

// export const setAsc = (e) => {
//     try {
//         let limitar = getLimitar();

//         let get_vars = state.get_vars;
//         get_vars += "&ordenar=asc";
//         (limitar !== undefined) ? get_vars += "&limitar=" + limitar : get_vars += "&limitar=0";

//         window.history.pushState("_self", "Jogar", get_vars);
//         window.location.reload();

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// export const setDesc = (e) => {
//     try {
//         let limitar = getLimitar();

//         let get_vars = state.get_vars;
//         get_vars += "&ordenar=desc";
//         (limitar > 0) ? get_vars += "&limitar=" + limitar : get_vars += "&limitar=0";

//         window.history.pushState("_self", "Jogar", get_vars);
//         window.location.reload();

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * este método tem por objetivo remover todas as classe "destaque" de css
//  */
// export const removerDestaques = (e) => {
//     try {
//         let linha_atual;
//         let colunas_tmp;
//         let col_tmp;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         // este loop retira os destaques de todas as células antes de fazer a verificação completa
//         for (var l = 1; l < linhas_concursos.length; l++) { // função que contabiliza as linhas dos sorteios
//             linha_atual = document.getElementById(linhas_concursos[l].id); // variável que recebe o objeto da linha atual do marcador [l]
//             if (linha_atual != null) { // função que valida se a linha atual não for nula
//                 colunas_tmp = linha_atual.getElementsByClassName("col"); // variável que recebe temporariamente as células/colunas da linha atual do marcador [l]}
//                 for (var col = 0; col < colunas_tmp.length; col++) { // função que contabiliza as células/colunas da linha do marcador [col] atual
//                     col_tmp = document.getElementById(colunas_tmp[col].id); // aqui seleciona a coluna atual da linha atual
//                     if (col_tmp.id.indexOf("dezena") > -1) {
//                         col_tmp.classList.remove("destaque");
//                     }
//                 }
//             }
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * este método tem por objetivo adicionar em todas as células definidas na matriz estacar_celulas" a classe "destaque" de css
//  */
// export const adicionarDestaques = (e) => {
//     try {
//         let destacar_celulas = state.destacar_celulas;
//         // este loop adiciona os destaques de todas as células inseridas na matriz "destacar_celulas"
//         for (let d = 0; d < destacar_celulas.length; d++) { // função que contabiliza os índices da matriz "destacar_celulas"
//             document.getElementById(destacar_celulas[d]).classList.add("destaque"); // aqui define a classe css "destaque" no índice da matriz "destacar_celulas" do marcador [d]
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * este método tem por objetivo localizar as 6 dezenas de acordo com o que estiver digitado nos campos Dezena1, Dezena2, Dezena3, Dezena4, Dezena5, e Dezena6.
//  */
// export const localizarDezenas = (e) => {
//     try {
//         document.getElementById("div_txt_notificacoes").innerText = "";
//         let celula_dezena_tmp;
//         let cbx_dezena_tmp;
//         let linha_tmp;
//         let celula_concurso_tmp;
//         let colunas_tmp;

//         state.destacar_celulas = [];
//         let destacar_celulas = state.destacar_celulas;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         for (let lin = 0; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
//             linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]

//             if (linha_tmp != null) { // função que valida se a linha atual não for nula
//                 colunas_tmp = linha_tmp.getElementsByClassName("col");
//                 if (colunas_tmp != null) {
//                     celula_concurso_tmp = document.getElementById("concurso_" + colunas_tmp[0].innerText);
//                 }

//                 for (let dez = 1; dez <= 6; dez++) { // loop que contabiliza as 6 células/colunas da linha do marcador [dez]
//                     if (celula_concurso_tmp != null) {
//                         celula_dezena_tmp = document.getElementById("dezena" + dez + "_" + celula_concurso_tmp.innerText); // variável que recebe o objeto da celula atual do marcador [dez] e do celula_concurso_tmp.innerText
//                     } else { continue; }

//                     for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) { // loop que contabiliza os 6 campos/inputs do marcador [dez_tmp]

//                         cbx_dezena_tmp = document.getElementById("cbx_dezena" + dez_tmp); // variável que recebe o objeto do checkbox da dezena temporária do marcador [dez_tmp]

//                         window.sessionStorage.removeItem(cbx_dezena_tmp.id);
//                         if (cbx_dezena_tmp.checked === true) { // valida se o checkbox da respectiva dezena (dez_tmp) está selecionado

//                             window.sessionStorage.setItem(cbx_dezena_tmp.id, "checked");
//                             if (parseInt(celula_dezena_tmp.innerText) === dez_tmp) {
//                                 // eslint-disable-next-line
//                                 if (destacar_celulas.findIndex((element) => element === celula_dezena_tmp.id) < 0) { // valida se não encontrou algum id de célula já adicionado no índice da matriz "destacar_celulas"
//                                     destacar_celulas.push(celula_dezena_tmp.id); // adiciona o id da célula no índice da matriz "destacar_celulas"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//         removerDestaques();
//         adicionarDestaques();
//         ocultarExibirLinhas();
//         // quantificarDestaques();

//         // buscaJogos();

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// export const getCbxSession = (e) => {
//     try {
//         let cbx_session_tmp;
//         let cbx_dezena_tmp;

//         for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) { // loop que contabiliza os 6 campos/inputs do marcador [dez_tmp]
//             cbx_dezena_tmp = document.getElementById("cbx_dezena" + dez_tmp); // variável que recebe o objeto do checkbox da dezena temporária do marcador [dez_tmp]

//             cbx_session_tmp = window.sessionStorage.getItem(cbx_dezena_tmp.id.toString());
//             if (cbx_session_tmp === "checked") {
//                 cbx_dezena_tmp.checked = true;
//             }
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// export const ocultarExibirLinhas = (e) => {
//     try {
//         let achou_destaque = "n";
//         let linha_atual;
//         let colunas_tmp;
//         let col_tmp;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos

//         for (var l = 1; l < linhas_concursos.length; l++) { // função que contabiliza as linhas dos sorteios
//             linha_atual = document.getElementById(linhas_concursos[l].id); // variável que recebe o objeto da linha atual do marcador [l]

//             if (linha_atual !== null) { // função que valida se a linha atual não for nula
//                 linha_atual.style.display = null; // ação para exibir linha
//                 // linha_atual.removeProperty('display'); // ação para exibir linha

//                 colunas_tmp = linha_atual.getElementsByClassName("col"); // variável que recebe temporariamente as células/colunas da linha atual do marcador [l]}
//                 achou_destaque = "n";

//                 for (var col = 0; col < colunas_tmp.length; col++) { // função que contabiliza as células/colunas da linha do marcador [col] atual
//                     col_tmp = document.getElementById(colunas_tmp[col].id); // aqui seleciona a coluna atual da linha atual
//                     if (col_tmp.classList.contains("destaque")) {
//                         achou_destaque = "s";
//                     }
//                 }

//                 let cbx_exibir = document.getElementById('cbx_exibir'); // variável cbx_exibir
//                 if (achou_destaque === "n" && cbx_exibir.checked === true && temDezenaSelecionada() === true) {
//                     linha_atual.style.display = "none"; // ação para ocultar linha
//                 }
//             }
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade buscar o sorteio de jogos (sena, quina e quadra), conforme 4 ou mais dezenas selecionadas
//  */
// export const buscaJogos = (e) => {
//     try {
//         let linha_tmp;
//         let celula_dezena1_tmp;
//         let celula_dezena2_tmp;
//         let celula_dezena3_tmp;
//         let celula_dezena4_tmp;
//         let celula_dezena5_tmp;
//         let celula_dezena6_tmp;
//         let celulas_tmp = [];
//         let dezenas = [];
//         let celula_concurso_tmp;
//         let colunas_tmp;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         let div_txt_notificacoes = document.getElementById('div_txt_notificacoes'); // variável div_txt_notificacoes

//         for (let lin = 1; lin < linhas_concursos.length; lin++) { // loop que contabiliza as linhas dos sorteios do marcador [lin]
//             linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]

//             if (linha_tmp !== null) {
//                 colunas_tmp = linha_tmp.getElementsByClassName("col");
//                 celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
//                 celula_dezena1_tmp = document.getElementById("dezena1_" + celula_concurso_tmp.innerText);
//                 celula_dezena2_tmp = document.getElementById("dezena2_" + celula_concurso_tmp.innerText);
//                 celula_dezena3_tmp = document.getElementById("dezena3_" + celula_concurso_tmp.innerText);
//                 celula_dezena4_tmp = document.getElementById("dezena4_" + celula_concurso_tmp.innerText);
//                 celula_dezena5_tmp = document.getElementById("dezena5_" + celula_concurso_tmp.innerText);
//                 celula_dezena6_tmp = document.getElementById("dezena6_" + celula_concurso_tmp.innerText);

//                 if (celula_dezena1_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena1_tmp.id);
//                     dezenas.push(celula_dezena1_tmp.innerText);
//                 }
//                 if (celula_dezena2_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena2_tmp.id);
//                     dezenas.push(celula_dezena2_tmp.innerText);
//                 }
//                 if (celula_dezena3_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena3_tmp.id);
//                     dezenas.push(celula_dezena3_tmp.innerText);
//                 }
//                 if (celula_dezena4_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena4_tmp.id);
//                     dezenas.push(celula_dezena4_tmp.innerText);
//                 }
//                 if (celula_dezena5_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena5_tmp.id);
//                     dezenas.push(celula_dezena5_tmp.innerText);
//                 }
//                 if (celula_dezena6_tmp.classList.contains("destaque") === true) {
//                     celulas_tmp.push(celula_dezena6_tmp.id);
//                     dezenas.push(celula_dezena6_tmp.innerText);
//                 }

//                 if (celulas_tmp.length === 6) {
//                     let txt_tmp = "Achou sena (" + dezenas.toString() + ") de " + colunas_tmp[1].innerText + " no concurso ";
//                     let new_row_tmp = document.createElement("div");
//                     new_row_tmp.className = "justify-content-md-left row";
//                     let last_row = div_txt_notificacoes.appendChild(new_row_tmp);
//                     let root_last_row = ReactDOM.createRoot(last_row);

//                     root_last_row.render(
//                         <NewCols
//                             celula_concurso_tmp={celula_concurso_tmp}
//                             verSorteio={verSorteio}
//                             txt_tmp={txt_tmp}
//                         />
//                     );
//                 }
//                 if (celulas_tmp.length === 5) {
//                     let txt_tmp = "Achou quina (" + dezenas.toString() + ") de " + colunas_tmp[1].innerText + " no concurso ";
//                     let new_row_tmp = document.createElement("div");
//                     new_row_tmp.className = "justify-content-md-left row";
//                     let last_row = div_txt_notificacoes.appendChild(new_row_tmp);
//                     let root_last_row = ReactDOM.createRoot(last_row);

//                     root_last_row.render(
//                         <NewCols
//                             celula_concurso_tmp={celula_concurso_tmp}
//                             verSorteio={verSorteio}
//                             txt_tmp={txt_tmp}
//                         />
//                     );
//                 }
//                 if (celulas_tmp.length === 4) {
//                     let txt_tmp = "Achou quadra (" + dezenas.toString() + ") de " + colunas_tmp[1].innerText + " no concurso ";
//                     let new_row_tmp = document.createElement("div");
//                     new_row_tmp.className = "justify-content-md-left row";
//                     let last_row = div_txt_notificacoes.appendChild(new_row_tmp);
//                     let root_last_row = ReactDOM.createRoot(last_row);

//                     root_last_row.render(
//                         <NewCols
//                             celula_concurso_tmp={celula_concurso_tmp}
//                             verSorteio={verSorteio}
//                             txt_tmp={txt_tmp}
//                         />
//                     );
//                 }

//                 celulas_tmp = [];
//                 celulas_tmp.length = 0;
//                 dezenas = [];
//                 dezenas.length = 0;
//             }
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade identificar todos os inputs da linha #campos e retornar true se todos os campos estiverem vazios
//  */
// export const temDezenaSelecionada = (e) => {
//     try {
//         let cbx_tmp;

//         for (let d = 1; d <= 60; d++) {
//             cbx_tmp = document.getElementById("cbx_dezena" + d);
//             if (cbx_tmp.checked) {
//                 return true;
//             }
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade mostrar com destaque a linha selecionada
//  */
// export const verSorteio = (e) => {
//     try {
//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         let lin_tmp;
//         for (let i = 0; i < linhas_concursos.length; i++) {
//             lin_tmp = document.getElementById(linhas_concursos[i].id);
//             lin_tmp.classList.remove("destacar_linha");
//         }

//         let linha_tmp = document.getElementById("linha_" + e.target.innerText);
//         linha_tmp.classList.add("destacar_linha");
//         let linha_superior_tmp = document.getElementById("linha_" + (parseInt(e.target.innerText) + 1));
//         if (linha_superior_tmp) {
//             window.open("#linha_" + (parseInt(e.target.innerText) + 1), "_self");
//         } else {
//             window.open("#linha_titulos", "_self");
//         }
//     } catch(e) {
//         console.log(e);
//     }
// };

// /**
//  * Este método tem por finalidade exibir na div_destaques a quantidade de células destacadas
//  */
// export const quantificarDestaques = (e) => {
//     try {
//         let div_destaques = document.getElementById('div_destaques'); // variável div_destaques
//         div_destaques.innerText = "0";
//         let class_destaques = document.getElementsByClassName("destaque");
//         if (class_destaques.length > 0) {
//             div_destaques.innerText = class_destaques.length;
//             return true;
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade exibir as dezenas mais e menos sorteadas por ordem da quantidade de sorteios
//  */
// export const maisMenosSorteados = (e) => {
//     try {
//         let dezenas = [];
//         for (let dez = 1; dez <= 60; dez++) {
//             dezenas[dez] = 0;
//         }

//         let linha_tmp;
//         let colunas_tmp;
//         let celula_concurso_tmp;
//         let celula_dezena_tmp;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         for (let lin = 0; lin < linhas_concursos.length; lin++) {
//             linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
//             if (linha_tmp != null) {
//                 colunas_tmp = linha_tmp.getElementsByClassName("col");
//                 celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
//                 for (let d = 1; d <= 6; d++) {
//                     celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerText);
//                     if (celula_dezena_tmp != null) {
//                         for (let dez = 1; dez <= 60; dez++) {
//                             if (dez === parseInt(celula_dezena_tmp.innerText)) {
//                                 dezenas[dez] += 1;
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//         let col_qtd_dezena_tmp;
//         for (let dez = 1; dez < dezenas.length; dez++) {
//             col_qtd_dezena_tmp = document.getElementById("col_qtd_dezena" + dez);
//             col_qtd_dezena_tmp.innerText = dezenas[dez];
//         }

//         let dezena_maior;
//         let dezena_tmp;
//         let dezenas_mais_sorteadas = [];
//         let dezenas_tmp = dezenas;

//         for (let dez = 1; dez <= 60; dez++) {
//             dezena_tmp = 1;
//             dezena_maior = dezenas_tmp[dezena_tmp];
//             if (dezena_maior === undefined) {
//                 for (let min = 1; min <= 60; min++) {
//                     if (dezenas_tmp[min] !== undefined) {
//                         dezena_tmp = min;
//                         break;
//                     }
//                 }
//                 dezena_maior = dezenas_tmp[dezena_tmp];
//             }

//             for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
//                 if (dezenas_tmp[dez_tmp] !== undefined && dezena_maior < dezenas_tmp[dez_tmp]) {
//                     dezena_tmp = dez_tmp;
//                 }
//                 dezena_maior = dezenas_tmp[dezena_tmp];
//             }

//             if (dez <= 6) {
//                 document.getElementById("col_qtd_dezena" + dezena_tmp).classList.add("mais_sorteados");
//             }

//             if (dez >= 55) {
//                 document.getElementById("col_qtd_dezena" + dezena_tmp).classList.add("menos_sorteados");
//             }

//             dezenas_mais_sorteadas[dez] = "dezena" + dezena_tmp + ":" + dezena_maior;

//             dezenas_tmp[dezena_tmp] = undefined;
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade exibir as dezenas mais atrasadas
//  */
// export const atrasosSorteios = (e) => {
//     try {
//         let dezenas = [];
//         for (let dez = 1; dez <= 60; dez++) {
//             dezenas[dez] = 0;
//         }

//         let celula_dezena_tmp;
//         let linha_tmp;
//         let colunas_tmp;
//         let celula_concurso_tmp;
//         let celula_tmp;

//         let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//         let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//         let ordenar = state.ordenar;
//         for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
//             if (ordenar === "asc") {
//                 for (let lin = 0; lin < linhas_concursos.length; lin++) {
//                     linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
//                     if (linha_tmp != null) {
//                         colunas_tmp = linha_tmp.getElementsByClassName("col");
//                         celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
//                         dezenas[dez_tmp] += 1;
//                         for (let d = 1; d <= 6; d++) {
//                             celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerText);
//                             if (celula_dezena_tmp != null) {
//                                 if (parseInt(celula_dezena_tmp.innerText) === dez_tmp) {
//                                     dezenas[dez_tmp] = 0;
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             } else {
//                 for (let lin = (linhas_concursos.length - 1); lin >= 0; lin--) {
//                     linha_tmp = document.getElementById(linhas_concursos[lin].id); // variável que recebe o objeto da linha atual do marcador [lin]
//                     if (linha_tmp !== null) {
//                         colunas_tmp = linha_tmp.getElementsByClassName("col");
//                         celula_concurso_tmp = document.getElementById(colunas_tmp[0].id);
//                         dezenas[dez_tmp] += 1;
//                         for (let d = 1; d <= 6; d++) {
//                             celula_dezena_tmp = document.getElementById("dezena" + d + "_" + celula_concurso_tmp.innerText);
//                             if (celula_dezena_tmp !== null) {
//                                 if (parseInt(celula_dezena_tmp.innerText) === dez_tmp) {
//                                     dezenas[dez_tmp] = 0;
//                                     break;
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }

//             celula_tmp = document.getElementById("col_atraso_dezena" + dez_tmp);
//             celula_tmp.innerText = dezenas[dez_tmp];
//         }


//         let dezena_maior;
//         let dezena_tmp;
//         let dezenas_mais_sorteadas = [];
//         let dezenas_tmp = dezenas;

//         for (let dez = 1; dez <= 60; dez++) {
//             dezena_tmp = 1;
//             dezena_maior = dezenas_tmp[dezena_tmp];
//             if (dezena_maior === undefined) {
//                 for (let min = 1; min <= 60; min++) {
//                     if (dezenas_tmp[min] !== undefined) {
//                         dezena_tmp = min;
//                         break;
//                     }
//                 }
//                 dezena_maior = dezenas_tmp[dezena_tmp];
//             }

//             for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
//                 if (dezenas_tmp[dez_tmp] !== undefined && dezena_maior < dezenas_tmp[dez_tmp]) {
//                     dezena_tmp = dez_tmp;
//                 }
//                 dezena_maior = dezenas_tmp[dezena_tmp];
//             }

//             if (dez <= 6) {
//                 document.getElementById("col_atraso_dezena" + dezena_tmp).classList.add("mais_sorteados");
//             }

//             if (dez >= 55) {
//                 document.getElementById("col_atraso_dezena" + dezena_tmp).classList.add("menos_sorteados");
//             }

//             dezenas_mais_sorteadas[dez] = "dezena" + dezena_tmp + ":" + dezena_maior;

//             dezenas_tmp[dezena_tmp] = undefined;
//         }

//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

// /**
//  * Este método tem por finalidade exibir aleatoriamente uma probabilidade (Math.random()) das dezenas
//  */
// export const probabilidadesSorteios = (e) => {
//     try {
//         let aleatorio_tmp;
//         let col_probabilidade_tmp;
//         let combinacoes_possiveis = 8343977; // 50.063.860 é a quantidade total de combinações possíveis para uma aposta de 6 dezenas (esta quantidade total dividida por 6 é igual a 8343976,66)
//         let numero_maximo = 60;

//         for (let dez_tmp = 1; dez_tmp <= numero_maximo; dez_tmp++) {
//             for (let i = 1; i <= combinacoes_possiveis; i++) {
//                 aleatorio_tmp = Math.floor(Math.random() * 61); // Por algum motivo tive que colocar 61 aqui, pois náo atinge o número máximo, ou seja, sempre vai atingir o número máximo do total - 1
//                 if (parseInt(aleatorio_tmp) === dez_tmp) {
//                     col_probabilidade_tmp = document.getElementById("col_probabilidade_dezena" + dez_tmp);
//                     col_probabilidade_tmp.innerText = i;
//                     col_probabilidade_tmp.title = parseInt(i / (numero_maximo / 100)) + "%";
//                     break;
//                 }
//             }
//         }
//         return true;
//     } catch (e) {
//         return e.message;
//     }
// };

/**
 * Este método tem por finalidade sugerir uma aposta de 6 a 20 números
 */
export const sugestaoAposta = () => {
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

    return true;
};

// /**
//  * Este método tem por finalidade exibir uma média de vezes que um número foi repetido
//  */
// export const repeticoesDezenas = () => {
//     let dezenas = [];
//     let linha_tmp;
//     let col_tmp;
//     let achou_dezena;
//     let colunas_tmp;

//     let div_concursos = document.getElementById('div_concursos'); // variável div_concursos
//     let linhas_concursos = div_concursos.getElementsByClassName('row'); // variável linhas da seção div_concursos
//     for (let dez = 1; dez <= 60; dez++) {
//         dezenas[dez] = [];
//         for (let lin = 0; lin < linhas_concursos.length; lin++) {
//             linha_tmp = document.getElementById(linhas_concursos[lin].id);
//             colunas_tmp = linha_tmp.getElementsByClassName("col");
//             achou_dezena = 0;  // 0 para não achou dezena
//             for (let col = 1; col <= 6; col++) {
//                 col_tmp = document.getElementById("dezena" + col + "_" + colunas_tmp[0].innerText);
//                 if (col_tmp != null) {
//                     if (dez === parseInt(col_tmp.innerText)) {
//                         achou_dezena = 1; // 1 para achou dezena
//                         break;
//                     }
//                 }
//             }
//             dezenas[dez].push(achou_dezena);
//         }
//     }

//     let intervalos = [];
//     let intervalo_tmp = 0;
//     for (let dez = 1; dez <= 60; dez++) {
//         intervalos[dez] = [];
//         intervalo_tmp = 0;
//         for (let i = 0; i < dezenas[dez].length; i++) {
//             intervalo_tmp++;
//             if (parseInt(dezenas[dez][i]) === 1) {
//                 intervalos[dez].push(intervalo_tmp);
//                 intervalo_tmp = 0;
//             }
//         }
//     }

//     let soma_dezena_tmp = [];
//     let dezena_tmp;
//     for (let dez = 1; dez <= 60; dez++) {
//         soma_dezena_tmp[dez] = 0;
//         if (intervalos[dez].length === 0) { continue; }
//         for (let i = 0; i < intervalos[dez].length; i++) {
//             soma_dezena_tmp[dez] += intervalos[dez][i];
//         }
//         dezena_tmp = document.getElementById("col_repeticoes_dezena" + dez);
//         dezena_tmp.innerText = parseInt(soma_dezena_tmp[dez] / intervalos[dez].length);
//         dezena_tmp.title = soma_dezena_tmp[dez];
//     }
// };

// export const increaseLimit = () => {
//     if (parseInt(txt_limit.current.value) < 9999) {
//         txt_limit.current.value = parseInt(txt_limit.current.value) + 1;
//     } else if (txt_limit.current.value === "") {
//         txt_limit.current.value = 1;
//     }
// };

// export const decreaseLimit = () => {
//     (parseInt(txt_limit.current.value) > 0) ? txt_limit.current.value = parseInt(txt_limit.current.value) - 1 : txt_limit.current.value = 0;
// };

// export const limitarConcursos = () => {
//     let ordenar = getOrdenar();

//     let get_vars = state.get_vars;
//     (ordenar !== undefined) ? get_vars += "&ordenar=" + ordenar : get_vars += "&ordenar=desc";
//     get_vars += "&limitar=" + txt_limit.current.value;

//     window.history.pushState("_self", "Jogar", get_vars);
//     window.location.reload();
//     return true;
// };
