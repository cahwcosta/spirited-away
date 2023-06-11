import { useEffect, useRef } from 'react';
import * as S from './styles';
import { gsap } from 'gsap';

const Parallax = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (parallaxRef.current) {
      const height = window.innerHeight / (window.innerHeight + parallaxRef.current.offsetHeight)
      gsap.fromTo(imageRef.current, {
        backgroundPosition: `50% ${-window.innerHeight * height}px`
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - height)}px`,
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: () =>  "top bottom", 
          end: "bottom top",
          scrub: true,
          markers: true,
          invalidateOnRefresh: true
        }
      });
    }
  }, [])

  return (
    <S.Parallax ref={parallaxRef}>
      <S.Image ref={imageRef} src={"./imgs/parallax/parallax.jpeg"}/>
    </S.Parallax>
  )
}

export default Parallax;