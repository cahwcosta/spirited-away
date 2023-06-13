'use client';
import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  height: 100vh;
  background: url('./imgs/header/background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Layer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, .4);
`;


export const Title = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 400;
  font-size: 8rem;
  line-height: 8.2rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(3rem);

  @media (max-width: 600px) {
    font-size: 4rem;
    line-height: 4.4rem;
    transform: translateY(2.5rem);
  }
`

export const Subtitle = styled.h6`
  color: ${({theme}) => theme.colors.white};
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 5rem;
  padding-top: 1rem;
  z-index: 2;
  opacity: 0;
  transform: translateY(2.5rem);

  @media (max-width: 600px) {
    font-size: 2.5rem;
    line-height: 2.7rem;
  transform: translateY(2rem);
  }
`