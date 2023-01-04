import styled from 'styled-components';

export const List = styled.ul `
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    width: 400px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
export const Item = styled.li `
    padding: 5px;
    border: 1px solid blue;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button{
        padding: 5px;
        border: 1px solid tomato;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;

        :hover, :focus {
            background-color: tomato;
            color: white;
        }
    }

    p{
        font-weight: 500;
    }
`