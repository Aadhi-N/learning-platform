/* Styles imports */
import { DropdownContainerLeft, DropdownItems } from "../../styles/Components/Navbar.styles";

const DropdownLeft = ({ items }) => {

    const itemsList = items.map((link) => (
        <li>{link}</li>
    ))
    return (
        <DropdownContainerLeft>
            <DropdownItems>
                {itemsList}
            </DropdownItems>
        </DropdownContainerLeft>
    )
};

export default DropdownLeft;