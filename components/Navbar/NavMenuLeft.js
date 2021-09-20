/* Styles imports */
import { AnchorTag } from "../../styles/Globals.styles";
import { NavMenuTabContainerLeft, NavMenuTabLeft, NavIcons } from "../../styles/Components/Navbar.styles";

/* Material UI Icons */
import { KeyboardArrowDown } from "@material-ui/icons";

const NavMenuLeft = ({ menuItems, setActiveTab, activeTab }) => {

    const container = menuItems.map((item) => (
        <NavMenuTabContainerLeft onMouseOver={() => setActiveTab(item.tabIdx)} onMouseLeave={() => setActiveTab(null)}>
            <NavMenuTabLeft activeTab={activeTab === item.tabIdx ? true : false}>
                <AnchorTag>{item.name}</AnchorTag>
                    <span>
                        <NavIcons>
                            <KeyboardArrowDown/>
                        </NavIcons>
                    </span>
            </NavMenuTabLeft>
            {activeTab === item.tabIdx ? (item.onActive) : null}
        </NavMenuTabContainerLeft>
    ))
    return (
        <>
        {container}
        </>
    )
};

export default NavMenuLeft;