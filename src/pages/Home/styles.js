import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 20px;
    background-color: #1A202C;
`;

export const Title = styled.h2`
    color: white;
    font-size: 28px;
`
export const DashboardGrid = styled.div`
    display: flex;
    gap: 20px;
    width: 90%;
    max-width: 1000px;
    flex-wrap: wrap; /* Faz quebrar de linha em celular */
    justify-content: center;
`;
export const Card = styled.div`
    background-color: #171923;
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    min-width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const CardTitle = styled.h3`
    color: #E2E8F0;
    font-size: 18px;
    margin: 0;
`;
export const CardValue = styled.span`
    /* Puxa a cor dinâmica caso a página envie. O Default é branco caso nada seja enviado */
    color: ${(props) => props.color || "#FFFFFF"};
    font-size: 48px;
    font-weight: bold;
`;