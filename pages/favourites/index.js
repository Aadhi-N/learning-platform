import Link from "next/link";

/* Styles imports */
import { Container } from "../../styles/Globals.styles";

const Favourites = () => {
    return (
        <Container>
            <h1>My Favourites List</h1>
            <button><Link href="/">Go to home</Link></button>
        </Container>
    )
};

export default Favourites;