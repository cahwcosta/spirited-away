'use client';
import styled, { css } from 'styled-components';

export const About = styled.section`
  background-color: ${({theme}) => theme.colors.dark};
  padding: 12.7rem 38.3rem 0;
  height: 100vh;
  position: relative;
  opacity: 0;
  transform: translateY(7rem);

  @media (max-width: 600px) {
    padding: 7.8rem 2.9rem 4.5rem;
    height: auto;
  }
`

export const Content = styled.div`
  max-width: 115.5rem;

  @media (max-width: 600px) {
    max-width: auto;
  }
`

const lineStyle = css`
  display: flex;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FirstLine = styled.div`
  ${lineStyle};
`

export const SecondLine = styled.div`
  ${lineStyle};
  margin-top: -15rem;
  margin-left: 19.4rem;
  
  @media (max-width: 600px) {
    margin-top: 4rem;
    margin-left: 0;
  }
`

export const Image = css`
  opacity: 0;
  transform: translateX(3rem);
  object-fit: cover;
`


export const FirstImage = styled.img`
  ${Image};
  width: 54rem;
  height: 46.6rem;
  
  @media (max-width: 600px) {
    width: 35.6rem;
    height: 27.9rem;
  }
`

export const SecondImage = styled.img`
 ${Image};
  width: 77.5rem;
  height: 45.3rem;
  
  @media (max-width: 600px) {
    width: 36.2rem;
    height: 20rem;
  }
`

export const Text = css`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 2.45em;
  line-height: 2.9rem;
  text-align: center;
  max-width: 45.9rem;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  right: 0;
  top: 8.6rem;
  opacity: 0;
  transform: translateX(-3rem);

  @media (max-width: 600px) {
    font-size: 1.7rem;
    line-height: 2rem;
    position: relative;
    max-width: 100%;
    top: auto;
    right: auto;
    margin-top: 2.2rem;
  }
`

export const FirstText = styled.p`
  ${Text};
  right: 10rem;

  @media (max-width: 600px) {
    right: auto;
  }
`

export const SecondText = styled.p`
  ${Text};
`