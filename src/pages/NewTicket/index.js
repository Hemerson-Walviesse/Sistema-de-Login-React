import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import * as C from "./styles";

const NewTicket = () => {
    const navigate = useNavigate();
    const [cliente, setCliente] = useState("");
    const [assunto, setAssunto] = useState("");
    const [descricao, setDescricao] = useState("");

    const handleSalvar = () => {
        if (!cliente || !assunto || !descricao) {
            alert("Preencha todos os campos!");
            return;
        }

        const newId = Math.floor(Math.random() * 9000) + 1000;
        const dataAtual = new Date().toLocaleDateString('pt-BR');
        
        const newTicket = { id: String(newId), client: cliente, subject: assunto, date: dataAtual, status: "Aberto", description: descricao };

        const storedTickets = JSON.parse(localStorage.getItem('tickets_db')) || [];
        localStorage.setItem('tickets_db', JSON.stringify([newTicket, ...storedTickets]));

        alert("Chamado aberto com sucesso!");
        navigate("/tickets");
    };

    return (
        <>
            <Header />
            <C.Container>
                <C.Title>Abrir Novo Chamado</C.Title>
                <C.FormContainer>
                    <div>
                        <C.Label>Cliente ou Empresa</C.Label>
                        <C.Input 
                            type="text" 
                            placeholder="Ex: Empresa XPTO"
                            value={cliente}
                            onChange={(e) => setCliente(e.target.value)}
                        />
                    </div>
                    <div>
                        <C.Label>Assunto</C.Label>
                        <C.Input 
                            type="text" 
                            placeholder="Resumo do problema"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                        />
                    </div>
                    <div>
                        <C.Label>Descrição Detalhada</C.Label>
                        <C.TextArea 
                            placeholder="Descreva o problema com o máximo de detalhes..."
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    <C.ButtonContainer>
                        <Button Text="Abrir Chamado" onClick={handleSalvar}>
                            Abrir Chamado
                        </Button>
                    </C.ButtonContainer>
                </C.FormContainer>
            </C.Container>
        </>
    );
};

export default NewTicket;
