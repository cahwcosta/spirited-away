import styled from 'styled-components';

export const Parallax = styled.div`
  width: 100%;
  height: 68.7rem;
  overflow-y: hidden;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (max-width: 600px) {
    height: 15rem;
    width: 100%;
  }
`