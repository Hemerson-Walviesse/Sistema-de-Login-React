import React from "react";
import {Container, Content, Top} from "./styles";
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
   

} from 'react-icons/fa';
import SidebarItem from "../SidebarItem";

const Sidebar = ({active})=> {
    const closeSidebar = ()=> {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <Top>
                <FaTimes onClick={closeSidebar} />
            </Top>
            
            <Content>
                <SidebarItem Icon={FaHome} Text="Home"/>
                <SidebarItem Icon={FaChartBar} Text="Statistics"/>
                <SidebarItem Icon={FaUserAlt} Text="Users"/>
                <SidebarItem Icon={FaEnvelope} Text="Mail"/>
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendary"/>
                <SidebarItem Icon={FaIdCardAlt} Text="Employees"/>
                <SidebarItem Icon={FaRegFileAlt} Text="Reports"/>
                <SidebarItem Icon={FaRegSun} Text="Settings"/>
            </Content>
        </Container>
    )
}

export default Sidebar;