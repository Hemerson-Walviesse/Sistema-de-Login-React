import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import * as C from "./styles";



const Tickets = () => {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [editingTicket, setEditingTicket] = useState(null);

    useEffect(() => {
        const storedTickets = JSON.parse(localStorage.getItem('tickets_db'));
        if (storedTickets) {
            setTickets(storedTickets);
        }
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Deseja realmente excluir este chamado?")) {
            const updatedTickets = tickets.filter(t => t.id !== id);
            setTickets(updatedTickets);
            localStorage.setItem('tickets_db', JSON.stringify(updatedTickets));
        }
    };

    const handleEditSave = (e) => {
        e.preventDefault();
        const updatedTickets = tickets.map(t => t.id === editingTicket.id ? editingTicket : t);
        setTickets(updatedTickets);
        localStorage.setItem('tickets_db', JSON.stringify(updatedTickets));
        setEditingTicket(null);
    };

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
                                        <C.ActionGroup>
                                            <C.ActionButton onClick={() => setSelectedTicket(ticket)}>
                                                Visualizar
                                            </C.ActionButton>
                                            <C.EditButton onClick={() => setEditingTicket(ticket)}>
                                                Editar
                                            </C.EditButton>
                                            <C.DeleteButton onClick={() => handleDelete(ticket.id)}>
                                                Excluir
                                            </C.DeleteButton>
                                        </C.ActionGroup>
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

            {editingTicket && (
                <C.Modal>
                    <C.ModalContent>
                        <C.CloseModal onClick={() => setEditingTicket(null)}>X</C.CloseModal>
                        <h3>Editar Chamado #{editingTicket.id}</h3>
                        <C.Form onSubmit={handleEditSave}>
                            <C.Input 
                                type="text" 
                                value={editingTicket.client} 
                                onChange={e => setEditingTicket({...editingTicket, client: e.target.value})} 
                                placeholder="Cliente"
                                required
                            />
                            <C.Input 
                                type="text" 
                                value={editingTicket.subject} 
                                onChange={e => setEditingTicket({...editingTicket, subject: e.target.value})} 
                                placeholder="Assunto"
                                required
                            />
                            <C.SelectStatus 
                                value={editingTicket.status} 
                                onChange={e => setEditingTicket({...editingTicket, status: e.target.value})}
                                style={{ padding: '10px', fontSize: '16px' }}
                            >
                                <option value="Aberto">Aberto</option>
                                <option value="Em Andamento">Em Andamento</option>
                                <option value="Resolvido">Resolvido</option>
                            </C.SelectStatus>
                            <C.TextArea 
                                value={editingTicket.description} 
                                onChange={e => setEditingTicket({...editingTicket, description: e.target.value})} 
                                placeholder="Descrição do chamado"
                                required
                            />
                            <C.NewTicketButton type="submit">Salvar Alterações</C.NewTicketButton>
                        </C.Form>
                    </C.ModalContent>
                </C.Modal>
            )}
        </>
    );
};

export default Tickets;
