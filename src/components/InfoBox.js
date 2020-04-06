import React from 'react';
import styled from "styled-components";

const InfBox = styled.body `
    border-style: inset;
    border-width: 8px;
    border-color: green;
    text-align: center;
    background-color: #006600;
`

function InfoBox(props) {
    return(
        <div>
            <InfBox>
            <h4>How To Use</h4>
            <h6>Just enter the element you want to use: ex NH4. It will give you the grams per mole ratio.</h6>
            <p>Ex: NH4 (or NHHHH if you are used to the old version) - 18.039 grams / mol</p>
            </InfBox>
        </div>
    );
}
export default InfoBox;