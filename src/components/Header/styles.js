import styled from "styled-components";

export const Container = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1A202C;
    box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.5);
    padding: 0 30px;
    

    > svg{
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

export const UserSection = styled.div`
    position: relative;
    cursor: pointer;
    
    span {
        color: white;
        font-size: 16px;
        display: flex;
        font-weight: bold;
    }
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #2D3748;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.5);
    padding: 10px 0;
    width: 120px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    
    button {
        background: none;
        border: none;
        color: #E2E8F0;
        font-size: 16px;
        padding: 10px 20px;
        cursor: pointer;
        text-align: left;
        
        &:hover {
            background-color: #4A5568;
            color: white;
        }
    }
`;