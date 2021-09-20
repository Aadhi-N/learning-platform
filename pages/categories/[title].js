import Head from "next/head";
import Link from "next/link";

/* Styles imports */
import { Container } from "../../styles/Globals.styles";

/* Returns dynamic URL based on query params passed through Link in CategoryCard component */
const Category = ( props ) => {
    return (
        <Container>
            <Head>
                <title>Category: {props.title}</title>
            </Head>
            <main>
                <h1>Details about category: {props.title}</h1>
                <button><Link href="/">Back to Home</Link></button>
            </main>
        </Container>
    )
};

export default Category;

export async function getServerSideProps (context) {
    // can make DB queries using the data in context.query
    return {
        props: { 
            //pass it to the Category props
            title: context.query.title,
        }
    }
};