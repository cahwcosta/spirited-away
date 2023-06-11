'use client';
import styled from 'styled-components';

export const Intro = styled.section`
  padding: 8.9rem 17.5rem;
`

export const Text = styled.p`
font-family: 'Julius Sans One';
font-style: normal;
font-weight: 400;
font-size: 3rem;
line-height: 3.3rem;
text-align: center;
height: 3.3rem;
position: relative;
overflow-y: hidden;

span {
  transform: translateY(3rem);
  left: 0;
  position: absolute;
  width: 100%;
  opacity: 0;
}
`