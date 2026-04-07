import React, { useState, useEffect } from "react";
import * as C from './styles';
import Header from "../../components/Header"

const Home = () => {
    const [counts, setCounts] = useState({ abertos: 0, andamento: 0, resolvidos: 0 });

    useEffect(() => {
        const storedTickets = JSON.parse(localStorage.getItem('tickets_db')) || [];
        
        let abertos = 0;
        let andamento = 0;
        let resolvidos = 0;

        storedTickets.forEach(ticket => {
            if (ticket.status === "Aberto") abertos++;
            else if (ticket.status === "Em Andamento") andamento++;
            else if (ticket.status === "Resolvido") resolvidos++;
        });

        setCounts({ abertos, andamento, resolvidos });
    }, []);

    return (
        <>
            <Header />
            <C.Container>
                <C.Title>Painel do Sistema</C.Title>
                <C.DashboardGrid>
                    <C.Card>
                        <C.CardTitle>Chamados Abertos</C.CardTitle>
                        <C.CardValue color="#e74c3c">{counts.abertos}</C.CardValue>
                    </C.Card>
                    <C.Card>
                        <C.CardTitle>Em Andamento</C.CardTitle>
                        <C.CardValue color="#f39c12">{counts.andamento}</C.CardValue>
                    </C.Card>
                    <C.Card>
                        <C.CardTitle>Resolvidos</C.CardTitle>
                        <C.CardValue color="#2ecc71">{counts.resolvidos}</C.CardValue>
                    </C.Card>
                </C.DashboardGrid>
            </C.Container>
        </>

    );
};

export default Home;