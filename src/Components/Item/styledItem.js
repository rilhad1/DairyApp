import styled from 'styled-components';

export const ItemDiv = styled.div`
    background-color: white;
    width: 50%;
    min-height: 525px;
    margin: 30px 15px;
    padding: 20px 0px 20px 15px;
    -webkit-box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.46);
    box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.46);
`;

export const ItemTitle = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #565A69;
    margin-bottom: 25px;
`;

export const Li = styled.li`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    
    &:hover{
        border-left: 4px solid red;
    }
`;

export const P = styled.p`
    display: inline;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
`;

export const Span = styled.span`
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
    padding: 3px 10px;
    background-color: #27CCC0;
    border-radius: 20px;
    margin-left: 15px;
`;

export const Button = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    width: 95px;
    height:35px;
    color: #FF305A;
    background-color: white;
    border: 1px solid #FF305A;
    margin: 10px 15px 10px 0;
    cursor: pointer;
    border-radius: 5px;

    &:focus{
        outline: none;
    }
    &:hover{
        color: white;
        background-color: #FF305A;
        border-color: white;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    border-color: #CCCCCC;
    outline: none;
    border-style: solid;
    padding: 0 10px;
    width: 64%;
    height: 38px;
    border-radius: 5px;
    
    &::placeholder{
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #B3B3B3;
    }
`;

export const ButtonSub = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 130px;
    height: 42px;
    color: #FFFFFF;
    background-color: #27CCC0;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
    border-style: none;
    &:focus{
        outline: none;
    }
    &:hover{
        color: #27CCC0;
        background-color: #FFFFFF;
        border: 1px solid #27CCC0
    }
`;