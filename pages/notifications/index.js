import Link from "next/link";

/* Styles imports */
import { Container } from "../../styles/Globals.styles";

const Notifications = () => {
    return (
        <Container>
            <h1>My Notifications</h1>
            <button><Link href="/">Go to home</Link></button>
        </Container>
    )
};

export default Notifications;