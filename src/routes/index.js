import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Tickets from "../pages/Tickets";
import NewTicket from "../pages/NewTicket";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}></Private>} />
                    <Route exact path="/tickets" element={<Private Item={Tickets}></Private>} />
                    <Route exact path="/new-ticket" element={<Private Item={NewTicket}></Private>} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp
