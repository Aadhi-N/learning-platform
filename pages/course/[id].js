import Head from "next/head";
import Link from "next/link";

/* Styles imports */
import { Container } from "../../styles/Globals.styles";

/* Returns dynamic URL based on query params passed through Link in ProgressCard component */
const Course = ( props ) => {
    return (
        <Container>
            <Head>
                <title>Course #{props.id}: {props.title}</title>
            </Head>
            <main>
                <h1>Details about course #{props.id}: {props.title}</h1>
                <button><Link href="/">Back to Home</Link></button>
            </main>
        </Container>
    )
};

export default Course;

export async function getServerSideProps (context) {
    // returns { id: item.id, title: item.title}
    
    // can make DB queries using the data in context.query
    return {
        props: { 
            //pass it to the Course props
            id: context.query.id,
            title: context.query.title
        }
    }
};