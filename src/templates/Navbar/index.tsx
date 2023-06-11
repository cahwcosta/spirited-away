import * as S from './styles';
import C from './const';
import { useEffect, useRef, useState } from 'react';
import ScrollTo from '../../components/ScrollTo';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const optionRefs = useRef<HTMLLIElement[]>([]);
  const menuRef = useRef<HTMLDivElement>(null)

  const pushOptionRef = (el: HTMLLIElement) => optionRefs.current.push(el);

  useEffect(() => {
    const tl = gsap.timeline({})

    tl.fromTo(optionRefs.current, {
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      delay: 0.4
    })

    menuRef.current?.addEventListener('click', () => {
      tl.restart()
    })

    optionRefs.current.forEach((option, index) => {
      option.addEventListener('mouseover', () => {
        
      })
    })
  }, [])

  return (
    <S.Navbar active={isActive}>
      <S.MobileButton ref={menuRef}>
        <S.Burger onClick={() => setIsActive(!isActive)}>
          <S.Line active={isActive}/>
          <S.Line active={isActive}/>
          <S.Line active={isActive}/>
        </S.Burger>
      </S.MobileButton>

      <S.HiddenContent>
        <S.Menu>
          <S.Options>
            {C.options.map(option => (
              <ScrollTo key={option.id} hash={option.id}>
                <S.Option ref={pushOptionRef} onClick={() => setIsActive(!isActive)}>{option.text}</S.Option>
              </ScrollTo>
            ))}
          </S.Options>
        </S.Menu>
      </S.HiddenContent>
    </S.Navbar>
  )
}

export default Navbar;