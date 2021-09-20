/* Styles imports */
import { StyledContainer, Image, CardDetails, Title, Description, CardFooter, Lessons, IconContainer, Duration } from "../../styles/pages/courseCard.styles";

/* Material UI icons imports */
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const CourseCard = ({ imageURL, title, description, lessons, duration }) => {
    return (
        <StyledContainer>
            <Image src={imageURL}/>
            <CardDetails>
                <Title>{title}</Title>
                <Description>{description.substring(0, 80)}...</Description>
                <CardFooter>
                    <Lessons><IconContainer><MenuBookIcon fontSize="small"/></IconContainer>{lessons} Lessons</Lessons>
                    <Duration><IconContainer></IconContainer><QueryBuilderIcon fontSize="small"/><IconContainer></IconContainer>{duration}</Duration>
                </CardFooter>
            </CardDetails>
        </StyledContainer>
    )
};

export default CourseCard;