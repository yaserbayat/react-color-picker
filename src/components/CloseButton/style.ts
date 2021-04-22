import styled from 'styled-components';

const
    darkGreenColor = '#199270',
    mediumGreenColor = '#a8ecd9',
    lightGreenColor = '#ddfff6';

export const CloseBtnStyle = styled.button`
    outline: 0;
    border: 0;
    color: ${darkGreenColor};
    border-radius: 50%;
    background-color: ${mediumGreenColor};
    cursor: pointer;
    font-size: 10px;
    height: 21px;
    width: 21px;
    line-height: 21px;
    padding: 0;
    text-align: center;
    transition: background 0.15s ease 0s;
    
    &:focus {
        outline: 0;
        border: 0;
    }
    
    &:active {
        background-color: ${darkGreenColor};
        color: ${lightGreenColor};
    }
    
    &:hover {
        background-color: ${lightGreenColor};
    }
`