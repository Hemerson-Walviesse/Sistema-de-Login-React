import React from "react";
import { Container, Content, Top } from "./styles";
import { useNavigate } from "react-router-dom";
import {
    FaTimes,
    FaHome,
    FaEnvelope,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar,
    FaPlus,
} from 'react-icons/fa';
import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
    const navigate = useNavigate();
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <Top>
                <FaTimes onClick={closeSidebar} />
            </Top>

            <Content>
                <SidebarItem Icon={FaHome} Text="Home" onClick={() => { navigate('/home'); closeSidebar(); }} />
                <SidebarItem Icon={FaRegFileAlt} Text="Chamados" onClick={() => { navigate('/tickets'); closeSidebar(); }} />
                <SidebarItem Icon={FaPlus} Text="Novo Chamado" onClick={() => { navigate('/new-ticket'); closeSidebar(); }} />
                <SidebarItem Icon={FaChartBar} Text="Statistics" />
                <SidebarItem Icon={FaUserAlt} Text="Users" />
                <SidebarItem Icon={FaEnvelope} Text="Mail" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendary" />
                <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
                <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
                <SidebarItem Icon={FaRegSun} Text="Settings" />
            </Content>
        </Container>
    )
}

export default Sidebar;