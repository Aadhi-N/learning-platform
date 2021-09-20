import styled, { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    * {
        font-family: 'Maven Pro', sans-serif;
    }
    body {
        background-color: rgb(247, 247, 247);
        margin: 0px;
        padding: 0px;
    }
`;

export const Container = styled.div`
    padding: 2rem 8rem;

    @media (max-width: 425px) {
        padding: 3rem 3em 1rem 3rem;
    }
`;

export const HomepageHeaders = styled.h2`
    font-weight: 800; 
`;

export const MiniTilesContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 50px;

    @media (max-width: 786px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        min-width: 50vw;
    }
`;

export const LargeTilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;

    @media (max-width: 786px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        min-width: 40vw;
    }
`;

export const RowedTilesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;

    @media (max-width: 786px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        min-width: 40vw;
    }
`;

export const Tile = styled.div`
    @media (max-width: 786px) {
        grid-column: auto;
        grid-row: auto; 
    }
`;


export const AnchorTag = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
`;
