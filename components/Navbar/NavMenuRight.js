import Link from "next/link";

/* Styles imports */
import { AnchorTag } from "../../styles/Globals.styles";
import { NavMenuTabContainerRight, NavMenuTabRight} from "../../styles/Components/Navbar.styles";


const NavMenuRight = ({ menuItems, setActiveTab, activeTab }) => {

    const container = menuItems.map((item, index) => (
        <NavMenuTabRight onMouseOver={() => setActiveTab(item.tabIdx)} onMouseLeave={() => setActiveTab(null)}>
            <AnchorTag>
                <Link href={`/${item.name}`}>
                    {activeTab === item.tabIdx ? (item.onActive) : (item.icon)}
                </Link>
            </AnchorTag>
        </NavMenuTabRight>
    ));

    return (
       <NavMenuTabContainerRight>
            {container}
       </NavMenuTabContainerRight>
    )
};

export default NavMenuRight;