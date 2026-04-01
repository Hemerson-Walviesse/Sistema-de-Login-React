import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUSer] = useState();

    useEffect(()=>{
        const userToken = localStorage.getItem("user_token");
        const userStorege = localStorage.getItem("users_db");

        if(userToken && userStorege) {
            const hasUser = JSON.parse(userStorege)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUSer(hasUser[0])
        }
    },[] );

    const singin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email,password}))
                setUSer({email,password});
                return;
            }else{
                return "E-mail ou senha incorretos"
            }
        }else{
            return "Usuário não cadastrado"
        }
    };

    const signup = (email, password)=>{
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user)=> user.email === email);

        if(hasUser?.length){
            return "E-mail já cadastrado.";
        }

        let newUser;

        if(usersStorage){
            newUser = [...usersStorage, {email, password}];
        }else {
            newUser = [{email, password}];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser))

        return;
    }

    const signout = ()=>{
        setUSer(null);
        localStorage.removeItem("user_token");
    }

    return <AuthContext.Provider value={{user, signed: !!user, singin, signup, signout}}>
        {children}
        </AuthContext.Provider>
}