import * as S from './styles';
import C from './const';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Scenes = () => {
  const scenesRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<HTMLHeadingElement[]>([]);
  const textRefs = useRef<HTMLParagraphElement[]>([]);


  const pushTitleRef = (el: HTMLHeadingElement) => titleRefs.current.push(el);
  const pushTextRef = (el: HTMLParagraphElement) => textRefs.current.push(el);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: pinRef.current,
          start: "top 10%",
          end: "bottom 10%",
          scrub: 1
        }
      })

      titleRefs.current.map((title, index) => {
        tl.to(title, {
          fontSize: '6.5rem'
        })

        const previousTitle = titleRefs.current[index - 1]

        tl.to(previousTitle, {
          fontSize: '4rem'
        }, '<')

        tl.to(textRefs.current[index], {
          opacity: 1,
        }, '<')

        const previousText = textRefs.current[index - 1]

        tl.to(previousText, {
          opacity: 0
        }, '<')
      })
      
    })
    return () => ctx.revert();
  }, [])

  return (
    <S.Scenes ref={scenesRef} id={C.id}>
      <S.Trigger ref={triggerRef}/>
      <S.Pin ref={pinRef}>
        <S.Content>
          <S.Titles>
            {C.scenes.map((scene, index) => (
              <S.Title ref={pushTitleRef} key={index}>{index+1}. {scene.title}</S.Title>
            ))}
          </S.Titles>
          <S.Texts>
            {C.scenes.map((scene, index) => (
              <S.Text ref={pushTextRef} key={index}>{scene.text}</S.Text>
            ))}
          </S.Texts>
        </S.Content>
      </S.Pin>
    </S.Scenes>
  )
}

export default Scenes;