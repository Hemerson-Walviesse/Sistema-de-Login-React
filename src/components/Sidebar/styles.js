import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(23, 25, 35, 0.95);
    backdrop-filter: blur(8px);
    position: fixed;
    height: 100%;
    top: 0px;
    width: 300px;
    z-index: 100;
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.5);
    left: ${props => props.sidebar ? "0" : "-100%"};
    animation: showSidebar .4s;
    

    @keyframes showSidebar{
        from {
            opacity: 0;
            width: 0;
        }
        to {
        opacity: 1;
        width: 300px;
        }
    }
`;

export const Content = styled.div`
    margin-top: 10px;
`
export const Top = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    > svg{
    
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    cursor: pointer;
    
    }
`;