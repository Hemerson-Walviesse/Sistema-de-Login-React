import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from './styles';
import Header from "../../components/Header"

const Home = () =>{

    const { signout} = useAuth();
    const navigate = useNavigate();

    return (
        <>
        <Header />
         <C.Container>
            <C.Title>HOME</C.Title>
            <Button Text="Sair" onClick={()=> [signout(), navigate("/")]}>
                Sair
            </Button>
        </C.Container>
        </>
       
    );
};

export default Home;