import React, { useState } from "react";
import { Container, UserSection, Dropdown } from "./styles";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { user, signout } = useAuth();
    const navigate = useNavigate();

    const showSidebar = () => setSidebar(!sidebar);
    const toggleDropdown = () => setDropdown(!dropdown);

    const handleLogout = () => {
        signout();
        navigate("/");
    };

    return (
        <Container>
            <FaBars onClick={showSidebar} />

            <UserSection onClick={toggleDropdown}>
                <span>{user?.email || "usuario@teste.com"} ▼</span>
                {dropdown && (
                    <Dropdown>
                        <button onClick={handleLogout}>Sair</button>
                    </Dropdown>
                )}
            </UserSection>

            {sidebar && <Sidebar active={setSidebar} />}
        </Container>
    );
};

export default Header;