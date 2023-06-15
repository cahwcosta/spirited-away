import * as S from './styles';
import gsap from 'gsap';
import { useEffect, useRef } from 'react'; 

const Parallax = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(parallaxRef.current, {
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: true
      },
      y: -200
    })
  }, [])

  return (
    <S.Parallax>
      <img ref={parallaxRef} src={'./imgs/parallax/parallax.jpeg'}/>
    </S.Parallax>
  )
}

export default Parallax;