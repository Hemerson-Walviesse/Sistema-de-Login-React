import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import * as C from "./styles";

const mockTickets = [
    { id: "1001", client: "Empresa XPTO", subject: "Sistema fora do ar", date: "06/04/2026", status: "Aberto", description: "Todos os computadores da empresa não acessam o servidor principal desde as 8h da manhã." },
    { id: "1002", client: "João Silva", subject: "Dúvida sobre fatura", date: "05/04/2026", status: "Em Andamento", description: "Cliente relata que o valor da fatura de março veio divergente do contrato." },
    { id: "1003", client: "Maria Souza", subject: "Troca de senha", date: "04/04/2026", status: "Resolvido", description: "Solicitação para resetar a senha do portal de compras." },
    { id: "1004", client: "Supermercado Alfa", subject: "Relatório com erro", date: "03/04/2026", status: "Resolvido", description: "O relatório mensal de vendas não está carregando os dados corretos nos PDFs." },
];

const Tickets = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);

    useEffect(() => {
        const storedTickets = JSON.parse(localStorage.getItem('tickets_db')) || [];
        setTickets([...storedTickets, ...mockTickets]);
    }, []);

    return (
        <>
            <Header />
            <C.Container>
                <C.HeaderPage>
                    <C.Title>Lista de Chamados</C.Title>
                    <C.NewTicketButton onClick={() => navigate("/new-ticket")}>
                        + Abrir Chamado
                    </C.NewTicketButton>
                </C.HeaderPage>
                <C.Content>
                    <C.Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cliente</th>
                                <th>Assunto</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>
                                    <td>#{ticket.id}</td>
                                    <td>{ticket.client}</td>
                                    <td>{ticket.subject}</td>
                                    <td>{ticket.date}</td>
                                    <td>
                                        <C.StatusBadge status={ticket.status}>
                                            {ticket.status}
                                        </C.StatusBadge>
                                    </td>
                                    <td>
                                        <C.ActionButton onClick={() => setSelectedTicket(ticket)}>
                                            Visualizar
                                        </C.ActionButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </C.Table>
                </C.Content>
            </C.Container>

            {selectedTicket && (
                <C.Modal>
                    <C.ModalContent>
                        <C.CloseModal onClick={() => setSelectedTicket(null)}>X</C.CloseModal>
                        <h3>Chamado #{selectedTicket.id}</h3>
                        <p><strong>Cliente:</strong> {selectedTicket.client}</p>
                        <p><strong>Assunto:</strong> {selectedTicket.subject}</p>
                        <p><strong>Data:</strong> {selectedTicket.date}</p>
                        <p><strong>Status:</strong> {selectedTicket.status}</p>
                        <hr style={{ borderColor: '#2D3748', margin: '20px 0' }} />
                        <p><strong>Descrição:</strong><br /><br />{selectedTicket.description || "Nenhuma descrição informada."}</p>
                    </C.ModalContent>
                </C.Modal>
            )}
        </>
    );
};

export default Tickets;
