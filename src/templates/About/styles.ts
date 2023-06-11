'use client';
import styled, { css } from 'styled-components';

export const About = styled.section`
  background-color: ${({theme}) => theme.colors.dark};
  padding: 7.3rem 26.1rem 9.2rem 17.5rem;
  position: relative;
  opacity: 0;
  transform: translateY(7rem);
`

export const Content = styled.div`
  max-width: 144rem;
`

const lineStyle = css`
  display: flex;
  position: relative;
`

export const FirstLine = styled.div`
  ${lineStyle};
`

export const Image = styled.img`
opacity: 0;
transform: translateX(3rem);
`

export const Text = styled.p`
font-family: 'Work Sans';
font-style: normal;
font-weight: 300;
font-size: 2.4rem;
line-height: 2.8rem;
text-align: center;
max-width: 45.9rem;
color: ${({theme}) => theme.colors.white};
position: absolute;
right: 0;
top: 6.5rem;
opacity: 0;
transform: translateX(-3rem);
`

export const SecondLine = styled.div`
${lineStyle};
margin-top: -10rem;
margin-left: 10.2rem;

`