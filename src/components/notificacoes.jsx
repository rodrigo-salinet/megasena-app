import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './notificacoes.css';
import {
    verSorteio,
    div_concursos,
    ocultarExibirLinhas,
    localizarDezenas
} from './resultados';
import {
    getCbxSession,
    maisMenosSorteados,
    atrasosSorteios,
    probabilidadesSorteios,
    repeticoesDezenas,
    desselecionarDezenas
} from './jogatina';

/**
 * Elements from notificacoes.jsx
 */
export const div_tbl_notificacoes = React.createRef();
export const linha_destaques_limitar = React.createRef();

export const col_destaques = React.createRef();

export const div_exibir_destaques = React.createRef();
export const cbx_exibir = React.createRef();
export const lbl_cbx_exibir = React.createRef();
export const div_destaques = React.createRef();

export const col_div_limitar = React.createRef();
export const div_limitar = React.createRef();

export const btn_decrease_limit = React.createRef();
export const txt_limit = React.createRef();
export const btn_increase_limit = React.createRef();

export const col_btn_desselecionar_dezenas = React.createRef();
export const btn_desselecionar_dezenas = React.createRef();

export const col_ordem_sorteio = React.createRef();
export const rdg_por_sorteio = React.createRef();
export const rdg_ascendente = React.createRef();
export const rdg_descendente = React.createRef();

export const col_quadra = React.createRef();
export const dropdown_quadra = React.createRef();

export const col_quina = React.createRef();
export const dropdown_quina = React.createRef();

export const col_sena = React.createRef();
export const dropdown_sena = React.createRef();

export const linha_notificacoes = React.createRef();
export const col_notificacoes = React.createRef();

export var root_last_row;

/**
 * Functions/Methods from notificacoes.jsx
 */

/**
 * Este método tem por finalidade buscar o sorteio de jogos (sena, quina e quadra), conforme 4 ou mais dezenas selecionadas
 */
export const buscaJogos = (e) => {
    try {
        let dezenas = [];
        let colunas_tmp;
        let arr_quadra = [];
        let arr_quina = [];
        let arr_sena = [];

        let linhas_concursos = div_concursos.current.getElementsByClassName('row');

        for (let lin = 1; lin < linhas_concursos.length; lin++) {
            if (linhas_concursos[lin] !== null) {
                colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");

                for (let col = 0; col < colunas_tmp.length; col++) {
                    if (colunas_tmp[col].classList.contains("destaque") === true && colunas_tmp[col].ariaLabel === "dezena") {
                        dezenas.push(colunas_tmp[col].innerText);
                    }
                }

                switch (dezenas.length) {
                    case 6:
                        arr_sena.push(
                            [
                                colunas_tmp[0].innerText,
                                "Concurso: "
                                + colunas_tmp[0].innerText
                                + " em "
                                + colunas_tmp[1].innerText,
                                dezenas.toString()
                            ]
                        );
                        break;

                    case 5:
                        // txt_tmp = "Achou quina (" + dezenas.toString() + ") de " + colunas_tmp[1].innerText + " no concurso ";
                        arr_quina.push(
                            [
                                colunas_tmp[0].innerText,
                                "Concurso: "
                                + colunas_tmp[0].innerText
                                + " em "
                                + colunas_tmp[1].innerText,
                                dezenas.toString()
                            ]
                            // <Row>
                            //     <Col
                            //         className={"col-md-auto"}
                            //     >
                            //         {txt_tmp}
                            //     </Col>
                            //     <Col
                            //         onClick={verSorteio}
                            //         className={"col-sm-1 m-0 p-0"}
                            //         role={"button"}
                            //         title={"Clique aqui para ver o concurso."}
                            //     >
                            //         {colunas_tmp[0].innerText}
                            //     </Col>
                            // </Row>
                        );
                        break;

                    case 4:
                        // txt_tmp = "Achou quadra (" + dezenas.toString() + ") de " + colunas_tmp[1].innerText + " no concurso ";
                        arr_quadra.push(
                            [
                                colunas_tmp[0].innerText,
                                "Concurso: "
                                + colunas_tmp[0].innerText
                                + " em "
                                + colunas_tmp[1].innerText,
                                dezenas.toString()
                            ]
                            // <Row>
                            //     <Col
                            //         className={"col-md-auto"}
                            //     >
                            //         {txt_tmp}
                            //     </Col>
                            //     <Col
                            //         onClick={verSorteio}
                            //         className={"col-sm-1 m-0 p-0"}
                            //         role={"button"}
                            //         title={"Clique aqui para ver o concurso."}
                            //     >
                            //         {colunas_tmp[0].innerText}
                            //     </Col>
                            // </Row>
                        );
                        break;
                }

                dezenas = [];
                dezenas.length = 0;
            }
        }

        col_quadra.current.innerHTML = null;
        if (arr_quadra.length > 0) {
            ReactDOM.createRoot(col_quadra.current).render(
                <React.StrictMode>
                    <NewQuadra
                        arr_quadra={arr_quadra}
                    />
                </React.StrictMode>
            );
        }

        col_quina.current.innerHTML = null;
        if (arr_quina.length > 0) {
            ReactDOM.createRoot(col_quina.current).render(
                <React.StrictMode>
                    <NewQuina
                        arr_quina={arr_quina}
                    />
                </React.StrictMode>
            );
        }

        col_sena.current.innerHTML = null;
        if (arr_sena.length > 0) {
            ReactDOM.createRoot(col_sena.current).render(
                <React.StrictMode>
                    <NewSena
                        arr_sena={arr_sena}
                    />
                </React.StrictMode>
            );
        }

        // (() => {
            // ReactDOM.createRoot(col_notificacoes.current).render(
            //     <React.StrictMode>
            //         <NewCols
            //             linhas_notificacoes={linhas_notificacoes}
            //         />
            //     </React.StrictMode>
            // );
        // }).unmount;

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir na div_destaques a quantidade de células destacadas
 */
export const quantificarDestaques = (e) => {
    try {
        let class_destaques = document.getElementsByClassName("destaque");
        if (class_destaques.length > 0 && div_destaques.current !== null) {
            div_destaques.current.innerText = class_destaques.length;
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade aumentar o limite de exibição de linhas dos sorteios
 */
export const increaseLimit = (e) => {
    try {
        if (parseInt(txt_limit.current.value) < 9999) {
            txt_limit.current.value = parseInt(txt_limit.current.value) + 1;
        } else if (txt_limit.current.value === "") {
            txt_limit.current.value = 1;
        }
        limitarConcursos();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade diminuir o limite de exibição de linhas dos sorteios
 */
export const decreaseLimit = (e) => {
    try {
        (parseInt(txt_limit.current.value) > 0) ? txt_limit.current.value = parseInt(txt_limit.current.value) - 1 : txt_limit.current.value = 0;
        limitarConcursos();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade definir a sessão "limitar" e recarregar a página com o novo limite de exibição de linhas dos sorteios
 */
export const limitarConcursos = (e) => {
    try {
        window.sessionStorage.setItem("limitar", txt_limit.current.value);
        window.location.reload();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir os sorteios por ordem de sorteio
 */
export const ordenarPorSorteio = (e) => {
    try {
        window.sessionStorage.setItem("ordem_sorteio", "sorteio");
        window.location.reload();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir os sorteios por ordem de sorteio
 */
export const ordenarAscendente = (e) => {
    try {
        window.sessionStorage.setItem("ordem_sorteio", "asc");
        window.location.reload();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir os sorteios por ordem de sorteio
 */
export const ordenarDescendente = (e) => {
    try {
        window.sessionStorage.setItem("ordem_sorteio", "desc");
        window.location.reload();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir os sorteios por ordem da variável ordem_sorteio definida na sessão
 */
export const verOrdem = (e) => {
    try {
        let ordem_sorteio = window.sessionStorage.getItem("ordem_sorteio");
        switch (ordem_sorteio) {
            case "sorteio":
                rdg_por_sorteio.current.checked = true;
                break;
            case "asc":
                rdg_ascendente.current.checked = true;
                break;
            case "desc":
                rdg_descendente.current.checked = true;
                break;
            default:
                rdg_por_sorteio.current.checked = true;
                window.sessionStorage.setItem("ordem_sorteio", "sorteio");
        }
    } catch (e) {
        console.error(e);
    }
};

/**
 * Default Class from notificacoes.jsx
 */
export default class Notificacoes extends Component {
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
    };

    render() {
        return (
            <React.StrictMode>
                <Container
                    fluid
                    id={"div_tbl_notificacoes"}
                    ref={div_tbl_notificacoes}
                >
                    <Row
                        id={"linha_destaques_limitar"}
                        ref={linha_destaques_limitar}
                    >
                        <Col
                            id={"col_div_limitar"}
                            ref={col_div_limitar}
                            className={"col-sm-auto"}
                        >
                            <div
                                id={"div_limitar"}
                                ref={div_limitar}
                                className={"input-group input-group-sm"}
                            >
                                <input
                                    id={"btn_decrease_limit"}
                                    ref={btn_decrease_limit}
                                    type={"button"}
                                    title={"Clique aqui para diminuir o limite de linhas exibidas"}
                                    onMouseDownCapture={decreaseLimit}
                                    value={"-"}
                                    className={"btn btn-small input-group-button btn-warning"}
                                />
                                <input
                                    id={"txt_limit"}
                                    ref={txt_limit}
                                    type={"text"}
                                    title={"Digite aqui a quantidade de linhas a serem exibidas"}
                                    onChange={limitarConcursos}
                                    className={"form-control"}
                                    maxLength={4}
                                    placeholder={"0000"}
                                    defaultValue={window.sessionStorage.getItem("limitar")}
                                    style={
                                        {
                                            width: "50px",
                                            textAlign: "center"
                                        }
                                    }
                                />
                                <input
                                    id={"btn_increase_limit"}
                                    ref={btn_increase_limit}
                                    type={"button"}
                                    className={"btn btn-sm input-group-button btn-warning"}
                                    title={"Clique aqui para aumentar o limite de linhas exibidas"}
                                    onMouseDownCapture={increaseLimit}
                                    value={"+"}
                                />
                            </div>
                        </Col>
                        <Col
                            id={"col_destaques"}
                            ref={col_destaques}
                            className={"col-sm-auto"}
                        >
                            <div
                                id={"div_exibir_destaques"}
                                ref={div_exibir_destaques}
                                className={"input-group input-group-sm"}
                            >
                                <div
                                    className={"input-group-text"}
                                >
                                    <input
                                        id={"cbx_exibir"}
                                        ref={cbx_exibir}
                                        type={"checkbox"}
                                        className={"form-check-input"}
                                        title={"Exibir somente digitados / destacados"}
                                        onChange={ocultarExibirLinhas}
                                    />
                                </div>
                                <label
                                    id={"lbl_cbx_exibir"}
                                    ref={lbl_cbx_exibir}
                                    htmlFor={"cbx_exibir"}
                                    className={"input-group-text"}
                                >
                                    Destaques:
                                </label>
                                <div
                                    id={"div_destaques"}
                                    ref={div_destaques}
                                    className={"input-group-text"}
                                >
                                    0
                                </div>
                            </div>
                        </Col>
                        <Col
                            id={"col_btn_desselecionar_dezenas"}
                            ref={col_btn_desselecionar_dezenas}
                            className={"col-sm-auto"}
                        >
                            <input
                                id={"btn_desselecionar_dezenas"}
                                ref={btn_desselecionar_dezenas}
                                type={"button"}
                                className={"btn btn-sm input-group-button btn-outline-dark"}
                                title={"Clique aqui para desselecionar as dezenas selecionadas"}
                                onMouseDownCapture={desselecionarDezenas}
                                value={"Recomeçar"}
                            />
                        </Col>
                        <Col
                            id={"col_ordem_sorteio"}
                            ref={col_ordem_sorteio}
                            className={"col-sm-auto"}
                        >
                            <div
                                className={"input-group input-group-sm"}
                            >
                                <span
                                    className={"input-group-text form-control-sm"}
                                >
                                    Ordenar números:
                                </span>
                                <input
                                    id={"rdg_por_sorteio"}
                                    ref={rdg_por_sorteio}
                                    type={"radio"}
                                    className={"btn-check"}
                                    name={"ordem_sorteio"}
                                    autoComplete={"off"}
                                    onChange={ordenarPorSorteio}
                                />
                                <label
                                    className={"btn btn-sm btn-outline-dark"}
                                    htmlFor={"rdg_por_sorteio"}
                                    title={"Clique aqui para exibir os números dos sorteios por ordem de sorteio das bolas"}
                                >
                                    Por Sorteio
                                </label>

                                <input
                                    id={"rdg_ascendente"}
                                    ref={rdg_ascendente}
                                    type={"radio"}
                                    className={"btn-check"}
                                    name={"ordem_sorteio"}
                                    autoComplete={"off"}
                                    onChange={ordenarAscendente}
                                />
                                <label
                                    className={"btn btn-sm btn-outline-dark"}
                                    htmlFor={"rdg_ascendente"}
                                    title={"Clique aqui para exibir os números dos sorteios por ordem ascendente"}
                                >
                                    Ascendente
                                </label>

                                <input
                                    id={"rdg_descendente"}
                                    ref={rdg_descendente}
                                    type={"radio"}
                                    className={"btn-check"}
                                    name={"ordem_sorteio"}
                                    autoComplete={"off"}
                                    onChange={ordenarDescendente}
                                />
                                <label
                                    className={"btn btn-sm btn-outline-dark"}
                                    htmlFor={"rdg_descendente"}
                                    title={"Clique aqui para exibir os números dos sorteios por ordem descendente"}
                                >
                                    Descendente
                                </label>
                            </div>
                        </Col>
                        <Col
                            id={"col_quadra"}
                            ref={col_quadra}
                            className={"col-sm-auto"}
                        >
                        </Col>
                        <Col
                            id={"col_quina"}
                            ref={col_quina}
                            className={"col-sm-auto"}
                        >
                        </Col>
                        <Col
                            id={"col_sena"}
                            ref={col_sena}
                            className={"col-sm-auto"}
                        >
                        </Col>
                    </Row>
                    {/* <Row
                        id={"linha_notificacoes"}
                        ref={linha_notificacoes}
                    >
                        <Col
                            id={"col_notificacoes"}
                            ref={col_notificacoes}
                            className={"text-left"}
                            title={"Aqui serão exibidas todas as Notificações das ações dos jogos"}
                        />
                    </Row> */}
                </Container>
            </React.StrictMode>
        );
    }
};

/**
 * Classe NewCols from notificacoes.jsx
 */
export class NewCols extends Component {
    render() {
        const { linhas_notificacoes } = this.props;
        const container_linhas_notificacoes = linhas_notificacoes.map(
            (number, index) => (
                <Container fluid
                    key={index}
                    className={"justify-content-md-left row"}
                >
                    {number}
                </Container>
            )
        );

        return (
            <React.StrictMode>
                {container_linhas_notificacoes}
            </React.StrictMode>
        );
    }
};

/**
 * Classe NewQuadra from notificacoes.jsx
 */
export class NewQuadra extends Component {
    render() {
        const { arr_quadra } = this.props;
        const li_quadra = arr_quadra.map(
            (number, index) => (
                <Dropdown.Item
                    key={index}
                    onClick={verSorteio}
                    title={number[1]}
                    aria-label={number[0]}
                >
                    {number[2]}
                </Dropdown.Item>
            )
        );

        return (
            <React.StrictMode>
                <DropdownButton
                    id={"dropdown_quadra"}
                    ref={dropdown_quadra}
                    title={"[" + arr_quadra.length + "] Quadra"}
                    size="sm"
                    variant="info"
                >
                    {li_quadra}
                </DropdownButton>
            </React.StrictMode>
        );
    }
};

/**
 * Classe NewQuina from notificacoes.jsx
 */
export class NewQuina extends Component {
    render() {
        const { arr_quina } = this.props;
        const li_quina = arr_quina.map(
            (number, index) => (
                <Dropdown.Item
                    key={index}
                    onClick={verSorteio}
                    title={number[1]}
                    aria-label={number[0]}
                >
                    {number[2]}
                </Dropdown.Item>
            )
        );

        return (
            <React.StrictMode>
                <DropdownButton
                    id={"dropdown_quina"}
                    ref={dropdown_quina}
                    title={"[" + arr_quina.length + "] Quina"}
                    size="sm"
                    variant="warning"
                >
                    {li_quina}
                </DropdownButton>
            </React.StrictMode>
        );
    }
};

/**
 * Classe NewSena from notificacoes.jsx
 */
export class NewSena extends Component {
    render() {
        const { arr_sena } = this.props;
        console.log(arr_sena[0][0]);
        const li_sena = arr_sena.map(
            (number, index) => (
                <Dropdown.Item
                    key={index}
                    onClick={verSorteio}
                    title={number[1]}
                    aria-label={number[0]}
                >
                    {number[2]}
                </Dropdown.Item>
            )
        );

        return (
            <React.StrictMode>
                <DropdownButton
                    id={"dropdown_sena"}
                    ref={dropdown_sena}
                    title={"[" + arr_sena.length + "] Sena"}
                    size="sm"
                    variant="success"
                >
                    {li_sena}
                </DropdownButton>
            </React.StrictMode>
        );
    }
};
