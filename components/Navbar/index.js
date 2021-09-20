import { useState } from "react";
import Link from "next/link";

/* Component imports */
import NavMenuLeft from "./NavMenuLeft";
import NavMenuRight from "./NavMenuRight";
import DropdownLeft from "./DropdownLeft";
import DropdownRight from "./DropdownRight";

/* Styles imports */
import { AnchorTag } from "../../styles/Globals.styles";
import { Nav, Hamburger, LogoContainer, LogoImage } from "../../styles/Components/Navbar.styles";
import logo from "../../public/logo.png";

/* Material UI Icons */
import { KeyboardArrowDown, FavoriteBorder, Favorite, NotificationsNone, Notifications, Face, Menu } from "@material-ui/icons";

const Navbar = () => {
    /* Set active state on menu tabs when hovered, to trigger dropdown */
    const [active, setActive] = useState(null);

    const setActiveTab = (index) => {
        setActive(index);
    };

    return (
        <Nav>
            {/* Hamburger only visible on mobile */}
            <Hamburger>
                <Menu fontSize="large"/>
            </Hamburger>

            <LogoContainer>
                <Link href="/">
                <AnchorTag>
                    <LogoImage src={logo}/>                    
                </AnchorTag>
                </Link>
            </LogoContainer>

            {/* Menu for dropdown navigation on left side of navbar */}
            <NavMenuLeft 
                menuItems={[
                {tabIdx: 1, name: "Learning", onActive: <DropdownLeft items={["learning item #1", "learning item #2", "learning item #3"]}/>},
                {tabIdx: 2, name: "My Archive", onActive: <DropdownLeft items={["archive item #1", "archive item #2", "archive item #3"]}/>}
                ]}
                setActiveTab={setActiveTab}
                activeTab={active}
            />

            {/* Menu for navigation on right side of navbar */}
            <NavMenuRight 
                menuItems={[
                {tabIdx: 3, name: "favourites", icon: <FavoriteBorder/>, onActive: <Favorite color="secondary"/>},
                {tabIdx: 4, name: "notifications", icon: <NotificationsNone/>, onActive: <Notifications color="primary"/>},
                {tabIdx: 5, name: "admin", icon: <><Face/><KeyboardArrowDown/></>, onActive: <><Face/><KeyboardArrowDown/><DropdownRight items={["Settings", "Logout"]}/></>}
                ]}
                setActiveTab={setActiveTab}
                activeTab={active}
            />
        </Nav>
    )
};

export default Navbar;