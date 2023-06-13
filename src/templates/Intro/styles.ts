'use client';
import styled from 'styled-components';

export const Intro = styled.section`
  padding: 8.9rem 17.5rem;

  @media (max-width: 600px) {
    padding: 7.6rem 2.9rem 8.4rem;
  }
`

export const TextsDesktop = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

export const TextsMobile = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: initial;
  }
`

export const Text = styled.p`
font-family: 'Julius Sans One';
font-style: normal;
font-weight: 400;
font-size: 3.5rem;
line-height: 3.7rem;
text-align: center;
height: 3.7rem;
position: relative;
overflow-y: hidden;

span {
  transform: translateY(3rem);
  left: 0;
  position: absolute;
  width: 100%;
  opacity: 0;
}

@media (max-width: 600px) {
  font-size: 2rem;
  line-height: 2.2rem;
  height: 2.2rem;
}
`