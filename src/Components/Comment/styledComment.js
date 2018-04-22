import styled from 'styled-components';

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    width: 40%;
    min-height: 700px;
    margin: 30px 15px;
    padding: 20px 15px 20px 25px;
    box-shadow: 0px 0px 18px 1px rgba(0,0,0,0.46);
`;

export const CommentTitle = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 26px;
    font-weight: 400;
    color: #565A69;
    margin-bottom: 25px;
`;

export const Ul = styled.ul`
    height: 550px;
    max-heigh: 550px;
    overflow: auto;
    padding: 0 10px 0 0;
    &::-webkit-scrollbar {
        width: 5px;
        margin-right: -10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #565A69; 
    }
`;

export const Message = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0 0 0;
`;

export const Logo = styled.img`
    width:52px;
    height: 52px
    background-color: #E6E6E6;
    display:inline-block;
`;

export const TextArea = styled.textarea`
    border-color: #CCCCCC;
    outline: none;
    border-style: solid;
    padding: 0 10px;
    width: 80%;
    height: 70px;
    float: right;
    padding: 5px;
    resize: none;
`;
export const PostItem = styled.li` 
    width:100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px 0;
    border-bottom: 1px solid #F2F2F2;
`;

export const P = styled.p`
    display: inline-block;
    width: 80%;
    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #666666;
`;