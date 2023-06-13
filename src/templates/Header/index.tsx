import * as S from './styles';
import C from './const';
import { useEffect, useRef } from 'react';
import { Power1, gsap } from 'gsap';

const Header = () => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(layerRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.4
    })
    
    const tl = gsap.timeline({
      defaults : {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: Power1.easeInOut
      }
    })

    tl.to(titleRef.current, {delay: 1})
    tl.to(subtitleRef.current, {delay: 0.4}, '<')
  })

  return (
    <S.Header>
      <S.Layer ref={layerRef}/>
      <S.Title ref={titleRef}>{C.title}</S.Title>
      <S.Subtitle ref={subtitleRef}>{C.subtitle}</S.Subtitle>
    </S.Header>
  )
}

export default Header;