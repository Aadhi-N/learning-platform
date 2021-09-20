import Link from "next/link";

/* Styles imports */
import { Container } from "../../styles/Globals.styles";

const Admin = () => {
    return (
        <Container>
            <h1>Admin Dashboard</h1>
            <button><Link href="/">Go to home</Link></button>
        </Container>
    )
};

export default Admin;