import Link from "next/link";
import useSWR from "swr";

/* Helper functions */
import urlSlug from '../../helpers/slug';
import fetcher from '../../helpers/fetcher';

/* Styles imports */
import { Container, Tile, LargeTilesContainer, HomepageHeaders, AnchorTag } from "../../styles/Globals.styles";

/* Components imports */
import CourseCard from "../course/courseCard";

const Recommendations = () => {
    const { data, error } = useSWR("/api/recommendations", fetcher);
    if (error) return <div>failed to load</div>
    if (!data) {
        return <div>loading...</div>
    } else {
        return (
            <Container>
                <HomepageHeaders>Recommended Courses</HomepageHeaders>
                <LargeTilesContainer>
                    {data.map(item => {
                        return (
                            <Tile>
                                <Link
                                    href={{
                                        pathname: "course/[id]",
                                        query: {
                                            id: item.id,
                                            title: item.title
                                        }
                                    }}
                                    as={`recommended/course/${item.id}-${urlSlug(item.title)}`} // generate dynamic URL
                                >
                                    <AnchorTag>
                                        <CourseCard 
                                            imageURL={item.image} 
                                            title={item.title} 
                                            description={item.description}
                                            lessons={item.lessons} 
                                            duration={item.duration} 
                                        />
                                    </AnchorTag>
                                </Link>
                            </Tile>
                        )
                    })}
                </LargeTilesContainer>
            </Container>
        )   
    }
};

export default Recommendations;

