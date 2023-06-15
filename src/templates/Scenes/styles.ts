'use client';
import styled from 'styled-components';

export const Scenes = styled.section`
  padding: 12.9rem 10.5rem;
  position: relative;
`

export const Trigger = styled.div`
height: 350vh;
position: absolute;
`

export const Pin = styled.div`
  position: relative;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Titles = styled.div`
`

export const Title = styled.h6`
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 300;
  font-size: 4rem;
  line-height: 4.4rem;
  padding: 4.3rem 0;

  &:first-child {
    font-size: 6.5rem;
    line-height: 7.1rem;
  }
`

export const Texts = styled.div`
  width: 79.5rem;
  position: relative;
`

export const Text = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 2.9rem;
  position: absolute;
  top: 13.2rem;
  left: 0;
 
  &:not(:first-child) {
    opacity: 0;
  }
`