import styled, { keyframes } from "styled-components";

export const moveUptop = keyframes`
    0%{
        top: 1rem;
    }
    50%{
        top: 0.75rem;
    }
    100% {
        top: 0.5rem;
    }
`;

export const moveUp = keyframes`
    0%{
        margin-top: 5rem;
    }
    50% {
        margin-top: 4rem;
    }
    100% {
        margin-top: 3rem;
    }
`;

export const Appear = keyframes`
    0%{
        opacity: 0%;
    }
    50% {
        opacity: 50%;
    }
    100% {
        opacity: 100%;
    }
`;

export const Disappear = keyframes`
    0% {
        opacity: 100%;
    }
    50% {
        opacity: 50%;
    }
    100% {
        opacity:0% ;
    }
`;
