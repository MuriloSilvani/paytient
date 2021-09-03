import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = styled.section`
  border-right: 1px solid #d2d2d240;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition-duration: 0.3s;
  @media (max-width: 580px) {
    position: absolute;
    height: 100vh;
    background: #fff;
    z-index: 2;
    left: -100%;
    &.hidden {
      left: 0;
    }
  }
`

const Close = styled.div`
  @media (min-width: 580px) {
    display: none;
  }
  z-index: 1;
  position: absolute;
  height: 100vh;
  transition-duration: 0.3s;
  width: 0vw;
  opacity: 0;
  &.hidden {
    width: 100vw;
    opacity: 1;
  }
`

const Head = styled.div`
  padding: 1.4rem 0.8rem 0.2rem 0.8rem;
`

const LogoImageView = styled(NavLink)`
  height: 40px;
  display: block;
  margin: 0 auto;
  transition-duration: 0.3s;
  position: relative;
  overflow: hidden;
  max-width: 220px;
  @media (min-width: 580px) {
    &.hidden {
      max-width: 30px;
    }
  }
`

const LogoImage = styled.img`
  display: block;
  height: 100%;
  margin: 0 auto;
`

const BarScroll = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.8rem;
  heigth: 100vh;
  overflow: auto;
  padding: 0.4rem 1rem;
`;

const Item = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  color: #dddce1;
  transition-duration: 0.3s;
  font-size: 0.94rem;
  font-weight: 600;
  &:hover {
    opacity: 0.75;
  }
  &.is-active {
    color: #6e6b84;
  }
  padding: 0.5rem 1rem;
  @media (min-width: 580px) {
    &.hidden {
      gap: 0rem;
      padding: 0.5rem .5rem;
    }
  }
`;
  
const Icon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  transition-duration: 0.3s;
  text-align: center;
  color: ${props => props.active === 'true' ? '#00d953' : '#dddce1'}
`

const ItemText = styled.div`
  transition-duration: 0.3s;
  overflow: hidden;
  max-width: 200px;
  @media (min-width: 580px) {
    &.hidden {
      max-width: 0px;
    }
  }
`

const Footer = styled.div`
  padding: 0.8rem;
`

export {
  Bar,
  Close,
  Head,
  LogoImageView,
  LogoImage,
  BarScroll,
  Item,
  Icon,
  ItemText,
  Footer
}
