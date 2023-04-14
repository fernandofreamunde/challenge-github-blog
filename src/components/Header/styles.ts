import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.baseProfile};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
interface EffectDivs {
  variant: 'small' | 'big'
}

export const NeonEffect = styled.div<EffectDivs>`
  background-color: ${(props) => props.theme.effectBlue};
  top: ${(props) => (props.variant === 'small' ? '-2rem' : '-7rem')};
  left: ${(props) => (props.variant === 'small' ? 'inerit' : '-9rem')};
  right: ${(props) => (props.variant === 'small' ? '3.25rem' : 'inerit')};
  position: absolute;
  border-radius: 50%;

  height: ${(props) => (props.variant === 'small' ? '9.7rem' : '14.75rem')};
  width: ${(props) => (props.variant === 'small' ? '9.7rem' : '14.75rem')};

  filter: blur(${(props) => (props.variant === 'small' ? '184px' : '200px')});
`

export const NeonEffectRectangle = styled.div`
  background-color: ${(props) => props.theme.effectBlue};
  inset: 0;
  position: absolute;

  margin: 10rem auto;

  height: 1.5rem;
  width: 65rem;
  filter: blur(106px);
`

export const HeaderDecor = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
`
