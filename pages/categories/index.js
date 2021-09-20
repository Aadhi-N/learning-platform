import Link from "next/link";
import useSWR from 'swr'; 

/* Helper functions */
import urlSlug from '../../helpers/slug';
import fetcher from '../../helpers/fetcher';

/* Styles imports */
import { Container, RowedTilesContainer, HomepageHeaders, AnchorTag } from "../../styles/Globals.styles";
import CategoryCard from "./categoryCard";


const Categories = () => {
    const { data, error } = useSWR("/api/categories", fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <Container>
            <HomepageHeaders>Categories</HomepageHeaders>
            <RowedTilesContainer>
                {data.data.map(item => {
                    return (
                        <Link 
                            href={{
                                pathname: "categories/[title]",
                                query: {
                                    title: item.title
                                }
                            }}
                            as={`category/${urlSlug(item.title)}`}>
                            <AnchorTag>
                                <CategoryCard 
                                    imageURL={item.image} 
                                    title={item.title} 
                                />
                            </AnchorTag>
                        </Link>
                    )
                })}
            </RowedTilesContainer>
        </Container>
    )   
};

export default Categories;