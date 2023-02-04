import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './jogatina.css';
import {
    linhas_concursos,
    localizarDezenas
} from './resultados';
import {
    infoDezena
} from './notificacoes';


/**
 * Elements from jogatina.jsx
 */

export const offcanvasNavbar1 = React.createRef();
export const offcanvasNavbar2 = React.createRef();
export const offcanvasNavbar3 = React.createRef();
export const offcanvasNavbar4 = React.createRef();
export const offcanvasNavbar5 = React.createRef();
export const offcanvasNavbar6 = React.createRef();

export const offcanvasNavbars = [
    null,
    offcanvasNavbar1,
    offcanvasNavbar2,
    offcanvasNavbar3,
    offcanvasNavbar4,
    offcanvasNavbar5,
    offcanvasNavbar6
];

export const col_repeticoes_dezena1 = React.createRef();
export const col_repeticoes_dezena2 = React.createRef();
export const col_repeticoes_dezena3 = React.createRef();
export const col_repeticoes_dezena4 = React.createRef();
export const col_repeticoes_dezena5 = React.createRef();
export const col_repeticoes_dezena6 = React.createRef();
export const col_repeticoes_dezena7 = React.createRef();
export const col_repeticoes_dezena8 = React.createRef();
export const col_repeticoes_dezena9 = React.createRef();
export const col_repeticoes_dezena10 = React.createRef();
export const col_repeticoes_dezena11 = React.createRef();
export const col_repeticoes_dezena12 = React.createRef();
export const col_repeticoes_dezena13 = React.createRef();
export const col_repeticoes_dezena14 = React.createRef();
export const col_repeticoes_dezena15 = React.createRef();
export const col_repeticoes_dezena16 = React.createRef();
export const col_repeticoes_dezena17 = React.createRef();
export const col_repeticoes_dezena18 = React.createRef();
export const col_repeticoes_dezena19 = React.createRef();
export const col_repeticoes_dezena20 = React.createRef();
export const col_repeticoes_dezena21 = React.createRef();
export const col_repeticoes_dezena22 = React.createRef();
export const col_repeticoes_dezena23 = React.createRef();
export const col_repeticoes_dezena24 = React.createRef();
export const col_repeticoes_dezena25 = React.createRef();
export const col_repeticoes_dezena26 = React.createRef();
export const col_repeticoes_dezena27 = React.createRef();
export const col_repeticoes_dezena28 = React.createRef();
export const col_repeticoes_dezena29 = React.createRef();
export const col_repeticoes_dezena30 = React.createRef();
export const col_repeticoes_dezena31 = React.createRef();
export const col_repeticoes_dezena32 = React.createRef();
export const col_repeticoes_dezena33 = React.createRef();
export const col_repeticoes_dezena34 = React.createRef();
export const col_repeticoes_dezena35 = React.createRef();
export const col_repeticoes_dezena36 = React.createRef();
export const col_repeticoes_dezena37 = React.createRef();
export const col_repeticoes_dezena38 = React.createRef();
export const col_repeticoes_dezena39 = React.createRef();
export const col_repeticoes_dezena40 = React.createRef();
export const col_repeticoes_dezena41 = React.createRef();
export const col_repeticoes_dezena42 = React.createRef();
export const col_repeticoes_dezena43 = React.createRef();
export const col_repeticoes_dezena44 = React.createRef();
export const col_repeticoes_dezena45 = React.createRef();
export const col_repeticoes_dezena46 = React.createRef();
export const col_repeticoes_dezena47 = React.createRef();
export const col_repeticoes_dezena48 = React.createRef();
export const col_repeticoes_dezena49 = React.createRef();
export const col_repeticoes_dezena50 = React.createRef();
export const col_repeticoes_dezena51 = React.createRef();
export const col_repeticoes_dezena52 = React.createRef();
export const col_repeticoes_dezena53 = React.createRef();
export const col_repeticoes_dezena54 = React.createRef();
export const col_repeticoes_dezena55 = React.createRef();
export const col_repeticoes_dezena56 = React.createRef();
export const col_repeticoes_dezena57 = React.createRef();
export const col_repeticoes_dezena58 = React.createRef();
export const col_repeticoes_dezena59 = React.createRef();
export const col_repeticoes_dezena60 = React.createRef();

export const cols_repeticoes_dezena = [
    null,
    col_repeticoes_dezena1,
    col_repeticoes_dezena2,
    col_repeticoes_dezena3,
    col_repeticoes_dezena4,
    col_repeticoes_dezena5,
    col_repeticoes_dezena6,
    col_repeticoes_dezena7,
    col_repeticoes_dezena8,
    col_repeticoes_dezena9,
    col_repeticoes_dezena10,
    col_repeticoes_dezena11,
    col_repeticoes_dezena12,
    col_repeticoes_dezena13,
    col_repeticoes_dezena14,
    col_repeticoes_dezena15,
    col_repeticoes_dezena16,
    col_repeticoes_dezena17,
    col_repeticoes_dezena18,
    col_repeticoes_dezena19,
    col_repeticoes_dezena20,
    col_repeticoes_dezena21,
    col_repeticoes_dezena22,
    col_repeticoes_dezena23,
    col_repeticoes_dezena24,
    col_repeticoes_dezena25,
    col_repeticoes_dezena26,
    col_repeticoes_dezena27,
    col_repeticoes_dezena28,
    col_repeticoes_dezena29,
    col_repeticoes_dezena30,
    col_repeticoes_dezena31,
    col_repeticoes_dezena32,
    col_repeticoes_dezena33,
    col_repeticoes_dezena34,
    col_repeticoes_dezena35,
    col_repeticoes_dezena36,
    col_repeticoes_dezena37,
    col_repeticoes_dezena38,
    col_repeticoes_dezena39,
    col_repeticoes_dezena40,
    col_repeticoes_dezena41,
    col_repeticoes_dezena42,
    col_repeticoes_dezena43,
    col_repeticoes_dezena44,
    col_repeticoes_dezena45,
    col_repeticoes_dezena46,
    col_repeticoes_dezena47,
    col_repeticoes_dezena48,
    col_repeticoes_dezena49,
    col_repeticoes_dezena50,
    col_repeticoes_dezena51,
    col_repeticoes_dezena52,
    col_repeticoes_dezena53,
    col_repeticoes_dezena54,
    col_repeticoes_dezena55,
    col_repeticoes_dezena56,
    col_repeticoes_dezena57,
    col_repeticoes_dezena58,
    col_repeticoes_dezena59,
    col_repeticoes_dezena60
];

export const col_probabilidade_dezena1 = React.createRef();
export const col_probabilidade_dezena2 = React.createRef();
export const col_probabilidade_dezena3 = React.createRef();
export const col_probabilidade_dezena4 = React.createRef();
export const col_probabilidade_dezena5 = React.createRef();
export const col_probabilidade_dezena6 = React.createRef();
export const col_probabilidade_dezena7 = React.createRef();
export const col_probabilidade_dezena8 = React.createRef();
export const col_probabilidade_dezena9 = React.createRef();
export const col_probabilidade_dezena10 = React.createRef();
export const col_probabilidade_dezena11 = React.createRef();
export const col_probabilidade_dezena12 = React.createRef();
export const col_probabilidade_dezena13 = React.createRef();
export const col_probabilidade_dezena14 = React.createRef();
export const col_probabilidade_dezena15 = React.createRef();
export const col_probabilidade_dezena16 = React.createRef();
export const col_probabilidade_dezena17 = React.createRef();
export const col_probabilidade_dezena18 = React.createRef();
export const col_probabilidade_dezena19 = React.createRef();
export const col_probabilidade_dezena20 = React.createRef();
export const col_probabilidade_dezena21 = React.createRef();
export const col_probabilidade_dezena22 = React.createRef();
export const col_probabilidade_dezena23 = React.createRef();
export const col_probabilidade_dezena24 = React.createRef();
export const col_probabilidade_dezena25 = React.createRef();
export const col_probabilidade_dezena26 = React.createRef();
export const col_probabilidade_dezena27 = React.createRef();
export const col_probabilidade_dezena28 = React.createRef();
export const col_probabilidade_dezena29 = React.createRef();
export const col_probabilidade_dezena30 = React.createRef();
export const col_probabilidade_dezena31 = React.createRef();
export const col_probabilidade_dezena32 = React.createRef();
export const col_probabilidade_dezena33 = React.createRef();
export const col_probabilidade_dezena34 = React.createRef();
export const col_probabilidade_dezena35 = React.createRef();
export const col_probabilidade_dezena36 = React.createRef();
export const col_probabilidade_dezena37 = React.createRef();
export const col_probabilidade_dezena38 = React.createRef();
export const col_probabilidade_dezena39 = React.createRef();
export const col_probabilidade_dezena40 = React.createRef();
export const col_probabilidade_dezena41 = React.createRef();
export const col_probabilidade_dezena42 = React.createRef();
export const col_probabilidade_dezena43 = React.createRef();
export const col_probabilidade_dezena44 = React.createRef();
export const col_probabilidade_dezena45 = React.createRef();
export const col_probabilidade_dezena46 = React.createRef();
export const col_probabilidade_dezena47 = React.createRef();
export const col_probabilidade_dezena48 = React.createRef();
export const col_probabilidade_dezena49 = React.createRef();
export const col_probabilidade_dezena50 = React.createRef();
export const col_probabilidade_dezena51 = React.createRef();
export const col_probabilidade_dezena52 = React.createRef();
export const col_probabilidade_dezena53 = React.createRef();
export const col_probabilidade_dezena54 = React.createRef();
export const col_probabilidade_dezena55 = React.createRef();
export const col_probabilidade_dezena56 = React.createRef();
export const col_probabilidade_dezena57 = React.createRef();
export const col_probabilidade_dezena58 = React.createRef();
export const col_probabilidade_dezena59 = React.createRef();
export const col_probabilidade_dezena60 = React.createRef();

export const cols_probabilidade_dezena = [
    null,
    col_probabilidade_dezena1,
    col_probabilidade_dezena2,
    col_probabilidade_dezena3,
    col_probabilidade_dezena4,
    col_probabilidade_dezena5,
    col_probabilidade_dezena6,
    col_probabilidade_dezena7,
    col_probabilidade_dezena8,
    col_probabilidade_dezena9,
    col_probabilidade_dezena10,
    col_probabilidade_dezena11,
    col_probabilidade_dezena12,
    col_probabilidade_dezena13,
    col_probabilidade_dezena14,
    col_probabilidade_dezena15,
    col_probabilidade_dezena16,
    col_probabilidade_dezena17,
    col_probabilidade_dezena18,
    col_probabilidade_dezena19,
    col_probabilidade_dezena20,
    col_probabilidade_dezena21,
    col_probabilidade_dezena22,
    col_probabilidade_dezena23,
    col_probabilidade_dezena24,
    col_probabilidade_dezena25,
    col_probabilidade_dezena26,
    col_probabilidade_dezena27,
    col_probabilidade_dezena28,
    col_probabilidade_dezena29,
    col_probabilidade_dezena30,
    col_probabilidade_dezena31,
    col_probabilidade_dezena32,
    col_probabilidade_dezena33,
    col_probabilidade_dezena34,
    col_probabilidade_dezena35,
    col_probabilidade_dezena36,
    col_probabilidade_dezena37,
    col_probabilidade_dezena38,
    col_probabilidade_dezena39,
    col_probabilidade_dezena40,
    col_probabilidade_dezena41,
    col_probabilidade_dezena42,
    col_probabilidade_dezena43,
    col_probabilidade_dezena44,
    col_probabilidade_dezena45,
    col_probabilidade_dezena46,
    col_probabilidade_dezena47,
    col_probabilidade_dezena48,
    col_probabilidade_dezena49,
    col_probabilidade_dezena50,
    col_probabilidade_dezena51,
    col_probabilidade_dezena52,
    col_probabilidade_dezena53,
    col_probabilidade_dezena54,
    col_probabilidade_dezena55,
    col_probabilidade_dezena56,
    col_probabilidade_dezena57,
    col_probabilidade_dezena58,
    col_probabilidade_dezena59,
    col_probabilidade_dezena60
];

export const col_atraso_dezena1 = React.createRef();
export const col_atraso_dezena2 = React.createRef();
export const col_atraso_dezena3 = React.createRef();
export const col_atraso_dezena4 = React.createRef();
export const col_atraso_dezena5 = React.createRef();
export const col_atraso_dezena6 = React.createRef();
export const col_atraso_dezena7 = React.createRef();
export const col_atraso_dezena8 = React.createRef();
export const col_atraso_dezena9 = React.createRef();
export const col_atraso_dezena10 = React.createRef();
export const col_atraso_dezena11 = React.createRef();
export const col_atraso_dezena12 = React.createRef();
export const col_atraso_dezena13 = React.createRef();
export const col_atraso_dezena14 = React.createRef();
export const col_atraso_dezena15 = React.createRef();
export const col_atraso_dezena16 = React.createRef();
export const col_atraso_dezena17 = React.createRef();
export const col_atraso_dezena18 = React.createRef();
export const col_atraso_dezena19 = React.createRef();
export const col_atraso_dezena20 = React.createRef();
export const col_atraso_dezena21 = React.createRef();
export const col_atraso_dezena22 = React.createRef();
export const col_atraso_dezena23 = React.createRef();
export const col_atraso_dezena24 = React.createRef();
export const col_atraso_dezena25 = React.createRef();
export const col_atraso_dezena26 = React.createRef();
export const col_atraso_dezena27 = React.createRef();
export const col_atraso_dezena28 = React.createRef();
export const col_atraso_dezena29 = React.createRef();
export const col_atraso_dezena30 = React.createRef();
export const col_atraso_dezena31 = React.createRef();
export const col_atraso_dezena32 = React.createRef();
export const col_atraso_dezena33 = React.createRef();
export const col_atraso_dezena34 = React.createRef();
export const col_atraso_dezena35 = React.createRef();
export const col_atraso_dezena36 = React.createRef();
export const col_atraso_dezena37 = React.createRef();
export const col_atraso_dezena38 = React.createRef();
export const col_atraso_dezena39 = React.createRef();
export const col_atraso_dezena40 = React.createRef();
export const col_atraso_dezena41 = React.createRef();
export const col_atraso_dezena42 = React.createRef();
export const col_atraso_dezena43 = React.createRef();
export const col_atraso_dezena44 = React.createRef();
export const col_atraso_dezena45 = React.createRef();
export const col_atraso_dezena46 = React.createRef();
export const col_atraso_dezena47 = React.createRef();
export const col_atraso_dezena48 = React.createRef();
export const col_atraso_dezena49 = React.createRef();
export const col_atraso_dezena50 = React.createRef();
export const col_atraso_dezena51 = React.createRef();
export const col_atraso_dezena52 = React.createRef();
export const col_atraso_dezena53 = React.createRef();
export const col_atraso_dezena54 = React.createRef();
export const col_atraso_dezena55 = React.createRef();
export const col_atraso_dezena56 = React.createRef();
export const col_atraso_dezena57 = React.createRef();
export const col_atraso_dezena58 = React.createRef();
export const col_atraso_dezena59 = React.createRef();
export const col_atraso_dezena60 = React.createRef();

export const cols_atraso_dezena = [
    null,
    col_atraso_dezena1,
    col_atraso_dezena2,
    col_atraso_dezena3,
    col_atraso_dezena4,
    col_atraso_dezena5,
    col_atraso_dezena6,
    col_atraso_dezena7,
    col_atraso_dezena8,
    col_atraso_dezena9,
    col_atraso_dezena10,
    col_atraso_dezena11,
    col_atraso_dezena12,
    col_atraso_dezena13,
    col_atraso_dezena14,
    col_atraso_dezena15,
    col_atraso_dezena16,
    col_atraso_dezena17,
    col_atraso_dezena18,
    col_atraso_dezena19,
    col_atraso_dezena20,
    col_atraso_dezena21,
    col_atraso_dezena22,
    col_atraso_dezena23,
    col_atraso_dezena24,
    col_atraso_dezena25,
    col_atraso_dezena26,
    col_atraso_dezena27,
    col_atraso_dezena28,
    col_atraso_dezena29,
    col_atraso_dezena30,
    col_atraso_dezena31,
    col_atraso_dezena32,
    col_atraso_dezena33,
    col_atraso_dezena34,
    col_atraso_dezena35,
    col_atraso_dezena36,
    col_atraso_dezena37,
    col_atraso_dezena38,
    col_atraso_dezena39,
    col_atraso_dezena40,
    col_atraso_dezena41,
    col_atraso_dezena42,
    col_atraso_dezena43,
    col_atraso_dezena44,
    col_atraso_dezena45,
    col_atraso_dezena46,
    col_atraso_dezena47,
    col_atraso_dezena48,
    col_atraso_dezena49,
    col_atraso_dezena50,
    col_atraso_dezena51,
    col_atraso_dezena52,
    col_atraso_dezena53,
    col_atraso_dezena54,
    col_atraso_dezena55,
    col_atraso_dezena56,
    col_atraso_dezena57,
    col_atraso_dezena58,
    col_atraso_dezena59,
    col_atraso_dezena60
];

export const col_qtd_dezena1 = React.createRef();
export const col_qtd_dezena2 = React.createRef();
export const col_qtd_dezena3 = React.createRef();
export const col_qtd_dezena4 = React.createRef();
export const col_qtd_dezena5 = React.createRef();
export const col_qtd_dezena6 = React.createRef();
export const col_qtd_dezena7 = React.createRef();
export const col_qtd_dezena8 = React.createRef();
export const col_qtd_dezena9 = React.createRef();
export const col_qtd_dezena10 = React.createRef();
export const col_qtd_dezena11 = React.createRef();
export const col_qtd_dezena12 = React.createRef();
export const col_qtd_dezena13 = React.createRef();
export const col_qtd_dezena14 = React.createRef();
export const col_qtd_dezena15 = React.createRef();
export const col_qtd_dezena16 = React.createRef();
export const col_qtd_dezena17 = React.createRef();
export const col_qtd_dezena18 = React.createRef();
export const col_qtd_dezena19 = React.createRef();
export const col_qtd_dezena20 = React.createRef();
export const col_qtd_dezena21 = React.createRef();
export const col_qtd_dezena22 = React.createRef();
export const col_qtd_dezena23 = React.createRef();
export const col_qtd_dezena24 = React.createRef();
export const col_qtd_dezena25 = React.createRef();
export const col_qtd_dezena26 = React.createRef();
export const col_qtd_dezena27 = React.createRef();
export const col_qtd_dezena28 = React.createRef();
export const col_qtd_dezena29 = React.createRef();
export const col_qtd_dezena30 = React.createRef();
export const col_qtd_dezena31 = React.createRef();
export const col_qtd_dezena32 = React.createRef();
export const col_qtd_dezena33 = React.createRef();
export const col_qtd_dezena34 = React.createRef();
export const col_qtd_dezena35 = React.createRef();
export const col_qtd_dezena36 = React.createRef();
export const col_qtd_dezena37 = React.createRef();
export const col_qtd_dezena38 = React.createRef();
export const col_qtd_dezena39 = React.createRef();
export const col_qtd_dezena40 = React.createRef();
export const col_qtd_dezena41 = React.createRef();
export const col_qtd_dezena42 = React.createRef();
export const col_qtd_dezena43 = React.createRef();
export const col_qtd_dezena44 = React.createRef();
export const col_qtd_dezena45 = React.createRef();
export const col_qtd_dezena46 = React.createRef();
export const col_qtd_dezena47 = React.createRef();
export const col_qtd_dezena48 = React.createRef();
export const col_qtd_dezena49 = React.createRef();
export const col_qtd_dezena50 = React.createRef();
export const col_qtd_dezena51 = React.createRef();
export const col_qtd_dezena52 = React.createRef();
export const col_qtd_dezena53 = React.createRef();
export const col_qtd_dezena54 = React.createRef();
export const col_qtd_dezena55 = React.createRef();
export const col_qtd_dezena56 = React.createRef();
export const col_qtd_dezena57 = React.createRef();
export const col_qtd_dezena58 = React.createRef();
export const col_qtd_dezena59 = React.createRef();
export const col_qtd_dezena60 = React.createRef();

export const cols_qtd_dezena = [
    null,
    col_qtd_dezena1,
    col_qtd_dezena2,
    col_qtd_dezena3,
    col_qtd_dezena4,
    col_qtd_dezena5,
    col_qtd_dezena6,
    col_qtd_dezena7,
    col_qtd_dezena8,
    col_qtd_dezena9,
    col_qtd_dezena10,
    col_qtd_dezena11,
    col_qtd_dezena12,
    col_qtd_dezena13,
    col_qtd_dezena14,
    col_qtd_dezena15,
    col_qtd_dezena16,
    col_qtd_dezena17,
    col_qtd_dezena18,
    col_qtd_dezena19,
    col_qtd_dezena20,
    col_qtd_dezena21,
    col_qtd_dezena22,
    col_qtd_dezena23,
    col_qtd_dezena24,
    col_qtd_dezena25,
    col_qtd_dezena26,
    col_qtd_dezena27,
    col_qtd_dezena28,
    col_qtd_dezena29,
    col_qtd_dezena30,
    col_qtd_dezena31,
    col_qtd_dezena32,
    col_qtd_dezena33,
    col_qtd_dezena34,
    col_qtd_dezena35,
    col_qtd_dezena36,
    col_qtd_dezena37,
    col_qtd_dezena38,
    col_qtd_dezena39,
    col_qtd_dezena40,
    col_qtd_dezena41,
    col_qtd_dezena42,
    col_qtd_dezena43,
    col_qtd_dezena44,
    col_qtd_dezena45,
    col_qtd_dezena46,
    col_qtd_dezena47,
    col_qtd_dezena48,
    col_qtd_dezena49,
    col_qtd_dezena50,
    col_qtd_dezena51,
    col_qtd_dezena52,
    col_qtd_dezena53,
    col_qtd_dezena54,
    col_qtd_dezena55,
    col_qtd_dezena56,
    col_qtd_dezena57,
    col_qtd_dezena58,
    col_qtd_dezena59,
    col_qtd_dezena60
];

export const cbx_dezena1 = React.createRef();
export const cbx_dezena2 = React.createRef();
export const cbx_dezena3 = React.createRef();
export const cbx_dezena4 = React.createRef();
export const cbx_dezena5 = React.createRef();
export const cbx_dezena6 = React.createRef();
export const cbx_dezena7 = React.createRef();
export const cbx_dezena8 = React.createRef();
export const cbx_dezena9 = React.createRef();
export const cbx_dezena10 = React.createRef();
export const cbx_dezena11 = React.createRef();
export const cbx_dezena12 = React.createRef();
export const cbx_dezena13 = React.createRef();
export const cbx_dezena14 = React.createRef();
export const cbx_dezena15 = React.createRef();
export const cbx_dezena16 = React.createRef();
export const cbx_dezena17 = React.createRef();
export const cbx_dezena18 = React.createRef();
export const cbx_dezena19 = React.createRef();
export const cbx_dezena20 = React.createRef();
export const cbx_dezena21 = React.createRef();
export const cbx_dezena22 = React.createRef();
export const cbx_dezena23 = React.createRef();
export const cbx_dezena24 = React.createRef();
export const cbx_dezena25 = React.createRef();
export const cbx_dezena26 = React.createRef();
export const cbx_dezena27 = React.createRef();
export const cbx_dezena28 = React.createRef();
export const cbx_dezena29 = React.createRef();
export const cbx_dezena30 = React.createRef();
export const cbx_dezena31 = React.createRef();
export const cbx_dezena32 = React.createRef();
export const cbx_dezena33 = React.createRef();
export const cbx_dezena34 = React.createRef();
export const cbx_dezena35 = React.createRef();
export const cbx_dezena36 = React.createRef();
export const cbx_dezena37 = React.createRef();
export const cbx_dezena38 = React.createRef();
export const cbx_dezena39 = React.createRef();
export const cbx_dezena40 = React.createRef();
export const cbx_dezena41 = React.createRef();
export const cbx_dezena42 = React.createRef();
export const cbx_dezena43 = React.createRef();
export const cbx_dezena44 = React.createRef();
export const cbx_dezena45 = React.createRef();
export const cbx_dezena46 = React.createRef();
export const cbx_dezena47 = React.createRef();
export const cbx_dezena48 = React.createRef();
export const cbx_dezena49 = React.createRef();
export const cbx_dezena50 = React.createRef();
export const cbx_dezena51 = React.createRef();
export const cbx_dezena52 = React.createRef();
export const cbx_dezena53 = React.createRef();
export const cbx_dezena54 = React.createRef();
export const cbx_dezena55 = React.createRef();
export const cbx_dezena56 = React.createRef();
export const cbx_dezena57 = React.createRef();
export const cbx_dezena58 = React.createRef();
export const cbx_dezena59 = React.createRef();
export const cbx_dezena60 = React.createRef();

export const cbxs_dezena = [
    null,
    cbx_dezena1,
    cbx_dezena2,
    cbx_dezena3,
    cbx_dezena4,
    cbx_dezena5,
    cbx_dezena6,
    cbx_dezena7,
    cbx_dezena8,
    cbx_dezena9,
    cbx_dezena10,
    cbx_dezena11,
    cbx_dezena12,
    cbx_dezena13,
    cbx_dezena14,
    cbx_dezena15,
    cbx_dezena16,
    cbx_dezena17,
    cbx_dezena18,
    cbx_dezena19,
    cbx_dezena20,
    cbx_dezena21,
    cbx_dezena22,
    cbx_dezena23,
    cbx_dezena24,
    cbx_dezena25,
    cbx_dezena26,
    cbx_dezena27,
    cbx_dezena28,
    cbx_dezena29,
    cbx_dezena30,
    cbx_dezena31,
    cbx_dezena32,
    cbx_dezena33,
    cbx_dezena34,
    cbx_dezena35,
    cbx_dezena36,
    cbx_dezena37,
    cbx_dezena38,
    cbx_dezena39,
    cbx_dezena40,
    cbx_dezena41,
    cbx_dezena42,
    cbx_dezena43,
    cbx_dezena44,
    cbx_dezena45,
    cbx_dezena46,
    cbx_dezena47,
    cbx_dezena48,
    cbx_dezena49,
    cbx_dezena50,
    cbx_dezena51,
    cbx_dezena52,
    cbx_dezena53,
    cbx_dezena54,
    cbx_dezena55,
    cbx_dezena56,
    cbx_dezena57,
    cbx_dezena58,
    cbx_dezena59,
    cbx_dezena60
];

/**
 * Functions/Methods from jogatina.jsx
 */

export const getCbxSession = (e) => {
    try {
        let cbx_session_tmp;

        for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
            cbx_session_tmp = window.sessionStorage.getItem(cbxs_dezena[dez_tmp].current.id.toString());
            if (cbx_session_tmp === "checked") {
                cbxs_dezena[dez_tmp].current.checked = true;
            }
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade identificar todos os inputs da linha #campos e retornar true se todos os campos estiverem vazios
 */
export const temDezenaSelecionada = (e) => {
    try {
        for (let d = 1; d <= 60; d++) {
            if (cbxs_dezena[d].current.checked) {
                return true;
            }
        }
        return false;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir as dezenas mais e menos sorteadas por ordem da quantidade de sorteios
 */
export const maisMenosSorteados = (e) => {
    try {
        let dezenas = [];
        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = 0;
        }

        let colunas_tmp;

        for (let lin = 0; lin < linhas_concursos.length; lin++) {
            if (linhas_concursos[lin] != null) {
                colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");
                for (let d = 0; d < colunas_tmp.length; d++) {
                    if (colunas_tmp[d] != null) {
                        for (let dez = 1; dez <= 60; dez++) {
                            if (dez === parseInt(colunas_tmp[d].innerText) && colunas_tmp[d].ariaLabel === "dezena") {
                                dezenas[dez] += 1;
                            }
                        }
                    }
                }
            }
        }

        for (let dez = 1; dez < dezenas.length; dez++) {
            cols_qtd_dezena[dez].current.innerText = dezenas[dez];
            cols_qtd_dezena[dez].current.title = "O Número [ " + dez + " ] foi sorteado { " + dezenas[dez] + " } vez(es)";
        }

        let dezena_maior;
        let dezena_tmp;
        let dezenas_mais_sorteadas = [];
        let dezenas_tmp = dezenas;

        for (let dez = 1; dez <= 60; dez++) {
            dezena_tmp = 1;
            dezena_maior = dezenas_tmp[dezena_tmp];
            if (dezena_maior === undefined) {
                for (let min = 1; min <= 60; min++) {
                    if (dezenas_tmp[min] !== undefined) {
                        dezena_tmp = min;
                        break;
                    }
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
                if (dezenas_tmp[dez_tmp] !== undefined && dezena_maior < dezenas_tmp[dez_tmp]) {
                    dezena_tmp = dez_tmp;
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            if (dez <= 6) {
                cols_qtd_dezena[dezena_tmp].current.classList.add("mais-sorteados");
            }

            if (dez >= 55) {
                cols_qtd_dezena[dezena_tmp].current.classList.add("menos-sorteados");
            }

            dezenas_mais_sorteadas[dez] = "dezena" + dezena_tmp + ":" + dezena_maior;

            dezenas_tmp[dezena_tmp] = undefined;
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir as dezenas mais atrasadas
 */
export const atrasosSorteios = (e) => {
    try {
        let dezenas = [];
        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = 0;
        }

        let celula_dezena_tmp;
        let linha_tmp;
        let colunas_tmp;

        let ordenar = "asc";
        for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
            if (ordenar === "asc") {
                for (let lin = 0; lin < linhas_concursos.length; lin++) {
                    if (linhas_concursos[lin] != null) {
                        colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");
                        dezenas[dez_tmp] += 1;
                        for (let d = 0; d < colunas_tmp.length; d++) {
                            celula_dezena_tmp = colunas_tmp[d];
                            if (celula_dezena_tmp != null) {
                                if (parseInt(celula_dezena_tmp.innerText) === dez_tmp && celula_dezena_tmp.ariaLabel === "dezena") {
                                    dezenas[dez_tmp] = 0;
                                    break;
                                }
                            }
                        }
                    }
                }
            } else {
                for (let lin = (linhas_concursos.length - 1); lin >= 0; lin--) {
                    linha_tmp = linhas_concursos[lin];
                    if (linha_tmp !== null) {
                        colunas_tmp = linha_tmp.getElementsByClassName("col");
                        dezenas[dez_tmp] += 1;
                        for (let d = 0; d < colunas_tmp.length; d++) {
                            celula_dezena_tmp = colunas_tmp[d];
                            if (celula_dezena_tmp !== null) {
                                if (parseInt(celula_dezena_tmp.innerText) === dez_tmp && celula_dezena_tmp.ariaLabel === "dezena") {
                                    dezenas[dez_tmp] = 0;
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            cols_atraso_dezena[dez_tmp].current.innerText = dezenas[dez_tmp];
            cols_atraso_dezena[dez_tmp].current.title = "O número [ " + dez_tmp + " ] não foi sorteado no(s) último(s) { " + dezenas[dez_tmp] + " } sorteio(s)";
        }

        let dezena_maior;
        let dezena_tmp;
        let dezenas_tmp = dezenas;

        for (let dez = 1; dez <= 60; dez++) {
            dezena_tmp = 1;
            dezena_maior = dezenas_tmp[dezena_tmp];
            if (dezena_maior === undefined) {
                for (let min = 1; min <= 60; min++) {
                    if (dezenas_tmp[min] !== undefined) {
                        dezena_tmp = min;
                        break;
                    }
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            for (let dez_tmp = 1; dez_tmp <= 60; dez_tmp++) {
                if (dezenas_tmp[dez_tmp] !== undefined && dezena_maior < dezenas_tmp[dez_tmp]) {
                    dezena_tmp = dez_tmp;
                }
                dezena_maior = dezenas_tmp[dezena_tmp];
            }

            if (dez <= 6) {
                cols_atraso_dezena[dezena_tmp].current.classList.add("mais-sorteados");
            }

            if (dez >= 55) {
                cols_atraso_dezena[dezena_tmp].current.classList.add("menos-sorteados");
            }

            dezenas_tmp[dezena_tmp] = undefined;
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade exibir aleatoriamente uma probabilidade (Math.random()) das dezenas
 */
export const probabilidadesSorteios = (e) => {
    try {
        let aleatorio_tmp;
        let col_probabilidade_tmp;
        /**
         * 50.063.860 é a quantidade total de combinações possíveis para uma aposta de 6 dezenas (esta quantidade total dividida por 6 é igual a 8343976,66)
         */
        let combinacoes_possiveis = 8343977;
        let numero_maximo = 60;

        for (let dez_tmp = 1; dez_tmp <= numero_maximo; dez_tmp++) {
            for (let i = 1; i <= combinacoes_possiveis; i++) {
                /**
                 * Por algum motivo tive que colocar 61 aqui, pois náo atinge o número máximo, ou seja, sempre vai atingir o número máximo do total - 1
                 */
                aleatorio_tmp = Math.floor(Math.random() * 61);
                if (parseInt(aleatorio_tmp) === dez_tmp) {
                    col_probabilidade_tmp = cols_probabilidade_dezena[dez_tmp].current;
                    col_probabilidade_tmp.innerText = i;
                    col_probabilidade_tmp.title = "O número [ " + i + " ] foi sorteado na [ " + dez_tmp + "a ] tentativa de [ " + combinacoes_possiveis + " ] combinações possíveis. Probabilidade de " + parseInt(i / (numero_maximo / 100)) + "% (1 em cada 60 tentativas de acerto)";
                    break;
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
 * Este método tem por finalidade exibir uma média de vezes que um número foi repetido
 */
export const repeticoesDezenas = (e) => {
    try {
        let dezenas = [];
        let achou_dezena;
        let colunas_tmp;

        for (let dez = 1; dez <= 60; dez++) {
            dezenas[dez] = [];
            for (let lin = 0; lin < linhas_concursos.length; lin++) {
                colunas_tmp = linhas_concursos[lin].getElementsByClassName("col");
                /**
                 * 0 para não achou dezena
                 */
                achou_dezena = 0;
                for (let col = 0; col < colunas_tmp.length; col++) {
                    if (colunas_tmp[col] != null) {
                        if (dez === parseInt(colunas_tmp[col].innerText) && colunas_tmp[col].ariaLabel === "dezena") {
                /**
                 * 1 para achou dezena
                 */
                achou_dezena = 1;
                            break;
                        }
                    }
                }
                dezenas[dez].push(achou_dezena);
            }
        }

        let intervalos = [];
        let intervalo_tmp = 0;
        for (let dez = 1; dez <= 60; dez++) {
            intervalos[dez] = [];
            intervalo_tmp = 0;
            for (let i = 0; i < dezenas[dez].length; i++) {
                intervalo_tmp++;
                if (parseInt(dezenas[dez][i]) === 1) {
                    intervalos[dez].push(intervalo_tmp);
                    intervalo_tmp = 0;
                }
            }
        }

        let soma_dezena_tmp = [];
        let dezena_tmp;
        for (let dez = 1; dez <= 60; dez++) {
            soma_dezena_tmp[dez] = 0;
            if (intervalos[dez].length === 0) { continue; }
            for (let i = 0; i < intervalos[dez].length; i++) {
                soma_dezena_tmp[dez] += intervalos[dez][i];
            }

            dezena_tmp = cols_repeticoes_dezena[dez].current;
            dezena_tmp.innerText = parseInt(soma_dezena_tmp[dez] / intervalos[dez].length);
            dezena_tmp.title = "O número [ " + dez + " ] é sorteado (se repete), em média a cada " + dezena_tmp.innerText + " sorteios";
        }

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

/**
 * Este método tem por finalidade desselecionar as dezenas selecionadas
 */
export const desselecionarDezenas = (e) => {
    try {
        for (let i = 1; i < cbxs_dezena.length; i++) {
            cbxs_dezena[i].current.checked = false;
            window.sessionStorage.removeItem(cbxs_dezena[i].current.id.toString());
        }
        localizarDezenas();
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

/**
 * Este método tem por finalidade desselecionar as dezenas selecionadas
 */
export const showHideOffsetcanvas = (e) => {
    try {
        let offcanvas_tmp = e.target.ariaLabel;
        if (offcanvasNavbars[offcanvas_tmp].current.classList.contains("show") === true) {
            offcanvasNavbars[offcanvas_tmp].current.classList.remove("show");
        } else {
            offcanvasNavbars[offcanvas_tmp].current.classList.add("show");
        }
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

export default class Jogatina extends Component {
    render() {
        let li_tmp;
        let navs = [];
        let lis = [null, [], [], [], [], [], []];
                
        for (let i = 1; i <= 60; i++) {
            li_tmp =
                <li
                    key={i}
                    className={"nav-item"}
                >
                    <input
                        type={"checkbox"}
                        className={"btn-check"}
                        id={"cbx_dezena" + i}
                        ref={cbxs_dezena[i]}
                        onChange={localizarDezenas}
                    />
                    <label
                        id={"lbl_dezena" + i}
                        className={"btn lbl-dezena nav-link"}
                        htmlFor={"cbx_dezena" + i}
                    >
                        [
                            <b
                                onMouseOver={infoDezena}
                                // onMouseLeave={hideDropDownMenu}
                            >
                                { (i.toString().length === 1) ? "0" + i : i }
                            </b> 
                        ]
                    </label>
                    {/* below is submenu items */}
                    <ul
                        className={"dropdown-menu"}
                    >
                        <li
                            className={"col-qtd-dezena"}
                        >
                            Quantidade Sorteios: &nbsp;
                            <span
                                id={"col_qtd_dezena" + i}
                                ref={cols_qtd_dezena[i]}
                            >
                                0
                            </span>
                        </li>
                        <li
                            className={"col-atraso-dezena"}
                        >
                            Sorteios Atrasados: &nbsp;
                            <span
                                id={"col_atraso_dezena" + i}
                                ref={cols_atraso_dezena[i]}
                            >
                                0
                            </span>
                        </li>
                        <li
                            className={"col-probabilidade-dezena"}
                        >
                            Tentativas de sorteio: &nbsp;
                            <span
                                id={"col_probabilidade_dezena" + i}
                                ref={cols_probabilidade_dezena[i]}
                            >
                                0
                            </span>
                        </li>
                        <li
                            className={"col-repeticoes-dezena"}
                        >
                            Média de Repetições: &nbsp;
                            <span
                                id={"col_repeticoes_dezena" + i}
                                ref={cols_repeticoes_dezena[i]}
                            >
                                0
                            </span>
                        </li>
                    </ul>
                </li>
            ;

            // switch (true) {
            //     case i >= 1 && i <= 10:
            //         lis[1].push(li_tmp);
            //         break;
            //     case i >= 11 && i <= 20:
            //         lis[2].push(li_tmp);
            //         break;
            //     case i >= 21 && i <= 30:
            //         lis[3].push(li_tmp);
            //         break;
            //     case i >= 31 && i <= 40:
            //         lis[4].push(li_tmp);
            //         break;
            //     case i >= 41 && i <= 50:
            //         lis[5].push(li_tmp);
            //         break;
            //     case i >= 51 && i <= 60:
            //         lis[6].push(li_tmp);
            //         break;
            //     default:
            // };

            if (i >= 1 && i <= 10) {
                lis[1].push(li_tmp);
            }
            if (i >= 11 && i <= 20) {
                lis[2].push(li_tmp);
            }
            if (i >= 21 && i <= 30) {
                lis[3].push(li_tmp);
            }
            if (i >= 31 && i <= 40) {
                lis[4].push(li_tmp);
            }
            if (i >= 41 && i <= 50) {
                lis[5].push(li_tmp);
            }
            if (i >= 51 && i <= 60) {
                lis[6].push(li_tmp);
            }
        };

        for (let n = 1; n <= 6; n++) {
            navs[n] =
                <nav
                    key={n}
                    className={"navbar navbar-expand-sm pt-0 pb-0"}
                    id={"navbar" + n}
                >
                    <Container
                        fluid
                    >
                        <button
                            className={"navbar-toggler"}
                            type={"button"}
                            data-bs-toggle={"offcanvas" + n}
                            data-bs-target={"#offcanvasNavbar" + n}
                            aria-controls={"offcanvasNavbar" + n}
                        >
                            <span
                                onClick={showHideOffsetcanvas}
                                aria-label={n}
                            >➤</span>
                        </button>
                        <div
                            className={"offcanvas offcanvas-end"}
                            tabIndex={"-1"}
                            id={"offcanvasNavbar" + n}
                            ref={offcanvasNavbars[n]}
                            aria-labelledby={"offcanvasNavbarLabel"}
                            aria-modal={"true"}
                            role={"dialog"}
                        >
                            <div
                                className={"offcanvas-header"}
                            >
                                <h5
                                    className={"offcanvas-title"}
                                    id={"offcanvasNavbarLabel" + n}
                                >
                                    Jogatina
                                </h5>
                                <button
                                    type={"button"}
                                    className={"btn-close"}
                                    data-bs-dismiss={"offcanvas"}
                                    aria-label={n}
                                    onClick={showHideOffsetcanvas}
                                    title={"Clique aqui para fechar"}
                                ></button>
                            </div>
                            <div
                                className={"offcanvas-body"}
                            >
                                <ul
                                    className={"navbar-nav justify-content-end flex-grow-1 pe-1"}
                                >
                                    {lis[n]}
                                </ul>
                            </div>
                        </div>
                    </Container>
                </nav>
            ;
        };

        return (
            <React.StrictMode>
                {navs}
            </React.StrictMode>
        );
    }
};