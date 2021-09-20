import styled from "styled-components";

export const StyledContainer = styled.div`
     @media (max-width: 786px) {
        padding-bottom: 2rem;
    }
`;

export const Image = styled.img`
    width: 95%;
    border-radius: 10%;
    float: left;
    @media (max-width: 786px) {
        width: 60%;
    }
`;

export const CardDetails = styled.div`
    display: inline-block;
`;

export const CardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h2`
    color: black;
    font-size: 1.2rem;
`;

export const Description = styled.h2`
    font-size: 0.8rem;
    font-weight: 200;
    padding: 1rem 0rem;
`;

export const Lessons = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
`;

export const Duration = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
`;

export const IconContainer = styled.span`
    margin: 0rem 0.5rem 0rem 0rem;
`;

