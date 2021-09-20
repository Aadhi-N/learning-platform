import Link from 'next/link'
import useSWR from 'swr'; 

/* Helper functions */
import urlSlug from '../../helpers/slug';
import fetcher from '../../helpers/fetcher';

/* Styles imports */
import { Container, MiniTilesContainer, Tile, HomepageHeaders, AnchorTag} from "../../styles/Globals.styles";

/* Components imports */
import ProgressCard from "./progressCard";

const Progress = () => {
    const { data, error } = useSWR("/api/progress", fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <Container>
            <HomepageHeaders>Continue Learning</HomepageHeaders>
            <MiniTilesContainer>
                {data.data.map(item => {
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
                                as={`progress/course/${item.id}-${urlSlug(item.title)}`} // generate dynamic URL, using slug helper function
                            >
                                <AnchorTag>
                                    <ProgressCard 
                                        imageURL={item.image} 
                                        title={item.title} 
                                        lessons={item.lessons} 
                                        duration={item.duration} 
                                        progress={item.progress_value}
                                    />
                                </AnchorTag>
                            </Link>
                        </Tile>
                    )
                })}
            </MiniTilesContainer>
        </Container>
    )   
};

export default Progress;