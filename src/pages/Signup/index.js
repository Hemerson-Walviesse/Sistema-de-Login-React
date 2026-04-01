import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles"
import { Link, useNavigate } from "react-router-dom";

const Signup = () =>{
    const [ email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    
    const navigate = useNavigate();
    const {signup} = useAuth();

    const handleSingup = ()=> {
        if(!senha || !email || !emailConf){
            setError("Preencha todos os campos")
            return;
        }else if(email !== emailConf){
            setError("Os e-mails são diferentes");
            return;
        }

        const res = signup(email, senha)

        if(res){
            setError(res)
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/")
    }

    return (
        <C.Container>
            <C.Label>CADASTRO DE USUARIO</C.Label>
            <C.Content>
                <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e)=> [setEmail(e.target.value),setError("")]}
                />
                <Input
                type="email"
                placeholder="Confirme seu e-mail"
                value={emailConf}
                onChange={(e)=> [setEmailConf(e.target.value),setError("")]}
                />
                 <Input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e)=> [setSenha(e.target.value),setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Inscrever-se" onClick={handleSingup} />
                <C.LabelSignup>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/"> Entre</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    )
};

export default Signup;