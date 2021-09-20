/* Styles imports */
import { StyledContainer, Image, CardDetails, Title } from "../../styles/pages/categoryCard.styles";

const CategoryCard = ({ imageURL, title }) => {
    return (
        <StyledContainer>
            <Image src={imageURL}/>
            <CardDetails>
                <Title>{title}</Title>
            </CardDetails>
        </StyledContainer>
    )
};

export default CategoryCard;