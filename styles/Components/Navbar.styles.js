import styled from "styled-components";

/* ---- START ---- Styles for entire navbar container */

export const Nav = styled.div`
    display: flex;
    min-height: 12vh;
    background-color: white;
    overflow: hidden;
    box-shadow: 0 2px 15px 0 rgba(0,0,0,.2);
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
`;

export const Hamburger = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 50px;
    }
`;

export const LogoContainer = styled.a`
    left: 50px;
`;

export const LogoImage = styled.img`
    width: 250px;
    height: auto;
    padding: 1rem 2rem 1rem 3rem;
`;

export const DropdownItems = styled.ul`
    list-style-type: none;
    margin: 1px;
`;

/* ----------- END ------------ */

/* ---- START ---- Styles for menu items on LEFT side of navbar */

export const NavMenuTabContainerLeft = styled.div`
    display: block;

    @media screen and (min-width: 768px) {
        align-items: flex-start;
    };

    @media screen and (max-width: 768px) {
        display: none;
    };
`;

export const DropdownContainerLeft = styled.div`
    position: absolute;
    display: inline-block;
    background-color: rgb(88,67,142);
    color: white;
    width: 150px;
`;

export const NavMenuTabLeft = styled.a`
    padding: 1.7rem;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    display: block;
    background-color: ${props => props.activeTab ? "rgb(88,67,142)" : null}; // Set parent "NavMenuTabContainerLeft" style as purple on hover
`;

/* ----------- END ------------ */

/* ---- START ---- Styles for menu items on RIGHT side of navbar */

export const NavMenuTabContainerRight = styled.div`
    display: block;

    @media screen and (min-width: 768px) {
        position: absolute;
        right: 30px;
    };

    @media screen and (max-width: 768px) {
        display: none;
    };
`;

export const DropdownContainerRight = styled.div`
    position: absolute;
    display: block;
    background-color: rgb(88,67,142);
    color: white;
    width: 150px;
    left: 0.5rem;
`;

export const NavMenuTabRight = styled.a`
    padding: 0.5rem;
    color: black;
    text-align: center;
    text-decoration: none;
`;

/* ----------- END ------------ */


/* ---- START ---- Styles for Material UI icons */

export const NavIcons = styled.span`
    position: absolute;
    z-index: 1;
`;

/* ----------- END ------------ */

