import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './jogatina.css';
import {
    div_concursos,
    localizarDezenas
} from './resultados';

/**
 * Elements from jogatina.jsx
 */
export const div_jogatina = React.createRef();
export const div_dezenas1_10 = React.createRef();
export const div_dezenas11_20 = React.createRef();
export const div_dezenas21_30 = React.createRef();
export const div_dezenas31_40 = React.createRef();
export const div_dezenas41_50 = React.createRef();
export const div_dezenas51_60 = React.createRef();

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

        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
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
                cols_qtd_dezena[dezena_tmp].current.classList.add("mais_sorteados");
            }

            if (dez >= 55) {
                cols_qtd_dezena[dezena_tmp].current.classList.add("menos_sorteados");
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

        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
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
                cols_atraso_dezena[dezena_tmp].current.classList.add("mais_sorteados");
            }

            if (dez >= 55) {
                cols_atraso_dezena[dezena_tmp].current.classList.add("menos_sorteados");
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
                    col_probabilidade_tmp.title = "Probabilidade: " + parseInt(i / (numero_maximo / 100)) + "%";
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

        let linhas_concursos = div_concursos.current.getElementsByClassName('row');
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
            dezena_tmp.title = "Média de Repetições";
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

export default class Jogatina extends Component {
    render() {
        return (
            <React.StrictMode>
                <Container
                    fluid
                    id={"div_jogatina"}
                    ref={div_jogatina}
                    className={"d-flex justify-content-center"}
                >
                    <Row>
                        <Col>
                            <div
                                id={"div_dezenas1_10"}
                                ref={div_dezenas1_10}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 1 a 10"}
                            >
                                <table
                                    id={"tbl_dezenas1_10"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas1_10"}
                                        >
                                            <td
                                                id={"col_dezena1"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena1"}
                                                    ref={cbx_dezena1}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena1"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena1"}
                                                >
                                                    [ <b>01</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena2"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena2"}
                                                    ref={cbx_dezena2}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena2"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena2"}
                                                >
                                                    [ <b>02</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena3"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena3"}
                                                    ref={cbx_dezena3}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena3"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena3"}
                                                >
                                                    [ <b>03</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena4"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena4"}
                                                    ref={cbx_dezena4}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena4"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena4"}
                                                >
                                                    [ <b>04</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena5"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena5"}
                                                    ref={cbx_dezena5}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena5"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena5"}
                                                >
                                                    [ <b>05</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena6"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena6"}
                                                    ref={cbx_dezena6}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena6"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena6"}
                                                >
                                                    [ <b>06</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena7"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena7"}
                                                    ref={cbx_dezena7}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena7"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena7"}
                                                >
                                                    [ <b>07</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena8"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena8"}
                                                    ref={cbx_dezena8}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena8"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena8"}
                                                >
                                                    [ <b>08</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena9"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena9"}
                                                    ref={cbx_dezena9}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena9"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena9"}
                                                >
                                                    [ <b>09</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena10"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena10"}
                                                    ref={cbx_dezena10}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena10"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena10"}
                                                >
                                                    [ <b>10</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios1_10"}
                                        >
                                            <td
                                                id={"col_qtd_dezena1"}
                                                ref={col_qtd_dezena1}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena2"}
                                                ref={col_qtd_dezena2}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena3"}
                                                ref={col_qtd_dezena3}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena4"}
                                                ref={col_qtd_dezena4}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena5"}
                                                ref={col_qtd_dezena5}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena6"}
                                                ref={col_qtd_dezena6}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena7"}
                                                ref={col_qtd_dezena7}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena8"}
                                                ref={col_qtd_dezena8}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena9"}
                                                ref={col_qtd_dezena9}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena10"}
                                                ref={col_qtd_dezena10}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_atrasos1_10"}
                                        >
                                            <td
                                                id={"col_atraso_dezena1"}
                                                ref={col_atraso_dezena1}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena2"}
                                                ref={col_atraso_dezena2}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena3"}
                                                ref={col_atraso_dezena3}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena4"}
                                                ref={col_atraso_dezena4}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena5"}
                                                ref={col_atraso_dezena5}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena6"}
                                                ref={col_atraso_dezena6}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena7"}
                                                ref={col_atraso_dezena7}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena8"}
                                                ref={col_atraso_dezena8}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena9"}
                                                ref={col_atraso_dezena9}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena10"}
                                                ref={col_atraso_dezena10}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_probabilidades1_10"}
                                        >
                                            <td
                                                id={"col_probabilidade_dezena1"}
                                                ref={col_probabilidade_dezena1}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena2"}
                                                ref={col_probabilidade_dezena2}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena3"}
                                                ref={col_probabilidade_dezena3}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena4"}
                                                ref={col_probabilidade_dezena4}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena5"}
                                                ref={col_probabilidade_dezena5}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena6"}
                                                ref={col_probabilidade_dezena6}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena7"}
                                                ref={col_probabilidade_dezena7}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena8"}
                                                ref={col_probabilidade_dezena8}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena9"}
                                                ref={col_probabilidade_dezena9}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena10"}
                                                ref={col_probabilidade_dezena10}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_repeticoes1_10"}
                                        >
                                            <td
                                                id={"col_repeticoes_dezena1"}
                                                ref={col_repeticoes_dezena1}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena2"}
                                                ref={col_repeticoes_dezena2}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena3"}
                                                ref={col_repeticoes_dezena3}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena4"}
                                                ref={col_repeticoes_dezena4}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena5"}
                                                ref={col_repeticoes_dezena5}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena6"}
                                                ref={col_repeticoes_dezena6}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena7"}
                                                ref={col_repeticoes_dezena7}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena8"}
                                                ref={col_repeticoes_dezena8}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena9"}
                                                ref={col_repeticoes_dezena9}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena10"}
                                                ref={col_repeticoes_dezena10}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id={"div_dezenas11_20"}
                                ref={div_dezenas11_20}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 11 a 20"}
                            >
                                <table
                                    id={"tbl_dezenas11_20"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas11_20"}
                                        >
                                            <td
                                                id={"col_dezena11"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena11"}
                                                    ref={cbx_dezena11}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena11"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena11"}
                                                >
                                                    [ <b>11</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena12"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena12"}
                                                    ref={cbx_dezena12}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena12"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena12"}
                                                >
                                                    [ <b>12</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena13"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena13"}
                                                    ref={cbx_dezena13}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena13"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena13"}
                                                >
                                                    [ <b>13</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena14"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena14"}
                                                    ref={cbx_dezena14}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena14"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena14"}
                                                >
                                                    [ <b>14</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena15"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena15"}
                                                    ref={cbx_dezena15}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena15"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena15"}
                                                >
                                                    [ <b>15</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena16"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena16"}
                                                    ref={cbx_dezena16}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena16"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena16"}
                                                >
                                                    [ <b>16</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena17"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena17"}
                                                    ref={cbx_dezena17}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena17"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena17"}
                                                >
                                                    [ <b>17</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena18"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena18"}
                                                    ref={cbx_dezena18}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena18"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena18"}
                                                >
                                                    [ <b>18</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena19"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena19"}
                                                    ref={cbx_dezena19}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena19"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena19"}
                                                >
                                                    [ <b>19</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena20"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena20"}
                                                    ref={cbx_dezena20}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena20"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena20"}
                                                >
                                                    [ <b>20</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios11_20"}
                                        >
                                            <td
                                                id={"col_qtd_dezena11"}
                                                ref={col_qtd_dezena11}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena12"}
                                                ref={col_qtd_dezena12}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena13"}
                                                ref={col_qtd_dezena13}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena14"}
                                                ref={col_qtd_dezena14}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena15"}
                                                ref={col_qtd_dezena15}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena16"}
                                                ref={col_qtd_dezena16}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena17"}
                                                ref={col_qtd_dezena17}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena18"}
                                                ref={col_qtd_dezena18}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena19"}
                                                ref={col_qtd_dezena19}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena20"}
                                                ref={col_qtd_dezena20}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_atrasos11_20"}
                                        >
                                            <td
                                                id={"col_atraso_dezena11"}
                                                ref={col_atraso_dezena11}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena12"}
                                                ref={col_atraso_dezena12}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena13"}
                                                ref={col_atraso_dezena13}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena14"}
                                                ref={col_atraso_dezena14}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena15"}
                                                ref={col_atraso_dezena15}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena16"}
                                                ref={col_atraso_dezena16}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena17"}
                                                ref={col_atraso_dezena17}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena18"}
                                                ref={col_atraso_dezena18}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena19"}
                                                ref={col_atraso_dezena19}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena20"}
                                                ref={col_atraso_dezena20}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_probabilidades11_20"}
                                        >
                                            <td
                                                id={"col_probabilidade_dezena11"}
                                                ref={col_probabilidade_dezena11}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena12"}
                                                ref={col_probabilidade_dezena12}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena13"}
                                                ref={col_probabilidade_dezena13}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena14"}
                                                ref={col_probabilidade_dezena14}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena15"}
                                                ref={col_probabilidade_dezena15}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena16"}
                                                ref={col_probabilidade_dezena16}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena17"}
                                                ref={col_probabilidade_dezena17}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena18"}
                                                ref={col_probabilidade_dezena18}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena19"}
                                                ref={col_probabilidade_dezena19}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena20"}
                                                ref={col_probabilidade_dezena20}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_repeticoes11_20"}
                                        >
                                            <td
                                                id={"col_repeticoes_dezena11"}
                                                ref={col_repeticoes_dezena11}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena12"}
                                                ref={col_repeticoes_dezena12}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena13"}
                                                ref={col_repeticoes_dezena13}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena14"}
                                                ref={col_repeticoes_dezena14}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena15"}
                                                ref={col_repeticoes_dezena15}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena16"}
                                                ref={col_repeticoes_dezena16}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena17"}
                                                ref={col_repeticoes_dezena17}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena18"}
                                                ref={col_repeticoes_dezena18}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena19"}
                                                ref={col_repeticoes_dezena19}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena20"}
                                                ref={col_repeticoes_dezena20}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id={"div_dezenas21_30"}
                                ref={div_dezenas21_30}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 21 a 30"}
                            >
                                <table
                                    id={"tbl_dezenas21_30"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas21_30"}
                                        >
                                            <td
                                                id={"col_dezena21"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena21"}
                                                    ref={cbx_dezena21}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena21"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena21"}
                                                >
                                                    [ <b>21</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena22"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena22"}
                                                    ref={cbx_dezena22}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena22"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena22"}
                                                >
                                                    [ <b>22</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena23"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena23"}
                                                    ref={cbx_dezena23}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena23"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena23"}
                                                >
                                                    [ <b>23</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena24"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena24"}
                                                    ref={cbx_dezena24}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena24"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena24"}
                                                >
                                                    [ <b>24</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena25"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena25"}
                                                    ref={cbx_dezena25}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena25"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena25"}
                                                >
                                                    [ <b>25</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena26"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena26"}
                                                    ref={cbx_dezena26}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena26"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena26"}
                                                >
                                                    [ <b>26</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena27"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena27"}
                                                    ref={cbx_dezena27}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena27"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena27"}
                                                >
                                                    [ <b>27</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena28"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena28"}
                                                    ref={cbx_dezena28}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena28"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena28"}
                                                >
                                                    [ <b>28</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena29"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena29"}
                                                    ref={cbx_dezena29}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena29"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena29"}
                                                >
                                                    [ <b>29</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena30"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena30"}
                                                    ref={cbx_dezena30}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena30"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena30"}
                                                >
                                                    [ <b>30</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios21_30"}
                                        >
                                            <td
                                                id={"col_qtd_dezena21"}
                                                ref={col_qtd_dezena21}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena22"}
                                                ref={col_qtd_dezena22}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena23"}
                                                ref={col_qtd_dezena23}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena24"}
                                                ref={col_qtd_dezena24}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena25"}
                                                ref={col_qtd_dezena25}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena26"}
                                                ref={col_qtd_dezena26}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena27"}
                                                ref={col_qtd_dezena27}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena28"}
                                                ref={col_qtd_dezena28}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena29"}
                                                ref={col_qtd_dezena29}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena30"}
                                                ref={col_qtd_dezena30}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_atrasos21_30"}
                                        >
                                            <td
                                                id={"col_atraso_dezena21"}
                                                ref={col_atraso_dezena21}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena22"}
                                                ref={col_atraso_dezena22}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena23"}
                                                ref={col_atraso_dezena23}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena24"}
                                                ref={col_atraso_dezena24}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena25"}
                                                ref={col_atraso_dezena25}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena26"}
                                                ref={col_atraso_dezena26}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena27"}
                                                ref={col_atraso_dezena27}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena28"}
                                                ref={col_atraso_dezena28}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena29"}
                                                ref={col_atraso_dezena29}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena30"}
                                                ref={col_atraso_dezena30}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_probabilidades21_30"}
                                        >
                                            <td
                                                id={"col_probabilidade_dezena21"}
                                                ref={col_probabilidade_dezena21}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena22"}
                                                ref={col_probabilidade_dezena22}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena23"}
                                                ref={col_probabilidade_dezena23}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena24"}
                                                ref={col_probabilidade_dezena24}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena25"}
                                                ref={col_probabilidade_dezena25}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena26"}
                                                ref={col_probabilidade_dezena26}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena27"}
                                                ref={col_probabilidade_dezena27}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena28"}
                                                ref={col_probabilidade_dezena28}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena29"}
                                                ref={col_probabilidade_dezena29}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena30"}
                                                ref={col_probabilidade_dezena30}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_repeticoes21_30"}
                                        >
                                            <td
                                                id={"col_repeticoes_dezena21"}
                                                ref={col_repeticoes_dezena21}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena22"}
                                                ref={col_repeticoes_dezena22}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena23"}
                                                ref={col_repeticoes_dezena23}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena24"}
                                                ref={col_repeticoes_dezena24}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena25"}
                                                ref={col_repeticoes_dezena25}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena26"}
                                                ref={col_repeticoes_dezena26}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena27"}
                                                ref={col_repeticoes_dezena27}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena28"}
                                                ref={col_repeticoes_dezena28}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena29"}
                                                ref={col_repeticoes_dezena29}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena30"}
                                                ref={col_repeticoes_dezena30}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id={"div_dezenas31_40"}
                                ref={div_dezenas31_40}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 31 a 40"}
                            >
                                <table
                                    id={"tbl_dezenas31_40"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas31_40"}
                                        >
                                            <td
                                                id={"col_dezena31"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena31"}
                                                    ref={cbx_dezena31}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena31"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena31"}
                                                >
                                                    [ <b>31</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena32"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena32"}
                                                    ref={cbx_dezena32}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena32"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena32"}
                                                >
                                                    [ <b>32</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena33"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena33"}
                                                    ref={cbx_dezena33}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena33"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena33"}
                                                >
                                                    [ <b>33</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena34"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena34"}
                                                    ref={cbx_dezena34}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena34"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena34"}
                                                >
                                                    [ <b>34</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena35"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena35"}
                                                    ref={cbx_dezena35}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena35"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena35"}
                                                >
                                                    [ <b>35</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena36"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena36"}
                                                    ref={cbx_dezena36}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena36"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena36"}
                                                >
                                                    [ <b>36</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena37"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena37"}
                                                    ref={cbx_dezena37}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena37"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena37"}
                                                >
                                                    [ <b>37</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena38"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena38"}
                                                    ref={cbx_dezena38}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena38"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena38"}
                                                >
                                                    [ <b>38</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena39"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena39"}
                                                    ref={cbx_dezena39}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena39"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena39"}
                                                >
                                                    [ <b>39</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena40"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena40"}
                                                    ref={cbx_dezena40}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena40"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena40"}
                                                >
                                                    [ <b>40</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios31_40"}
                                        >
                                            <td
                                                id={"col_qtd_dezena31"}
                                                ref={col_qtd_dezena31}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena32"}
                                                ref={col_qtd_dezena32}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena33"}
                                                ref={col_qtd_dezena33}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena34"}
                                                ref={col_qtd_dezena34}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena35"}
                                                ref={col_qtd_dezena35}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena36"}
                                                ref={col_qtd_dezena36}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena37"}
                                                ref={col_qtd_dezena37}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena38"}
                                                ref={col_qtd_dezena38}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena39"}
                                                ref={col_qtd_dezena39}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena40"}
                                                ref={col_qtd_dezena40}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_atrasos31_40"}
                                        >
                                            <td
                                                id={"col_atraso_dezena31"}
                                                ref={col_atraso_dezena31}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena32"}
                                                ref={col_atraso_dezena32}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena33"}
                                                ref={col_atraso_dezena33}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena34"}
                                                ref={col_atraso_dezena34}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena35"}
                                                ref={col_atraso_dezena35}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena36"}
                                                ref={col_atraso_dezena36}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena37"}
                                                ref={col_atraso_dezena37}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena38"}
                                                ref={col_atraso_dezena38}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena39"}
                                                ref={col_atraso_dezena39}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena40"}
                                                ref={col_atraso_dezena40}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_probabilidades31_40"}
                                        >
                                            <td
                                                id={"col_probabilidade_dezena31"}
                                                ref={col_probabilidade_dezena31}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena32"}
                                                ref={col_probabilidade_dezena32}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena33"}
                                                ref={col_probabilidade_dezena33}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena34"}
                                                ref={col_probabilidade_dezena34}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena35"}
                                                ref={col_probabilidade_dezena35}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena36"}
                                                ref={col_probabilidade_dezena36}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena37"}
                                                ref={col_probabilidade_dezena37}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena38"}
                                                ref={col_probabilidade_dezena38}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena39"}
                                                ref={col_probabilidade_dezena39}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena40"}
                                                ref={col_probabilidade_dezena40}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_repeticoes31_40"}
                                        >
                                            <td
                                                id={"col_repeticoes_dezena31"}
                                                ref={col_repeticoes_dezena31}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena32"}
                                                ref={col_repeticoes_dezena32}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena33"}
                                                ref={col_repeticoes_dezena33}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena34"}
                                                ref={col_repeticoes_dezena34}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena35"}
                                                ref={col_repeticoes_dezena35}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena36"}
                                                ref={col_repeticoes_dezena36}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena37"}
                                                ref={col_repeticoes_dezena37}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena38"}
                                                ref={col_repeticoes_dezena38}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena39"}
                                                ref={col_repeticoes_dezena39}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena40"}
                                                ref={col_repeticoes_dezena40}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id={"div_dezenas41_50"}
                                ref={div_dezenas41_50}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 41 a 50"}
                            >
                                <table
                                    id={"tbl_dezenas41_50"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas41_50"}
                                        >
                                            <td
                                                id={"col_dezena41"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena41"}
                                                    ref={cbx_dezena41}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena41"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena41"}
                                                >
                                                    [ <b>41</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena42"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena42"}
                                                    ref={cbx_dezena42}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena42"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena42"}
                                                >
                                                    [ <b>42</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena43"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena43"}
                                                    ref={cbx_dezena43}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena43"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena43"}
                                                >
                                                    [ <b>43</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena44"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena44"}
                                                    ref={cbx_dezena44}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena44"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena44"}
                                                >
                                                    [ <b>44</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena45"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena45"}
                                                    ref={cbx_dezena45}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena45"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena45"}
                                                >
                                                    [ <b>45</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena46"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena46"}
                                                    ref={cbx_dezena46}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena46"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena46"}
                                                >
                                                    [ <b>46</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena47"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena47"}
                                                    ref={cbx_dezena47}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena47"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena47"}
                                                >
                                                    [ <b>47</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena48"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena48"}
                                                    ref={cbx_dezena48}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena48"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena48"}
                                                >
                                                    [ <b>48</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena49"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena49"}
                                                    ref={cbx_dezena49}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena49"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena49"}
                                                >
                                                    [ <b>49</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena50"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena50"}
                                                    ref={cbx_dezena50}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena50"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena50"}
                                                >
                                                    [ <b>50</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios41_50"}
                                        >
                                            <td
                                                id={"col_qtd_dezena41"}
                                                ref={col_qtd_dezena41}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena42"}
                                                ref={col_qtd_dezena42}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena43"}
                                                ref={col_qtd_dezena43}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena44"}
                                                ref={col_qtd_dezena44}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena45"}
                                                ref={col_qtd_dezena45}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena46"}
                                                ref={col_qtd_dezena46}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena47"}
                                                ref={col_qtd_dezena47}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena48"}
                                                ref={col_qtd_dezena48}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena49"}
                                                ref={col_qtd_dezena49}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_qtd_dezena50"}
                                                ref={col_qtd_dezena50}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_atrasos41_50"}
                                        >
                                            <td
                                                id={"col_atraso_dezena41"}
                                                ref={col_atraso_dezena41}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena42"}
                                                ref={col_atraso_dezena42}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena43"}
                                                ref={col_atraso_dezena43}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena44"}
                                                ref={col_atraso_dezena44}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena45"}
                                                ref={col_atraso_dezena45}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena46"}
                                                ref={col_atraso_dezena46}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena47"}
                                                ref={col_atraso_dezena47}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena48"}
                                                ref={col_atraso_dezena48}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena49"}
                                                ref={col_atraso_dezena49}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_atraso_dezena50"}
                                                ref={col_atraso_dezena50}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_probabilidades41_50"}
                                        >
                                            <td
                                                id={"col_probabilidade_dezena41"}
                                                ref={col_probabilidade_dezena41}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena42"}
                                                ref={col_probabilidade_dezena42}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena43"}
                                                ref={col_probabilidade_dezena43}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena44"}
                                                ref={col_probabilidade_dezena44}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena45"}
                                                ref={col_probabilidade_dezena45}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena46"}
                                                ref={col_probabilidade_dezena46}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena47"}
                                                ref={col_probabilidade_dezena47}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena48"}
                                                ref={col_probabilidade_dezena48}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena49"}
                                                ref={col_probabilidade_dezena49}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_probabilidade_dezena50"}
                                                ref={col_probabilidade_dezena50}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_repeticoes41_50"}
                                        >
                                            <td
                                                id={"col_repeticoes_dezena41"}
                                                ref={col_repeticoes_dezena41}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena42"}
                                                ref={col_repeticoes_dezena42}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena43"}
                                                ref={col_repeticoes_dezena43}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena44"}
                                                ref={col_repeticoes_dezena44}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena45"}
                                                ref={col_repeticoes_dezena45}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena46"}
                                                ref={col_repeticoes_dezena46}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena47"}
                                                ref={col_repeticoes_dezena47}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena48"}
                                                ref={col_repeticoes_dezena48}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena49"}
                                                ref={col_repeticoes_dezena49}
                                            >
                                                0
                                            </td>
                                            <td
                                                id={"col_repeticoes_dezena50"}
                                                ref={col_repeticoes_dezena50}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col>
                            <div
                                id={"div_dezenas51_60"}
                                ref={div_dezenas51_60}
                                className={"btn-group"}
                                role={"group"}
                                aria-label={"Dezenas de 51 a 60"}
                            >
                                <table
                                    id={"tbl_dezenas51_60"}
                                >
                                    <tbody>
                                        <tr
                                            id={"linha_col_dezenas51_60"}
                                        >
                                            <td
                                                id={"col_dezena51"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena51"}
                                                    ref={cbx_dezena51}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena51"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena51"}
                                                >
                                                    [ <b>51</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena52"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena52"}
                                                    ref={cbx_dezena52}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena52"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena52"}
                                                >
                                                    [ <b>52</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena53"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena53"}
                                                    ref={cbx_dezena53}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena53" }
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena53"}
                                                >
                                                    [ <b>53</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena54"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena54"}
                                                    ref={cbx_dezena54}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena54"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena54"}
                                                >
                                                    [ <b>54</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena55"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena55"}
                                                    ref={cbx_dezena55}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena55"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena55"}
                                                >
                                                    [ <b>55</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena56"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena56"}
                                                    ref={cbx_dezena56}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena56"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena56"}
                                                >
                                                    [ <b>56</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena57"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena57"}
                                                    ref={cbx_dezena57}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena57"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena57"}
                                                >
                                                    [ <b>57</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena58"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena58"}
                                                    ref={cbx_dezena58}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena58"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena58"}
                                                >
                                                    [ <b>58</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena59"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena59"}
                                                    ref={cbx_dezena59}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena59"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena59"}
                                                >
                                                    [ <b>59</b> ]
                                                </label>
                                            </td>
                                            <td
                                                id={"col_dezena60"}
                                                title={"Dezena"}
                                            >
                                                <input
                                                    type={"checkbox"}
                                                    className={"btn-check"}
                                                    id={"cbx_dezena60"}
                                                    ref={cbx_dezena60}
                                                    onChange={localizarDezenas}
                                                />
                                                <label
                                                    id={"lbl_dezena60"}
                                                    className={"btn btn-outline-success"}
                                                    htmlFor={"cbx_dezena60"}
                                                >
                                                    [ <b>60</b> ]
                                                </label>
                                            </td>
                                        </tr>
                                        <tr
                                            id={"linha_col_qtd_sorteios51_60"}
                                        >
                                            <td 
                                                id={"col_qtd_dezena51"}
                                                ref={col_qtd_dezena51}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena52"}
                                                ref={col_qtd_dezena52}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena53"}
                                                ref={col_qtd_dezena53}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena54"}
                                                ref={col_qtd_dezena54}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena55"}
                                                ref={col_qtd_dezena55}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena56"}
                                                ref={col_qtd_dezena56}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena57"}
                                                ref={col_qtd_dezena57}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena58"}
                                                ref={col_qtd_dezena58}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena59"}
                                                ref={col_qtd_dezena59}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_qtd_dezena60"}
                                                ref={col_qtd_dezena60}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr 
                                            id={"linha_col_atrasos51_60"}
                                        >
                                            <td 
                                                id={"col_atraso_dezena51"}
                                                ref={col_atraso_dezena51}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena52"}
                                                ref={col_atraso_dezena52}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena53"}
                                                ref={col_atraso_dezena53}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena54"}
                                                ref={col_atraso_dezena54}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena55"}
                                                ref={col_atraso_dezena55}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena56"}
                                                ref={col_atraso_dezena56}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena57"}
                                                ref={col_atraso_dezena57}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena58"}
                                                ref={col_atraso_dezena58}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena59"}
                                                ref={col_atraso_dezena59}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_atraso_dezena60"}
                                                ref={col_atraso_dezena60}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr 
                                            id={"linha_col_probabilidades51_60"}
                                        >
                                            <td 
                                                id={"col_probabilidade_dezena51"}
                                                ref={col_probabilidade_dezena51}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena52"}
                                                ref={col_probabilidade_dezena52}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena53"}
                                                ref={col_probabilidade_dezena53}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena54"}
                                                ref={col_probabilidade_dezena54}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena55"}
                                                ref={col_probabilidade_dezena55}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena56"}
                                                ref={col_probabilidade_dezena56}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena57"}
                                                ref={col_probabilidade_dezena57}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena58"}
                                                ref={col_probabilidade_dezena58}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena59"}
                                                ref={col_probabilidade_dezena59}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_probabilidade_dezena60"}
                                                ref={col_probabilidade_dezena60}
                                            >
                                                0
                                            </td>
                                        </tr>
                                        <tr 
                                            id={"linha_col_repeticoes51_60"}
                                        >
                                            <td 
                                                id={"col_repeticoes_dezena51"}
                                                ref={col_repeticoes_dezena51}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena52"}
                                                ref={col_repeticoes_dezena52}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena53"}
                                                ref={col_repeticoes_dezena53}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena54"}
                                                ref={col_repeticoes_dezena54}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena55"}
                                                ref={col_repeticoes_dezena55}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena56"}
                                                ref={col_repeticoes_dezena56}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena57"}
                                                ref={col_repeticoes_dezena57}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena58"}
                                                ref={col_repeticoes_dezena58}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena59"}
                                                ref={col_repeticoes_dezena59}
                                            >
                                                0
                                            </td>
                                            <td 
                                                id={"col_repeticoes_dezena60"}
                                                ref={col_repeticoes_dezena60}
                                            >
                                                0
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.StrictMode>
        );
    }
};