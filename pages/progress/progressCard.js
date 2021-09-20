/* Styles imports */
import {StyledContainer, Image, CardDetails, Title, Lessons, Duration, ProgressBar} from "../../styles/pages/progressCard.styles";

const ProgressCard = ({ imageURL, title, lessons, duration, progress }) => {
    return (
        <StyledContainer>
            <Image src={imageURL}/>
            <CardDetails>
                <Title>{title}</Title>
                <Lessons>{lessons} Lessons - 
                    <Duration>{duration} hours</Duration>
                </Lessons>
                <ProgressBar><progress max="100" value={progress} style={{width: "90%"}}/></ProgressBar>
            </CardDetails>
        </StyledContainer>
    )
};

export default ProgressCard;