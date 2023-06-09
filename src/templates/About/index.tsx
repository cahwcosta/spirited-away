import * as S from './styles';
import C from './const';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const firstImageRef = useRef<HTMLImageElement>(null);
  const firstTextRef = useRef<HTMLParagraphElement>(null);
  const secondImageRef = useRef<HTMLImageElement>(null);
  const secondTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 70%',
      },
      defaults: {
        opacity: 1,
      }
    });

    tl.to(aboutRef.current, {duration: 1, y: 0})
    tl.to(firstImageRef.current, {duration: 0.7, x: 0}, '-=0.3')
    tl.to(firstTextRef.current, {duration: 0.7, x: 0}, '-=0.3')
    tl.to(secondImageRef.current, {duration: 0.7, x: 0}, '-=0.3')
    tl.to(secondTextRef.current, {duration: 0.7, x: 0}, '-=0.3')
  }, [])

  return (
    <S.About ref={aboutRef}>
      <S.Content>
      <S.FirstLine>
        <S.Image ref={firstImageRef} src={'./imgs/about/1.png'}/>
        <S.Text ref={firstTextRef}>{C.firstText}</S.Text>
      </S.FirstLine>
      <S.SecondLine>
        <S.Image ref={secondImageRef} src={'./imgs/about/2.png'}/>
        <S.Text ref={secondTextRef}>{C.secondText}</S.Text>
      </S.SecondLine>
      </S.Content>
    </S.About>
  )
}

export default About;