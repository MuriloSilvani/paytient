import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = styled.section`
  border-right: 1px solid #b3b3b340;
  display: flex;
  flex-direction: column;
  width: 240px;
  gap: 0.8rem;
`

const Head = styled.div`
  padding: 1.4rem 0.8rem 0.2rem 0.8rem;
`

const LogoImage = styled.img`
  display: block;
  max-width: 120px;
  max-heith: 40px;
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
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  color: #b3b3b3;
  transition-duration: 0.3s;
  font-size: 0.94rem;
  font-weight: 600;
  &:hover {
    opacity: 0.75;
  }
  &.is-active {
    color: #3d3d3d;
  }
  `;
  
  const Icon = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
  transition-duration: 0.3s;
  color: ${props => props.active === 'true' ? '#0f0' : '#b3b3b3'}
`

const Footer = styled.div`
  padding: 0.8rem;
`

export {
  Bar,
  Head,
  LogoImage,
  BarScroll,
  Item,
  Icon,
  Footer
}
