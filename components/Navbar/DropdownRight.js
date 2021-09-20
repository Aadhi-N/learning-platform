/* Styles imports */
import { DropdownContainerRight, DropdownItems } from "../../styles/Components/Navbar.styles";

const DropdownRight = ({ items }) => {
    const itemsList = items.map((link, index) => (
        <li>{link}</li>
    ))
    return (
        <DropdownContainerRight>
            <DropdownItems>
                {itemsList}
            </DropdownItems>
        </DropdownContainerRight>
    )
};

export default DropdownRight;