import * as S from './styles';
import C from './const';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Intro = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textsRef = useRef<HTMLParagraphElement[]>([]);
  const pushTextsRef = (el: HTMLParagraphElement) => textsRef.current.push(el);

  useEffect(() => {
    gsap.to(textsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.27
    })
  }, [])

  return (
    <S.Intro id={C.id} ref={containerRef}>
      <S.TextsDesktop>
        {C.textsDesktop.map((text, index) => (
          <S.Text key={index}>
            <span ref={pushTextsRef}>{text}</span>
          </S.Text>
        ))}
      </S.TextsDesktop>

      <S.TextsMobile>
        {C.textsMobile.map((text, index) => (
          <S.Text key={index}>
            <span ref={pushTextsRef}>{text}</span>
          </S.Text>
        ))}
      </S.TextsMobile>
    </S.Intro>
  )
}

export default Intro;