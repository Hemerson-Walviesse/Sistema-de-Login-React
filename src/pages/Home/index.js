import React from "react";
import * as C from './styles';
import Header from "../../components/Header"

const Home = () => {

    return (
        <>
            <Header />
            <C.Container>
                <C.Title>Painel do Sistema</C.Title>
                <C.DashboardGrid>
                    <C.Card>
                        <C.CardTitle>Chamados Abertos</C.CardTitle>
                        <C.CardValue color="#e74c3c">12</C.CardValue>
                    </C.Card>
                    <C.Card>
                        <C.CardTitle>Em Andamento</C.CardTitle>
                        <C.CardValue color="#f39c12">5</C.CardValue>
                    </C.Card>
                    <C.Card>
                        <C.CardTitle>Resolvidos Hoje</C.CardTitle>
                        <C.CardValue color="#2ecc71">28</C.CardValue>
                    </C.Card>
                </C.DashboardGrid>
            </C.Container>
        </>

    );
};

export default Home;