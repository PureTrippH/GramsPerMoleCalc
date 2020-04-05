import React from 'react';
import styled from "styled-components";

const background = styled.body `
    background-color: green;
    color: green;
    text-color: blue;
`

const Textt = styled.h4 `
    word-wrap: break-word;
    overflow:hidden;

`

function FormBox(props) {
    return(
        <background>
            <Textt>{props.text}</Textt>
        </background>
    );
}

export default FormBox;