import styled from 'styled-components';

export const Navbar = styled.section<{active: boolean}>`
  width: 100%;
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5.2rem 4.8rem;
  background: ${({theme, active}) => active ? theme.colors.dark : 'transparent'};
  transition: 0.4s background;
  height: ${({active}) => active ? '100vh' : 0};
  transition: all .4s ease;

  @media (max-width: 600px) {
    padding: 2.5rem 2.7rem;
  }
`

export const Audio = styled.audio`
`

export const  HiddenContent = styled.div`
  overflow: hidden;
  width: 100%;
`

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 100vh;

  @media (max-width: 600px) {
    justify-content: flex-start;
    margin-top: 9rem;
  }
`

export const Option = styled.li`
  margin: 2.8rem 0;
  font-size: 6rem;
  line-height: 6.5rem;
  transition: color .4s ease;
  color: ${({theme}) => theme.colors.white};
  font-family: 'Julius Sans One';
  font-style: normal;
  font-weight: 400;
  opacity: 0;
  transform: translateY(-5rem);

  &:hover {
    color: ${({theme}) => theme.colors.green};
  }

  a {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
    line-height: 3.3rem;
    margin: 2.1rem;
  }
`

export const MobileButton = styled.div`
display: flex;
height: 3.7rem;
width: 6rem;
align-items: center;
justify-content: center;
position: relative;
  
  @media (max-width: 600px) {
    height: 2.4rem;
    width: 3.5rem;
  }
`

export const Burger = styled.div`
  display: block;
  width: 100%;
  height: 3.7rem;

  &:hover {
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
    height: 2.4rem;
  }
`;

export const Line = styled.div<{active: boolean}>`
  height: 0.2rem;
  width: 6rem;
  background: ${({theme}) => theme.colors.white};
  position: absolute;
  border-radius: 5rem;
  transition: all .4s ease;

  &:nth-child(1) {
    top: ${({active}) => active ? "50%" : 0};
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(3) {
    top: ${({active}) => active ? "50%" : "100%"};
    transform: ${({active}) => active ? "rotate(-45deg)" : "rotate(0deg)"};
  }

  @media (max-width: 600px) {
    width: 3.5rem;
  }
`;


export const RightContent = styled.div`
display: flex;
`
