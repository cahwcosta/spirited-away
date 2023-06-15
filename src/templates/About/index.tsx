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

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    tl2.to(firstImageRef.current, {y: -50});
    tl2.to(secondImageRef.current, {y: 40}, '<');
  }, [])

  return (
    <S.About id={C.id} ref={aboutRef}>
      <S.Content>
      <S.FirstLine>
        <S.FirstImage ref={firstImageRef} src={'./imgs/about/1.png'}/>
        <S.FirstText ref={firstTextRef}>{C.firstText}</S.FirstText>
      </S.FirstLine>
      <S.SecondLine>
        <S.SecondImage ref={secondImageRef} src={'./imgs/about/2.png'}/>
        <S.SecondText ref={secondTextRef}>{C.secondText}</S.SecondText>
      </S.SecondLine>
      </S.Content>
    </S.About>
  )
}

export default About;