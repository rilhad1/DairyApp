import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100%;
    padding: 30px 5px;
    background-color: #2B2F3E;
`

const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    color: #FFFFFF;
    font-size: 26px;
    font-weight: 400;
`
const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    color: #808080;
    font-size: 15px;
    margin-top: 10px;
    font-weight: 500;
`

const DairyApp = () => {
        return (
            <Div>
                <Title>DAIRY APP</Title>
                <P>Comment with no sense</P>
            </Div>
        );
};

export default DairyApp;
