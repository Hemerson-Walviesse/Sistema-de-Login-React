import React,{ useState} from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import useAuth from "../../hooks/useAuth"

const Header = () =>{
    const [sidebar, setSidebar] = useState(false);
    const { user } = useAuth();

    const showSidebar = ()=> setSidebar(!sidebar)

    return(
        <Container>
            <FaBars onClick={showSidebar} />
            <span>{user?.email}</span>

            {sidebar && <Sidebar active={setSidebar} />}
        </Container>
    )
}

export default Header;