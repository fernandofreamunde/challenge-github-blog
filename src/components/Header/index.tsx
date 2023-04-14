import Logo from '../../assets/logo.svg'
import EffectRight from '../../assets/effectRight.svg'
import EffectLeft from '../../assets/effectLeft.svg'
import {
  HeaderContainer,
  HeaderContent,
  HeaderDecor,
  NeonEffect,
  NeonEffectRectangle,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderDecor>
        <img src={EffectLeft} alt="" />
        <img src={EffectRight} alt="" />
      </HeaderDecor>
      <HeaderContent>
        <img src={Logo} alt="" />
      </HeaderContent>
      <NeonEffect variant="small" />
      <NeonEffect variant="big" />
      <NeonEffectRectangle />
    </HeaderContainer>
  )
}
